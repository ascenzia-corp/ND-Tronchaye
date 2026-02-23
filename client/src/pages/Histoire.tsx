import { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Histoire() {
  useEffect(() => {
    document.title = 'Histoire du Sanctuaire | Notre Dame de la Tronchaye';
  }, []);

  const legendRef = useScrollAnimation();
  const decouverteRef = useScrollAnimation();
  const romaneRef = useScrollAnimation();
  const collegialeRef = useScrollAnimation();
  const facadeRef = useScrollAnimation();
  const retableRef = useScrollAnimation();
  const revolutionRef = useScrollAnimation();
  const restaurationsRef = useScrollAnimation();
  const couronnementRef = useScrollAnimation();
  const classementRef = useScrollAnimation();
  const aujourdhuiRef = useScrollAnimation();

  return (
    <div className="pt-20 md:pt-24">
      {/* ───────────────── Page Header / Banner ───────────────── */}
      <section className="bg-sanctuary-DEFAULT text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="uppercase tracking-[0.25em] text-sanctuary-accent text-sm mb-4 font-sans">
            Monument Historique class&eacute; &mdash; 22 janvier 1931
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Histoire du Sanctuaire
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Depuis plus de neuf si&egrave;cles, le sanctuaire Notre-Dame de la Tronchaye veille sur
            Rochefort-en-Terre. Retracez ici les grandes &eacute;tapes de son histoire,
            de la l&eacute;gende fondatrice aux p&egrave;lerinages d'aujourd'hui.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-sanctuary-accent/50" />
            <span className="h-2 w-2 rounded-full bg-sanctuary-accent" />
            <span className="h-px w-12 bg-sanctuary-accent/50" />
          </div>
        </div>
      </section>

      {/* ───────────────── Timeline introduction ───────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <p className="text-muted-foreground leading-relaxed font-sans max-w-3xl mx-auto">
          L'histoire du sanctuaire Notre-Dame de la Tronchaye est indissociable de celle de
          Rochefort-en-Terre, petite cit&eacute; de caract&egrave;re perch&eacute;e sur son &eacute;peron rocheux
          au c&oelig;ur du Morbihan. Chaque pierre de l'&eacute;difice raconte un chapitre de cette
          aventure millénaire, où la foi, l'art et l'histoire se mêlent intimement.
          Les sections qui suivent retracent, dans l'ordre chronologique, les grands moments
          qui ont faonn&eacute; le sanctuaire tel que nous le connaissons aujourd'hui.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          Section 1 — La Légende (IXe – Xe siècle)
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 md:py-20" ref={legendRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sanctuary-accent pl-6 md:pl-10">
            <span className="text-sanctuary-accent font-sans text-sm font-semibold uppercase tracking-wider">
              IX<sup>e</sup> &ndash; X<sup>e</sup> si&egrave;cle
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-8">
              La L&eacute;gende
            </h2>

            <div className="md:flex md:gap-10 items-start">
              <div className="md:w-3/5 space-y-5">
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Au IX<sup>e</sup> si&egrave;cle, les c&ocirc;tes de Bretagne subissent les raids d&eacute;vastateurs
                  des Vikings. Les Normands, venus de Scandinavie, remontent les rivi&egrave;res et pillent
                  les &eacute;glises, les monast&egrave;res et les villages. La terreur s'installe dans les
                  campagnes bretonnes. Les fid&egrave;les, d&eacute;sesp&eacute;r&eacute;s de voir les envahisseurs
                  profaner les lieux sacr&eacute;s, prennent la d&eacute;cision courageuse de cacher leurs
                  objets de d&eacute;votion les plus pr&eacute;cieux.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Parmi ces tr&eacute;sors se trouve une statue v&eacute;n&eacute;r&eacute;e de la Vierge Marie
                  allaitant l'Enfant J&eacute;sus &mdash; une repr&eacute;sentation rare et &eacute;mouvante de la
                  <em> Virgo lactans</em>. Cette statue, sculpt&eacute;e dans le bois avec une douceur
                  remarquable, &eacute;tait au c&oelig;ur de la d&eacute;votion mariale locale. Les
                  chr&eacute;tiens de la r&eacute;gion de Rochefort d&eacute;cident de la dissimuler dans le
                  creux d'un vieux ch&ecirc;ne, au fond d'une for&ecirc;t dense, esp&eacute;rant ainsi la
                  soustraire &agrave; la fureur destructrice des envahisseurs.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Les ann&eacute;es passent, puis les d&eacute;cennies. Les invasions se succ&egrave;dent, la
                  population est d&eacute;cim&eacute;e ou dispers&eacute;e, et le souvenir de la cachette se
                  perd dans les brumes du temps. L'arbre continue de cro&icirc;tre, refermant
                  lentement son &eacute;corce autour de la pr&eacute;cieuse statue, comme pour la prot&eacute;ger
                  dans un &eacute;crin v&eacute;g&eacute;tal. La l&eacute;gende rapporte que la Vierge elle-m&ecirc;me
                  veilla sur sa propre image, maintenant le bois incorruptible &agrave; travers les
                  si&egrave;cles.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Cette tradition orale, transmise de g&eacute;n&eacute;ration en g&eacute;n&eacute;ration, constitue
                  le r&eacute;cit fondateur du sanctuaire. Elle t&eacute;moigne de la foi ind&eacute;fectible des
                  premiers chr&eacute;tiens bretons et de leur attachement &agrave; la Vierge Marie, m&ecirc;me
                  dans les heures les plus sombres de l'histoire.
                </p>
              </div>
              <div className="md:w-2/5 mt-8 md:mt-0">
                <figure>
                  <img
                    src="/images/IMG_9301.webp"
                    alt="La statue miraculeuse de Notre-Dame de la Tronchaye, Vierge allaitante"
                    className="rounded-lg shadow-lg w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="text-xs text-muted-foreground mt-3 italic text-center font-sans">
                    La statue de la Vierge allaitante, tr&eacute;sor du sanctuaire
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Section 2 — La Découverte
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-sanctuary-subtle py-14 md:py-20" ref={decouverteRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sanctuary-accent pl-6 md:pl-10">
            <span className="text-sanctuary-accent font-sans text-sm font-semibold uppercase tracking-wider">
              Date incertaine &mdash; apr&egrave;s les invasions
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-8">
              La D&eacute;couverte
            </h2>

            <div className="md:flex md:flex-row-reverse md:gap-10 items-start">
              <div className="md:w-3/5 space-y-5">
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Plusieurs si&egrave;cles apr&egrave;s que la statue e&ucirc;t &eacute;t&eacute; cach&eacute;e, une jeune
                  berg&egrave;re, gardant son troupeau dans les environs de Rochefort, remarque un
                  comportement &eacute;trange de ses b&ecirc;tes. Attir&eacute;es par un vieux ch&ecirc;ne creux, les
                  brebis refusent de s'en &eacute;loigner. Intrigu&eacute;e, la berg&egrave;re s'approche et
                  d&eacute;couvre, nich&eacute;e au c&oelig;ur du tronc fendu, une statue de bois intacte,
                  miraculeusement pr&eacute;serv&eacute;e de toute corruption.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  La nouvelle se r&eacute;pand comme une tra&icirc;n&eacute;e de poudre dans la contr&eacute;e.
                  Les habitants accourent et reconnaissent dans cette figure la Vierge &agrave;
                  l'Enfant, pr&eacute;serv&eacute;e par la gr&acirc;ce divine &agrave; travers les &acirc;ges. Le fait
                  que le bois n'ait subi aucune alt&eacute;ration &mdash; ni humidit&eacute;, ni insectes, ni
                  pourriture &mdash; malgr&eacute; les si&egrave;cles pass&eacute;s &agrave; l'int&eacute;rieur de l'arbre
                  est aussit&ocirc;t consid&eacute;r&eacute; comme un signe miraculeux.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  C'est de cet &eacute;v&eacute;nement que na&icirc;t le nom &laquo;&nbsp;Tronchaye&nbsp;&raquo;, d&eacute;riv&eacute;
                  du mot &laquo;&nbsp;tronc&nbsp;&raquo; &mdash; le tronc d'arbre qui avait abrit&eacute; et prot&eacute;g&eacute;
                  la statue pendant tant d'ann&eacute;es. Le vocable est rest&eacute; attach&eacute; au sanctuaire
                  depuis lors, rappelant &agrave; chaque p&egrave;lerin la providence qui entoure ce lieu.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  La statue retrouv&eacute;e est port&eacute;e en procession solennelle jusqu'au bourg de
                  Rochefort, o&ugrave; elle est plac&eacute;e dans un oratoire modeste. Tr&egrave;s vite, les
                  pèlerins affluent, attir&eacute;s par la r&eacute;putation de miracles et de gu&eacute;risons
                  attribu&eacute;s &agrave; l'intercession de Notre-Dame de la Tronchaye. Des ex-voto commencent
                  &agrave; orner les murs, t&eacute;moignages de gratitude des fid&egrave;les exauc&eacute;s. Le petit
                  oratoire devient vite insuffisant pour accueillir la d&eacute;votion populaire.
                </p>
              </div>
              <div className="md:w-2/5 mt-8 md:mt-0 flex items-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full">
                  <blockquote className="text-foreground font-serif text-lg italic leading-relaxed border-l-2 border-sanctuary-accent pl-4">
                    &laquo;&nbsp;Tronchaye&nbsp;&raquo; vient du vieux fran&ccedil;ais
                    <strong> tronc</strong> &mdash; le tronc d'arbre qui a
                    abrit&eacute; la statue miraculeuse pendant les si&egrave;cles
                    d'oubli.
                  </blockquote>
                  <p className="text-muted-foreground text-sm mt-4 font-sans">
                    &Eacute;tymologie du nom du sanctuaire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Section 3 — La Chapelle Romane (1125)
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 md:py-20" ref={romaneRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sanctuary-accent pl-6 md:pl-10">
            <span className="text-sanctuary-accent font-sans text-sm font-semibold uppercase tracking-wider">
              1125
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-8">
              La Chapelle Romane
            </h2>

            <div className="md:flex md:gap-10 items-start">
              <div className="md:w-3/5 space-y-5">
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Au d&eacute;but du XII<sup>e</sup> si&egrave;cle, l'afflux croissant de p&egrave;lerins rend
                  n&eacute;cessaire la construction d'un &eacute;difice plus vaste et plus digne. En 1125,
                  les seigneurs de Rochefort et le clerg&eacute; local entreprennent l'&eacute;rection d'une
                  chapelle de style roman, selon les canons architecturaux de l'&eacute;poque. L'&eacute;difice
                  est b&acirc;ti en solide granit local, mat&eacute;riau abondant dans la r&eacute;gion et
                  garantissant une p&eacute;rennit&eacute; s&eacute;culaire.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  L'&eacute;l&eacute;ment le plus remarquable de cette construction primitive est la
                  <strong> tour fortifi&eacute;e de la crois&eacute;e du transept</strong>. Massive et
                  trap&eacute;zo&iuml;dale, elle s'&eacute;l&egrave;ve au-dessus de la nef avec une autorit&eacute;
                  qui t&eacute;moigne autant de la ferveur religieuse que du contexte militaire de
                  l'&eacute;poque. En ces temps troubl&eacute;s, les &eacute;glises servaient souvent de refuge
                  en cas d'attaque, et la tour pouvait remplir un r&ocirc;le d&eacute;fensif. Son
                  architecture sobre, aux ouvertures &eacute;troites et aux murs &eacute;pais, est
                  caract&eacute;ristique de l'art roman breton.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Le plan originel de la chapelle romane &eacute;pouse la forme traditionnelle de la
                  croix latine, avec une nef principale flanqu&eacute;e de bas-c&ocirc;t&eacute;s &eacute;troits, un
                  transept et un ch&oelig;ur orient&eacute; vers l'est, en direction de J&eacute;rusalem, selon
                  la coutume chr&eacute;tienne. Les chapiteaux sculpt&eacute;s, bien que d'une facture
                  rustique, pr&eacute;sentent des motifs v&eacute;g&eacute;taux et des figures symboliques qui
                  &eacute;voquent le bestiaire m&eacute;di&eacute;val.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Cette chapelle romane constitue le noyau originel du sanctuaire que nous
                  connaissons aujourd'hui. Si les si&egrave;cles suivants lui apporteront de nombreuses
                  transformations &mdash; agrandissements, reprises gothiques, restaurations
                  modernes &mdash; la tour de la crois&eacute;e du transept demeure, neuf cents ans plus
                  tard, le t&eacute;moin le plus ancien et le plus &eacute;mouvant de l'histoire de
                  Notre-Dame de la Tronchaye.
                </p>
              </div>
              <div className="md:w-2/5 mt-8 md:mt-0">
                <figure>
                  <img
                    src="/images/IMG_9310.webp"
                    alt="La tour romane de la croisée du transept, vestige de la chapelle de 1125"
                    className="rounded-lg shadow-lg w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="text-xs text-muted-foreground mt-3 italic text-center font-sans">
                    La tour romane de la crois&eacute;e du transept (1125)
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Section 4 — L'Érection en Collégiale (fin XVe – 1527)
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-sanctuary-subtle py-14 md:py-20" ref={collegialeRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sanctuary-accent pl-6 md:pl-10">
            <span className="text-sanctuary-accent font-sans text-sm font-semibold uppercase tracking-wider">
              Fin du XV<sup>e</sup> si&egrave;cle &ndash; 1527
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-8">
              L'&Eacute;rection en Coll&eacute;giale
            </h2>

            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed font-sans">
                &Agrave; la fin du XV<sup>e</sup> si&egrave;cle, la seigneurie de Rochefort est entre les
                mains de la puissante famille de Rieux. <strong>Jean IV de Rieux-Rochefort</strong>,
                mar&eacute;chal de France et l'un des plus grands seigneurs de Bretagne, reconna&icirc;t
                l'importance spirituelle et politique du sanctuaire. Soucieux de rehausser le
                prestige de l'&eacute;glise et d'assurer un service liturgique permanent et solennel, il
                d&eacute;cide d'y &eacute;tablir un doyen et six chapelains.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Cette premi&egrave;re &eacute;l&eacute;vation au rang de coll&eacute;giale t&eacute;moigne de la volont&eacute;
                des seigneurs de Rieux de faire de Notre-Dame de la Tronchaye un centre
                religieux de premier plan. Le doyen, pr&eacute;sident du chapitre, a autorit&eacute; sur
                l'ensemble du clerg&eacute; attach&eacute; &agrave; l'&eacute;glise. Les chapelains, quant &agrave; eux,
                assurent la c&eacute;l&eacute;bration quotidienne des offices &mdash; messe matutinale, laudes,
                v&ecirc;pres et complies &mdash; selon le rite de l'&Eacute;glise romaine.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Quelques d&eacute;cennies plus tard, <strong>Claude I<sup>er</sup> de Rieux</strong>,
                h&eacute;ritier de cette illustre lign&eacute;e, d&eacute;cide de donner au chapitre une assise
                juridique et financi&egrave;re d&eacute;finitive. Le <strong>1<sup>er</sup> juin 1527</strong>,
                il fonde le chapitre &agrave; perp&eacute;tuit&eacute; par un acte solennel qui d&eacute;taille avec
                pr&eacute;cision la composition du clerg&eacute; coll&eacute;gial&nbsp;:
              </p>

              {/* Composition du chapitre */}
              <div className="bg-white rounded-lg shadow-md p-6 my-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Composition du chapitre (1527)
                </h3>
                <ul className="space-y-2 text-muted-foreground font-sans">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-sanctuary-accent shrink-0" />
                    <span>Un <strong>doyen</strong>, chef du chapitre, responsable de la discipline et de l'administration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-sanctuary-accent shrink-0" />
                    <span>Un <strong>chantre</strong>, charg&eacute; de diriger le chant liturgique et de veiller &agrave; la beaut&eacute; des c&eacute;l&eacute;brations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-sanctuary-accent shrink-0" />
                    <span><strong>Cinq chanoines</strong>, pr&eacute;bendes attach&eacute;s &agrave; la coll&eacute;giale, assurant les offices quotidiens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-sanctuary-accent shrink-0" />
                    <span><strong>Quatre chapelains</strong>, assistant les chanoines dans la c&eacute;l&eacute;bration des messes et des sacrements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-sanctuary-accent shrink-0" />
                    <span><strong>Deux choristes</strong>, contribuant &agrave; la solennit&eacute; du culte par le chant sacr&eacute;</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed font-sans">
                Cette fondation perp&eacute;tuelle assure au sanctuaire un clerg&eacute; nombreux et
                stable, financ&eacute; par des revenus fonciers et des dons. La coll&eacute;giale acquiert
                ainsi un rayonnement qui d&eacute;passe largement les limites de la seigneurie de
                Rochefort. Des p&egrave;lerins viennent de toute la Bretagne &mdash; et m&ecirc;me au-del&agrave;
                &mdash; pour v&eacute;n&eacute;rer la statue miraculeuse et participer aux grandes fêtes
                mariales. L'&eacute;rection en coll&eacute;giale marque l'apog&eacute;e du prestige m&eacute;di&eacute;val
                du sanctuaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Section 5 — La Façade Gothique Flamboyant (1533)
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 md:py-20" ref={facadeRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sanctuary-accent pl-6 md:pl-10">
            <span className="text-sanctuary-accent font-sans text-sm font-semibold uppercase tracking-wider">
              1533
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-8">
              La Fa&ccedil;ade Gothique Flamboyant
            </h2>

            <div className="md:flex md:flex-row-reverse md:gap-10 items-start">
              <div className="md:w-3/5 space-y-5">
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Six ans apr&egrave;s la fondation du chapitre perp&eacute;tuel, les ambitions
                  architecturales de la famille de Rieux se concr&eacute;tisent dans un projet
                  spectaculaire&nbsp;: la reconstruction compl&egrave;te de la fa&ccedil;ade nord de
                  l'&eacute;glise dans le style <strong>gothique flamboyant</strong>. Ce style, qui
                  tire son nom des formes sinueuses de ses remplages &eacute;voquant des flammes,
                  repr&eacute;sente le dernier &eacute;panouissement de l'architecture gothique avant
                  l'av&egrave;nement de la Renaissance.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  La nouvelle fa&ccedil;ade, achev&eacute;e en 1533, est un chef-d'&oelig;uvre de dentelle
                  de pierre. Les ma&icirc;tres tailleurs de pierre bretons y ont d&eacute;ploy&eacute; tout leur
                  savoir-faire&nbsp;: arcs en accolade finement cisel&eacute;s, gables ajour&eacute;s,
                  pinacles &eacute;lanc&eacute;s, fenestrages aux remplages complexes. Le portail
                  principal, encadr&eacute; de voussures richement sculpt&eacute;es, invite le fid&egrave;le
                  &agrave; p&eacute;n&eacute;trer dans l'espace sacr&eacute; avec un sentiment de grandeur et
                  d'&eacute;l&eacute;vation.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Cette fa&ccedil;ade constitue aujourd'hui l'un des plus beaux exemples de gothique
                  flamboyant breton. Elle t&eacute;moigne de la prosp&eacute;rit&eacute; de Rochefort-en-Terre
                  au d&eacute;but du XVI<sup>e</sup> si&egrave;cle et du m&eacute;c&eacute;nat g&eacute;n&eacute;reux des seigneurs
                  de Rieux. Le contraste entre la robustesse de la tour romane de 1125 et la
                  l&eacute;g&egrave;ret&eacute; de la fa&ccedil;ade gothique flamboyant de 1533 offre au visiteur un
                  saisissant raccourci de quatre si&egrave;cles d'&eacute;volution architecturale.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Les motifs d&eacute;coratifs de la fa&ccedil;ade int&egrave;grent des &eacute;l&eacute;ments v&eacute;g&eacute;taux
                  &mdash; feuilles de ch&ecirc;ne, chardons, vigne &mdash; ainsi que des figures
                  embl&eacute;matiques li&eacute;es &agrave; la d&eacute;votion mariale. On y reconna&icirc;t &eacute;galement
                  les armes de la famille de Rieux, t&eacute;moignage de la fiert&eacute; dynastique des
                  fondateurs. Malgr&eacute; les outrages du temps et les &eacute;preuves de l'histoire,
                  la fa&ccedil;ade a conserv&eacute; une grande partie de sa splendeur originelle.
                </p>
              </div>
              <div className="md:w-2/5 mt-8 md:mt-0">
                <figure>
                  <img
                    src="/images/IMG_9309.webp"
                    alt="La façade gothique flamboyant de la collégiale (1533)"
                    className="rounded-lg shadow-lg w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="text-xs text-muted-foreground mt-3 italic text-center font-sans">
                    La fa&ccedil;ade nord en gothique flamboyant (1533)
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Section 6 — Le Retable de Pierres Polychromes (1610)
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-sanctuary-subtle py-14 md:py-20" ref={retableRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sanctuary-accent pl-6 md:pl-10">
            <span className="text-sanctuary-accent font-sans text-sm font-semibold uppercase tracking-wider">
              1610
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-8">
              Le Retable de Pierres Polychromes
            </h2>

            <div className="md:flex md:gap-10 items-start">
              <div className="md:w-3/5 space-y-5">
                <p className="text-muted-foreground leading-relaxed font-sans">
                  En 1610, alors que la France sort &agrave; peine des guerres de Religion et que le
                  r&egrave;gne d'Henri IV a restaur&eacute; une paix fragile, <strong>Exup&egrave;re de
                  Larlan</strong>, seigneur influent de la r&eacute;gion, commande la r&eacute;alisation
                  d'un somptueux retable en pierre polychrome pour orner le sanctuaire. Ce geste
                  de pi&eacute;t&eacute; et de magnificence s'inscrit dans le vaste mouvement de la
                  Contre-R&eacute;forme catholique, qui encourage l'embellissement des &eacute;glises pour
                  toucher le c&oelig;ur des fid&egrave;les et affirmer la gloire de Dieu.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Le retable, sculpt&eacute; dans un calcaire tendre puis rehaut&eacute; de polychromie
                  vibrante &mdash; bleus profonds, rouges &eacute;clatants, ors scintillants &mdash;
                  repr&eacute;sente des sc&egrave;nes de la vie de la Vierge et du Christ. Les figures,
                  d'un r&eacute;alisme saisissant, t&eacute;moignent de l'habillet&eacute; des sculpteurs de
                  la fin de la Renaissance bretonne. Chaque d&eacute;tail &mdash; drap&eacute;s des v&ecirc;tements,
                  expressions des visages, mouvement des mains &mdash; est trait&eacute; avec un soin
                  m&eacute;ticuleux.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  L'&oelig;uvre pr&eacute;sente une structure architecturale typique des retables de cette
                  p&eacute;riode&nbsp;: un ensemble de niches et de registres superpos&eacute;s, s&eacute;par&eacute;s
                  par des colonnes torses, des frontons et des entablements. Les sc&egrave;nes sont
                  organis&eacute;es selon un programme th&eacute;ologique pr&eacute;cis, guidant le regard du
                  fid&egrave;le des myst&egrave;res de l'Incarnation &agrave; ceux de la R&eacute;demption.
                </p>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Aujourd'hui install&eacute; au fond du ch&oelig;ur &mdash; position qu'il occupe depuis
                  son d&eacute;placement en 1922 &mdash; le retable constitue le point focal de
                  l'int&eacute;rieur du sanctuaire. Il est consid&eacute;r&eacute; comme l'un des plus beaux
                  retables en pierre polychrome de Bretagne, et sa restauration r&eacute;cente a
                  permis de red&eacute;couvrir l'&eacute;clat de ses couleurs originelles, longtemps
                  masqu&eacute;es par les couches successives de poussi&egrave;re et de suie.
                </p>
              </div>
              <div className="md:w-2/5 mt-8 md:mt-0">
                <figure>
                  <img
                    src="/images/IMG_9302.webp"
                    alt="Le retable en pierre polychrome de 1610, au fond du chœur"
                    className="rounded-lg shadow-lg w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="text-xs text-muted-foreground mt-3 italic text-center font-sans">
                    Le retable en pierre polychrome (1610), chef-d'&oelig;uvre de la sculpture bretonne
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Section 7 — La Révolution (1789 – 1801)
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 md:py-20" ref={revolutionRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sanctuary-accent pl-6 md:pl-10">
            <span className="text-sanctuary-accent font-sans text-sm font-semibold uppercase tracking-wider">
              1789 &ndash; 1801
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-8">
              La R&eacute;volution
            </h2>

            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed font-sans">
                La R&eacute;volution fran&ccedil;aise de 1789 bouleverse profond&eacute;ment la vie religieuse
                du pays. En Bretagne, r&eacute;gion profond&eacute;ment catholique, les mesures
                r&eacute;volutionnaires sont re&ccedil;ues avec hostilit&eacute; par une grande partie de la
                population. La Constitution civile du clerg&eacute; (1790) contraint les pr&ecirc;tres
                &agrave; pr&ecirc;ter serment &agrave; la Nation, divisant le clerg&eacute; entre
                &laquo;&nbsp;jureurs&nbsp;&raquo; et &laquo;&nbsp;r&eacute;fractaires&nbsp;&raquo;. &Agrave;
                Rochefort-en-Terre, comme dans de nombreuses paroisses bretonnes, la majorit&eacute;
                des eccl&eacute;siastiques refusent de pr&ecirc;ter serment.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Le chapitre de la coll&eacute;giale, fond&eacute; avec tant de soin par les seigneurs de
                Rieux deux si&egrave;cles et demi plus t&ocirc;t, est <strong>supprim&eacute;</strong> par
                d&eacute;cret. Les chanoines sont dispers&eacute;s, les biens eccl&eacute;siastiques confisqu&eacute;s
                et vendus comme biens nationaux. L'&eacute;glise elle-m&ecirc;me est d&eacute;saffect&eacute;e et
                convertie en <strong>entrep&ocirc;t</strong> &mdash; humiliation supr&ecirc;me pour un lieu
                de culte v&eacute;n&eacute;r&eacute; depuis des si&egrave;cles.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Cependant, la foi populaire ne s'&eacute;teint pas. Dans le secret des campagnes
                bretonnes, des pr&ecirc;tres r&eacute;fractaires continuent de c&eacute;l&eacute;brer la messe
                clandestinement, dans des granges, des caves ou en plein air, au p&eacute;ril de leur
                vie. La d&eacute;votion &agrave; Notre-Dame de la Tronchaye survit &agrave; la Terreur, transmise
                de bouche &agrave; oreille par les fid&egrave;les qui n'ont jamais cess&eacute; de prier pour la
                protection de leur patronne.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Il faudra attendre le Concordat de 1801, sign&eacute; entre Napol&eacute;on Bonaparte et le
                pape Pie VII, pour que le culte soit officiellement r&eacute;tabli. L'&eacute;glise retrouve
                sa fonction sacr&eacute;e, mais elle porte les stigmates de la p&eacute;riode
                r&eacute;volutionnaire&nbsp;: mobilier dispers&eacute;, d&eacute;cors endommag&eacute;s, toiture
                fragilis&eacute;e. Un long travail de restauration s'annonce pour redonner au
                sanctuaire sa dignit&eacute; d'antan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Section 8 — Les Restaurations (1865 – 1922)
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-sanctuary-subtle py-14 md:py-20" ref={restaurationsRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sanctuary-accent pl-6 md:pl-10">
            <span className="text-sanctuary-accent font-sans text-sm font-semibold uppercase tracking-wider">
              1865 &ndash; 1922
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-8">
              Les Restaurations
            </h2>

            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed font-sans">
                Au cours de la seconde moiti&eacute; du XIX<sup>e</sup> si&egrave;cle et du d&eacute;but du
                XX<sup>e</sup>, le sanctuaire fait l'objet d'une s&eacute;rie de campagnes de
                restauration qui, &eacute;chelonn&eacute;es sur pr&egrave;s de soixante ans, permettent de
                sauver l'&eacute;difice de la ruine et de lui restituer progressivement sa
                splendeur. Chaque intervention est conduite avec le souci de pr&eacute;server
                l'authenticit&eacute; du monument tout en r&eacute;parant les outrages du temps et des
                hommes.
              </p>

              {/* Timeline des restaurations */}
              <div className="space-y-8 my-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-sanctuary-accent text-white text-sm font-bold font-sans shrink-0">
                      1
                    </span>
                    <span className="w-px flex-1 bg-sanctuary-accent/30 mt-2" />
                  </div>
                  <div className="pb-6">
                    <h3 className="font-serif font-semibold text-foreground text-lg">1865 &mdash; C&ocirc;t&eacute; Sud</h3>
                    <p className="text-muted-foreground leading-relaxed font-sans mt-2">
                      La premi&egrave;re campagne de restauration concerne le c&ocirc;t&eacute; sud de l'&eacute;difice,
                      le plus endommag&eacute; par les intemp&eacute;ries et le manque d'entretien depuis la
                      R&eacute;volution. Les travaux portent sur la consolidation des murs, la reprise
                      des contreforts et la r&eacute;fection de la couverture en ardoise. Les ma&ccedil;ons
                      utilisent le granit local, veillant &agrave; respecter l'appareillage d'origine.
                      Cette intervention permet de stabiliser la structure et d'&eacute;viter un
                      effondrement qui mena&ccedil;ait.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-sanctuary-accent text-white text-sm font-bold font-sans shrink-0">
                      2
                    </span>
                    <span className="w-px flex-1 bg-sanctuary-accent/30 mt-2" />
                  </div>
                  <div className="pb-6">
                    <h3 className="font-serif font-semibold text-foreground text-lg">1887 &mdash; Fa&ccedil;ade Nord</h3>
                    <p className="text-muted-foreground leading-relaxed font-sans mt-2">
                      Vingt-deux ans plus tard, c'est au tour de la c&eacute;l&egrave;bre fa&ccedil;ade nord
                      gothique flamboyant de b&eacute;n&eacute;ficier d'une restauration soigneuse. Les
                      d&eacute;licats remplages des fen&ecirc;tres, les pinacles et les gables, frag-
                      ilis&eacute;s par les si&egrave;cles, sont consolid&eacute;s ou remplac&eacute;s &agrave;
                      l'identique par des artisans sp&eacute;cialis&eacute;s. Le portail principal est
                      nettoy&eacute; et ses sculptures remises en valeur. Cette campagne redonne &agrave;
                      la fa&ccedil;ade toute sa lisibilit&eacute; et sa grandeur.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-sanctuary-accent text-white text-sm font-bold font-sans shrink-0">
                      3
                    </span>
                    <span className="w-px flex-1 bg-sanctuary-accent/30 mt-2" />
                  </div>
                  <div className="pb-6">
                    <h3 className="font-serif font-semibold text-foreground text-lg">1898 &mdash; Pignon ouest et tribune</h3>
                    <p className="text-muted-foreground leading-relaxed font-sans mt-2">
                      La troisi&egrave;me phase de restauration s'attaque au pignon ouest et &agrave; la
                      tribune int&eacute;rieure. Le pignon, qui pr&eacute;sentait des d&eacute;sordres structurels
                      importants, est repris en sous-&oelig;uvre. La tribune &mdash; balcon int&eacute;rieur
                      situ&eacute; au-dessus de l'entr&eacute;e occidentale &mdash; est renforc&eacute;e et remise
                      en &eacute;tat, permettant d'accueillir &agrave; nouveau les fid&egrave;les lors des grandes
                      c&eacute;r&eacute;monies. Cette restauration s'accompagne &eacute;galement de la pose de
                      nouveaux vitraux dans les baies occidentales.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-sanctuary-accent text-white text-sm font-bold font-sans shrink-0">
                      4
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground text-lg">1922 &mdash; D&eacute;placement du retable</h3>
                    <p className="text-muted-foreground leading-relaxed font-sans mt-2">
                      La derni&egrave;re grande intervention de cette p&eacute;riode concerne le retable de
                      1610. Jusqu'alors plac&eacute; dans une position lat&eacute;rale, il est
                      soigneusement <strong>d&eacute;plac&eacute; au fond du ch&oelig;ur</strong>, o&ugrave; il
                      occupe d&eacute;sormais la place d'honneur. Cette op&eacute;ration d&eacute;licate,
                      n&eacute;cessitant le d&eacute;montage et le remontage de centaines de pi&egrave;ces de
                      pierre sculpt&eacute;e, est r&eacute;alis&eacute;e avec une grande ma&icirc;trise technique.
                      Le retable retrouve ainsi une mise en sc&egrave;ne qui lui rend toute sa
                      grandeur et en fait le point focal de l'int&eacute;rieur du sanctuaire.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed font-sans">
                Au terme de ces d&eacute;cennies de travaux, le sanctuaire a retrouv&eacute; son
                int&eacute;grit&eacute; architecturale. L'ensemble harmonieux que forment la tour romane, la
                fa&ccedil;ade gothique, la nef et le retable polychrome fait de Notre-Dame de la
                Tronchaye un t&eacute;moignage exceptionnel de neuf si&egrave;cles d'architecture
                religieuse bretonne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Section 9 — Le Couronnement (1925)
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 md:py-20" ref={couronnementRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sanctuary-accent pl-6 md:pl-10">
            <span className="text-sanctuary-accent font-sans text-sm font-semibold uppercase tracking-wider">
              1925
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-8">
              Le Couronnement
            </h2>

            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed font-sans">
                L'ann&eacute;e 1925 marque un moment solennel et &eacute;mouvant dans l'histoire du
                sanctuaire&nbsp;: le <strong>couronnement canonique de la statue</strong> de
                Notre-Dame de la Tronchaye. Cette c&eacute;r&eacute;monie, approuv&eacute;e par Rome, reconna&icirc;t
                officiellement le caract&egrave;re miraculeux de la statue et la profondeur de la
                d&eacute;votion populaire qui l'entoure depuis des si&egrave;cles.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Le couronnement d'une statue mariale est un privil&egrave;ge rare, accord&eacute; par le
                Saint-Si&egrave;ge aux images de la Vierge qui ont suscit&eacute; une d&eacute;votion
                particuli&egrave;rement fervente et constante, et auxquelles sont attribu&eacute;s des
                miracles et des graces signal&eacute;es. La d&eacute;marche implique une enqu&ecirc;te
                approfondie sur l'histoire de la d&eacute;votion, les t&eacute;moignages de miracles et
                la continuit&eacute; du culte. Le fait que Rome ait accord&eacute; ce privil&egrave;ge &agrave;
                Notre-Dame de la Tronchaye t&eacute;moigne du rayonnement exceptionnel du
                sanctuaire.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                La c&eacute;r&eacute;monie elle-m&ecirc;me se d&eacute;roule dans une atmosph&egrave;re de grande ferveur.
                Des milliers de p&egrave;lerins affluent de toute la Bretagne et au-del&agrave;.
                L'&eacute;v&ecirc;que de Vannes pr&eacute;side la c&eacute;l&eacute;bration, entour&eacute; de nombreux pr&ecirc;tres
                et religieux. Une couronne d'or est solennellement pos&eacute;e sur la t&ecirc;te de la
                Vierge, consacrant officiellement la statue comme reine et patronne de la
                r&eacute;gion. Les cantiques bretons r&eacute;sonnent dans les rues de Rochefort-en-Terre,
                m&ecirc;l&eacute;s aux sons des binious et des bombardes.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Cet &eacute;v&eacute;nement renforce consid&eacute;rablement le statut du sanctuaire comme haut
                lieu de p&egrave;lerinage marial en Bretagne. Il contribue &agrave; inscrire Notre-Dame de
                la Tronchaye dans le r&eacute;seau des grands sanctuaires mariaux fran&ccedil;ais, aux
                c&ocirc;t&eacute;s de Lourdes, de La Salette et de Pontmain. Le couronnement de 1925
                demeure, un si&egrave;cle plus tard, l'un des souvenirs les plus chers &agrave; la
                communaut&eacute; paroissiale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Section 10 — Classement Monument Historique (1931)
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-sanctuary-subtle py-14 md:py-20" ref={classementRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sanctuary-accent pl-6 md:pl-10">
            <span className="text-sanctuary-accent font-sans text-sm font-semibold uppercase tracking-wider">
              22 janvier 1931
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-8">
              Classement Monument Historique
            </h2>

            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed font-sans">
                Le <strong>22 janvier 1931</strong>, par arr&ecirc;t&eacute; minist&eacute;riel, l'&eacute;glise
                Notre-Dame de la Tronchaye est officiellement <strong>class&eacute;e au titre des
                Monuments Historiques</strong>. Cette d&eacute;cision, qui couronne des ann&eacute;es de
                d&eacute;marches et de reconnaissance du patrimoine architectural et historique de
                l'&eacute;difice, place le sanctuaire sous la protection de l'&Eacute;tat et lui assure
                une p&eacute;rennit&eacute; institutionnelle.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Le classement reconna&icirc;t la valeur exceptionnelle de l'ensemble architectural&nbsp;:
                la tour romane du XII<sup>e</sup> si&egrave;cle, t&eacute;moin des origines de l'&eacute;difice&nbsp;;
                la fa&ccedil;ade gothique flamboyant du XVI<sup>e</sup> si&egrave;cle, joyau de l'art
                breton&nbsp;; le retable polychrome du XVII<sup>e</sup> si&egrave;cle, chef-d'&oelig;uvre de
                la sculpture religieuse. L'unit&eacute; de ces &eacute;l&eacute;ments, qui couvrent cinq si&egrave;cles
                d'histoire de l'art, conf&egrave;re au monument un int&eacute;r&ecirc;t majeur pour le patrimoine
                national.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Le statut de Monument Historique implique des obligations pr&eacute;cises en mati&egrave;re
                de conservation et de restauration. Tout travail sur l'&eacute;difice doit d&eacute;sormais
                &ecirc;tre approuv&eacute; par les architectes des B&acirc;timents de France et respecter les
                normes de pr&eacute;servation du patrimoine. En contrepartie, le sanctuaire peut
                b&eacute;n&eacute;ficier de subventions publiques pour financer ses restaurations.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Ce classement de 1931 rev&ecirc;t une signification particuli&egrave;re pour la
                communaut&eacute; locale. Il traduit la reconnaissance, par les autorit&eacute;s de la
                R&eacute;publique, de l'importance de ce patrimoine religieux et culturel. Plus de
                quatre-vingt-dix ans apr&egrave;s, le label &laquo;&nbsp;Monument Historique&nbsp;&raquo;
                continue de prot&eacute;ger le sanctuaire et de contribuer &agrave; son rayonnement
                touristique et culturel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          Section 11 — Aujourd'hui
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 md:py-20" ref={aujourdhuiRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-sanctuary-accent pl-6 md:pl-10">
            <span className="text-sanctuary-accent font-sans text-sm font-semibold uppercase tracking-wider">
              XXI<sup>e</sup> si&egrave;cle
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-8">
              Aujourd'hui
            </h2>

            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed font-sans">
                Aujourd'hui, le sanctuaire Notre-Dame de la Tronchaye demeure un lieu de
                p&egrave;lerinage vivant et un joyau du patrimoine breton. Situ&eacute; au c&oelig;ur de
                Rochefort-en-Terre &mdash; r&eacute;guli&egrave;rement &eacute;lu &laquo;&nbsp;village pr&eacute;f&eacute;r&eacute; des
                Fran&ccedil;ais&nbsp;&raquo; &mdash; le sanctuaire accueille chaque ann&eacute;e des dizaines de
                milliers de visiteurs, pèlerins et touristes confondus, venus d&eacute;couvrir ce
                t&eacute;moignage exceptionnel de neuf si&egrave;cles de foi et d'architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Sous la conduite pastorale de l'<strong>Abb&eacute; Patience-Aim&eacute; Bondeko</strong>,
                recteur de la paroisse, le sanctuaire continue de remplir sa mission
                spirituelle premi&egrave;re. Les c&eacute;l&eacute;brations liturgiques y sont assur&eacute;es
                r&eacute;guli&egrave;rement &mdash; messes dominicales, offices de semaine, c&eacute;l&eacute;bration
                des sacrements. L'Abb&eacute; Bondeko, avec le soutien d'une communaut&eacute; paroissiale
                engag&eacute;e, veille &agrave; ce que le sanctuaire reste un lieu d'accueil, de
                pri&egrave;re et de r&eacute;confort pour tous ceux qui poussent sa porte.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Les <strong>grands pardons bretons</strong>, tradition s&eacute;culaire propre &agrave; la
                Bretagne, continuent d'&ecirc;tre c&eacute;l&eacute;br&eacute;s avec ferveur au sanctuaire. Ces
                grandes f&ecirc;tes religieuses, h&eacute;riti&egrave;res des p&egrave;lerinages m&eacute;di&eacute;vaux,
                rassemblent les fid&egrave;les autour de la statue miraculeuse pour des journ&eacute;es de
                pri&egrave;re, de processions et de convivialit&eacute;. Le pardon de Notre-Dame de la
                Tronchaye est l'un des temps forts de l'ann&eacute;e liturgique locale.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Des <strong>visites guid&eacute;es</strong> sont propos&eacute;es tout au long de l'ann&eacute;e,
                permettant aux visiteurs de d&eacute;couvrir en d&eacute;tail l'histoire et l'architecture
                du sanctuaire. Les guides, souvent b&eacute;n&eacute;voles passionn&eacute;s, font revivre les
                grandes heures de l'&eacute;difice &mdash; de la l&eacute;gende de la statue cach&eacute;e dans le
                tronc d'arbre aux splendeurs du retable polychrome, en passant par l'&eacute;poque
                tourment&eacute;e de la R&eacute;volution.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                L'Association des Amis du Sanctuaire joue un r&ocirc;le essentiel dans la
                pr&eacute;servation et le rayonnement du lieu. Gr&acirc;ce au d&eacute;vouement de ses
                b&eacute;n&eacute;voles, elle organise des &eacute;v&eacute;nements culturels &mdash; concerts de musique
                sacr&eacute;e, conf&eacute;rences, expositions &mdash; et contribue au financement des
                travaux d'entretien n&eacute;cessaires &agrave; la conservation de ce monument class&eacute;.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Neuf si&egrave;cles apr&egrave;s la construction de sa premi&egrave;re chapelle romane, le
                sanctuaire Notre-Dame de la Tronchaye reste un lieu o&ugrave; l'histoire, l'art et la
                foi se rencontrent et se nourrissent mutuellement. Qu'ils soient croyants ou
                simples amoureux du patrimoine, tous les visiteurs sont invit&eacute;s &agrave; venir
                d&eacute;couvrir ce tr&eacute;sor de la Bretagne int&eacute;rieure, t&eacute;moin vivant de la
                permanence de la d&eacute;votion mariale &agrave; travers les &acirc;ges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── Footer call-to-action ───────────────── */}
      <section className="bg-sanctuary-DEFAULT text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Venez d&eacute;couvrir le sanctuaire
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans mb-8">
            Le sanctuaire Notre-Dame de la Tronchaye est ouvert toute l'ann&eacute;e. Visites
            guid&eacute;es sur demande. Renseignements aupr&egrave;s de la paroisse ou de l'Association
            des Amis du Sanctuaire.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-sanctuary-accent/50" />
            <span className="h-2 w-2 rounded-full bg-sanctuary-accent" />
            <span className="h-px w-12 bg-sanctuary-accent/50" />
          </div>
          <p className="mt-6 text-sanctuary-accent font-sans text-sm uppercase tracking-wider">
            Place de l'&Eacute;glise, 56220 Rochefort-en-Terre
          </p>
        </div>
      </section>
    </div>
  );
}
