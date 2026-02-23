import { useEffect } from 'react';
import SacrementLayout from '@/components/SacrementLayout';

export default function Communion() {
  useEffect(() => {
    document.title = 'La Communion | Sanctuaire Notre Dame de la Tronchaye';
  }, []);

  return (
    <SacrementLayout
      title="La Communion"
      subtitle="Recevoir le Corps et le Sang du Christ, source et sommet de la vie chrétienne"
      backgroundImage="/images/IMG_9315.webp"
    >
      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          L'Eucharistie : source et sommet de la vie chrétienne
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          L'Eucharistie est le coeur et le sommet de la vie de l'Église, car en elle le Christ
          associe son Église et tous ses membres à son sacrifice de louange et d'action de grâces
          offert une fois pour toutes sur la Croix à son Père. Par ce sacrifice, Il répand les
          grâces du salut sur son Corps, qui est l'Église (cf. CEC n. 1407).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Le Concile Vatican II enseigne que l'Eucharistie est{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « la source et le sommet de toute la vie chrétienne »
          </span>{' '}
          (Lumen Gentium, n. 11). Tous les autres sacrements, de même que tous les ministères
          ecclésiaux et toutes les oeuvres d'apostolat, sont étroitement liés à l'Eucharistie
          et ordonnés à elle. C'est dans la sainte Eucharistie que se trouve tout le trésor
          spirituel de l'Église, à savoir le Christ lui-même, notre Pâque.
        </p>
      </section>

      {/* La Présence réelle */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          La Présence réelle du Christ dans l'Eucharistie
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          La foi catholique professe que, par la consécration du pain et du vin, s'opère le
          changement de toute la substance du pain en la substance du Corps du Christ et de toute
          la substance du vin en la substance de son Sang. Ce changement, l'Église l'appelle
          « transsubstantiation » (cf. CEC n. 1376). Sous les apparences (ou « espèces ») du
          pain et du vin, le Christ est présent de manière vraie, réelle et substantielle : son
          Corps et son Sang, avec son âme et sa divinité.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Notre Seigneur a lui-même déclaré :{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « Ma chair est la vraie nourriture, et mon sang est la vraie boisson.
            Celui qui mange ma chair et boit mon sang demeure en moi, et moi en lui »
          </span>{' '}
          (Jean 6, 55-56). C'est pourquoi l'Église voue un culte d'adoration au Saint Sacrement,
          non seulement durant la messe, mais aussi en dehors de sa célébration, en conservant
          avec le plus grand soin les hosties consacrées dans le tabernacle.
        </p>
      </section>

      {/* La Première Communion */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          La Première Communion
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          La première Communion est un moment d'une importance capitale dans la vie d'un chrétien.
          Pour la première fois, l'enfant (ou l'adulte catéchumène) reçoit le Corps du Christ dans
          l'Eucharistie. C'est l'aboutissement d'un chemin de préparation catéchétique au cours
          duquel il a appris à connaître et à aimer le Seigneur Jésus présent dans le Saint
          Sacrement.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          La préparation à la première Communion se fait dans le cadre du catéchisme paroissial.
          Elle dure habituellement deux à trois ans et comprend un enseignement de la foi
          catholique, l'initiation à la prière, la découverte de la liturgie et la préparation
          au sacrement de la Réconciliation (première confession avant la première Communion).
        </p>
      </section>

      {/* Conditions pour communier */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Les conditions pour recevoir la Communion
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          L'Église demande à ceux qui s'approchent de la sainte Communion de remplir les
          conditions suivantes :
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Être baptisé :</strong> seul un chrétien baptisé,
              en pleine communion avec l'Église catholique, peut recevoir l'Eucharistie.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Être en état de grâce :</strong> quiconque a
              conscience d'avoir commis un péché mortel doit recevoir le sacrement de la
              Réconciliation avant de s'approcher de la Communion (cf. CEC n. 1415). Communier
              en état de péché mortel constitue un sacrilège.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Observer le jeûne eucharistique :</strong> il
              convient de s'abstenir de toute nourriture et de toute boisson (sauf l'eau et les
              médicaments) pendant au moins <strong className="text-foreground">une heure</strong> avant
              de recevoir la Communion (cf. Code de Droit canonique, canon 919).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Savoir ce que l'on reçoit :</strong> le communiant
              doit avoir une connaissance suffisante du mystère eucharistique et être capable de
              discerner le Corps du Christ du pain ordinaire. C'est pourquoi la préparation
              catéchétique est indispensable.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Avoir les dispositions intérieures :</strong> la
              foi, l'espérance et la charité, l'humilité et le désir de recevoir le Seigneur
              doivent habiter le coeur du communiant. Comme le disait saint Augustin :{' '}
              <span className="text-sanctuary-accent italic">
                « Crois, et tu as déjà mangé. »
              </span>
            </span>
          </li>
        </ul>
      </section>

      {/* Préparation pratique */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Le parcours de préparation
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Pour les enfants, la préparation à la première Communion s'inscrit dans le parcours de
          catéchisme paroissial. Voici les grandes étapes :
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">1.</span>
            <span>
              <strong className="text-foreground">Inscription au catéchisme :</strong> les enfants
              sont généralement inscrits à partir du CE1 ou CE2 (7-8 ans). L'inscription se fait
              auprès du secrétariat paroissial en début d'année scolaire.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">2.</span>
            <span>
              <strong className="text-foreground">Deux à trois années de catéchisme :</strong> les
              enfants découvrent progressivement la foi catholique, la prière, la vie des saints,
              les sacrements et la liturgie.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">3.</span>
            <span>
              <strong className="text-foreground">Première confession :</strong> avant de recevoir
              la Communion pour la première fois, l'enfant se prépare au sacrement de la
              Réconciliation et le reçoit.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">4.</span>
            <span>
              <strong className="text-foreground">Retraite de première Communion :</strong> une
              journée ou un week-end de retraite est souvent proposé juste avant la première
              Communion, pour permettre à l'enfant de se préparer spirituellement à cette
              rencontre avec le Christ.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">5.</span>
            <span>
              <strong className="text-foreground">La célébration :</strong> la première Communion
              est habituellement célébrée lors d'une messe solennelle, en présence de la communauté
              paroissiale et des familles.
            </span>
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Pour les adultes n'ayant jamais communié, la préparation se fait dans le cadre du
          catéchuménat des adultes ou d'un accompagnement personnalisé avec le prêtre.
        </p>
      </section>

      {/* Informations pratiques */}
      <section className="bg-sanctuary-subtle rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          Informations pratiques
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Pour inscrire votre enfant au catéchisme ou pour toute question relative à la préparation
          à la première Communion au sanctuaire Notre Dame de la Tronchaye et dans la paroisse de
          Rochefort-en-Terre, veuillez contacter le secrétariat paroissial. L'inscription au
          catéchisme a lieu en début d'année scolaire, généralement en septembre.
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
            La première Communion est un moment de grâce immense. Accompagnez votre enfant dans
            cette belle préparation et n'hésitez pas à nous solliciter pour toute question.
          </p>
        </div>
      </section>
    </SacrementLayout>
  );
}
