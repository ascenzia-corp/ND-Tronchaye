import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { getDb } from '../db/schema.js';
import { requireAuth } from '../middleware/auth.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UPLOAD_DIR = path.join(__dirname, '../../client/public/images');

// Ensure upload dir exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Format de fichier non supporté'));
    }
  },
});

const router = Router();

// Public: list photos
router.get('/', (_req, res) => {
  const db = getDb();
  const photos = db.prepare('SELECT * FROM photos ORDER BY "order" ASC').all();
  res.json(photos);
});

// Admin: upload photo
router.post('/', requireAuth, upload.single('photo'), (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: 'Aucun fichier envoyé' });
    return;
  }

  const alt = req.body.alt || '';
  const caption = req.body.caption || null;
  const url = `/images/${req.file.filename}`;

  const db = getDb();
  const maxOrder = (db.prepare('SELECT MAX("order") as maxOrder FROM photos').get() as { maxOrder: number | null })
    .maxOrder || 0;

  const result = db
    .prepare('INSERT INTO photos (url, alt, caption, "order") VALUES (?, ?, ?, ?)')
    .run(url, alt, caption, maxOrder + 1);

  const photo = db.prepare('SELECT * FROM photos WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(photo);
});

// Admin: update photo
router.put('/:id', requireAuth, (req, res) => {
  const { alt, caption, order } = req.body;
  const db = getDb();

  const existing = db.prepare('SELECT * FROM photos WHERE id = ?').get(req.params.id);
  if (!existing) {
    res.status(404).json({ error: 'Photo non trouvée' });
    return;
  }

  db.prepare('UPDATE photos SET alt = ?, caption = ?, "order" = ? WHERE id = ?').run(
    alt ?? (existing as Record<string, unknown>).alt,
    caption !== undefined ? caption : (existing as Record<string, unknown>).caption,
    order ?? (existing as Record<string, unknown>).order,
    req.params.id
  );

  const updated = db.prepare('SELECT * FROM photos WHERE id = ?').get(req.params.id);
  res.json(updated);
});

// Admin: delete photo
router.delete('/:id', requireAuth, (req, res) => {
  const db = getDb();
  const photo = db.prepare('SELECT * FROM photos WHERE id = ?').get(req.params.id) as
    | { url: string }
    | undefined;

  if (!photo) {
    res.status(404).json({ error: 'Photo non trouvée' });
    return;
  }

  // Delete file from disk
  const filePath = path.join(__dirname, '../../client/public', photo.url);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  db.prepare('DELETE FROM photos WHERE id = ?').run(req.params.id);
  res.json({ message: 'Photo supprimée' });
});

export default router;
