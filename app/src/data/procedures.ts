export interface Procedure {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  subtitle: string;
  introTitle: string;
  introTitleItalic: string;
  introParagraphs: string[];
  imageLabel: string;
  steps: { title: string; description: string }[];
  candidatsTitleItalic: string;
  candidatsQuestion: string;
  candidats: string[];
  ctaTitleItalic: string;
  ctaQuestion: string;
  related: { slug: string; title: string; imageLabel: string }[];
}

export const procedures: Procedure[] = [
  {
    slug: "rhinoplastie",
    title: "Rhinoplastie",
    category: "visage",
    categoryLabel: "Chirurgie du Visage",
    subtitle: "Resculpter le nez pour harmoniser le visage. Une intervention délicate où chaque millimètre compte.",
    introTitle: "Qu'est-ce que",
    introTitleItalic: "la rhinoplastie",
    introParagraphs: [
      "La rhinoplastie est une intervention chirurgicale qui vise à modifier la forme du nez, soit pour des raisons esthétiques, soit pour corriger des problèmes fonctionnels comme des difficultés respiratoires.",
      "Le Dr. Aib Amar pratique une rhinoplastie sur mesure, adaptée à chaque morphologie faciale. L'objectif n'est pas de créer un nez standard, mais d'obtenir un résultat harmonieux qui respecte l'identité et l'équilibre du visage.",
      "L'intervention peut porter sur le dos du nez, la pointe, les narines, ou l'ensemble de ces éléments. Chaque cas est étudié en détail lors de la consultation préalable."
    ],
    imageLabel: "Rhinoplastie — Illustration 4:3",
    steps: [
      { title: "Consultation préalable", description: "Lors de la première rencontre, le Dr. Aib Amar écoute vos souhaits et analyse votre morphologie nasale. Une simulation informatique peut être réalisée pour visualiser le résultat envisagé. Vous repartez avec un devis détaillé et un protocole chirurgical personnalisé." },
      { title: "L'intervention", description: "La rhinoplastie se déroule sous anesthésie générale et dure en moyenne une à deux heures. Le Dr. Aib Amar utilise des techniques mini-invasives quand c'est possible, avec des incisions dissimulées à l'intérieur des narines (voie close) pour ne laisser aucune cicatrice visible." },
      { title: "Récupération", description: "Une nuit d'hospitalisation est recommandée. L'œdème et les ecchymoses disparaissent en une à deux semaines. Un plâtre est maintenu pendant environ dix jours. Le résultat définitif se révèle progressivement sur plusieurs mois." },
      { title: "Suivi post-opératoire", description: "Le Dr. Aib Amar assure un suivi régulier dans les semaines et les mois suivant l'intervention. Des visites de contrôle permettent de vérifier la bonne évolution de la cicatrisation et de répondre à toutes vos questions." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'une rhinoplastie ?",
    candidats: [
      "Personnes en bonne santé générale, sans pathologie respiratoire active",
      "Patients ayant terminé leur croissance osseuse (généralement après 16 ans)",
      "Personnes avec des attentes réalistes sur les résultats possibles",
      "Patients souhaitant corriger une bosse, affiner une pointe, ou réduire des narines",
      "Personnes souffrant de déviation septale avec gêne respiratoire"
    ],
    ctaTitleItalic: "rhinoplastie",
    ctaQuestion: "Vous envisagez une",
    related: [
      { slug: "lifting", title: "Lifting", imageLabel: "Lifting — 16:9" },
      { slug: "blepharoplastie", title: "Blépharoplastie", imageLabel: "Blépharoplastie — 16:9" },
      { slug: "oreille-decollees", title: "Oreilles Décollées", imageLabel: "Oreilles Décollées — 16:9" }
    ]
  },
  {
    slug: "prothese-mammaire",
    title: "Prothèse Mammaire",
    category: "corps",
    categoryLabel: "Chirurgie du Corps",
    subtitle: "Augmenter et harmoniser le volume de la poitrine avec des prothèses sur mesure adaptées à votre morphologie.",
    introTitle: "Qu'est-ce que",
    introTitleItalic: "la prothèse mammaire",
    introParagraphs: [
      "L'augmentation mammaire est une intervention qui permet d'augmenter le volume des seins par l'insertion de prothèses en silicone ou de résultat naturel. C'est l'une des interventions les plus pratiquées en chirurgie esthétique.",
      "Le Dr. Aib Amar propose une gamme complète de prothèses de différentes formes (ronde ou anatomique) et tailles, choisies en fonction de votre morphologie et de vos souhaits. La décision est toujours prise ensemble lors de la consultation."
    ],
    imageLabel: "Prothèse Mammaire — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Discussion approfondie de vos attentes, mesures précises, choix des prothèses (forme, volume, projection). Le Dr. Aib Amar vous présente les différentes options et vous aide à faire le meilleur choix pour votre morphologie." },
      { title: "L'intervention", description: "Durée : 1h à 1h30 sous anesthésie générale. Les prothèses sont insérées par une incision dissimulée dans le pli sous-mammaire, au niveau de l'aréole, ou en aisselle. Le choix de la voie d'abord est discuté en amont." },
      { title: "Résultat", description: "Le résultat est visible immédiatement, mais le volume final se stabilise après quelques semaines une fois l'œdème disparu. Les prothèses modernes garantissent un toucher naturel et durable." }
    ],
    candidatsTitleItalic: "candidat",
    candidatsQuestion: "Êtes-vous",
    candidats: [
      "Femmes en bonne santé générale",
      "Patientes souhaitant augmenter le volume de leur poitrine",
      "Femmes ayant perdu du volume après une grossesse ou un amaigrissement",
      "Patientes avec des attentes réalistes sur le résultat"
    ],
    ctaTitleItalic: "prothèse mammaire",
    ctaQuestion: "Vous envisagez une",
    related: [
      { slug: "reduction-mammaire", title: "Réduction Mammaire", imageLabel: "Réduction Mammaire — 16:9" },
      { slug: "liposuccion", title: "Liposuccion", imageLabel: "Liposuccion — 16:9" },
      { slug: "abdominoplastie", title: "Abdominoplastie", imageLabel: "Abdominoplastie — 16:9" }
    ]
  },
  {
    slug: "reduction-mammaire",
    title: "Réduction Mammaire",
    category: "corps",
    categoryLabel: "Chirurgie du Corps",
    subtitle: "Soulager les douleurs dorsales et retrouver une silhouette harmonieuse en réduisant le volume des seins.",
    introTitle: "La",
    introTitleItalic: "réduction mammaire",
    introParagraphs: [
      "La réduction mammaire est une intervention qui diminue le volume des seins excédentaires tout en conservant une forme harmonieuse et esthétique. Elle soulage les douleurs dorsales, cervicales et les irritations cutanées souvent associées à une hypertrophie mammaire.",
      "Le Dr. Aib Amar pratique cette intervention avec une approche personnalisée, en respectant vos souhaits concernant la taille finale et en préservant la sensibilité des mamelons."
    ],
    imageLabel: "Réduction Mammaire — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Examen clinique, discussion sur le volume souhaité, explication des techniques chirurgicales adaptées à votre cas." },
      { title: "L'intervention", description: "Durée : 2h à 3h sous anesthésie générale. Excès de glande, de graisse et de peau retirés. Repositionnement de l'aréole." },
      { title: "Récupération", description: "Hospitalisation de 24h. Repos de quelques jours. Retour aux activités normales sous 2 à 3 semaines." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'une réduction mammaire ?",
    candidats: [
      "Femmes souffrant de douleurs dorsales dues au poids des seins",
      "Patientes avec des irritations cutanées sous les seins",
      "Femmes en bonne santé générale",
      "Patientes ayant terminé leur développement mammaire"
    ],
    ctaTitleItalic: "réduction mammaire",
    ctaQuestion: "Vous envisagez une",
    related: [
      { slug: "prothese-mammaire", title: "Prothèse Mammaire", imageLabel: "Prothèse Mammaire — 16:9" },
      { slug: "remonter-seins", title: "Remonter les Seins", imageLabel: "Remonter les Seins — 16:9" },
      { slug: "liposuccion", title: "Liposuccion", imageLabel: "Liposuccion — 16:9" }
    ]
  },
  {
    slug: "remonter-seins",
    title: "Remonter les Seins",
    category: "corps",
    categoryLabel: "Chirurgie du Corps",
    subtitle: "Redonner leur fermeté et leur position aux seins relâchés par le temps, les grossesses ou les variations de poids.",
    introTitle: "Le",
    introTitleItalic: "remontage des seins",
    introParagraphs: [
      "La ptose mammaire, c'est-à-dire l'affaissement des seins, est un phénomène naturel qui touche de nombreuses femmes après des grossesses, un allaitement ou un amaigrissement important. Le remontage des seins (mastopexie) permet de repositionner le sein et l'aréole plus haut sur la poitrine.",
      "Cette intervention redonne une forme juvénile à la poitrine sans nécessairement changer son volume. Elle peut être associée à une augmentation mammaire si un volume supplémentaire est souhaité."
    ],
    imageLabel: "Remonter les Seins — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Évaluation du degré de ptose, discussion sur le résultat souhaité et les options possibles, avec ou sans prothèse." },
      { title: "L'intervention", description: "Durée : 1h30 à 2h sous anesthésie générale. Excès de peau retiré, repositionnement du sein et de l'aréole." },
      { title: "Résultat", description: "Seins plus fermes, repositionnés naturellement. Les cicatrices s'estompent progressivement sur les mois suivants." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'un remontage des seins ?",
    candidats: [
      "Femmes avec des seins relâchés après une ou plusieurs grossesses",
      "Patientes ayant perdu beaucoup de poids",
      "Femmes souhaitant redonner de la fermeté à leur poitrine",
      "Patientes en bonne santé générale"
    ],
    ctaTitleItalic: "remontage des seins",
    ctaQuestion: "Vous envisagez un",
    related: [
      { slug: "prothese-mammaire", title: "Prothèse Mammaire", imageLabel: "Prothèse Mammaire — 16:9" },
      { slug: "reduction-mammaire", title: "Réduction Mammaire", imageLabel: "Réduction Mammaire — 16:9" },
      { slug: "abdominoplastie", title: "Abdominoplastie", imageLabel: "Abdominoplastie — 16:9" }
    ]
  },
  {
    slug: "liposuccion",
    title: "Liposuccion",
    category: "corps",
    categoryLabel: "Chirurgie du Corps",
    subtitle: "Éliminer les excès de graisse localisés pour affiner et réharmoniser la silhouette.",
    introTitle: "La",
    introTitleItalic: "liposuccion",
    introParagraphs: [
      "La liposuccion est une intervention chirurgicale qui permet d'éliminer les amas graisseux localisés résistants au régime et au sport. Elle sculpte la silhouette en retirant les cellules graisseuses de zones précises.",
      "Le Dr. Aib Amar pratique la liposuccion sur différentes zones : abdomen, hanches, culotte de cheval, cuisses, bras, genoux, et double menton. Chaque intervention est personnalisée en fonction des zones à traiter."
    ],
    imageLabel: "Liposuccion — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Identification des zones à traiter, évaluation de l'épaisseur de la graisse, définition des objectifs réalistes." },
      { title: "L'intervention", description: "Durée : 1h à 3h selon les zones sous anesthésie générale ou locale. Aspiration des cellules graisseuses par de fines canules." },
      { title: "Récupération", description: "Port d'une gaine compressive pendant 4 à 6 semaines. Œdème pendant quelques semaines. Résultat visible dès 1 mois, définitif à 6 mois." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'une liposuccion ?",
    candidats: [
      "Hommes et femmes avec des graisses localisées résistantes au régime",
      "Patients en bonne santé avec un poids stable",
      "Personnes avec des attentes réalistes (la liposuccion n'est pas un régime)",
      "Patients avec une bonne élasticité cutanée"
    ],
    ctaTitleItalic: "liposuccion",
    ctaQuestion: "Vous envisagez une",
    related: [
      { slug: "abdominoplastie", title: "Abdominoplastie", imageLabel: "Abdominoplastie — 16:9" },
      { slug: "silhouette-lift", title: "Silhouette Lift", imageLabel: "Silhouette Lift — 16:9" },
      { slug: "gynecomastie", title: "Gynécomastie", imageLabel: "Gynécomastie — 16:9" }
    ]
  },
  {
    slug: "gynecomastie",
    title: "Gynécomastie",
    category: "corps",
    categoryLabel: "Chirurgie du Corps",
    subtitle: "Traiter le développement excessif des seins chez l'homme pour retrouver un torse plat et masculin.",
    introTitle: "La",
    introTitleItalic: "gynécomastie",
    introParagraphs: [
      "La gynécomastie est le développement excessif des seins chez l'homme, dû à une accumulation de glande mammaire et/ou de graisse. Cette condition, très fréquente, peut causer un complexe important et une gêne sociale.",
      "Le Dr. Aib Amar propose une correction adaptée à chaque cas : liposuccion seule si l'excès est principalement graisseux, ou excision glandulaire si nécessaire. L'intervention est discrète et les cicatrices minimales."
    ],
    imageLabel: "Gynécomastie — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Examen clinique pour déterminer la nature de la gynécomastie (glandulaire, graisseuse ou mixte) et choisir la technique adaptée." },
      { title: "L'intervention", description: "Durée : 1h à 1h30 sous anesthésie générale. Liposuccion et/ou excision de la glande par une petite incision en bordure de l'aréole." },
      { title: "Récupération", description: "Port d'un vêtement compressif pendant 3 semaines. Retour au travail sous 3 à 5 jours. Résultat visible immédiatement, définitif à 3 mois." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'une correction de gynécomastie ?",
    candidats: [
      "Hommes avec un développement excessif des seins",
      "Patients en bonne santé générale",
      "Hommes ayant terminé leur développement pubertaire",
      "Patients avec des attentes réalistes"
    ],
    ctaTitleItalic: "gynécomastie",
    ctaQuestion: "Vous souffrez de",
    related: [
      { slug: "liposuccion", title: "Liposuccion", imageLabel: "Liposuccion — 16:9" },
      { slug: "abdominoplastie", title: "Abdominoplastie", imageLabel: "Abdominoplastie — 16:9" },
      { slug: "silhouette-lift", title: "Silhouette Lift", imageLabel: "Silhouette Lift — 16:9" }
    ]
  },
  {
    slug: "abdominoplastie",
    title: "Abdominoplastie",
    category: "corps",
    categoryLabel: "Chirurgie du Corps",
    subtitle: "Retrouver un ventre plat et ferme en éliminant l'excès de peau et de graisse abdominale.",
    introTitle: "L'",
    introTitleItalic: "abdominoplastie",
    introParagraphs: [
      "L'abdominoplastie, ou tummy tuck, est une intervention qui consiste à retirer l'excès de peau et de graisse de l'abdomen tout en réparant les muscles abdominaux distendus. Elle redonne un ventre plat et tonique.",
      "Cette intervention est particulièrement indiquée après des grossesses multiples ou un amaigrissement massif, lorsque la peau a perdu son élasticité et ne rétrécit plus naturellement."
    ],
    imageLabel: "Abdominoplastie — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Évaluation de l'excès de peau et de graisse, test de l'élasticité cutanée, définition de la technique chirurgicale adaptée." },
      { title: "L'intervention", description: "Durée : 2h à 3h sous anesthésie générale. Incision basse au niveau du pubis, retrait de l'excès de peau, resserrage des muscles abdominaux, repositionnement du nombril." },
      { title: "Récupération", description: "Hospitalisation de 1 à 2 nuits. Repos de 2 semaines. Port d'une gaine pendant 6 semaines. Résultat définitif à 3 mois." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'une abdominoplastie ?",
    candidats: [
      "Hommes et femmes avec un excès de peau abdominale",
      "Femmes après une ou plusieurs grossesses",
      "Patients ayant perdu beaucoup de poids",
      "Personnes en bonne santé générale"
    ],
    ctaTitleItalic: "abdominoplastie",
    ctaQuestion: "Vous envisagez une",
    related: [
      { slug: "liposuccion", title: "Liposuccion", imageLabel: "Liposuccion — 16:9" },
      { slug: "silhouette-lift", title: "Silhouette Lift", imageLabel: "Silhouette Lift — 16:9" },
      { slug: "reconstruction-plastique", title: "Reconstruction Plastique", imageLabel: "Reconstruction Plastique — 16:9" }
    ]
  },
  {
    slug: "silhouette-lift",
    title: "Silhouette Lift",
    category: "corps",
    categoryLabel: "Chirurgie du Corps",
    subtitle: "Un lifting sans chirurgie utilisant des fils résorbables pour redynamiser les contours du visage.",
    introTitle: "Le",
    introTitleItalic: "Silhouette Lift",
    introParagraphs: [
      "Le Silhouette Lift est une technique de lifting mini-invasive qui utilise des fils spéciaux dotés de cônes bi-directionnels pour redresser les tissus relâchés du visage et du cou. C'est une alternative à la chirurgie traditionnelle pour les patients présentant un relâchement modéré.",
      "Cette technique offre un résultat naturel, immédiat et progressif, avec peu de temps d'arrêt et des suites très légères."
    ],
    imageLabel: "Silhouette Lift — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Évaluation du relâchement cutané et de l'épaisseur de la peau pour déterminer si le Silhouette Lift est adapté à votre cas." },
      { title: "L'intervention", description: "Durée : 30 à 45 min sous anesthésie locale. Insertion des fils par de petites incisions dissimulées dans les cheveux et devant les oreilles." },
      { title: "Récupération", description: "Retour immédiat aux activités. Légères tensions pendant quelques jours. Résultat visible immédiatement, s'améliore sur 3 mois." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'un Silhouette Lift ?",
    candidats: [
      "Hommes et femmes avec un relâchement cutané modéré",
      "Patients souhaitant un rajeunissement sans chirurgie",
      "Personnes entre 35 et 50 ans en bonne santé",
      "Patients ne souhaitant pas d'hospitalisation"
    ],
    ctaTitleItalic: "Silhouette Lift",
    ctaQuestion: "Vous envisagez un",
    related: [
      { slug: "lifting", title: "Lifting", imageLabel: "Lifting — 16:9" },
      { slug: "lifting-cervico-facial", title: "Lifting Cervico-Facial", imageLabel: "Lifting Cervico-Facial — 16:9" },
      { slug: "botox", title: "Botox", imageLabel: "Botox — 16:9" }
    ]
  },
  {
    slug: "reconstruction-plastique",
    title: "Reconstruction Plastique",
    category: "corps",
    categoryLabel: "Chirurgie du Corps",
    subtitle: "Restaurer l'apparence et la fonction après un traumatisme, une maladie ou une anomalie congénitale.",
    introTitle: "La",
    introTitleItalic: "reconstruction plastique",
    introParagraphs: [
      "La chirurgie reconstructrice vise à restaurer l'apparence et la fonction de parties du corps affectées par un traumatisme, une maladie, une anomalie congénitale ou un cancer. Le Dr. Aib Amar pratique la reconstruction mammaire après cancer, la réparation de cicatrices et la correction de malformations.",
      "Chaque reconstruction est unique et nécessite une expertise chirurgicale approfondie. Le Dr. Aib Amar met son expérience parisienne au service de ces interventions complexes."
    ],
    imageLabel: "Reconstruction Plastique — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Examen approfondi, discussion des objectifs, élaboration d'un plan chirurgical personnalisé en plusieurs étapes si nécessaire." },
      { title: "L'intervention", description: "La technique varie selon le cas : lambeaux, greffes, expandeurs tissulaires. Plusieurs interventions peuvent être nécessaires." },
      { title: "Suivi", description: "Suivi régulier et prolongé. Chaque étape est planifiée pour obtenir le meilleur résultat fonctionnel et esthétique." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'une reconstruction ?",
    candidats: [
      "Patientes après une mastectomie pour cancer du sein",
      "Personnes avec des cicatrices traumatiques importantes",
      "Patients avec des malformations congénitales",
      "Personnes référées par leur médecin traitant"
    ],
    ctaTitleItalic: "reconstruction",
    ctaQuestion: "Vous envisagez une",
    related: [
      { slug: "prothese-mammaire", title: "Prothèse Mammaire", imageLabel: "Prothèse Mammaire — 16:9" },
      { slug: "abdominoplastie", title: "Abdominoplastie", imageLabel: "Abdominoplastie — 16:9" },
      { slug: "rhinoplastie", title: "Rhinoplastie", imageLabel: "Rhinoplastie — 16:9" }
    ]
  },
  {
    slug: "lifting",
    title: "Lifting",
    category: "visage",
    categoryLabel: "Chirurgie du Visage",
    subtitle: "Rajeunir l'apparence du visage en corrigeant les signes du vieillissement cutané avec un résultat naturel.",
    introTitle: "Le",
    introTitleItalic: "lifting",
    introParagraphs: [
      "Le lifting facial est une intervention chirurgicale qui corrige les signes du vieillissement du visage : relâchement de la peau, perte du contour du visage, rides profondes. Le Dr. Aib Amar pratique un lifting naturel qui respecte l'expression et l'identité du patient.",
      "L'intervention traite les joues, le sillon nasogénien, le contour de la mâchoire et le cou. Le résultat est un visage frais et reposé, sans effet 'tiré'."
    ],
    imageLabel: "Lifting — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Analyse du vieillissement facial, évaluation de l'élasticité cutanée, planification de l'intervention personnalisée." },
      { title: "L'intervention", description: "Durée : 2h à 3h sous anesthésie générale. Incisions dissimulées dans les cheveux et devant les oreilles. Remise en tension des tissus profonds." },
      { title: "Récupération", description: "Hospitalisation de 24h. Œdème et ecchymoses pendant 10 à 15 jours. Résultat visible dès 3 semaines, optimal à 3 mois." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'un lifting ?",
    candidats: [
      "Hommes et femmes présentant un relâchement cutané facial",
      "Patients entre 45 et 70 ans en bonne santé",
      "Personnes avec des attentes réalistes",
      "Non-fumeurs ou prêts à arrêter avant l'intervention"
    ],
    ctaTitleItalic: "lifting",
    ctaQuestion: "Vous envisagez un",
    related: [
      { slug: "rhinoplastie", title: "Rhinoplastie", imageLabel: "Rhinoplastie — 16:9" },
      { slug: "blepharoplastie", title: "Blépharoplastie", imageLabel: "Blépharoplastie — 16:9" },
      { slug: "lifting-cervico-facial", title: "Lifting Cervico-Facial", imageLabel: "Lifting Cervico-Facial — 16:9" }
    ]
  },
  {
    slug: "lifting-cervico-facial",
    title: "Lifting Cervico-Facial",
    category: "visage",
    categoryLabel: "Chirurgie du Visage",
    subtitle: "Rajeunir l'ensemble du visage et du cou pour un résultat global et harmonieux.",
    introTitle: "Le",
    introTitleItalic: "lifting cervico-facial",
    introParagraphs: [
      "Le lifting cervico-facial est l'intervention la plus complète du rajeunissement facial. Elle traite simultanément le visage et le cou, corrigeant les bajoues, le relâchement du cou, les plis nasogéniens et les bords de la mâchoire.",
      "Cette intervention offre un résultat spectaculaire mais toujours naturel. Le Dr. Aib Amar utilise des techniques modernes qui remettent en tension les tissus profonds pour un résultat durable de 10 à 15 ans."
    ],
    imageLabel: "Lifting Cervico-Facial — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Évaluation complète du visage et du cou, simulation du résultat possible, discussion des différentes techniques adaptées." },
      { title: "L'intervention", description: "Durée : 3h à 4h sous anesthésie générale. Incisions dissimulées dans les cheveux et le contour des oreilles. Remise en tension des plans profonds du visage et du cou." },
      { title: "Récupération", description: "Hospitalisation de 1 à 2 nuits. Repos de 10 à 15 jours. Résultat optimal à 3 mois, durable 10 à 15 ans." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'un lifting cervico-facial ?",
    candidats: [
      "Patients avec un relâchement important du visage et du cou",
      "Personnes entre 50 et 70 ans en bonne santé",
      "Patients souhaitant un rajeunissement global et durable",
      "Non-fumeurs ou prêts à arrêter avant l'intervention"
    ],
    ctaTitleItalic: "lifting cervico-facial",
    ctaQuestion: "Vous envisagez un",
    related: [
      { slug: "lifting", title: "Lifting", imageLabel: "Lifting — 16:9" },
      { slug: "blepharoplastie", title: "Blépharoplastie", imageLabel: "Blépharoplastie — 16:9" },
      { slug: "rhinoplastie", title: "Rhinoplastie", imageLabel: "Rhinoplastie — 16:9" }
    ]
  },
  {
    slug: "blepharoplastie",
    title: "Blépharoplastie",
    category: "visage",
    categoryLabel: "Chirurgie du Visage",
    subtitle: "Rajeunir le regard en corrigeant les paupières tombantes et les poches sous les yeux.",
    introTitle: "La",
    introTitleItalic: "blépharoplastie",
    introParagraphs: [
      "La blépharoplastie est une intervention qui corrige les excès de peau et de graisse des paupières supérieures et inférieures. Elle redonne un regard frais, reposé et naturellement rajeuni.",
      "C'est une intervention délicate qui nécessite une grande précision. Le Dr. Aib Amar veille à conserver l'expression naturelle du regard tout en éliminant l'aspect fatigué."
    ],
    imageLabel: "Blépharoplastie — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Examen des paupières, test de la fonction des muscles, planification des corrections nécessaires." },
      { title: "L'intervention", description: "Durée : 1h à 2h sous anesthésie locale ou générale. Incisions dissimulées dans le pli de la paupière supérieure et juste sous les cils inférieurs." },
      { title: "Récupération", description: "Œdème et ecchymoses pendant 5 à 10 jours. Retour au travail sous une semaine. Résultat visible dès 2 semaines." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'une blépharoplastie ?",
    candidats: [
      "Hommes et femmes avec des excès de peau des paupières",
      "Patients avec des poches graisseuses sous les yeux",
      "Personnes en bonne santé oculaire",
      "Patients avec un aspect fatigué du regard"
    ],
    ctaTitleItalic: "blépharoplastie",
    ctaQuestion: "Vous envisagez une",
    related: [
      { slug: "rhinoplastie", title: "Rhinoplastie", imageLabel: "Rhinoplastie — 16:9" },
      { slug: "lifting", title: "Lifting", imageLabel: "Lifting — 16:9" },
      { slug: "botox", title: "Botox", imageLabel: "Botox — 16:9" }
    ]
  },
  {
    slug: "oreille-decollees",
    title: "Oreilles Décollées",
    category: "visage",
    categoryLabel: "Chirurgie du Visage",
    subtitle: "Corriger l'écartement excessif des oreilles pour un résultat naturel et discret.",
    introTitle: "Les",
    introTitleItalic: "oreilles décollées",
    introParagraphs: [
      "L'otoplastie corrige l'écartement excessif des oreilles par rapport au crâne, souvent appelé 'oreilles décollées'. Cette intervention est pratiquée chez l'enfant à partir de 7 ans, mais aussi chez l'adulte.",
      "Le Dr. Aib Amar remodèle le cartilage de l'oreille pour créer un pincement naturel. Les cicatrices sont dissimulées derrière l'oreille et invisibles."
    ],
    imageLabel: "Oreilles Décollées — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Mesure de l'angle d'écartement, planification du remodelage cartilagineux, discussion des résultats possibles." },
      { title: "L'intervention", description: "Durée : 1h sous anesthésie générale (enfant) ou locale (adulte). Incision derrière l'oreille, remodelage du cartilage, maintien par des points internes." },
      { title: "Récupération", description: "Port d'un bandage pendant 1 semaine. Résultat visible immédiatement, définitif à 1 mois." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'une otoplastie ?",
    candidats: [
      "Enfants à partir de 7 ans",
      "Adultes avec des oreilles décollées",
      "Patients en bonne santé générale",
      "Personnes gênées par l'apparence de leurs oreilles"
    ],
    ctaTitleItalic: "otoplastie",
    ctaQuestion: "Vous envisagez une",
    related: [
      { slug: "rhinoplastie", title: "Rhinoplastie", imageLabel: "Rhinoplastie — 16:9" },
      { slug: "lifting", title: "Lifting", imageLabel: "Lifting — 16:9" },
      { slug: "blepharoplastie", title: "Blépharoplastie", imageLabel: "Blépharoplastie — 16:9" }
    ]
  },
  {
    slug: "greffe-capilaire",
    title: "Greffe Capillaire",
    category: "esthetique",
    categoryLabel: "Médecine Esthétique",
    subtitle: "Redensifier la chevelure par transplantation de follicules pour un résultat naturel et permanent.",
    introTitle: "La",
    introTitleItalic: "greffe de cheveux",
    introParagraphs: [
      "La greffe capillaire est une technique qui consiste à prélever des follicules pileux d'une zone donneuse (généralement la nuque) pour les réimplanter dans les zones dégarnies. Le Dr. Aib Amar utilise la technique FUE (Follicular Unit Extraction) qui ne laisse pas de cicatrice linéaire.",
      "Le résultat est naturel et permanent. Les cheveux transplantés repoussent comme les autres et peuvent être coupés, lavés et coiffés normalement."
    ],
    imageLabel: "Greffe Capillaire — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Analyse du type de calvitie, évaluation de la zone donneuse, planification du nombre de greffons nécessaires, simulation du résultat." },
      { title: "L'intervention", description: "Durée : 4h à 8h sous anesthésie locale. Extraction unitaire des follicules FUE, réimplantation précise dans les zones à traiter." },
      { title: "Récupération", description: "Retour immédiat au domicile. Croutes pendant 10 jours. Chute temporaire des greffons sous 3 semaines. Repousse à 3 mois, résultat à 12 mois." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'une greffe capillaire ?",
    candidats: [
      "Hommes et femmes souffrant d'alopécie androgénétique",
      "Patients avec une zone donneuse suffisante",
      "Personnes en bonne santé générale",
      "Patients avec des attentes réalistes"
    ],
    ctaTitleItalic: "greffe de cheveux",
    ctaQuestion: "Vous envisagez une",
    related: [
      { slug: "botox", title: "Botox", imageLabel: "Botox — 16:9" },
      { slug: "acide-hyaluronique", title: "Acide Hyaluronique", imageLabel: "Acide Hyaluronique — 16:9" },
      { slug: "peeling", title: "Peeling", imageLabel: "Peeling — 16:9" }
    ]
  },
  {
    slug: "botox",
    title: "Botox",
    category: "esthetique",
    categoryLabel: "Médecine Esthétique",
    subtitle: "Atténuer les rides d'expression par relaxation musculaire ciblée pour un résultat naturel.",
    introTitle: "Le",
    introTitleItalic: "Botox",
    introParagraphs: [
      "La toxine botulique (Botox) est une substance qui relaxe temporairement les muscles responsables des rides d'expression. Elle est utilisée pour traiter les rides du front, entre les sourcils (lion) et les pattes d'oie.",
      "Le Dr. Aib Amar pratique des injections précises qui préservent l'expression naturelle du visage. Le résultat est subtil : un visage reposé et lisse, pas figé."
    ],
    imageLabel: "Botox — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Analyse des rides d'expression, évaluation de la force musculaire, planification des points d'injection." },
      { title: "Les injections", description: "Durée : 15 à 20 min. Injections de petite quantité de toxine botulique aux points stratégiques. Aucune anesthésie nécessaire." },
      { title: "Résultat", description: "Effet visible sous 3 à 5 jours, optimal à 2 semaines. Durée : 4 à 6 mois. Entretien recommandé 2 à 3 fois par an." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "de injections de Botox ?",
    candidats: [
      "Hommes et femmes avec des rides d'expression marquées",
      "Patients entre 25 et 65 ans",
      "Personnes souhaitant prévenir l'apparition des rides",
      "Patients en bonne santé, non allergiques à la toxine botulique"
    ],
    ctaTitleItalic: "Botox",
    ctaQuestion: "Vous envisagez des injections de",
    related: [
      { slug: "acide-hyaluronique", title: "Acide Hyaluronique", imageLabel: "Acide Hyaluronique — 16:9" },
      { slug: "peeling", title: "Peeling", imageLabel: "Peeling — 16:9" },
      { slug: "cerne", title: "Cernes", imageLabel: "Cernes — 16:9" }
    ]
  },
  {
    slug: "acide-hyaluronique",
    title: "Acide Hyaluronique",
    category: "esthetique",
    categoryLabel: "Médecine Esthétique",
    subtitle: "Restaurer les volumes et hydrater la peau en profondeur avec des injections naturelles et biocompatibles.",
    introTitle: "L'",
    introTitleItalic: "acide hyaluronique",
    introParagraphs: [
      "L'acide hyaluronique est une molécule naturellement présente dans la peau qui diminue avec l'âge. Les injections d'acide hyaluronique permettent de combler les rides, restaurer les volumes du visage et hydrater la peau en profondeur.",
      "Le Dr. Aib Amar utilise des produits de haute qualité pour un résultat naturel et harmonieux. Les lèvres, les pommettes, les sillons nasogéniens et les cernes peuvent être traités."
    ],
    imageLabel: "Acide Hyaluronique — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Analyse des volumes du visage, identification des zones à traiter, choix du type d'acide hyaluronique adapté." },
      { title: "Les injections", description: "Durée : 20 à 40 min sous anesthésie locale (crème ou injection). Injections précises avec des canules ou des aiguilles fines." },
      { title: "Résultat", description: "Résultat immédiat. Légère œdème pendant 2 à 3 jours. Durée : 8 à 18 mois selon les zones et les produits utilisés." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'injections d'acide hyaluronique ?",
    candidats: [
      "Hommes et femmes souhaitant combler des rides ou restaurer des volumes",
      "Patients souhaitant augmenter le volume des lèvres",
      "Personnes avec des cernes creux",
      "Patients en bonne santé, non allergiques"
    ],
    ctaTitleItalic: "acide hyaluronique",
    ctaQuestion: "Vous envisagez des injections d'",
    related: [
      { slug: "botox", title: "Botox", imageLabel: "Botox — 16:9" },
      { slug: "peeling", title: "Peeling", imageLabel: "Peeling — 16:9" },
      { slug: "cerne", title: "Cernes", imageLabel: "Cernes — 16:9" }
    ]
  },
  {
    slug: "peeling",
    title: "Peeling",
    category: "esthetique",
    categoryLabel: "Médecine Esthétique",
    subtitle: "Rajeunir et embellir la peau par renouvellement cellulaire avec des acides adaptés à chaque type de peau.",
    introTitle: "Le",
    introTitleItalic: "peeling",
    introParagraphs: [
      "Le peeling est un soin qui consiste à appliquer un acide sur la peau pour éliminer les couches superficielles et stimuler le renouvellement cellulaire. Il traite les rides fines, les taches, les cicatrices d'acné et le teint terne.",
      "Le Dr. Aib Amar propose différents types de peelings selon vos besoins : superficiel, moyen ou profond. Chaque protocole est adapté à votre type de peau et à vos objectifs."
    ],
    imageLabel: "Peeling — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Analyse de la peau, identification des problèmes à traiter, choix du type de peeling adapté." },
      { title: "Le soin", description: "Durée : 20 à 45 min. Application de l'acide sur peau nettoyée. Sensation de légère chaleur ou picotement. Neutralisation et application d'un soin apaisant." },
      { title: "Résultat", description: "Desquamation pendant 3 à 7 jours selon la profondeur. Peau neuve, plus lumineuse et uniforme. Série de 3 à 6 séances recommandée pour un résultat optimal." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'un peeling ?",
    candidats: [
      "Hommes et femmes avec un teint terne ou irrégulier",
      "Patients avec des rides fines et superficielles",
      "Personnes avec des taches pigmentaires",
      "Patients avec des cicatrices d'acné légères"
    ],
    ctaTitleItalic: "peeling",
    ctaQuestion: "Vous envisagez un",
    related: [
      { slug: "botox", title: "Botox", imageLabel: "Botox — 16:9" },
      { slug: "acide-hyaluronique", title: "Acide Hyaluronique", imageLabel: "Acide Hyaluronique — 16:9" },
      { slug: "microdermabrasion", title: "Microdermabrasion", imageLabel: "Microdermabrasion — 16:9" }
    ]
  },
  {
    slug: "cerne",
    title: "Cernes",
    category: "esthetique",
    categoryLabel: "Médecine Esthétique",
    subtitle: "Traiter les cernes creux, foncés ou en relief pour un regard frais et reposé.",
    introTitle: "Le traitement des",
    introTitleItalic: "cernes",
    introParagraphs: [
      "Les cernes peuvent être dus à un creusement (perte de volume), à une hyperpigmentation (coloration brune) ou à des poches graisseuses. Le Dr. Aib Amar propose différents traitements selon la cause : comblement par acide hyaluronique pour les cernes creux, peeling ou laser pour la pigmentation, blépharoplastie pour les poches.",
      "Chaque traitement est personnalisé après un examen précis de la nature des cernes. Le résultat est un regard frais, reposé et naturellement rajeuni."
    ],
    imageLabel: "Cernes — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Examen précis des cernes pour déterminer leur nature (creux, pigmentés, poches) et choisir le traitement adapté." },
      { title: "Le traitement", description: "Injection d'acide hyaluronique (15 min), peeling (20 min), ou blépharoplastie (1h) selon le cas." },
      { title: "Résultat", description: "Résultat immédiat pour le comblement, progressif pour le peeling et la chirurgie. Durée : 12 à 18 mois pour le comblement, permanent pour la chirurgie." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'un traitement des cernes ?",
    candidats: [
      "Hommes et femmes avec des cernes creux ou foncés",
      "Patients avec des poches sous les yeux",
      "Personnes souhaitant rajeunir leur regard",
      "Patients en bonne santé"
    ],
    ctaTitleItalic: "traitement des cernes",
    ctaQuestion: "Vous envisagez un",
    related: [
      { slug: "acide-hyaluronique", title: "Acide Hyaluronique", imageLabel: "Acide Hyaluronique — 16:9" },
      { slug: "blepharoplastie", title: "Blépharoplastie", imageLabel: "Blépharoplastie — 16:9" },
      { slug: "botox", title: "Botox", imageLabel: "Botox — 16:9" }
    ]
  },
  {
    slug: "microdermabrasion",
    title: "Microdermabrasion",
    category: "esthetique",
    categoryLabel: "Médecine Esthétique",
    subtitle: "Exfolier en profondeur pour une peau lisse, lumineuse et régénérée sans temps d'arrêt.",
    introTitle: "La",
    introTitleItalic: "microdermabrasion",
    introParagraphs: [
      "La microdermabrasion est une technique d'exfoliation mécanique qui élimine les cellules mortes de la couche superficielle de la peau. Elle stimule le renouvellement cellulaire et la production de collagène pour une peau plus lisse et lumineuse.",
      "Ce soin indolore et sans temps d'arrêt améliore le grain de peau, atténue les rides fines, réduit les pores dilatés et traite les taches."
    ],
    imageLabel: "Microdermabrasion — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Analyse de la peau, définition des objectifs, planification du nombre de séances nécessaires." },
      { title: "Le soin", description: "Durée : 30 à 45 min. Passage d'une tête diamantée sur la peau, aspiration des cellules mortes, application d'un soin hydratant." },
      { title: "Résultat", description: "Peau immédiatement plus lumineuse. Série de 4 à 6 séances espacées de 2 semaines pour un résultat optimal." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "d'une microdermabrasion ?",
    candidats: [
      "Hommes et femmes avec un grain de peau irrégulier",
      "Patients avec des rides fines superficielles",
      "Personnes avec des pores dilatés",
      "Patients souhaitant un soin sans temps d'arrêt"
    ],
    ctaTitleItalic: "microdermabrasion",
    ctaQuestion: "Vous envisagez une",
    related: [
      { slug: "peeling", title: "Peeling", imageLabel: "Peeling — 16:9" },
      { slug: "botox", title: "Botox", imageLabel: "Botox — 16:9" },
      { slug: "acide-hyaluronique", title: "Acide Hyaluronique", imageLabel: "Acide Hyaluronique — 16:9" }
    ]
  },
  {
    slug: "apres-chirurgie",
    title: "Soins Après Chirurgie",
    category: "esthetique",
    categoryLabel: "Médecine Esthétique",
    subtitle: "Un accompagnement complet pour optimiser la cicatrisation et sublimer les résultats de votre intervention.",
    introTitle: "Les",
    introTitleItalic: "soins après chirurgie",
    introParagraphs: [
      "La période post-opératoire est essentielle pour garantir le succès de votre intervention. Le Dr. Aib Amar propose des soins esthétiques complémentaires pour accélérer la cicatrisation, réduire les œdèmes et optimiser le résultat final.",
      "Ces soins incluent des drainages lymphatiques, des soins LED, des peelings doux et des conseils personnalisés pour votre routine de soins à domicile."
    ],
    imageLabel: "Soins Après Chirurgie — Illustration 4:3",
    steps: [
      { title: "Première semaine", description: "Surveillance de la cicatrisation, soins des pansements, gestion de l'œdème. Consultation de contrôle systématique." },
      { title: "Premier mois", description: "Drainages lymphatiques pour réduire l'œdème, soins LED pour améliorer la cicatrisation, conseils pour les soins à domicile." },
      { title: "Suivi long terme", description: "Consultations régulières pour évaluer le résultat, soins esthétiques complémentaires si nécessaire, conseils pour maintenir le résultat." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "des soins post-opératoires ?",
    candidats: [
      "Tous les patients opérés par le Dr. Aib Amar",
      "Patients souhaitant optimiser leur cicatrisation",
      "Personnes souhaitant réduire les œdèmes post-opératoires",
      "Patients souhaitant sublimer leur résultat"
    ],
    ctaTitleItalic: "soins post-opératoires",
    ctaQuestion: "Vous souhaitez bénéficier de",
    related: [
      { slug: "peeling", title: "Peeling", imageLabel: "Peeling — 16:9" },
      { slug: "microdermabrasion", title: "Microdermabrasion", imageLabel: "Microdermabrasion — 16:9" },
      { slug: "botox", title: "Botox", imageLabel: "Botox — 16:9" }
    ]
  },
  {
    slug: "grossesse",
    title: "Soins Après Grossesse",
    category: "esthetique",
    categoryLabel: "Médecine Esthétique",
    subtitle: "Retrouver votre silhouette après la grossesse avec des soins et interventions adaptés au corps de la femme.",
    introTitle: "Les",
    introTitleItalic: "soins après grossesse",
    introParagraphs: [
      "La grossesse et l'allaitement modifient profondément le corps de la femme. Le Dr. Aib Amar propose un accompagnement complet pour retrouver sa silhouette : soins de la peau pour les vergetures, traitements pour le relâchement cutané, et chirurgie reconstructrice si nécessaire.",
      "Chaque parcours est personnalisé. Le timing des soins est important : certains peuvent débuter peu après l'accouchement, d'autres nécessitent d'attendre la fin de l'allaitement."
    ],
    imageLabel: "Soins Après Grossesse — Illustration 4:3",
    steps: [
      { title: "Consultation", description: "Évaluation des changements corporels, discussion des objectifs, planification du parcours de soins dans le temps." },
      { title: "Soins esthétiques", description: "Traitement des vergetures, soins pour le relâchement cutané, drainage lymphatique, conseils pour la récupération." },
      { title: "Interventions chirurgicales", description: "Si nécessaire et après la fin de l'allaitement : abdominoplastie, prothèse ou remontage mammaire, liposuccion." }
    ],
    candidatsTitleItalic: "bénéficier",
    candidatsQuestion: "des soins post-grossesse ?",
    candidats: [
      "Femmes après une ou plusieurs grossesses",
      "Patientes avec des vergetures ou un relâchement cutané",
      "Femmes ayant fini leur allaitement",
      "Patientes souhaitant retrouver leur silhouette"
    ],
    ctaTitleItalic: "soins après grossesse",
    ctaQuestion: "Vous souhaitez bénéficier de",
    related: [
      { slug: "abdominoplastie", title: "Abdominoplastie", imageLabel: "Abdominoplastie — 16:9" },
      { slug: "prothese-mammaire", title: "Prothèse Mammaire", imageLabel: "Prothèse Mammaire — 16:9" },
      { slug: "liposuccion", title: "Liposuccion", imageLabel: "Liposuccion — 16:9" }
    ]
  }
];

export const getProcedureBySlug = (slug: string): Procedure | undefined =>
  procedures.find((p) => p.slug === slug);

export const getProceduresByCategory = (category: string): Procedure[] =>
  procedures.filter((p) => p.category === category);

export const categories: Record<string, { label: string; procedures: Procedure[] }> = {
  corps: { label: "Chirurgie du Corps", procedures: getProceduresByCategory("corps") },
  visage: { label: "Chirurgie du Visage", procedures: getProceduresByCategory("visage") },
  esthetique: { label: "Médecine Esthétique", procedures: getProceduresByCategory("esthetique") },
};
