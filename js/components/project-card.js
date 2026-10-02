export const projects = [
    {
        id: "hyunjin",
        title: "Hyunjin.aep",
        category: "Montage vidéo",
        year: "2026",
        mediaType: "video",
        image: "assets/Img/HyunjinIMG.png",
        link: "assets/video/hyunjinParty.mp4",
        summary:
            "Cette création est un montage de Hyunjin du groupe Stray Kids, créé comme cadeau pour une amie. Le thème de l’argent et du luxe guide la composition, avec un contraste marqué entre les éléments graphiques et les images du personnage.",
        concept:
            "Cette création est un montage de Hyunjin du groupe Stray Kids, créé comme cadeau pour une amie. Le thème de l'argent et du luxe guide la composition, avec un contraste marqué entre les éléments graphiques et les images du personnage.",
        visual: [
            "Palette rouge, vert et blanc inspirée de l’argent et du luxe.",
            "Composition éditoriale avec une grille et des éléments graphiques découpés.",
            "Montage rythmé, contrasté et pensé pour une lecture immédiate."
        ],
        support: "After Effects",
        theme: {
            accent: "#7d9b72",
            surface: "#f5f7f2",
            ink: "#172016",
            background: "#285d20"
        }
    },

    {
        id: "Sweeny",
        title: "Sweeny",
        category: "Design web",
        year: "2025",
        mediaType: "image",
        image: "assets/Img/SweenyIMG.png",
        link: "https://202397931.tim-momo.com/Projet-Final/",
        summary:
            "Site Web pour une petite compagnie de pâtisserie, pensé pour être simple, coloré et chaleureux.",
        concept:
            "J'ai créé un site Web pour une petite compagnie de pâtisserie appelée Sweeny. L'interface présente les produits avec une navigation simple et une ambiance douce afin de rendre la découverte agréable et intuitive.",
        visual: [
            "Palette rose, brun et blanc pour rappeler l'univers de la pâtisserie.",
            "Images de produits mises en avant avec une hiérarchie claire.",
            "Sections dédiées aux produits, à la compagnie et aux contacts."
        ],
        support: "HTML, CSS et JavaScript",
        theme: {
            accent: "#e887a7",
            surface: "#fff8f2",
            ink: "#3d2524",
            background: "#f7c5da"
        }
    },

    {
        id: "Imparfaite",
        title: "Imparfaite",
        category: "Montage vidéo",
        year: "2024",
        mediaType: "video",
        image: "assets/Img/ImparfaiteIMG.png",
        link: "assets/video/Imparfaite_h264_1920_1080.mp4",
        summary:
            "Micro-montage construit pour raconter une histoire avec une ambiance sombre et cohérente.",
        concept:
            "J'ai créé un micro-montage à partir de différentes séquences vidéo pour raconter l'histoire du personnage. Les transitions, les effets, la musique et le montage sonore construisent une atmosphère sombre et cohérente.",
        visual: [
            "Transitions et effets visuels utilisés pour installer le rythme.",
            "Couleurs sombres pour renforcer l'atmosphère du récit.",
            "Montage sonore et musical travaillé pour garder une continuité."
        ],
        support: "After Effects",
        theme: {
            accent: "#8f6874",
            surface: "#f1eceb",
            ink: "#211b21",
            background: "#242024"
        }
    },

    {
        id: "IChooseF5ve",
        title: "IChooseF5ve",
        category: "Montage vidéo",
        year: "2026",
        mediaType: "video",
        image: "assets/Img/F5VE.jpg",
        link: "assets/video/IChooseF5ve.mp4",
        summary:
            "Cette création est un montage vidéo de la chanson I Choose You du groupe f5ve. Il retrouve une énergie nostalgique inspirée des années 2010, entre images prises avec un iPhone SE et effets flash.",
        concept:
            "Cette création est un montage vidéo de la chanson I Choose You du groupe f5ve. Je l'ai créé pour retrouver une énergie nostalgique inspirée des années 2010, entre images prises avec un iPhone SE et effets flash.",
        visual: [
            "Couleurs vives et effets flash inspirés des interfaces des années 2010.",
            "Images prises avec un iPhone SE pour conserver une texture spontanée.",
            "Plans et éléments graphiques assemblés dans une esthétique rétro dynamique."
        ],
        support: "After Effects",
        theme: {
            accent: "#e66b37",
            surface: "#fff6e8",
            ink: "#2a2020",
            background: "#f3d7b5"
        }
    }
];


/* =========================================================
   CHARGEMENT DES PROJETS
   ========================================================= */

