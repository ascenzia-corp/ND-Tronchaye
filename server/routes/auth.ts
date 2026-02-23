import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { getDb } from '../db/schema.js';

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Email et mot de passe requis' });
    return;
  }

  const db = getDb();
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as
    | { id: number; email: string; name: string; passwordHash: string; role: string }
    | undefined;

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    res.status(401).json({ error: 'Identifiants invalides' });
    return;
  }

  req.session.userId = user.id;
  res.json({ id: user.id, email: user.email, name: user.name, role: user.role });
});

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ error: 'Erreur lors de la déconnexion' });
      return;
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Déconnecté' });
  });
});

export default router;
