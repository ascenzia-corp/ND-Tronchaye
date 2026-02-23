import { useEffect } from 'react';
import { Church, Users, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  useEffect(() => {
    document.title = 'À propos | Sanctuaire Notre Dame de la Tronchaye';
  }, []);

  const section1Ref = useScrollAnimation();
  const section2Ref = useScrollAnimation();
  const section3Ref = useScrollAnimation();

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Page heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            À propos
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez le sanctuaire, la paroisse et l'association qui font vivre
            ce haut lieu de spiritualité bretonne.
          </p>
        </div>

        {/* Section 1 — Le Sanctuaire */}
        <div ref={section1Ref}>
          <Card className="border-sanctuary-accent/20 shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sanctuary-accent/10">
                  <Church className="h-6 w-6 text-sanctuary-accent" />
                </div>
                <CardTitle className="font-serif text-2xl md:text-3xl text-foreground">
                  Le Sanctuaire
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Le Sanctuaire Notre-Dame de la Tronchaye, niché au c&oelig;ur du village médiéval
                de Rochefort-en-Terre, est un joyau d'architecture religieuse dont les origines
                remontent au XII<sup>e</sup> siècle. Sa tour romane, érigée en 1125, témoigne de la
                ferveur des premiers bâtisseurs, tandis que sa façade en gothique flamboyant,
                achevée en 1533, illustre l'élan artistique de la fin du Moyen Âge.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                L'intérieur abrite un remarquable retable en pierre polychrome datant de 1610,
                chef-d'&oelig;uvre de la sculpture religieuse bretonne. Classé Monument Historique
                depuis 1931, le sanctuaire est un lieu de mémoire et de beauté qui traverse les
                siècles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Haut lieu de pèlerinage marial, le sanctuaire conserve la statue miraculeuse de la
                Vierge allaitante, découverte dans le creux d'un arbre après les invasions normandes.
                Cette statue vénérée attire chaque année des milliers de pèlerins venus chercher
                le réconfort et l'intercession de Notre-Dame de la Tronchaye.
              </p>
              <div className="pt-2 flex items-center gap-2 text-sm text-sanctuary-accent font-medium">
                <Church className="h-4 w-4" />
                <span>Place de l'Église, 56220 Rochefort-en-Terre</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px w-16 bg-sanctuary-accent/30" />
          <div className="mx-4 h-2 w-2 rounded-full bg-sanctuary-accent/40" />
          <div className="h-px w-16 bg-sanctuary-accent/30" />
        </div>

        {/* Section 2 — La Paroisse */}
        <div ref={section2Ref}>
          <Card className="border-sanctuary-accent/20 shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sanctuary-accent/10">
                  <Users className="h-6 w-6 text-sanctuary-accent" />
                </div>
                <CardTitle className="font-serif text-2xl md:text-3xl text-foreground">
                  La Paroisse
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                La paroisse de Rochefort-en-Terre est rattachée au diocèse de Vannes. Elle rassemble
                une communauté de fidèles engagés dans la vie de l'Église, au service de la prière
                et de la charité.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sous la conduite de son recteur, l'Abbé Patience-Aimé Bondeko, la paroisse assure les
                célébrations liturgiques régulières, l'enseignement du catéchisme pour les enfants
                et les jeunes, ainsi que la préparation aux sacrements : baptême, première communion,
                confirmation et mariage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La communauté paroissiale dessert les fidèles de Rochefort-en-Terre et des communes
                environnantes, offrant un accompagnement spirituel à chaque étape de la vie
                chrétienne. Tous sont les bienvenus pour participer à la vie de la paroisse.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px w-16 bg-sanctuary-accent/30" />
          <div className="mx-4 h-2 w-2 rounded-full bg-sanctuary-accent/40" />
          <div className="h-px w-16 bg-sanctuary-accent/30" />
        </div>

        {/* Section 3 — L'Association */}
        <div ref={section3Ref}>
          <Card className="border-sanctuary-accent/20 shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sanctuary-accent/10">
                  <Heart className="h-6 w-6 text-sanctuary-accent" />
                </div>
                <CardTitle className="font-serif text-2xl md:text-3xl text-foreground">
                  L'Association
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                L'Association des Amis du Sanctuaire regroupe des bénévoles passionnés par la
                préservation et le rayonnement de ce patrimoine exceptionnel. Son action s'articule
                autour de plusieurs missions essentielles.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sanctuary-accent shrink-0" />
                  <span className="leading-relaxed">
                    Soutien aux travaux de restauration et de conservation du monument,
                    pour transmettre ce trésor architectural aux générations futures.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sanctuary-accent shrink-0" />
                  <span className="leading-relaxed">
                    Organisation d'événements culturels : concerts de musique sacrée,
                    conférences, expositions et journées du patrimoine.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sanctuary-accent shrink-0" />
                  <span className="leading-relaxed">
                    Accueil des visiteurs et des pèlerins, animation des visites guidées
                    et accompagnement des bénévoles souhaitant s'investir.
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Rejoindre l'association, c'est contribuer à faire vivre un lieu unique où
                l'histoire, l'art et la foi se rencontrent depuis neuf siècles.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
