/* Données de secours et génération des projets. Pour modifier les projets chargés, éditer data/projects.json. Les noms de propriétés restent identiques à ceux attendus par le programme. */

/* Champs : id = identifiant ; title = titre ; category = catégorie ; year = année ; image = aperçu ; link = média ou site ; concept = description ; visual = direction visuelle ; support = logiciels. theme définit les couleurs et peut contenir backgroundImage pour un fond propre au projet. process décrit les étapes et leurs images. */
export const projects = [

    /* =====================================================
       HYUNJIN
    ====================================================== */

    {
        id: "hyunjin",
        title: "Hyunjin.aep",
        category: "Montage vidéo",
        year: "2026",
        mediaType: "video",

        image:
            "assets/Img/hyunjinIMG.png",

        link:
            "assets/video/hyunjinParty.mp4",

        summary:
            "Cette création est un montage de Hyunjin du groupe Stray Kids, créé comme cadeau pour une amie. Le thème de l’argent et du luxe guide la composition, avec un contraste marqué entre les éléments graphiques et les images du personnage.",

        concept:
            "Cette création est un montage de Hyunjin du groupe Stray Kids, créé comme cadeau pour une amie. Le thème de l'argent et du luxe guide la composition, avec un contraste marqué entre les éléments graphiques et les images du personnage.",

        visual: [
            "Palette rouge, vert et blanc inspirée de l’argent et du luxe.",
            "Composition éditoriale avec une grille et des éléments graphiques découpés.",
            "Montage rythmé, contrasté et pensé pour une lecture immédiate."
        ],

        support:
            "After Effects",

        theme: {
            accent: "#7d9b72",
            surface: "#f5f7f2",
            ink: "#172016",
            background: "#285d20"
        }
    },


    /* =====================================================
       SWEENY
    ====================================================== */

    {
        id: "Sweeny",
        title: "Sweeny",
        category: "Design web",
        year: "2025",
        mediaType: "image",

        image:
            "assets/Img/SweenyIMG.png",

        link:
            "https://202397931.tim-momo.com/Projet-Final/",

        summary:
            "Site Web pour une petite compagnie de pâtisserie, pensé pour être simple, coloré et chaleureux.",

        concept:
            "J'ai créé un site Web pour une petite compagnie de pâtisserie appelée Sweeny. L'interface présente les produits avec une navigation simple et une ambiance douce afin de rendre la découverte agréable et intuitive.",

        visual: [
            "Palette rose, brun et blanc pour rappeler l'univers de la pâtisserie.",
            "Images de produits mises en avant avec une hiérarchie claire.",
            "Sections dédiées aux produits, à la compagnie et aux contacts."
        ],

        support:
            "HTML, CSS et JavaScript",

        theme: {
            accent: "#e887a7",
            surface: "#fff8f2",
            ink: "#3d2524",
            background: "#f7c5da"
        }
    },


    /* =====================================================
       IMPARFAITE
    ====================================================== */

    {
        id: "Imparfaite",
        title: "Imparfaite",
        category: "Montage vidéo",
        year: "2024",
        mediaType: "video",

        image:
            "assets/Img/ImparfaiteIMG.png",

        link:
            "assets/video/Imparfaite_h264_1920_1080.mp4",

        summary:
            "Micro-montage construit pour raconter une histoire avec une ambiance sombre et cohérente.",

        concept:
            "J'ai créé un micro-montage à partir de différentes séquences vidéo pour raconter l'histoire du personnage. Les transitions, les effets, la musique et le montage sonore construisent une atmosphère sombre et cohérente.",

        visual: [
            "Transitions et effets visuels utilisés pour installer le rythme.",
            "Couleurs sombres pour renforcer l'atmosphère du récit.",
            "Montage sonore et musical travaillé pour garder une continuité."
        ],

        support:
            "After Effects",

        theme: {
            accent: "#8f6874",
            surface: "#f1eceb",
            ink: "#211b21",
            background: "#242024"
        }
    },


    /* =====================================================
       ICHOOSEF5VE
    ====================================================== */

    {
        id: "IChooseF5ve",
        title: "IChooseF5ve",
        category: "Montage vidéo",
        year: "2026",
        mediaType: "video",

        image:
            "assets/Img/F5VE.jpg",

        link:
            "assets/video/iChooseF5ve.mp4",

        summary:
            "Cette création est un montage vidéo de la chanson I Choose You du groupe f5ve. Il retrouve une énergie nostalgique inspirée des années 2010, entre images prises avec un iPhone SE et effets flash.",

        concept:
            "Cette création est un montage vidéo de la chanson I Choose You du groupe f5ve. Je l'ai créé pour retrouver une énergie nostalgique inspirée des années 2010, entre images prises avec un iPhone SE et effets flash.",

        visual: [
            "Couleurs vives et effets flash inspirés des interfaces des années 2010.",
            "Images prises avec un iPhone SE pour conserver une texture spontanée.",
            "Plans et éléments graphiques assemblés dans une esthétique rétro dynamique."
        ],

        support:
            "After Effects",

        theme: {
            accent: "#e66b37",
            surface: "#fff6e8",
            ink: "#2a2020",
            background: "#f3d7b5"
        },


        /* =================================================
           PROCESSUS
        ================================================== */

        process: {

            intro:
                `Ce projet a été créé pour mon portfolio. Tous les choix que j’ai faits pour ce montage vidéo ont été réfléchis afin de mettre en valeur mes compétences en montage et en effets visuels.

Lorsque j’ai vu la vidéo « I Choose You » du groupe japonais F5ve, j’ai tout de suite su que je voulais créer un montage vidéo à partir de celle-ci. J’ai donc commencé par réaliser un moodboard en recherchant des inspirations sur Pinterest. Cela m’a permis de définir le style visuel et l’ambiance que je voulais donner à mon montage.`,

            introImage:
                "assets/Img/moodbaord_i_choose_f5ve.png",


            afterEffects:
                "Ensuite, après avoir trouvé mes inspirations, j’ai commencé le montage sur le logiciel After Effects. J’ai travaillé sur différents effets et transitions afin de créer un montage qui correspondait au style que j’avais choisi.",

            afterEffectsImage:
                "assets/Img/F5VE_aftereffects.png",


            rotobrush:
                "Les étapes qui m’ont demandé le plus de temps pour ce montage vidéo ont été le rotobrush des cinq membres du groupe ainsi que la création du haut-parleur. Ce qui était difficile pour le rotobrush était de bien découper les membres dans les 61 frames qu'il y avait.",

            rotobrushImage:
                "assets/Img/F5VE_rotobrush.png",


            conclusion:
                "Au total, ce montage vidéo m’a pris quatre jours à réaliser."
        }
    }
];


