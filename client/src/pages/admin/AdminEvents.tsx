import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2 } from 'lucide-react';
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
import type { Event } from '@/types';

interface EventFormData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isSpecial: boolean;
}

const emptyForm: EventFormData = {
  title: '',
  date: '',
  time: '',
  location: '',
  description: '',
  isSpecial: false,
};

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
      if (editingEvent) {
        const updated = await updateEvent(editingEvent.id, formData);
        setEvents((prev) =>
          prev.map((ev) => (ev.id === editingEvent.id ? updated : ev))
        );
        toast.success('Événement modifié avec succès');
      } else {
        const created = await createEvent(formData);
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

  function formatDate(dateStr: string) {
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

        {loading ? (
          <div className="flex items-center justify-center py-12 text-muted-foreground">
            Chargement...
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            Aucun événement pour le moment.
          </div>
        ) : (
          <div className="rounded-md border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Titre
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Date
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Heure
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Lieu
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Spécial
                  </th>
                  <th className="text-right p-4 font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr
                    key={event.id}
                    className="border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-4 font-medium">{event.title}</td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {formatDate(event.date)}
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {event.time}
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {event.location}
                    </td>
                    <td className="p-4">
                      {event.isSpecial ? (
                        <Badge variant="secondary">Spécial</Badge>
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          --
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openEditDialog(event)}
                          title="Modifier"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openDeleteDialog(event)}
                          title="Supprimer"
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
        )}

        {/* Create / Edit dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>
                {editingEvent
                  ? 'Modifier l\'événement'
                  : 'Ajouter un événement'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="event-title">Titre</Label>
                <Input
                  id="event-title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
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
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, date: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-time">Heure</Label>
                  <Input
                    id="event-time"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, time: e.target.value }))
                    }
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
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  placeholder="Lieu de l'événement"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-description">Description</Label>
                <Textarea
                  id="event-description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Description de l'événement"
                  rows={3}
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="event-special"
                  type="checkbox"
                  checked={formData.isSpecial}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      isSpecial: e.target.checked,
                    }))
                  }
                  className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                />
                <Label htmlFor="event-special" className="cursor-pointer">
                  Événement spécial (mis en avant sur le site)
                </Label>
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                  disabled={submitting}
                >
                  Annuler
                </Button>
                <Button type="submit" disabled={submitting}>
                  {submitting
                    ? 'Enregistrement...'
                    : editingEvent
                      ? 'Modifier'
                      : 'Créer'}
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
              <strong>{deletingEvent?.title}</strong> ? Cette action est
              irréversible.
            </p>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setDeleteDialogOpen(false)}
                disabled={submitting}
              >
                Annuler
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={handleDelete}
                disabled={submitting}
              >
                {submitting ? 'Suppression...' : 'Supprimer'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}