export async function loadProjects() {
    try {
        const response = await fetch("data/projects.json");

        if (!response.ok) {
            throw new Error(
                `Impossible de charger les projets : ${response.status}`
            );
        }

        const projectData = await response.json();

        projects.splice(
            0,
            projects.length,
            ...projectData.map(project => ({
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
                    []
            }))
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

export function applyProjectTheme(project) {
    const theme = project.theme ?? {};
    const root = document.documentElement;
    const body = document.body;

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

    /*
     * Background color of the individual project page
     */
    body.style.backgroundColor =
        theme.background ?? "#f5f7f2";

    /*
     * Remove any background image by default.
     * This lets each project choose whether it has an image.
     */
    body.style.backgroundImage = "none";
    body.style.backgroundSize = "";
    body.style.backgroundPosition = "";
    body.style.backgroundRepeat = "";

    /*
     * If the project has a background image,
     * use it instead of the plain color.
     */
    if (theme.backgroundImage) {
        body.style.backgroundImage =
            `url("${theme.backgroundImage}")`;

        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundAttachment = "fixed";
    }
}


/* =========================================================
   PROTECTION DU HTML
   ========================================================= */

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

function getProjectSlug(project) {
    return encodeURIComponent(project.id);
}

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

export function getProjectById(projectId) {
    const foundProject = projects.find(
        project =>
            project.id.toLowerCase() ===
            String(projectId).toLowerCase()
    );

    return foundProject ?? projects[0];
}

export function getPreviousProject(projectId) {
    const currentIndex = getProjectIndex(projectId);

    return projects[
        (currentIndex - 1 + projects.length) %
        projects.length
    ];
}

export function getNextProject(projectId) {
    const currentIndex = getProjectIndex(projectId);

    return projects[
        (currentIndex + 1) %
        projects.length
    ];
}

export function getProjectHref(project) {
    return `projet.html?project=${getProjectSlug(project)}`;
}


/* =========================================================
   SUPPORT
   ========================================================= */

function getProjectSupport(project) {
    return project.support ??
        (
            project.category === "Design web"
                ? "HTML, CSS et JavaScript"
                : "After Effects"
        );
}


/* =========================================================
   MEDIA DES CARTES
   ========================================================= */

function getProjectMediaMarkup(project, context) {

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

                Votre navigateur ne prend pas en charge la lecture vidéo.
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
                ${getProjectMediaMarkup(project, "preview")}
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
   PAGE DU PROJET
   ========================================================= */

export function renderProjectHero(project) {

    applyProjectTheme(project);

    const heroImage = `
        <img
            class="project-hero__visual"
            src="${project.image}"
            alt="Image du projet ${escapeHtml(project.title)}">
    `;

    const videoMarkup =
        project.mediaType === "video"
            ? `
                <div class="project-hero__video">

                    <video
                        controls
                        playsinline
                        preload="metadata">

                        <source
                            src="${project.link}"
                            type="video/mp4">

                        Votre navigateur ne prend pas en charge
                        la lecture vidéo.

                    </video>

                </div>
            `
            : "";

    const projectLink =
        project.mediaType === "image" && project.link
            ? `
                <a
                    class="project-info__link"
                    href="${project.link}"
                    target="_blank"
                    rel="noopener noreferrer">

                    Voir le site

                </a>
            `
            : "";

    return `
        <section class="project-hero">

            <!-- IMAGE + TITRE -->

            <div class="project-hero__image-wrapper">

                ${heroImage}

                <div class="project-hero__overlay">

                    <p class="project-hero__eyebrow">
                        ${escapeHtml(project.category)}
                    </p>

                    <h1
                        class="project-hero__title"
                        id="project-title">

                        ${escapeHtml(project.title)}

                    </h1>

                    <p class="project-hero__year">
                        ${escapeHtml(project.year)}
                    </p>

                </div>

            </div>

        </section>


        <!-- VIDÉO -->

        ${videoMarkup}


        <!-- INFORMATIONS -->

        <section class="project-info">

            <div class="project-info__header">

                <p class="project-info__category">
                    ${escapeHtml(project.category)}
                </p>

                <p class="project-info__date">
                    ${escapeHtml(project.year)}
                </p>

            </div>


            <div class="project-info__line"></div>


            <div class="project-info__content">

                <div class="project-info__description">

                    <h2>
                        À propos du projet
                    </h2>

                    <p>
                        ${escapeHtml(
                            project.concept ??
                            project.summary ??
                            project.description ??
                            ""
                        )}
                    </p>

                </div>


                <div class="project-info__details">

                    <div class="project-info__detail">

                        <span class="project-info__label">
                            Logiciels
                        </span>

                        <span class="project-info__value">
                            ${escapeHtml(
                                getProjectSupport(project)
                            )}
                        </span>

                    </div>


                    <div class="project-info__detail">

                        <span class="project-info__label">
                            Année
                        </span>

                        <span class="project-info__value">
                            ${escapeHtml(project.year)}
                        </span>

                    </div>


                    ${projectLink}

                </div>

            </div>


            ${
                project.visual?.length
                    ? `
                        <div class="project-info__visual">

                            <h2>
                                Direction visuelle
                            </h2>

                            <ul>

                                ${project.visual
                                    .map(
                                        item => `
                                            <li>
                                                ${escapeHtml(item)}
                                            </li>
                                        `
                                    )
                                    .join("")}

                            </ul>

                        </div>
                    `
                    : ""
            }

        </section>
    `;
}


/* =========================================================
   DÉTAILS
   ========================================================= */

export function renderProjectDetails(project) {
    return "";
}