/* =========================================================
   CHARGEMENT DES PROJETS
   ========================================================= */

/* Charge data/projects.json. Si le chargement échoue, garde les projets de secours ci-dessus. Les champs absents sont complétés et le processus est normalisé. */
export async function loadProjects() {

    try {

        const response =
            await fetch("data/projects.json");

        if (!response.ok) {

            throw new Error(
                `Impossible de charger les projets : ${response.status}`
            );
        }

        const projectData =
            await response.json();


        /* Remplace le contenu du tableau sans changer sa référence, partagée avec main.js. */
        projects.splice(
            0,
            projects.length,

            ...projectData.map(project => {

                /*
                 * On récupère le projet local correspondant.
                 * Cela permet notamment de conserver le processus
                 * de IChooseF5ve si celui-ci n'est pas encore présent
                 * dans projects.json.
                 */

                const fallbackProject =
                    projects.find(
                        item => item.id === project.id
                    );


                /* Accepte le format steps du JSON et le convertit en champs utilisés par le rendu. */
                const normalizedProcess =
                    project.process?.steps
                        ? {
                            intro:
                                project.process.steps[0]?.text,

                            introImage:
                                project.process.steps[0]?.image,

                            afterEffects:
                                project.process.steps[1]?.text,

                            afterEffectsImage:
                                project.process.steps[1]?.image,

                            rotobrush:
                                project.process.steps[2]?.text,

                            rotobrushImage:
                                project.process.steps[2]?.image,

                            conclusion:
                                project.process.steps[3]?.text
                        }
                        : project.process ??
                          fallbackProject?.process;

                return {
                    ...project,

                    mediaType:
                        project.category === "Design web"
                            ? "image"
                            : "video",

                    summary:
                        project.summary ??
                        project.description,

                    concept:
                        project.concept ??
                        project.description,

                    visual:
                        project.visual ??
                        [],

                    support:
                        project.support ??
                        fallbackProject?.support,

                    theme:
                        project.theme ??
                        fallbackProject?.theme,

                    process:
                        normalizedProcess
                };
            })
        );

    } catch (error) {

        console.warn(
            "Les données de secours des projets sont utilisées.",
            error
        );
    }
}


