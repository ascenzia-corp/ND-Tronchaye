import { useEffect } from 'react';
import SacrementLayout from '@/components/SacrementLayout';

export default function Confession() {
  useEffect(() => {
    document.title = 'La Confession | Sanctuaire Notre Dame de la Tronchaye';
  }, []);

  return (
    <SacrementLayout
      title="La Confession"
      subtitle="Recevoir la miséricorde de Dieu dans le sacrement de la Réconciliation"
      backgroundImage="/images/IMG_9298.webp"
    >
      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Le sacrement de la Pénitence et de la Réconciliation
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le sacrement de Pénitence et de Réconciliation, communément appelé « confession », est le
          sacrement par lequel le chrétien, après le Baptême, reçoit le pardon de Dieu pour les péchés
          qu'il a commis. C'est un don inestimable de la miséricorde divine, institué par le Christ
          lui-même lorsqu'il dit à ses Apôtres :{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « Recevez l'Esprit Saint. À qui vous remettrez ses péchés, ils seront remis ;
            à qui vous maintiendrez ses péchés, ils seront maintenus »
          </span>{' '}
          (Jean 20, 22-23).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Ce sacrement est un véritable acte de guérison spirituelle. Il restaure la grâce
          sanctifiante perdue par le péché mortel, fortifie l'âme affaiblie par les péchés véniels,
          et réconcilie le pécheur avec Dieu et avec l'Église. Le Catéchisme de l'Église catholique
          l'appelle « le sacrement de la conversion » car il constitue le chemin sacramentel du retour
          vers le Père (cf. CEC n. 1423-1424).
        </p>
      </section>

      {/* Pourquoi se confesser */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Pourquoi se confesser ?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Tout chrétien, même le plus fervent, demeure pécheur tout au long de sa vie terrestre.
          Saint Jean nous avertit :{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « Si nous disons que nous n'avons pas de péché, nous nous abusons nous-mêmes,
            et la vérité n'est pas en nous »
          </span>{' '}
          (1 Jn 1, 8). Le sacrement de la Réconciliation nous offre :
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Le pardon de Dieu :</strong> l'absolution efface les
              péchés confessés avec un coeur contrit et remet les peines éternelles dues au péché mortel.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">La réconciliation avec l'Église :</strong> le péché
              blesse la communion ecclésiale. La confession restaure les liens fraternels rompus ou
              fragilisés par nos fautes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">La paix de la conscience :</strong> le pécheur
              pardonné retrouve la sérénité intérieure et la consolation spirituelle que procure
              la certitude d'être réconcilié avec Dieu.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Un accroissement des forces spirituelles :</strong> la
              grâce reçue dans ce sacrement aide le pénitent à lutter contre les tentations et à
              progresser dans la vie chrétienne.
            </span>
          </li>
        </ul>
      </section>

      {/* Examen de conscience */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          L'examen de conscience
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Avant de se confesser, il convient de faire un examen de conscience sérieux. Il s'agit de
          se mettre en présence de Dieu et de passer en revue, à la lumière de l'Évangile et des
          commandements, les péchés commis en pensées, en paroles, par actions et par omissions.
          On peut s'aider des repères suivants :
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Envers Dieu :</strong> Ai-je prié chaque jour ?
              Ai-je manqué la messe du dimanche sans raison grave ? Ai-je douté de la foi ou
              consulté des pratiques superstitieuses ? Ai-je pris le nom de Dieu en vain ?
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Envers le prochain :</strong> Ai-je manqué de
              charité, de patience, de pardon ? Ai-je menti, médit, calomnié ? Ai-je été injuste,
              envieux ou coléreux ? Ai-je porté atteinte à la réputation d'autrui ?
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Envers soi-même :</strong> Ai-je entretenu des
              pensées ou des regards impurs ? Ai-je cédé à la gourmandise, à la paresse, à
              l'orgueil ? Ai-je négligé mes devoirs d'état ?
            </span>
          </li>
        </ul>
      </section>

      {/* Déroulement */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          Comment se déroule la confession ?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le sacrement de la Réconciliation se célèbre ordinairement selon les étapes suivantes :
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">1.</span>
            <span>
              <strong className="text-foreground">L'accueil :</strong> le pénitent se présente au
              prêtre confesseur, fait le signe de la croix et dit : « Bénissez-moi, mon Père,
              parce que j'ai péché. » Il indique depuis quand remonte sa dernière confession.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">2.</span>
            <span>
              <strong className="text-foreground">La confession des péchés :</strong> le pénitent
              confesse ses péchés avec sincérité et humilité, en commençant par les plus graves.
              Tous les péchés mortels doivent être confessés en espèce et en nombre, autant que
              possible.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">3.</span>
            <span>
              <strong className="text-foreground">Les conseils du prêtre :</strong> le confesseur
              peut donner des conseils spirituels pour aider le pénitent dans son chemin de
              conversion.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">4.</span>
            <span>
              <strong className="text-foreground">L'acte de contrition :</strong> le pénitent
              exprime son repentir par une prière de contrition, manifestant sa douleur d'avoir
              offensé Dieu et sa résolution de ne plus pécher. Par exemple :{' '}
              <span className="text-sanctuary-accent italic">
                « Mon Dieu, j'ai un très grand regret de Vous avoir offensé, parce que Vous êtes
                infiniment bon, infiniment aimable, et que le péché Vous déplaît. Je prends la
                ferme résolution, avec le secours de Votre sainte grâce, de ne plus Vous offenser
                et de faire pénitence. »
              </span>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">5.</span>
            <span>
              <strong className="text-foreground">L'absolution :</strong> le prêtre prononce la
              formule d'absolution au nom du Christ et de l'Église :{' '}
              <span className="text-sanctuary-accent font-semibold italic">
                « Je vous absous de vos péchés, au nom du Père, et du Fils, et du Saint-Esprit. »
              </span>{' '}
              À ce moment, les péchés sont véritablement pardonnés.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">6.</span>
            <span>
              <strong className="text-foreground">La pénitence :</strong> le confesseur impose une
              pénitence (prière, oeuvre de charité, sacrifice) que le pénitent doit accomplir en
              réparation de ses péchés et pour sa guérison spirituelle.
            </span>
          </li>
        </ul>
      </section>

      {/* Encouragement */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
          N'ayez pas peur !
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Beaucoup hésitent à s'approcher du sacrement de la Réconciliation par crainte, par honte
          ou par manque d'habitude. Pourtant, le Christ nous assure de son amour miséricordieux :{' '}
          <span className="text-sanctuary-accent font-semibold italic">
            « Il y aura plus de joie dans le ciel pour un seul pécheur qui se convertit que pour
            quatre-vingt-dix-neuf justes qui n'ont pas besoin de conversion »
          </span>{' '}
          (Luc 15, 7).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Le prêtre confesseur est tenu par le secret absolu de la confession (le « sceau
          sacramentel »). Rien de ce qui est dit en confession ne peut jamais être révélé, sous
          aucun prétexte. Vous pouvez donc vous confier en toute confiance. Si vous ne vous êtes
          pas confessé depuis longtemps, le prêtre vous aidera avec patience et bienveillance.
          Le plus important est de venir avec un coeur sincère.
        </p>
      </section>

      {/* Horaires et informations pratiques */}
      <section className="bg-sanctuary-subtle rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
          Horaires et informations pratiques
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Le sacrement de la Réconciliation est proposé régulièrement au sanctuaire Notre Dame de la
          Tronchaye et dans la paroisse de Rochefort-en-Terre :
        </p>
        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Le jeudi :</strong> pendant le temps d'adoration
              eucharistique, un prêtre est disponible pour les confessions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Sur rendez-vous :</strong> il est toujours possible
              de prendre rendez-vous avec le prêtre pour se confesser à un autre moment, en contactant
              le secrétariat paroissial.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-sanctuary-accent font-bold mt-0.5">+</span>
            <span>
              <strong className="text-foreground">Temps forts liturgiques :</strong> des célébrations
              pénitentielles communautaires sont organisées durant l'Avent et le Carême, avec la
              présence de plusieurs confesseurs.
            </span>
          </li>
        </ul>
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
            N'hésitez pas à prendre contact pour fixer un rendez-vous. Le sacrement de la
            Réconciliation est toujours une grâce ; le Seigneur vous attend avec une infinie tendresse.
          </p>
        </div>
      </section>
    </SacrementLayout>
  );
}
