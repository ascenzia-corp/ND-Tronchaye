import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  Camera,
  Mail,
  ExternalLink,
  LogOut,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getEvents, getPhotos, getUser, getUnreadMessageCount, logout } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import type { Event, Photo } from '@/types';

const navItems = [
  { label: 'Tableau de bord', icon: LayoutDashboard, href: '/admin' },
  { label: 'Événements', icon: Calendar, href: '/admin/events' },
  { label: 'Photos', icon: Camera, href: '/admin/photos' },
  { label: 'Messages', icon: Mail, href: '/admin/messages' },
];

export function AdminLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    getUser().catch(() => {
      navigate('/admin/login');
    });
    getUnreadMessageCount()
      .then((data) => setUnreadCount(data.count))
      .catch(() => {});
  }, [navigate]);

  async function handleLogout() {
    try {
      await logout();
    } catch {
      // proceed to login regardless
    }
    navigate('/admin/login');
  }

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white fixed inset-y-0 left-0 flex flex-col z-40">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold font-serif tracking-wide">
            Admin NDT
          </h1>
          <p className="text-xs text-white/60 mt-1">
            Sanctuaire Notre Dame de la Tronchaye
          </p>
        </div>

        <nav className="flex-1 py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive =
                item.href === '/admin'
                  ? location.pathname === '/admin'
                  : location.pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--accent-foreground))]'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                    {item.href === '/admin/messages' && unreadCount > 0 && (
                      <Badge variant="destructive" className="ml-auto text-[10px] px-1.5 py-0">
                        {unreadCount}
                      </Badge>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-white/10 p-3 space-y-1">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Voir le site
          </a>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-destructive/80 hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 p-8">{children}</main>
    </div>
  );
}

export default function AdminDashboard() {
  const [events, setEvents] = useState<Event[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Tableau de bord | Admin';
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        await getUser();
      } catch {
        navigate('/admin/login');
        return;
      }

      try {
        const [eventsData, photosData, msgData] = await Promise.all([
          getEvents(),
          getPhotos(),
          getUnreadMessageCount(),
        ]);
        setEvents(eventsData);
        setPhotos(photosData);
        setUnreadMessages(msgData.count);
      } catch {
        // Stats will show 0
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [navigate]);

  const upcomingEvents = events
    .filter((e) => new Date(e.date) >= new Date(new Date().toDateString()))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Tableau de bord</h1>
          <p className="text-muted-foreground mt-1">
            Bienvenue dans l'espace d'administration du sanctuaire.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12 text-muted-foreground">
            Chargement...
          </div>
        ) : (
          <>
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Événements à venir
                  </CardTitle>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">
                    {upcomingEvents.length}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    sur {events.length} au total
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Photos
                  </CardTitle>
                  <Camera className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">
                    {photos.length}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    dans la galerie
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Événements spéciaux
                  </CardTitle>
                  <LayoutDashboard className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary">
                    {events.filter((e) => e.isSpecial).length}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    mis en avant sur le site
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Messages non lus
                  </CardTitle>
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-destructive">
                    {unreadMessages}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    message{unreadMessages !== 1 ? 's' : ''} en attente
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming events mini-table */}
            {upcomingEvents.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">
                  Prochains événements
                </h2>
                <Card>
                  <CardContent className="p-0">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="text-left p-3 text-sm font-medium text-muted-foreground">Titre</th>
                          <th className="text-left p-3 text-sm font-medium text-muted-foreground">Date</th>
                          <th className="text-left p-3 text-sm font-medium text-muted-foreground">Heure</th>
                          <th className="text-left p-3 text-sm font-medium text-muted-foreground">Lieu</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcomingEvents.map((event) => (
                          <tr key={event.id} className="border-b last:border-0">
                            <td className="p-3 text-sm font-medium">{event.title}</td>
                            <td className="p-3 text-sm text-muted-foreground">{formatDate(event.date)}</td>
                            <td className="p-3 text-sm text-muted-foreground">{event.time}</td>
                            <td className="p-3 text-sm text-muted-foreground">{event.location}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Quick access */}
            <div>
              <h2 className="text-xl font-semibold text-primary mb-4">
                Accès rapide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/admin/events">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">
                          Gérer les événements
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Ajouter, modifier ou supprimer
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/admin/photos">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Camera className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">
                          Gérer les photos
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Galerie du sanctuaire
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/admin/messages">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">
                          Gérer les messages
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {unreadMessages > 0
                            ? `${unreadMessages} non lu${unreadMessages > 1 ? 's' : ''}`
                            : 'Aucun message en attente'}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