/* =========================================================
   THÈME DU PROJET
   ========================================================= */

/* Applique les couleurs du projet aux variables CSS. Une image de fond propre au projet peut remplacer le fond uni. */
export function applyProjectTheme(project) {

    const theme =
        project.theme ?? {};

    const root =
        document.documentElement;

    const body =
        document.body;

    /* Fond uni du texte, défini par theme.textBackground dans data/projects.json.
       Il protège la lecture même lorsque la page utilise une image de fond. */
    root.style.setProperty(
        "--project-text-background",
        theme.textBackground ?? theme.background ?? theme.surface ?? "#f5f7f2"
    );


    root.style.setProperty(
        "--project-background",
        theme.background ?? "#f5f7f2"
    );

    root.style.setProperty(
        "--project-accent",
        theme.accent ?? "#7d9b72"
    );

    root.style.setProperty(
        "--project-surface",
        theme.surface ?? "#f5f7f2"
    );

    root.style.setProperty(
        "--project-ink",
        theme.ink ?? "#172016"
    );


    body.style.backgroundColor =
        theme.background ?? "#f5f7f2";


    body.style.backgroundImage =
        "none";

    body.style.backgroundSize =
        "";

    body.style.backgroundPosition =
        "";

    body.style.backgroundRepeat =
        "";

    body.style.backgroundAttachment =
        "";


    if (theme.backgroundImage) {

        body.style.backgroundImage =
            `url("${theme.backgroundImage}")`;

        body.style.backgroundSize =
            "cover";

        body.style.backgroundPosition =
            "center";

        body.style.backgroundRepeat =
            "no-repeat";

        body.style.backgroundAttachment =
            "fixed";
    }
}


/* =========================================================
   PROTECTION DU HTML
   ========================================================= */

/* Échappe les caractères spéciaux avant l’insertion d’un texte dans le HTML généré. */
function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}


/* =========================================================
   LIENS / PROJETS
   ========================================================= */

/* Encode l’identifiant pour pouvoir l’utiliser dans le paramètre de l’URL. */
function getProjectSlug(project) {

    return encodeURIComponent(
        project.id
    );
}


/* Trouve la position du projet sans tenir compte des majuscules ; utilise 0 si l’identifiant est inconnu. */
export function getProjectIndex(projectId) {

    return Math.max(
        0,

        projects.findIndex(
            project =>
                project.id.toLowerCase() ===
                String(projectId).toLowerCase()
        )
    );
}


/* Renvoie le projet demandé ou le premier projet comme solution de secours. */
export function getProjectById(projectId) {

    const foundProject =
        projects.find(
            project =>
                project.id.toLowerCase() ===
                String(projectId).toLowerCase()
        );

    return foundProject ?? projects[0];
}


/* Recule dans la liste ; le calcul modulo revient au dernier projet après le premier. */
export function getPreviousProject(projectId) {

    const currentIndex =
        getProjectIndex(projectId);

    return projects[
        (currentIndex - 1 + projects.length) %
        projects.length
    ];
}


/* Avance dans la liste ; le calcul modulo revient au premier projet après le dernier. */
export function getNextProject(projectId) {

    const currentIndex =
        getProjectIndex(projectId);

    return projects[
        (currentIndex + 1) %
        projects.length
    ];
}


