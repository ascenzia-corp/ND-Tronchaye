import { Router } from 'express';
import { getDb } from '../db/schema.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// Public: list upcoming events
router.get('/', (_req, res) => {
  const db = getDb();
  const events = db
    .prepare('SELECT * FROM events WHERE date >= date("now") ORDER BY date ASC')
    .all()
    .map(mapEvent);
  res.json(events);
});

// Admin: list all events (including past)
router.get('/admin/all', requireAuth, (_req, res) => {
  const db = getDb();
  const events = db
    .prepare('SELECT * FROM events ORDER BY date ASC')
    .all()
    .map(mapEvent);
  res.json(events);
});

// Public: list special events
router.get('/special/all', (_req, res) => {
  const db = getDb();
  const events = db
    .prepare('SELECT * FROM events WHERE isSpecial = 1 ORDER BY date ASC')
    .all()
    .map(mapEvent);
  res.json(events);
});

// Public: get event by id
router.get('/:id', (req, res) => {
  const db = getDb();
  const event = db.prepare('SELECT * FROM events WHERE id = ?').get(req.params.id);
  if (!event) {
    res.status(404).json({ error: 'Événement non trouvé' });
    return;
  }
  res.json(mapEvent(event as Record<string, unknown>));
});

// Admin: create event
router.post('/', requireAuth, (req, res) => {
  const { title, date, time, location, description, isSpecial, imageUrl, eventType } = req.body;
  if (!title || !date || !time || !location || !description) {
    res.status(400).json({ error: 'Champs requis manquants' });
    return;
  }
  const db = getDb();
  const result = db
    .prepare(
      'INSERT INTO events (title, date, time, location, description, isSpecial, imageUrl, eventType) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    )
    .run(title, date, time, location, description, isSpecial ? 1 : 0, imageUrl || null, eventType || 'regular');

  const event = db.prepare('SELECT * FROM events WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(mapEvent(event as Record<string, unknown>));
});

// Admin: update event
router.put('/:id', requireAuth, (req, res) => {
  const { title, date, time, location, description, isSpecial, imageUrl } = req.body;
  const db = getDb();

  const existing = db.prepare('SELECT * FROM events WHERE id = ?').get(req.params.id);
  if (!existing) {
    res.status(404).json({ error: 'Événement non trouvé' });
    return;
  }

  const { eventType } = req.body;
  db.prepare(
    `UPDATE events SET title = ?, date = ?, time = ?, location = ?, description = ?, isSpecial = ?, imageUrl = ?, eventType = ?, updatedAt = datetime('now') WHERE id = ?`
  ).run(
    title ?? (existing as Record<string, unknown>).title,
    date ?? (existing as Record<string, unknown>).date,
    time ?? (existing as Record<string, unknown>).time,
    location ?? (existing as Record<string, unknown>).location,
    description ?? (existing as Record<string, unknown>).description,
    isSpecial !== undefined ? (isSpecial ? 1 : 0) : (existing as Record<string, unknown>).isSpecial,
    imageUrl !== undefined ? imageUrl : (existing as Record<string, unknown>).imageUrl,
    eventType ?? (existing as Record<string, unknown>).eventType ?? 'regular',
    req.params.id
  );

  const updated = db.prepare('SELECT * FROM events WHERE id = ?').get(req.params.id);
  res.json(mapEvent(updated as Record<string, unknown>));
});

// Admin: delete event
router.delete('/:id', requireAuth, (req, res) => {
  const db = getDb();
  const result = db.prepare('DELETE FROM events WHERE id = ?').run(req.params.id);
  if (result.changes === 0) {
    res.status(404).json({ error: 'Événement non trouvé' });
    return;
  }
  res.json({ message: 'Événement supprimé' });
});

function mapEvent(row: Record<string, unknown>) {
  return {
    ...row,
    isSpecial: Boolean(row.isSpecial),
  };
}

export default router;
