import { useEffect, useState, type FormEvent } from 'react';
import { MapPin, Phone, User, Send, Clock, Church } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Toaster } from 'sonner';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  const mapRef = useScrollAnimation();
  const scheduleRef = useScrollAnimation();

  useEffect(() => {
    document.title = 'Contact et accès | Sanctuaire Notre Dame de la Tronchaye';
  }, []);

  function validate(): boolean {
    const newErrors: Partial<Record<keyof ContactForm, string>> = {};

    if (!form.name.trim()) {
      newErrors.name = 'Le nom est requis.';
    }
    if (!form.email.trim()) {
      newErrors.email = "L'adresse e-mail est requise.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "L'adresse e-mail n'est pas valide.";
    }
    if (!form.subject.trim()) {
      newErrors.subject = 'Le sujet est requis.';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Le message est requis.';
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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!validate()) {
      toast.error('Veuillez corriger les erreurs dans le formulaire.');
      return;
    }

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Nom : ${form.name}\nE-mail : ${form.email}\n\n${form.message}`
    );
    const mailto = `mailto:contact@sanctuaire-tronchaye.fr?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    toast.success('Votre client de messagerie va s\'ouvrir.');
    setForm(initialForm);
    setErrors({});
  }

  return (
    <div className="pt-20 md:pt-24">
      <Toaster position="top-right" richColors />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Page heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Contact et accès
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une question, une demande de renseignement ou envie de nous rendre visite ?
            N'hésitez pas à nous contacter.
          </p>
        </div>

        {/* Grid: form (2 cols) + info (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact form */}
          <div ref={formRef} className="lg:col-span-2">
            <Card className="border-sanctuary-accent/20 shadow-md">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground flex items-center gap-2">
                  <Send className="h-5 w-5 text-sanctuary-accent" />
                  Nous écrire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom</Label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.fr"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      placeholder="Objet de votre message"
                      value={form.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      className={errors.subject ? 'border-destructive' : ''}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Votre message..."
                      rows={6}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full sm:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Practical info */}
          <div ref={infoRef} className="lg:col-span-1">
            <Card className="border-sanctuary-accent/20 shadow-md h-full">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground">
                  Informations pratiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-sanctuary-accent/10 shrink-0">
                    <MapPin className="h-5 w-5 text-sanctuary-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Adresse</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Place de l'Église<br />
                      56220 Rochefort-en-Terre
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-sanctuary-accent/10 shrink-0">
                    <Phone className="h-5 w-5 text-sanctuary-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Téléphone</p>
                    <a
                      href="tel:+33297433150"
                      className="text-sanctuary-accent hover:underline text-sm"
                    >
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
                    <p className="text-muted-foreground text-sm">
                      Père Patience-Aimé Bondeko
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div ref={mapRef} className="mb-16">
          <Card className="border-sanctuary-accent/20 shadow-md overflow-hidden">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sanctuary-accent" />
                Nous trouver
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                title="Localisation du Sanctuaire Notre-Dame de la Tronchaye"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.5!2d-2.337!3d47.698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4810a2f4c0000001%3A0x40c14484fbfb7e0!2sRochefort-en-Terre!5e0!3m2!1sfr!2sfr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>

        {/* Compact schedule reminder */}
        <div ref={scheduleRef}>
          <Card className="border-sanctuary-accent/20 shadow-md bg-sanctuary-subtle">
            <CardContent className="py-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sanctuary-accent/10 shrink-0">
                  <Clock className="h-6 w-6 text-sanctuary-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1 flex items-center justify-center sm:justify-start gap-2">
                    <Church className="h-4 w-4 text-sanctuary-accent" />
                    Horaires d'ouverture
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <span className="font-medium text-foreground">De Pâques à fin septembre :</span> 9h — 19h
                    <span className="mx-2">|</span>
                    <span className="font-medium text-foreground">Le reste de l'année :</span> 10h — 18h
                  </p>
                  <p className="text-muted-foreground text-xs italic mt-1">
                    Pas de visite touristique pendant les offices.
                    Consultez la page d'accueil pour les horaires des messes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
