import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2, ArrowUpDown } from 'lucide-react';
import { toast } from 'sonner';
import { AdminLayout } from './AdminDashboard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { getEvents, createEvent, updateEvent, deleteEvent, getUser } from '@/lib/api';
import type { Event, EventType } from '@/types';

const eventTypeLabels: Record<EventType, string> = {
  regular: 'Régulier',
  special: 'Spécial',
  liturgical: 'Liturgique',
  cultural: 'Culturel',
};

interface EventFormData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isSpecial: boolean;
  imageUrl: string;
  eventType: EventType;
}

const emptyForm: EventFormData = {
  title: '',
  date: '',
  time: '',
  location: '',
  description: '',
  isSpecial: false,
  imageUrl: '',
  eventType: 'regular',
};

type StatusFilter = 'all' | 'upcoming' | 'past';
type SortDir = 'asc' | 'desc';

const ITEMS_PER_PAGE = 10;

export default function AdminEvents() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [deletingEvent, setDeletingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<EventFormData>(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  // Filters
  const [typeFilter, setTypeFilter] = useState<EventType | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = 'Gestion des événements | Admin';
  }, []);

  useEffect(() => {
    async function init() {
      try {
        await getUser();
      } catch {
        navigate('/admin/login');
        return;
      }
      await fetchEvents();
    }
    init();
  }, [navigate]);

  async function fetchEvents() {
    try {
      const data = await getEvents();
      setEvents(data);
    } catch {
      toast.error('Erreur lors du chargement des événements');
    } finally {
      setLoading(false);
    }
  }

  function openCreateDialog() {
    setEditingEvent(null);
    setFormData(emptyForm);
    setDialogOpen(true);
  }

  function openEditDialog(event: Event) {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
      isSpecial: event.isSpecial,
      imageUrl: event.imageUrl || '',
      eventType: event.eventType || 'regular',
    });
    setDialogOpen(true);
  }

  function openDeleteDialog(event: Event) {
    setDeletingEvent(event);
    setDeleteDialogOpen(true);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        ...formData,
        imageUrl: formData.imageUrl || undefined,
      };
      if (editingEvent) {
        const updated = await updateEvent(editingEvent.id, payload);
        setEvents((prev) =>
          prev.map((ev) => (ev.id === editingEvent.id ? updated : ev))
        );
        toast.success('Événement modifié avec succès');
      } else {
        const created = await createEvent(payload as Parameters<typeof createEvent>[0]);
        setEvents((prev) => [...prev, created]);
        toast.success('Événement créé avec succès');
      }
      setDialogOpen(false);
      setFormData(emptyForm);
      setEditingEvent(null);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : 'Erreur lors de la sauvegarde'
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!deletingEvent) return;
    setSubmitting(true);

    try {
      await deleteEvent(deletingEvent.id);
      setEvents((prev) => prev.filter((ev) => ev.id !== deletingEvent.id));
      toast.success('Événement supprimé');
      setDeleteDialogOpen(false);
      setDeletingEvent(null);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : 'Erreur lors de la suppression'
      );
    } finally {
      setSubmitting(false);
    }
  }

  const now = new Date(new Date().toDateString());

  const filteredEvents = events
    .filter((e) => {
      if (typeFilter !== 'all' && e.eventType !== typeFilter) return false;
      if (statusFilter === 'upcoming' && new Date(e.date) < now) return false;
      if (statusFilter === 'past' && new Date(e.date) >= now) return false;
      return true;
    })
    .sort((a, b) => {
      const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
      return sortDir === 'asc' ? diff : -diff;
    });

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  function formatDateDisplay(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">Événements</h1>
            <p className="text-muted-foreground mt-1">
              Gérer les événements du sanctuaire
            </p>
          </div>
          <Button onClick={openCreateDialog}>
            <Plus className="h-4 w-4 mr-2" />
            Ajouter un événement
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex gap-1">
            <span className="text-sm text-muted-foreground self-center mr-1">Type :</span>
            {(['all', 'regular', 'special', 'liturgical', 'cultural'] as const).map((t) => (
              <Button
                key={t}
                variant={typeFilter === t ? 'default' : 'outline'}
                size="sm"
                onClick={() => { setTypeFilter(t); setPage(1); }}
              >
                {t === 'all' ? 'Tous' : eventTypeLabels[t]}
              </Button>
            ))}
          </div>
          <div className="h-6 w-px bg-border" />
          <div className="flex gap-1">
            <span className="text-sm text-muted-foreground self-center mr-1">Statut :</span>
            {(['all', 'upcoming', 'past'] as StatusFilter[]).map((s) => (
              <Button
                key={s}
                variant={statusFilter === s ? 'default' : 'outline'}
                size="sm"
                onClick={() => { setStatusFilter(s); setPage(1); }}
              >
                {s === 'all' ? 'Tous' : s === 'upcoming' ? 'À venir' : 'Passés'}
              </Button>
            ))}
          </div>
          <div className="h-6 w-px bg-border" />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSortDir((d) => d === 'asc' ? 'desc' : 'asc')}
          >
            <ArrowUpDown className="h-4 w-4 mr-1" />
            Date {sortDir === 'asc' ? '↑' : '↓'}
          </Button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12 text-muted-foreground">
            Chargement...
          </div>
        ) : paginatedEvents.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            Aucun événement correspondant.
          </div>
        ) : (
          <>
            <div className="rounded-md border bg-card">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-medium text-muted-foreground">Titre</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Heure</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Lieu</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Type</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Spécial</th>
                    <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedEvents.map((event) => (
                    <tr
                      key={event.id}
                      className="border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4 font-medium">{event.title}</td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {formatDateDisplay(event.date)}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{event.time}</td>
                      <td className="p-4 text-sm text-muted-foreground">{event.location}</td>
                      <td className="p-4">
                        <Badge variant="outline" className="text-xs">
                          {eventTypeLabels[event.eventType] || 'Régulier'}
                        </Badge>
                      </td>
                      <td className="p-4">
                        {event.isSpecial ? (
                          <Badge variant="secondary">Spécial</Badge>
                        ) : (
                          <span className="text-sm text-muted-foreground">--</span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm" onClick={() => openEditDialog(event)} title="Modifier">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost" size="sm" onClick={() => openDeleteDialog(event)} title="Supprimer"
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Précédent
                </Button>
                <span className="flex items-center text-sm text-muted-foreground px-2">
                  Page {page} / {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Suivant
                </Button>
              </div>
            )}
          </>
        )}

        {/* Create / Edit dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingEvent ? "Modifier l'événement" : 'Ajouter un événement'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event-title">Titre</Label>
                <Input
                  id="event-title"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="Titre de l'événement"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="event-date">Date</Label>
                  <Input
                    id="event-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-time">Heure</Label>
                  <Input
                    id="event-time"
                    value={formData.time}
                    onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))}
                    placeholder="ex: 10h30"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-location">Lieu</Label>
                <Input
                  id="event-location"
                  value={formData.location}
                  onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                  placeholder="Lieu de l'événement"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-description">Description</Label>
                <Textarea
                  id="event-description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Description de l'événement"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-type">Type d'événement</Label>
                <select
                  id="event-type"
                  value={formData.eventType}
                  onChange={(e) => setFormData((prev) => ({ ...prev, eventType: e.target.value as EventType }))}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {Object.entries(eventTypeLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-image">URL de l'image (optionnel)</Label>
                <Input
                  id="event-image"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))}
                  placeholder="https://... ou /images/..."
                />
                {formData.imageUrl && (
                  <div className="mt-2 rounded-md overflow-hidden border bg-muted">
                    <img
                      src={formData.imageUrl}
                      alt="Aperçu"
                      className="w-full h-32 object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  role="switch"
                  aria-checked={formData.isSpecial}
                  onClick={() => setFormData((prev) => ({ ...prev, isSpecial: !prev.isSpecial }))}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                    formData.isSpecial ? 'bg-primary' : 'bg-input'
                  }`}
                >
                  <span
                    className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
                      formData.isSpecial ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
                <Label className="cursor-pointer" onClick={() => setFormData((prev) => ({ ...prev, isSpecial: !prev.isSpecial }))}>
                  Événement spécial (mis en avant sur le site)
                </Label>
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)} disabled={submitting}>
                  Annuler
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? 'Enregistrement...' : editingEvent ? 'Modifier' : 'Créer'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Delete confirmation dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Confirmer la suppression</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              Êtes-vous sûr de vouloir supprimer l'événement{' '}
              <strong>{deletingEvent?.title}</strong> ? Cette action est irréversible.
            </p>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDeleteDialogOpen(false)} disabled={submitting}>
                Annuler
              </Button>
              <Button type="button" variant="destructive" onClick={handleDelete} disabled={submitting}>
                {submitting ? 'Suppression...' : 'Supprimer'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}
