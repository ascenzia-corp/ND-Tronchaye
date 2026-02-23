import { useEffect } from 'react';
import SacrementLayout from '@/components/SacrementLayout';

export default function Mariage() {
  useEffect(() => {
    document.title = 'Le Mariage | Sanctuaire Notre Dame de la Tronchaye';
  }, []);

  return (
    <SacrementLayout
      title="Le Mariage"
      subtitle="S'engager devant Dieu dans l'alliance fidèle et indissoluble de l'amour"
      backgroundImage="/images/IMG_9305.webp"
    >
      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Le mariage chrétien : une alliance sacrée
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le mariage chrétien est l'alliance par laquelle un homme et une femme constituent entre
          eux une communauté de toute la vie, ordonnée par son caractère naturel au bien des
          conjoints ainsi qu'à la génération et à l'éducation des enfants. Cette alliance, entre
          baptisés, a été élevée par le Christ Seigneur à la dignité de sacrement (cf. CEC n. 1601).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Dieu lui-même est l'auteur du mariage. Il a inscrit la vocation au mariage dans la
          nature même de l'homme et de la femme, tels qu'ils sont sortis de la main du Créateur :{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « Dieu créa l'homme à son image, à l'image de Dieu il le créa, homme et femme il les
            créa. Dieu les bénit et leur dit : "Soyez féconds, multipliez, emplissez la terre" »
          </span>{' '}
          (Genèse 1, 27-28). Le mariage n'est donc pas une institution purement humaine : il est
          voulu par Dieu et consacré par le Christ comme signe de son amour pour l'Église
          (cf. Éphésiens 5, 25-32).
        </p>
      </section>

      {/* Les propriétés essentielles */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Les propriétés essentielles du mariage
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          L'Église enseigne que le mariage possède des propriétés essentielles qui découlent de
          sa nature même et de l'élévation qu'il a reçue par le Christ :
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">L'unité :</strong> le mariage est l'union
              exclusive d'un seul homme et d'une seule femme. Cette unité implique la fidélité
              totale et réciproque des époux. En se donnant l'un à l'autre de manière entière et
              définitive, les époux reflètent l'amour fidèle de Dieu pour son peuple et du Christ
              pour son Église.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">L'indissolubilité :</strong> le lien du mariage
              sacramentel, une fois validement contracté et consommé entre deux baptisés, ne peut
              être dissous par aucune puissance humaine ni par aucune cause, sauf la mort. Le Christ
              enseigne clairement :{' '}
              <span className="text-sanctuary-accent font-semibold italic">
                « Ce que Dieu a uni, que l'homme ne le sépare pas »
              </span>{' '}
              (Matthieu 19, 6). Cette indissolubilité est un don de Dieu qui protège les époux et
              leur famille.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">L'ouverture à la vie :</strong> le mariage est
              ordonné par sa nature même à la procréation et à l'éducation des enfants. Les époux
              sont appelés à accueillir généreusement les enfants que Dieu veut bien leur donner,
              comme un fruit et un couronnement de leur amour conjugal. L'Église enseigne que tout
              acte conjugal doit demeurer ouvert à la transmission de la vie (cf. Humanae Vitae, n. 11).
            </span>
          </li>
        </ul>
      </section>

      {/* La célébration du mariage */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          La célébration du mariage
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Dans le rite latin, le mariage est normalement célébré au cours de la messe, en raison
          du lien de tous les sacrements avec le mystère pascal du Christ. Les époux eux-mêmes,
          en tant que baptisés, sont les ministres du sacrement du mariage : c'est en échangeant
          leur consentement devant l'Église qu'ils se confèrent mutuellement le sacrement.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le consentement mutuel est l'élément essentiel et indispensable du mariage. Sans ce
          consentement libre et conscient, il n'y a pas de mariage. Les époux expriment leur
          consentement par ces paroles :{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « N., je te reçois comme époux/épouse et je me donne à toi, pour t'aimer fidèlement
            dans le bonheur et dans les épreuves, tout au long de notre vie. »
          </span>
        </p>
        <p className="text-muted-foreground leading-relaxed">
          La bénédiction des alliances et la bénédiction nuptiale solennelle achèvent la
          célébration, scellant l'engagement des époux sous le regard de Dieu et de la communauté
          ecclésiale.
        </p>
      </section>

      {/* Le mariage civil en France */}
      <section className="mb-10">
        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
          Le mariage civil et le mariage religieux en France
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          En France, la loi exige que le mariage civil précède le mariage religieux. Le prêtre ne
          peut célébrer le sacrement du mariage que si les futurs époux lui présentent le certificat
          de leur mariage civil. Il s'agit d'une disposition légale (article 433-21 du Code pénal)
          qui ne diminue en rien la valeur et la nécessité du sacrement.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Pour l'Église, le vrai mariage des baptisés est le mariage sacramentel célébré devant
          Dieu. Le mariage civil, bien que nécessaire au plan juridique, ne constitue pas à lui
          seul un mariage au regard de la foi catholique. C'est pourquoi l'Église encourage
          vivement les couples à recevoir le sacrement du mariage.
        </p>
      </section>

      {/* Préparation */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          La préparation au mariage
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          L'Église attache une grande importance à la préparation au mariage. Il ne s'agit pas
          d'une simple formalité, mais d'un véritable cheminement spirituel et humain qui aide
          les fiancés à fonder leur foyer sur des bases solides.
        </p>
        <ul className="space-y-3 text-muted-foreground mb-6">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">1.</span>
            <span>
              <strong className="text-foreground">Premier contact :</strong> il est fortement
              recommandé de prendre contact avec la paroisse <strong className="text-foreground">au
              moins un an</strong> avant la date envisagée pour le mariage, voire davantage. Ce
              délai permet une préparation sereine et approfondie.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">2.</span>
            <span>
              <strong className="text-foreground">Rencontres avec le prêtre :</strong> les fiancés
              sont invités à rencontrer le prêtre qui célébrera leur mariage pour plusieurs
              entretiens (au minimum trois à quatre rencontres). Ces entretiens portent sur la foi,
              la vie de couple, le sens chrétien du mariage, la communication, la prière conjugale
              et les questions pratiques.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">3.</span>
            <span>
              <strong className="text-foreground">Le CPM (Centre de Préparation au Mariage) :</strong> les
              fiancés participent à des sessions de préparation au mariage animées par des couples
              chrétiens expérimentés. Ces sessions, réparties sur un ou plusieurs week-ends, abordent
              les grands thèmes de la vie conjugale : la communication, la gestion des conflits, la
              place de Dieu dans le foyer, la sexualité et la fécondité, l'éducation des enfants.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">4.</span>
            <span>
              <strong className="text-foreground">La préparation liturgique :</strong> les fiancés
              préparent la célébration de leur mariage avec le prêtre : choix des lectures bibliques,
              des chants, des intentions de prière et du déroulement de la cérémonie.
            </span>
          </li>
        </ul>

        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
          Documents nécessaires
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Pour constituer le dossier de mariage, les documents suivants sont habituellement demandés :
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Certificats de Baptême</strong> de chacun des
              fiancés, datant de moins de six mois (à demander à la paroisse du lieu de Baptême)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Acte de mariage civil</strong> ou attestation de
              publication des bans civils
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Pièces d'identité</strong> des deux fiancés
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Attestation de préparation au mariage</strong> délivrée
              par le CPM ou par le prêtre accompagnateur
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Noms et coordonnées des témoins</strong> (deux
              témoins au minimum pour le mariage religieux)
            </span>
          </li>
        </ul>
      </section>

      {/* Se marier au sanctuaire */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Se marier au sanctuaire Notre Dame de la Tronchaye
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Célébrer son mariage au sanctuaire Notre Dame de la Tronchaye, c'est choisir un lieu
          chargé d'histoire et de prière pour sceller son engagement devant Dieu. L'église
          médiévale, avec son retable polychrome et son atmosphère de recueillement, offre un
          cadre magnifique pour la célébration de ce beau sacrement.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Les couples qui souhaitent se marier au sanctuaire, qu'ils soient de la paroisse ou
          d'ailleurs, sont invités à prendre contact avec le secrétariat paroissial le plus tôt
          possible. Le prêtre les accueillera avec joie et les accompagnera tout au long de leur
          préparation, afin que leur mariage soit véritablement fondé sur la grâce de Dieu et
          placé sous la protection de Notre Dame de la Tronchaye.
        </p>
      </section>

      {/* Informations pratiques */}
      <section className="bg-sanctuary-subtle rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          Informations pratiques
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Pour toute demande de mariage au sanctuaire Notre Dame de la Tronchaye ou dans la
          paroisse de Rochefort-en-Terre, nous vous recommandons de prendre contact{' '}
          <strong className="text-foreground">au moins un an à l'avance</strong>. Ce délai permet
          d'assurer une préparation de qualité et de réserver la date souhaitée.
        </p>
        <div className="space-y-2">
          <p className="text-foreground font-semibold">
            Secrétariat paroissial
          </p>
          <p className="text-muted-foreground">
            Tél. :{' '}
            <a href="tel:+33297433150" className="text-sanctuary-accent hover:underline font-semibold">
              02 97 43 31 50
            </a>
          </p>
          <p className="text-muted-foreground text-sm">
            Le mariage est une vocation magnifique. Que vous soyez au début de votre réflexion ou
            déjà engagés dans les préparatifs, n'hésitez pas à nous contacter. Nous serons heureux
            de vous accompagner dans cette belle aventure de foi et d'amour.
          </p>
        </div>
      </section>
    </SacrementLayout>
  );
}
