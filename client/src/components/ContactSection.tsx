import { useState, type FormEvent } from 'react';
import { MapPin, Phone, User, Send, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { sendContactMessage } from '@/lib/api';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const subjects = [
  "Demande d'information",
  'Baptême',
  'Mariage',
  'Demande de messe',
  'Visite',
  'Autre',
];

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = { name: '', email: '', subject: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const ref = useScrollAnimation();

  function validate(): boolean {
    const newErrors: Partial<Record<keyof ContactForm, string>> = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Adresse e-mail invalide.";
    }
    if (!form.subject) {
      newErrors.subject = 'Veuillez choisir un sujet.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(field: keyof ContactForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      await sendContactMessage(form);
      toast.success('Votre message a été envoyé avec succès.');
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erreur lors de l'envoi du message.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Nous contacter
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une question, une demande de renseignement ? N'hésitez pas à nous écrire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Practical info */}
          <div className="space-y-6">
            <Card className="border-sanctuary-accent/20">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-sanctuary-accent/10 shrink-0">
                    <MapPin className="h-5 w-5 text-sanctuary-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Adresse</p>
                    <p className="text-muted-foreground text-sm">
                      Place de l'Église<br />56220 Rochefort-en-Terre
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-sanctuary-accent/10 shrink-0">
                    <Phone className="h-5 w-5 text-sanctuary-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Téléphone</p>
                    <a href="tel:+33297433150" className="text-sanctuary-accent hover:underline text-sm">
                      02 97 43 31 50
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-sanctuary-accent/10 shrink-0">
                    <User className="h-5 w-5 text-sanctuary-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Recteur</p>
                    <p className="text-muted-foreground text-sm">Père Patience-Aimé Bondeko</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-sanctuary-accent/10 shrink-0">
                    <Clock className="h-5 w-5 text-sanctuary-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Horaires d'ouverture</p>
                    <p className="text-muted-foreground text-sm">
                      Pâques — fin sept. : 9h — 19h<br />
                      Oct. — Pâques : 10h — 18h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Contact form */}
          <Card className="border-sanctuary-accent/20">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Nom</Label>
                  <Input
                    id="contact-name"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">E-mail</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="votre@email.fr"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Sujet</Label>
                  <select
                    id="contact-subject"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.subject ? 'border-destructive' : 'border-input'}`}
                  >
                    <option value="">Choisir un sujet...</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Votre message..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={errors.message ? 'border-destructive' : ''}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                <Button type="submit" disabled={submitting} className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  {submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps */}
        <div className="rounded-lg overflow-hidden shadow-sm border border-border/50">
          <iframe
            title="Localisation du Sanctuaire Notre-Dame de la Tronchaye"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.5!2d-2.337!3d47.698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4810a2f4c0000001%3A0x40c14484fbfb7e0!2sRochefort-en-Terre!5e0!3m2!1sfr!2sfr"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