/* Construit le lien vers la page de détails à partir de l’identifiant du projet. */
export function getProjectHref(project) {

    return `projet.html?project=${getProjectSlug(project)}`;
}


/* =========================================================
   SUPPORT
   ========================================================= */

/* Renvoie les logiciels renseignés ; sinon, propose une valeur selon la catégorie. */
function getProjectSupport(project) {

    return project.support ??
        (
            project.category === "Design web"
                ? "HTML, CSS et JavaScript"
                : "After Effects"
        );
}


/* =========================================================
   MÉDIAS DES CARTES
   ========================================================= */

/* Choisit une image, une vidéo ou un fond graphique selon le type de projet et le contexte d’affichage. */
function getProjectMediaMarkup(
    project,
    context
) {

    if (project.mediaType === "image") {

        return `
            <img
                class="${
                    context === "hero"
                        ? "project-hero__visual"
                        : "project-card__image"
                }"
                src="${project.image}"
                alt="Aperçu du projet ${escapeHtml(project.title)}">
        `;
    }


    if (context === "hero") {

        return `
            <video
                class="project-hero__visual"
                controls
                playsinline
                preload="metadata"
                ${
                    project.image
                        ? `poster="${project.image}"`
                        : ""
                }>

                <source
                    src="${project.link}"
                    type="video/mp4">

                Votre navigateur ne prend pas en charge
                la lecture vidéo.

            </video>
        `;
    }


    if (project.image) {

        return `
            <img
                class="project-card__image"
                src="${project.image}"
                alt="Aperçu du projet ${escapeHtml(project.title)}">
        `;
    }


    return `
        <span
            class="project-card__graphic project-card__graphic--${project.id.toLowerCase()}"
            aria-hidden="true">
        </span>
    `;
}


/* =========================================================
   CARTE DE PROJET
   ========================================================= */

/* Génère le lien de prévisualisation affiché dans le carrousel avec média, titre et catégorie. */
export function renderProjectPreview(project) {

    const isImageProject =
        project.mediaType === "image";

    const cardClassName =
        isImageProject
            ? "project-card project-card--image"
            : `project-card project-card--dark project-card--${project.id.toLowerCase()}`;


    return `
        <a
            class="${cardClassName}"
            href="${getProjectHref(project)}"
            aria-label="${escapeHtml(project.title)}, catégorie ${escapeHtml(project.category)}">

            <span class="project-card__media">

                ${getProjectMediaMarkup(
                    project,
                    "preview"
                )}

            </span>


            <span class="project-card__content">

                <span class="project-card__eyebrow">
                    Projet ${
                        projects.findIndex(
                            item => item.id === project.id
                        ) + 1
                    }
                </span>


                <span class="project-card__name">
                    ${escapeHtml(project.title)}
                </span>


                <span class="project-card__category">
                    ${escapeHtml(project.category)}
                </span>

            </span>

        </a>
    `;
}


/* =========================================================
   PROCESSUS DU PROJET
   ========================================================= */

