import { useEffect } from 'react';
import SacrementLayout from '@/components/SacrementLayout';

export default function Onction() {
  useEffect(() => {
    document.title = "L'Onction des malades | Sanctuaire Notre Dame de la Tronchaye";
  }, []);

  return (
    <SacrementLayout
      title="L'Onction des malades"
      subtitle="Un sacrement de réconfort, de force et de paix dans l'épreuve de la maladie"
      backgroundImage="/images/IMG_9315.webp"
    >
      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Le sacrement des malades et des personnes en danger
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          L'Onction des malades n'est pas seulement le sacrement de ceux qui se trouvent à toute extrémité.
          Le temps opportun pour la recevoir est déjà venu lorsque le fidèle commence à être en danger de
          mort à cause de la maladie ou de la vieillesse (cf. Catéchisme de l'Église catholique, n. 1514).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Comme l'enseigne l'apôtre saint Jacques :{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « L'un de vous est-il malade ? Qu'il appelle les presbytres de l'Église et qu'ils prient
            sur lui après l'avoir oint d'huile au nom du Seigneur. La prière de la foi sauvera le
            patient et le Seigneur le relèvera. S'il a commis des péchés, ils lui seront remis. »
          </span>{' '}
          (Jacques 5, 14-15).
        </p>
      </section>

      {/* Signification */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Les effets de l'Onction des malades
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          L'Onction des malades confère une grâce particulière au chrétien qui éprouve les difficultés
          inhérentes à l'état de maladie grave ou de vieillesse :
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">L'union à la Passion du Christ :</strong> le malade
              est configuré à la souffrance rédemptrice du Christ, et sa souffrance acquiert un sens
              nouveau : elle devient participation à l'œuvre salvifique de Jésus.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Le réconfort, la paix et le courage :</strong> pour
              supporter chrétiennement les souffrances de la maladie ou de la vieillesse. C'est un don
              de l'Esprit Saint qui renouvelle la confiance et la foi en Dieu.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Le pardon des péchés :</strong> si le malade n'a pas
              pu l'obtenir par le sacrement de la Pénitence, l'Onction des malades remet les péchés.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Le rétablissement de la santé :</strong> si cela
              convient au salut spirituel du malade. L'Onction peut apporter la guérison physique,
              mais son fruit premier est spirituel.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">La préparation au passage vers la vie éternelle :</strong>{' '}
              l'Onction achève de nous conformer à la mort et à la résurrection du Christ, comme le
              Baptême avait commencé de le faire. Elle est l'ultime des saintes onctions qui jalonnent
              la vie chrétienne.
            </span>
          </li>
        </ul>
      </section>

      {/* Comment se déroule le sacrement */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Comment se déroule l'Onction des malades ?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le rite essentiel du sacrement consiste en l'onction du front et des mains du malade
          (dans le rite romain) avec de l'huile dûment bénite — de préférence de l'huile d'olive —
          accompagnée de la prière liturgique du prêtre célébrant qui demande la grâce spéciale
          de ce sacrement.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le prêtre prononce les paroles :{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « Par cette onction sainte, que le Seigneur en sa grande bonté vous réconforte par la
            grâce de l'Esprit Saint. Ainsi, vous ayant libéré de tous péchés, qu'il vous sauve et
            vous relève. »
          </span>
        </p>
        <p className="text-muted-foreground leading-relaxed">
          La célébration peut avoir lieu à domicile, à l'hôpital, en maison de retraite ou à l'église.
          Elle peut être individuelle ou communautaire, au cours d'une messe ou en dehors.
        </p>
      </section>

      {/* Qui peut recevoir ce sacrement */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Qui peut recevoir l'Onction des malades ?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          L'Onction des malades peut être administrée à tout fidèle baptisé qui, parvenu à l'usage
          de la raison, commence à se trouver en danger pour cause de maladie ou de vieillesse
          (cf. CIC can. 1004 §1).
        </p>
        <ul className="space-y-2 text-muted-foreground mb-4">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Une personne gravement malade, avant une opération chirurgicale importante</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Une personne âgée dont les forces déclinent</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Un malade dont l'état s'aggrave ou qui fait une rechute</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Un enfant malade ayant atteint l'âge de raison</span>
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Il est important de ne pas attendre les derniers instants pour demander ce sacrement.
          Il est souhaitable de le recevoir au début d'une maladie grave, afin de bénéficier
          pleinement de ses grâces de guérison et de réconfort.
        </p>
      </section>

      {/* Informations pratiques */}
      <section className="bg-sanctuary-subtle rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          Informations pratiques
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Pour demander l'Onction des malades pour vous-même ou pour un proche, contactez le recteur
          du sanctuaire ou le secrétariat paroissial. Le prêtre se déplacera volontiers à domicile,
          à l'hôpital ou en maison de retraite.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          En cas d'urgence (danger de mort imminent), n'hésitez pas à appeler à toute heure.
          Le prêtre pourra administrer le sacrement accompagné du Viatique (la dernière communion)
          et de l'absolution sacramentelle.
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
            N'hésitez pas à nous contacter : ce sacrement est un don de Dieu pour les temps d'épreuve,
            et il est toujours temps de le demander.
          </p>
        </div>
      </section>
    </SacrementLayout>
  );
}
