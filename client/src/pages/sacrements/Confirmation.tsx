import { useEffect } from 'react';
import SacrementLayout from '@/components/SacrementLayout';

export default function Confirmation() {
  useEffect(() => {
    document.title = 'La Confirmation | Sanctuaire Notre Dame de la Tronchaye';
  }, []);

  return (
    <SacrementLayout
      title="La Confirmation"
      subtitle="Recevoir le sceau de l'Esprit Saint et l'achèvement de la grâce baptismale"
      backgroundImage="/images/IMG_9297.webp"
    >
      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Le sacrement de la Confirmation
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le sacrement de la Confirmation constitue, avec le Baptême et l'Eucharistie, l'ensemble
          des « sacrements de l'initiation chrétienne ». La Confirmation est nécessaire à
          l'accomplissement de la grâce baptismale (cf. CEC n. 1285). Par le sacrement de la
          Confirmation, les baptisés sont plus parfaitement liés à l'Église, ils sont enrichis
          d'une force spéciale de l'Esprit Saint, et sont ainsi plus strictement tenus de répandre
          et de défendre la foi par la parole et par l'action, en vrais témoins du Christ.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Le jour de la Pentecôte, les Apôtres, remplis de l'Esprit Saint, commencèrent à
          proclamer{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « les merveilles de Dieu »
          </span>{' '}
          (Actes 2, 11). De même, par la Confirmation, le chrétien reçoit l'Esprit Saint qui le
          rend capable de témoigner avec audace de sa foi, de confesser le nom du Christ et de ne
          jamais rougir de la Croix.
        </p>
      </section>

      {/* Les sept dons du Saint-Esprit */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Les sept dons du Saint-Esprit
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          La tradition de l'Église, s'appuyant sur le prophète Isaïe (Is 11, 2), reconnaît sept
          dons de l'Esprit Saint conférés de manière spéciale lors de la Confirmation. Ces dons
          viennent parfaire les vertus de ceux qui les reçoivent et rendent les fidèles dociles
          à l'inspiration divine :
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">La Sagesse :</strong> elle fait goûter les choses
              de Dieu et ordonne toute chose à la lumière divine, donnant au chrétien de juger selon
              le coeur de Dieu.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">L'Intelligence :</strong> elle permet de pénétrer
              en profondeur les vérités de la foi et d'en saisir le sens intime, au-delà de la
              simple connaissance intellectuelle.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Le Conseil :</strong> il éclaire la conscience
              dans les choix concrets de la vie et aide à discerner la volonté de Dieu dans les
              situations particulières.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">La Force :</strong> elle donne le courage de
              persévérer dans le bien, d'affronter les épreuves et de résister aux tentations,
              même au prix de sacrifices.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">La Science :</strong> elle permet de voir les
              créatures et les événements à la lumière de Dieu, de discerner le vrai du faux et
              de reconnaître le chemin qui mène à Dieu.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">La Piété :</strong> elle inspire un amour filial
              envers Dieu et une attitude de respect, de tendresse et de confiance envers Lui
              comme Père, ainsi qu'une charité fraternelle envers tous les hommes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">La Crainte de Dieu :</strong> non pas une peur
              servile, mais un respect aimant envers la majesté de Dieu, qui détourne du péché et
              inspire le désir de ne jamais s'éloigner de Lui.
            </span>
          </li>
        </ul>
      </section>

      {/* Le rite de la Confirmation */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Le rite de la Confirmation
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          La Confirmation est ordinairement conférée par l'évêque, successeur des Apôtres, ce qui
          souligne le lien du confirmand avec l'Église apostolique et sa mission de témoin du
          Christ. Le rite essentiel de la Confirmation consiste en l'onction du saint-chrême sur
          le front du baptisé, accompagnée de l'imposition de la main et des paroles :{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « N., sois marqué de l'Esprit Saint, le don de Dieu. »
          </span>
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Le saint-chrême est une huile parfumée, consacrée par l'évêque lors de la messe
          chrismale du Jeudi Saint. L'onction avec le saint-chrême signifie que le confirmé reçoit
          le « sceau » de l'Esprit Saint, une marque spirituelle indélébile (le « caractère ») qui
          le configure plus profondément au Christ et lui confère la force de témoigner de la foi.
          C'est pourquoi la Confirmation, comme le Baptême, ne peut être reçue qu'une seule fois.
        </p>
      </section>

      {/* Préparation */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          La préparation à la Confirmation
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          La préparation à la Confirmation est un temps privilégié de formation et de croissance
          spirituelle. Elle comprend :
        </p>
        <ul className="space-y-3 text-muted-foreground mb-6">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">1.</span>
            <span>
              <strong className="text-foreground">Des rencontres catéchétiques :</strong> un parcours
              de formation à la foi, comprenant l'approfondissement du Credo, la connaissance des
              sacrements, la vie dans l'Esprit Saint et la doctrine sociale de l'Église.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">2.</span>
            <span>
              <strong className="text-foreground">Une retraite spirituelle :</strong> un temps de
              prière et de recueillement pour se préparer intérieurement à recevoir le don de
              l'Esprit Saint. Cette retraite a généralement lieu peu de temps avant la célébration.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">3.</span>
            <span>
              <strong className="text-foreground">Le sacrement de la Réconciliation :</strong> il
              est demandé de se confesser avant de recevoir la Confirmation, afin d'être en état
              de grâce pour accueillir pleinement le don de l'Esprit.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">4.</span>
            <span>
              <strong className="text-foreground">Un engagement concret :</strong> les confirmands
              sont encouragés à poser un geste de service ou de charité, manifestant ainsi que
              l'Esprit Saint les pousse au témoignage et à l'action.
            </span>
          </li>
        </ul>

        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
          Le parrain ou la marraine de Confirmation
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le confirmand choisit un parrain ou une marraine de Confirmation. Il est recommandé que
          ce soit le parrain ou la marraine de Baptême, afin de souligner l'unité entre les deux
          sacrements. Le parrain ou la marraine doit remplir les conditions suivantes :
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Être catholique, baptisé et confirmé</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Avoir au moins 16 ans</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Mener une vie conforme à la foi et en cohérence avec la fonction à assumer (cf. canon 893)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>Être un pratiquant régulier de la vie sacramentelle</span>
          </li>
        </ul>
      </section>

      {/* Âge et processus */}
      <section className="mb-10">
        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4">
          À quel âge reçoit-on la Confirmation ?
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          En France, la Confirmation est habituellement conférée aux jeunes entre 12 et 18 ans,
          selon les décisions de chaque diocèse. Dans le diocèse de Vannes, la Confirmation est
          généralement proposée aux adolescents dans le cadre de l'aumônerie ou du catéchisme
          paroissial, après plusieurs années de formation.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Les adultes qui n'ont pas encore reçu la Confirmation peuvent également s'y préparer.
          Un parcours adapté leur est proposé, comprenant des rencontres de formation et un
          accompagnement spirituel personnalisé. La Confirmation des adultes est souvent célébrée
          lors de la Vigile pascale ou en la solennité de la Pentecôte.
        </p>
      </section>

      {/* Informations pratiques */}
      <section className="bg-sanctuary-subtle rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          Informations pratiques
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          La Confirmation est conférée par l'évêque du diocèse de Vannes lors de célébrations
          fixées chaque année. La préparation est assurée par l'équipe catéchétique de la paroisse
          de Rochefort-en-Terre. Pour inscrire un jeune ou un adulte à la préparation à la
          Confirmation, veuillez contacter le secrétariat paroissial.
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
            La Confirmation est un don immense de l'Esprit Saint qui transforme la vie du chrétien.
            N'hésitez pas à vous renseigner, quel que soit votre âge : il n'est jamais trop tard
            pour recevoir ce sacrement.
          </p>
        </div>
      </section>
    </SacrementLayout>
  );
}
