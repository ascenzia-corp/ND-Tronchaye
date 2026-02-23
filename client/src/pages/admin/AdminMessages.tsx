import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Eye, Trash2, Check } from 'lucide-react';
import { toast } from 'sonner';
import { AdminLayout } from './AdminDashboard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { getContactMessages, markMessageAsRead, deleteContactMessage, getUser } from '@/lib/api';
import type { ContactMessage } from '@/types';

type FilterType = 'all' | 'unread' | 'read';

export default function AdminMessages() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>('all');
  const [viewingMessage, setViewingMessage] = useState<ContactMessage | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingMessage, setDeletingMessage] = useState<ContactMessage | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Messages | Admin';
  }, []);

  useEffect(() => {
    async function init() {
      try {
        await getUser();
      } catch {
        navigate('/admin/login');
        return;
      }
      await fetchMessages();
    }
    init();
  }, [navigate]);

  async function fetchMessages() {
    try {
      const data = await getContactMessages();
      setMessages(data);
    } catch {
      toast.error('Erreur lors du chargement des messages');
    } finally {
      setLoading(false);
    }
  }

  async function handleMarkAsRead(msg: ContactMessage) {
    try {
      const updated = await markMessageAsRead(msg.id);
      setMessages((prev) => prev.map((m) => (m.id === msg.id ? updated : m)));
      if (viewingMessage?.id === msg.id) {
        setViewingMessage(updated);
      }
      toast.success('Message marqué comme lu');
    } catch {
      toast.error('Erreur lors de la mise à jour');
    }
  }

  function openDeleteDialog(msg: ContactMessage) {
    setDeletingMessage(msg);
    setDeleteDialogOpen(true);
  }

  async function handleDelete() {
    if (!deletingMessage) return;
    setSubmitting(true);
    try {
      await deleteContactMessage(deletingMessage.id);
      setMessages((prev) => prev.filter((m) => m.id !== deletingMessage.id));
      toast.success('Message supprimé');
      setDeleteDialogOpen(false);
      setDeletingMessage(null);
    } catch {
      toast.error('Erreur lors de la suppression');
    } finally {
      setSubmitting(false);
    }
  }

  function openViewDialog(msg: ContactMessage) {
    setViewingMessage(msg);
    if (!msg.isRead) {
      handleMarkAsRead(msg);
    }
  }

  const filteredMessages = messages.filter((m) => {
    if (filter === 'unread') return !m.isRead;
    if (filter === 'read') return m.isRead;
    return true;
  });

  const unreadCount = messages.filter((m) => !m.isRead).length;

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary flex items-center gap-3">
              Messages
              {unreadCount > 0 && (
                <Badge variant="destructive" className="text-sm">
                  {unreadCount} non lu{unreadCount > 1 ? 's' : ''}
                </Badge>
              )}
            </h1>
            <p className="text-muted-foreground mt-1">
              Gérer les messages de contact reçus
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {(['all', 'unread', 'read'] as FilterType[]).map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'Tous' : f === 'unread' ? 'Non lus' : 'Lus'}
              {f === 'unread' && unreadCount > 0 && (
                <span className="ml-1.5 bg-white/20 rounded-full px-1.5 text-xs">{unreadCount}</span>
              )}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12 text-muted-foreground">
            Chargement...
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Aucun message{filter !== 'all' ? ` ${filter === 'unread' ? 'non lu' : 'lu'}` : ''}.</p>
          </div>
        ) : (
          <div className="rounded-md border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Nom</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Email</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Sujet</th>
                  <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMessages.map((msg) => (
                  <tr
                    key={msg.id}
                    className={`border-b last:border-b-0 hover:bg-muted/30 transition-colors ${!msg.isRead ? 'bg-blue-50/50' : ''}`}
                  >
                    <td className="p-4 text-sm text-muted-foreground whitespace-nowrap">
                      {formatDate(msg.createdAt)}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {!msg.isRead && (
                          <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                            Non lu
                          </Badge>
                        )}
                        <span className={`text-sm ${!msg.isRead ? 'font-semibold' : ''}`}>{msg.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{msg.email}</td>
                    <td className="p-4 text-sm text-muted-foreground">{msg.subject}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openViewDialog(msg)}
                          title="Voir"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {!msg.isRead && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMarkAsRead(msg)}
                            title="Marquer comme lu"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openDeleteDialog(msg)}
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

        {/* View dialog */}
        <Dialog open={!!viewingMessage} onOpenChange={() => setViewingMessage(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Message de {viewingMessage?.name}</DialogTitle>
            </DialogHeader>
            {viewingMessage && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <p className="font-medium">{viewingMessage.email}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Date</p>
                    <p className="font-medium">{formatDate(viewingMessage.createdAt)}</p>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Sujet</p>
                  <p className="font-medium">{viewingMessage.subject}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Message</p>
                  <div className="bg-muted/50 rounded-md p-4 text-sm whitespace-pre-wrap">
                    {viewingMessage.message}
                  </div>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setViewingMessage(null)}>
                Fermer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete confirmation dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Confirmer la suppression</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              Êtes-vous sûr de vouloir supprimer le message de{' '}
              <strong>{deletingMessage?.name}</strong> ? Cette action est irréversible.
            </p>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setDeleteDialogOpen(false)}
                disabled={submitting}
              >
                Annuler
              </Button>
              <Button
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
