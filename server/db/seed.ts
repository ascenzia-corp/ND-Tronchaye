import { getDb } from './schema.js';
import bcrypt from 'bcryptjs';

const seedEvents = [
  {
    title: "Fête de l'Assomption",
    date: '2025-08-15',
    time: '10h30',
    location: 'Sanctuaire',
    description:
      "Procession et messe solennelle en l'honneur de Notre Dame de l'Assomption. Programme : 10h départ de la procession, 10h30 messe pontificale, 12h20 bénédiction des malades et des familles, 12h30 procession de retour.",
    isSpecial: true,
  },
  {
    title: 'Grand Pardon de Notre Dame de la Tronchaye',
    date: '2025-09-08',
    time: '18h00',
    location: 'Sanctuaire et village',
    description:
      "Procession aux flambeaux dans les rues médiévales du village suivie de la messe solennelle du pardon. Le Pardon de Notre-Dame de la Tronchaye est l'un des grands pardons bretons, attirant des pèlerins de tout le Morbihan et au-delà.",
    isSpecial: true,
  },
  {
    title: "Veillée d'adoration de l'Avent",
    date: '2025-12-02',
    time: '20h00',
    location: 'Sanctuaire',
    description:
      'Temps de prière silencieuse et d\'adoration eucharistique en préparation de la fête de Noël. Confessions disponibles pendant la veillée.',
    isSpecial: false,
  },
  {
    title: 'Chemin de croix du Carême',
    date: '2026-03-06',
    time: '15h00',
    location: 'Sanctuaire',
    description:
      'Méditation du chemin de croix tous les vendredis de Carême à 15h00, heure de la mort de Notre Seigneur.',
    isSpecial: false,
  },
];

const seedPhotos = [
  { url: '/images/IMG_9328.webp', alt: 'Vue extérieure du sanctuaire Notre-Dame de la Tronchaye', order: 1 },
  { url: '/images/IMG_9315.webp', alt: 'Intérieur du sanctuaire — nef et retable', order: 2 },
  { url: '/images/IMG_9297.webp', alt: 'Détail architectural de la collégiale', order: 3 },
  { url: '/images/IMG_9298.webp', alt: 'Vitrail du sanctuaire', order: 4 },
  { url: '/images/IMG_9301.webp', alt: 'Statue de Notre-Dame de la Tronchaye', order: 5 },
  { url: '/images/IMG_9302.webp', alt: 'Retable en pierres polychromes (1610)', order: 6 },
  { url: '/images/IMG_9303.webp', alt: 'Voûtes et chapelle latérale', order: 7 },
  { url: '/images/IMG_9305.webp', alt: 'Le calvaire devant l\'église', order: 8 },
  { url: '/images/IMG_9309.webp', alt: 'Façade gothique flamboyant (1533)', order: 9 },
  { url: '/images/IMG_9310.webp', alt: 'Tour fortifiée romane (1125)', order: 10 },
  { url: '/images/Sanctuaire.webp', alt: 'Le sanctuaire vu depuis la place', order: 11 },
];

export function seed(): void {
  const db = getDb();

  const eventCount = (db.prepare('SELECT COUNT(*) as count FROM events').get() as { count: number }).count;
  if (eventCount === 0) {
    const insertEvent = db.prepare(
      'INSERT INTO events (title, date, time, location, description, isSpecial) VALUES (?, ?, ?, ?, ?, ?)'
    );
    const insertManyEvents = db.transaction(() => {
      for (const e of seedEvents) {
        insertEvent.run(e.title, e.date, e.time, e.location, e.description, e.isSpecial ? 1 : 0);
      }
    });
    insertManyEvents();
    console.log(`Seeded ${seedEvents.length} events`);
  }

  const photoCount = (db.prepare('SELECT COUNT(*) as count FROM photos').get() as { count: number }).count;
  if (photoCount === 0) {
    const insertPhoto = db.prepare(
      'INSERT INTO photos (url, alt, "order") VALUES (?, ?, ?)'
    );
    const insertManyPhotos = db.transaction(() => {
      for (const p of seedPhotos) {
        insertPhoto.run(p.url, p.alt, p.order);
      }
    });
    insertManyPhotos();
    console.log(`Seeded ${seedPhotos.length} photos`);
  }

  const userCount = (db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number }).count;
  if (userCount === 0) {
    const email = process.env.ADMIN_EMAIL || 'admin@nd-tronchaye.fr';
    const passwordHash = process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync('admin123', 10);
    db.prepare('INSERT INTO users (email, name, passwordHash, role) VALUES (?, ?, ?, ?)').run(
      email,
      'Administrateur',
      passwordHash,
      'admin'
    );
    console.log(`Seeded admin user: ${email}`);
  }
}

// Allow running directly
if (process.argv[1]?.endsWith('seed.ts') || process.argv[1]?.endsWith('seed.js')) {
  seed();
  console.log('Seed completed.');
}
