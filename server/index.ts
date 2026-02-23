import express from 'express';
import session from 'express-session';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDb } from './db/schema.js';
import { seed } from './db/seed.js';
import authRoutes from './routes/auth.js';
import eventsRoutes from './routes/events.js';
import photosRoutes from './routes/photos.js';
import contactRoutes from './routes/contact.js';
import { requireAuth } from './middleware/auth.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'nd-tronchaye-dev-secret-change-me',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: isProduction,
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'lax',
    },
  })
);

// Initialize DB and seed
getDb();
seed();

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/photos', photosRoutes);
app.use('/api/contact', contactRoutes);

// User info endpoint
app.get('/api/user', requireAuth, (req, res) => {
  const db = getDb();
  const user = db.prepare('SELECT id, email, name, role FROM users WHERE id = ?').get(req.session.userId);
  if (!user) {
    res.status(404).json({ error: 'Utilisateur non trouvé' });
    return;
  }
  res.json(user);
});

// Serve static files in production
if (isProduction) {
  const clientDist = path.join(__dirname, '../client/dist');
  app.use(express.static(clientDist));

  // Serve uploaded images
  app.use('/images', express.static(path.join(__dirname, '../client/public/images')));

  // SPA fallback
  app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