/* Génère uniquement les étapes disponibles. Les paragraphes d’introduction sont séparés par les doubles retours à la ligne. */
export function renderProjectProcess(project) {

    if (!project.process) {
        return "";
    }

    const process = project.process;
    const intro = process.intro ?? process.steps?.[0]?.text ?? "";
    const introImage = process.introImage ?? process.steps?.[0]?.image ?? "";
    const afterEffects = process.afterEffects ?? process.steps?.[1]?.text ?? "";
    const afterEffectsImage = process.afterEffectsImage ?? process.steps?.[1]?.image ?? "";
    const rotobrush = process.rotobrush ?? process.steps?.[2]?.text ?? "";
    const rotobrushImage = process.rotobrushImage ?? process.steps?.[2]?.image ?? "";
    const conclusion = process.conclusion ?? process.steps?.[3]?.text ?? "";

    const introParagraphs = intro
        ? intro
            .split("\n\n")
            .map(
                paragraph => `
                    <p class="project-process__text">
                        ${escapeHtml(paragraph)}
                    </p>
                `
            )
            .join("")
        : "";

    return `
        <section class="project-process" aria-labelledby="process-title">

            <h2 id="process-title" class="project-process__title">
                Processus
            </h2>

            ${intro ? `
                <div class="project-process__step">
                    ${introParagraphs}

                    ${introImage ? `
                        <div class="project-process__image-wrapper">
                            <img
                                class="project-process__image"
                                src="${introImage}"
                                alt="Moodboard et inspirations du projet ${escapeHtml(project.title)}"
                                loading="lazy">
                        </div>
                    ` : ""}
                </div>
            ` : ""}

            ${afterEffects ? `
                <div class="project-process__step">
                    <p class="project-process__text">
                        ${escapeHtml(afterEffects)}
                    </p>

                    ${afterEffectsImage ? `
                        <div class="project-process__image-wrapper">
                            <img
                                class="project-process__image"
                                src="${afterEffectsImage}"
                                alt="Montage du projet ${escapeHtml(project.title)} dans After Effects"
                                loading="lazy">
                        </div>
                    ` : ""}
                </div>
            ` : ""}

            ${rotobrush ? `
                <div class="project-process__step">
                    <p class="project-process__text">
                        ${escapeHtml(rotobrush)}
                    </p>

                    ${rotobrushImage ? `
                        <div class="project-process__image-wrapper">
                            <img
                                class="project-process__image"
                                src="${rotobrushImage}"
                                alt="Travail de rotobrush sur le projet ${escapeHtml(project.title)}"
                                loading="lazy">
                        </div>
                    ` : ""}
                </div>
            ` : ""}

            ${conclusion ? `
                <div class="project-process__step project-process__step--final">
                    <p class="project-process__text">
                        ${escapeHtml(conclusion)}
                    </p>
                </div>
            ` : ""}

        </section>
    `;
}


/* =========================================================
   PAGE DU PROJET
   ========================================================= */

/* Applique le thème et crée l’image principale ; ajoute un lecteur si le projet est une vidéo. */
export function renderProjectHero(project) {

    applyProjectTheme(project);

    const isVideoProject = project.mediaType === "video";

    const heroMedia = isVideoProject
        ? `
            <div class="project-hero__video">
                <video
                    controls
                    playsinline
                    preload="metadata"
                    poster="${project.image ?? ""}">
                    <source src="${project.link}" type="video/mp4">
                    Votre navigateur ne prend pas en charge la lecture vidéo.
                </video>
            </div>
        `
        : "";

    const heroImage = `
        <div class="project-hero__image-wrapper">
            <img
                class="project-hero__visual"
                src="${project.image}"
                alt="Image du projet ${escapeHtml(project.title)}"
                loading="eager">

            <div class="project-hero__overlay">
                <p class="project-hero__eyebrow">${escapeHtml(project.category)}</p>
                <h1 class="project-hero__title" id="project-title">${escapeHtml(project.title)}</h1>
                <p class="project-hero__year">${escapeHtml(project.year)}</p>
            </div>
        </div>
    `;

    return `
        ${heroImage}
        ${heroMedia}
    `;
}


/* =========================================================
   DÉTAILS
   ========================================================= */

/* Crée les panneaux Concept, Direction visuelle et Support à partir des données du projet. */
export function renderProjectDetails(project) {

    const concept = project.concept ?? project.summary ?? project.description ?? "";
    const visualItems = project.visual?.length ? project.visual : [];
    const support = getProjectSupport(project);

    return `
        <article class="project-panel project-panel--full">
            <h2>Concept</h2>
            <p>${escapeHtml(concept)}</p>
        </article>

        <article class="project-panel">
            <h2>Direction visuelle</h2>
            ${visualItems.length ? `
                <ul class="project-list">
                    ${visualItems
                        .map(item => `<li>${escapeHtml(item)}</li>`)
                        .join("")}
                </ul>
            ` : "<p>Aucune direction visuelle fournie.</p>"}
        </article>

        <article class="project-panel">
            <h2>Support</h2>
            <p>${escapeHtml(support)}</p>
        </article>
    `;
}