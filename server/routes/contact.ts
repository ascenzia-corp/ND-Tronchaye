import { Router } from 'express';
import { getDb } from '../db/schema.js';
import { requireAuth } from '../middleware/auth.js';
import { sendContactNotification } from '../lib/mailer.js';

const router = Router();

// Public: create contact message
router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || name.trim().length < 2) {
    res.status(400).json({ error: 'Le nom doit contenir au moins 2 caractères' });
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: 'Adresse e-mail invalide' });
    return;
  }
  if (!subject || !subject.trim()) {
    res.status(400).json({ error: 'Le sujet est requis' });
    return;
  }
  if (!message || message.trim().length < 10) {
    res.status(400).json({ error: 'Le message doit contenir au moins 10 caractères' });
    return;
  }

  const db = getDb();
  const result = db
    .prepare('INSERT INTO contactMessages (name, email, subject, message) VALUES (?, ?, ?, ?)')
    .run(name.trim(), email.trim(), subject.trim(), message.trim());

  const msg = db.prepare('SELECT * FROM contactMessages WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(mapMessage(msg as Record<string, unknown>));

  // Envoi de la notification email en arrière-plan (ne bloque pas la réponse)
  sendContactNotification({ name: name.trim(), email: email.trim(), subject: subject.trim(), message: message.trim() })
    .catch((err) => console.error('[mailer] Erreur envoi notification:', err));
});

// Admin: list all messages
router.get('/', requireAuth, (_req, res) => {
  const db = getDb();
  const messages = db
    .prepare('SELECT * FROM contactMessages ORDER BY createdAt DESC')
    .all()
    .map((row) => mapMessage(row as Record<string, unknown>));
  res.json(messages);
});

// Admin: get unread count
router.get('/unread-count', requireAuth, (_req, res) => {
  const db = getDb();
  const result = db.prepare('SELECT COUNT(*) as count FROM contactMessages WHERE isRead = 0').get() as { count: number };
  res.json({ count: result.count });
});

// Admin: mark as read
router.patch('/:id/read', requireAuth, (req, res) => {
  const db = getDb();
  const result = db.prepare('UPDATE contactMessages SET isRead = 1 WHERE id = ?').run(req.params.id);
  if (result.changes === 0) {
    res.status(404).json({ error: 'Message non trouvé' });
    return;
  }
  const msg = db.prepare('SELECT * FROM contactMessages WHERE id = ?').get(req.params.id);
  res.json(mapMessage(msg as Record<string, unknown>));
});

// Admin: delete message
router.delete('/:id', requireAuth, (req, res) => {
  const db = getDb();
  const result = db.prepare('DELETE FROM contactMessages WHERE id = ?').run(req.params.id);
  if (result.changes === 0) {
    res.status(404).json({ error: 'Message non trouvé' });
    return;
  }
  res.json({ message: 'Message supprimé' });
});

function mapMessage(row: Record<string, unknown>) {
  return {
    ...row,
    isRead: Boolean(row.isRead),
  };
}

export default router;
