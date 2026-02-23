import { useEffect } from 'react';
import SacrementLayout from '@/components/SacrementLayout';

export default function Bapteme() {
  useEffect(() => {
    document.title = 'Le Baptême | Sanctuaire Notre Dame de la Tronchaye';
  }, []);

  return (
    <SacrementLayout
      title="Le Baptême"
      subtitle="Renaître de l'eau et de l'Esprit pour entrer dans la vie de Dieu"
      backgroundImage="/images/IMG_9303.webp"
    >
      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Le premier sacrement de l'initiation chrétienne
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le Baptême est le fondement de toute la vie chrétienne, le porche de la vie dans l'Esprit
          et la porte qui ouvre l'accès aux autres sacrements. Par le Baptême, nous sommes libérés du
          péché et régénérés comme fils de Dieu ; devenus membres du Christ, nous sommes incorporés à
          l'Église et rendus participants de sa mission (cf. Catéchisme de l'Église catholique, n. 1213).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Comme l'enseigne Notre Seigneur Jésus-Christ :{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « En vérité, en vérité, je te le dis, à moins de naître d'eau et d'Esprit,
            nul ne peut entrer dans le Royaume de Dieu »
          </span>{' '}
          (Jean 3, 5). Le Baptême est cette nouvelle naissance qui fait de nous des enfants de Dieu,
          temples de l'Esprit Saint, et héritiers de la vie éternelle.
        </p>
      </section>

      {/* Signification */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          La signification du Baptême
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le Baptême réalise plusieurs choses essentielles dans l'âme de celui qui le reçoit :
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">La rémission des péchés :</strong> le péché originel
              et tous les péchés personnels sont effacés, ainsi que toutes les peines dues au péché.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">La naissance à la vie nouvelle :</strong> le baptisé
              devient une créature nouvelle (cf. 2 Co 5, 17), fils adoptif du Père, membre du Christ
              et temple de l'Esprit Saint.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">L'incorporation à l'Église :</strong> le baptisé
              entre dans le Corps du Christ, le Peuple de Dieu. Il reçoit un caractère spirituel
              indélébile (le « sceau ») qui le consacre pour le culte chrétien.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Le don de la grâce sanctifiante :</strong> la grâce
              de la justification qui rend capable de croire en Dieu, d'espérer en Lui et de L'aimer
              par les vertus théologales.
            </span>
          </li>
        </ul>
      </section>

      {/* Comment se déroule le Baptême */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Comment se déroule le Baptême ?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le rite essentiel du Baptême consiste à plonger dans l'eau le candidat ou à verser de l'eau
          sur sa tête, en invoquant la Très Sainte Trinité, c'est-à-dire le Père, le Fils et le
          Saint-Esprit. Le ministre prononce les paroles :{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « N., je te baptise au nom du Père, et du Fils, et du Saint-Esprit. »
          </span>
        </p>
        <p className="text-muted-foreground leading-relaxed">
          La célébration comprend également des rites complémentaires qui expriment la richesse du
          sacrement : l'onction avec le saint-chrême, la remise du vêtement blanc symbolisant la
          dignité nouvelle du baptisé « revêtu du Christ » (Ga 3, 27), et la remise du cierge allumé
          au cierge pascal, signe que le Christ a illuminé le néophyte et que le baptisé est désormais
          « lumière du monde » (Mt 5, 14).
        </p>
      </section>

      {/* Baptême des petits enfants */}
      <section className="mb-10">
        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
          Le Baptême des petits enfants
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          La pratique de baptiser les petits enfants est une tradition immémoriale de l'Église. Elle
          est attestée de manière explicite depuis le IIe siècle. L'Église baptise les petits enfants
          parce qu'ils naissent avec le péché originel et qu'ils ont besoin d'être délivrés du pouvoir
          des ténèbres et transférés dans le royaume de la liberté des enfants de Dieu (cf. CEC n. 1250).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Les parents qui demandent le Baptême pour leur enfant s'engagent, avec l'aide du parrain et
          de la marraine, à éduquer l'enfant dans la foi catholique. C'est pourquoi une préparation
          est nécessaire.
        </p>
      </section>

      {/* Baptême des adultes */}
      <section className="mb-10">
        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
          Le Baptême des adultes : le catéchuménat
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Les adultes qui désirent recevoir le Baptême sont invités à suivre un parcours de
          catéchuménat, c'est-à-dire une préparation à la vie chrétienne qui comprend la formation
          doctrinale, l'apprentissage de la prière et de la vie chrétienne, ainsi que des rites
          liturgiques jalonnant le chemin vers le Baptême.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Ce parcours dure habituellement un à deux ans et culmine lors de la Vigile pascale, nuit
          sainte où les catéchumènes reçoivent ensemble les trois sacrements de l'initiation
          chrétienne : le Baptême, la Confirmation et l'Eucharistie.
        </p>
      </section>

      {/* Préparation */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          La préparation au Baptême
        </h2>

        <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
          Pour le Baptême des petits enfants
        </h3>
        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">1.</span>
            <span>
              Prendre contact avec le secrétariat paroissial au moins <strong className="text-foreground">deux à trois mois</strong> avant
              la date souhaitée.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">2.</span>
            <span>
              Participer aux <strong className="text-foreground">réunions de préparation au Baptême</strong> avec le
              prêtre ou l'équipe de préparation baptismale de la paroisse.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">3.</span>
            <span>
              Choisir un <strong className="text-foreground">parrain et une marraine</strong> : au moins l'un des deux
              doit être catholique baptisé et confirmé, âgé d'au moins 16 ans et menant une vie conforme
              à la foi (cf. canon 874).
            </span>
          </li>
        </ul>

        <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
          Documents nécessaires
        </h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Copie intégrale de l'acte de naissance de l'enfant</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Attestation de préparation au Baptême</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Certificat de Baptême et de Confirmation du parrain et/ou de la marraine</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Justificatif de domicile des parents</span>
          </li>
        </ul>
      </section>

      {/* Informations pratiques */}
      <section className="bg-sanctuary-subtle rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          Informations pratiques
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Pour toute demande de Baptême au sanctuaire Notre Dame de la Tronchaye ou dans la paroisse
          de Rochefort-en-Terre, nous vous invitons à prendre contact avec le secrétariat paroissial.
          Le curé de la paroisse vous accueillera avec joie pour échanger sur votre démarche et vous
          accompagner dans la préparation de ce beau sacrement.
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
            N'hésitez pas à nous contacter : aucune question n'est superflue lorsqu'il s'agit de
            préparer la réception d'un sacrement.
          </p>
        </div>
      </section>
    </SacrementLayout>
  );
}
