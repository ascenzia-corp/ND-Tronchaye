import { useEffect, useState, type FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Trash2, Pencil, Image, ArrowUp, ArrowDown } from 'lucide-react';
import { toast } from 'sonner';
import { AdminLayout } from './AdminDashboard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { getPhotos, uploadPhoto, deletePhoto, updatePhoto, getUser } from '@/lib/api';
import type { Photo } from '@/types';

export default function AdminPhotos() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // Upload form state
  const [uploadAlt, setUploadAlt] = useState('');
  const [uploadCaption, setUploadCaption] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Edit dialog state
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState<Photo | null>(null);
  const [editAlt, setEditAlt] = useState('');
  const [editCaption, setEditCaption] = useState('');
  const [saving, setSaving] = useState(false);

  // Delete confirmation state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingPhoto, setDeletingPhoto] = useState<Photo | null>(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    document.title = 'Gestion des photos | Admin';
  }, []);

  useEffect(() => {
    async function init() {
      try {
        await getUser();
      } catch {
        navigate('/admin/login');
        return;
      }
      await fetchPhotos();
    }
    init();
  }, [navigate]);

  async function fetchPhotos() {
    try {
      const data = await getPhotos();
      setPhotos(data);
    } catch {
      toast.error('Erreur lors du chargement des photos');
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload(e: FormEvent) {
    e.preventDefault();
    if (!selectedFile) {
      toast.error('Veuillez sélectionner un fichier');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('photo', selectedFile);
      formData.append('alt', uploadAlt);
      if (uploadCaption) {
        formData.append('caption', uploadCaption);
      }

      const newPhoto = await uploadPhoto(formData);
      setPhotos((prev) => [...prev, newPhoto]);
      toast.success('Photo ajoutée avec succès');

      setSelectedFile(null);
      setUploadAlt('');
      setUploadCaption('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Erreur lors de l'upload"
      );
    } finally {
      setUploading(false);
    }
  }

  function openEditDialog(photo: Photo) {
    setEditingPhoto(photo);
    setEditAlt(photo.alt);
    setEditCaption(photo.caption || '');
    setEditDialogOpen(true);
  }

  async function handleUpdate(e: FormEvent) {
    e.preventDefault();
    if (!editingPhoto) return;

    setSaving(true);
    try {
      const updated = await updatePhoto(editingPhoto.id, {
        alt: editAlt,
        caption: editCaption || undefined,
      });
      setPhotos((prev) =>
        prev.map((p) => (p.id === editingPhoto.id ? updated : p))
      );
      toast.success('Photo mise à jour');
      setEditDialogOpen(false);
      setEditingPhoto(null);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : 'Erreur lors de la mise à jour'
      );
    } finally {
      setSaving(false);
    }
  }

  function openDeleteDialog(photo: Photo) {
    setDeletingPhoto(photo);
    setDeleteDialogOpen(true);
  }

  async function handleDelete() {
    if (!deletingPhoto) return;

    setDeleting(true);
    try {
      await deletePhoto(deletingPhoto.id);
      setPhotos((prev) => prev.filter((p) => p.id !== deletingPhoto.id));
      toast.success('Photo supprimée');
      setDeleteDialogOpen(false);
      setDeletingPhoto(null);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : 'Erreur lors de la suppression'
      );
    } finally {
      setDeleting(false);
    }
  }

  async function handleReorder(photo: Photo, direction: 'up' | 'down') {
    const currentIndex = photos.findIndex((p) => p.id === photo.id);
    const swapIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (swapIndex < 0 || swapIndex >= photos.length) return;

    const otherPhoto = photos[swapIndex];
    try {
      await Promise.all([
        updatePhoto(photo.id, { order: otherPhoto.order }),
        updatePhoto(otherPhoto.id, { order: photo.order }),
      ]);

      setPhotos((prev) => {
        const next = [...prev];
        next[currentIndex] = { ...otherPhoto, order: photo.order };
        next[swapIndex] = { ...photo, order: otherPhoto.order };
        return next;
      });
    } catch {
      toast.error("Erreur lors du réordonnancement");
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Photos</h1>
          <p className="text-muted-foreground mt-1">
            Gérer les photos de la galerie du sanctuaire
          </p>
        </div>

        {/* Upload form */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-primary mb-4">
              Ajouter une photo
            </h2>
            <form onSubmit={handleUpload} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="photo-file">Fichier image</Label>
                  <Input
                    id="photo-file"
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setSelectedFile(e.target.files?.[0] || null)
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo-alt">Texte alternatif</Label>
                  <Input
                    id="photo-alt"
                    value={uploadAlt}
                    onChange={(e) => setUploadAlt(e.target.value)}
                    placeholder="Description de l'image"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo-caption">
                    Légende{' '}
                    <span className="text-muted-foreground">(optionnel)</span>
                  </Label>
                  <Input
                    id="photo-caption"
                    value={uploadCaption}
                    onChange={(e) => setUploadCaption(e.target.value)}
                    placeholder="Légende de la photo"
                  />
                </div>
              </div>
              <Button type="submit" disabled={uploading}>
                <Upload className="h-4 w-4 mr-2" />
                {uploading ? 'Envoi en cours...' : 'Ajouter la photo'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Photos grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg bg-muted animate-pulse" />
            ))}
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Image className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Aucune photo dans la galerie.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <Card key={photo.id} className="overflow-hidden group">
                <div className="aspect-square relative bg-muted">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Reorder buttons overlay */}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleReorder(photo, 'up')}
                      disabled={index === 0}
                      className="w-7 h-7 rounded bg-white/90 hover:bg-white shadow flex items-center justify-center disabled:opacity-30"
                      aria-label="Monter"
                    >
                      <ArrowUp className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => handleReorder(photo, 'down')}
                      disabled={index === photos.length - 1}
                      className="w-7 h-7 rounded bg-white/90 hover:bg-white shadow flex items-center justify-center disabled:opacity-30"
                      aria-label="Descendre"
                    >
                      <ArrowDown className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <CardContent className="p-4 space-y-2">
                  <p className="text-sm font-medium truncate" title={photo.alt}>
                    {photo.alt}
                  </p>
                  {photo.caption && (
                    <p className="text-xs text-muted-foreground truncate" title={photo.caption}>
                      {photo.caption}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Ordre : {photo.order}
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <Button variant="outline" size="sm" onClick={() => openEditDialog(photo)} title="Modifier">
                      <Pencil className="h-3 w-3 mr-1" />
                      Modifier
                    </Button>
                    <Button
                      variant="outline" size="sm" onClick={() => openDeleteDialog(photo)} title="Supprimer"
                      className="text-destructive hover:text-destructive border-destructive/30 hover:bg-destructive/10"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Supprimer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Edit dialog */}
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Modifier la photo</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleUpdate} className="space-y-4">
              {editingPhoto && (
                <div className="aspect-video relative rounded-md overflow-hidden bg-muted">
                  <img src={editingPhoto.url} alt={editingPhoto.alt} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="edit-alt">Texte alternatif</Label>
                <Input
                  id="edit-alt"
                  value={editAlt}
                  onChange={(e) => setEditAlt(e.target.value)}
                  placeholder="Description de l'image"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-caption">
                  Légende <span className="text-muted-foreground">(optionnel)</span>
                </Label>
                <Input
                  id="edit-caption"
                  value={editCaption}
                  onChange={(e) => setEditCaption(e.target.value)}
                  placeholder="Légende de la photo"
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setEditDialogOpen(false)} disabled={saving}>
                  Annuler
                </Button>
                <Button type="submit" disabled={saving}>
                  {saving ? 'Enregistrement...' : 'Enregistrer'}
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
            {deletingPhoto && (
              <>
                <p className="text-sm text-muted-foreground">
                  Êtes-vous sûr de vouloir supprimer cette photo ?
                </p>
                <div className="aspect-video relative rounded-md overflow-hidden bg-muted">
                  <img src={deletingPhoto.url} alt={deletingPhoto.alt} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  <strong>{deletingPhoto.alt}</strong>
                  {deletingPhoto.caption && <> — {deletingPhoto.caption}</>}
                </p>
              </>
            )}
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDeleteDialogOpen(false)} disabled={deleting}>
                Annuler
              </Button>
              <Button type="button" variant="destructive" onClick={handleDelete} disabled={deleting}>
                {deleting ? 'Suppression...' : 'Supprimer'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}
