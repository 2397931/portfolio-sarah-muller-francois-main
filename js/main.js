/* Point d’entrée des deux pages : attend les données, puis initialise soit le carrousel, soit la page du projet. Les attributs data-project-* relient le HTML aux fonctions ci-dessous. */

import {
    getNextProject,
    getPreviousProject,
    getProjectById,
    getProjectHref,
    loadProjects,
    projects,
    renderProjectDetails,
    renderProjectHero,
    renderProjectPreview,
    renderProjectProcess
} from "./components/project-card.js?v=20261008-contraste-17";


/* =========================================================
   PROJET DEMANDÉ
   ========================================================= */

/* Lit le paramètre ?project= de l’URL ; sans paramètre, utilise le premier projet chargé. */
function getRequestedProjectId() {

    const searchParams =
        new URLSearchParams(window.location.search);

    const projectId =
        searchParams.get("project");

    if (projectId) {
        return projectId;
    }

    return projects[0]?.id;
}


/* =========================================================
   CARROUSEL DES PROJETS
   ========================================================= */

/* Active le carrousel seulement si son conteneur existe sur la page d’accueil. */
function initProjectCarousel() {

    const carousel =
        document.querySelector("[data-project-carousel]");

    if (!carousel) {
        return;
    }

    const cardSlot =
        carousel.querySelector("[data-project-slot]");

    const prevButton =
        carousel.querySelector("[data-project-prev]");

    const nextButton =
        carousel.querySelector("[data-project-next]");

    const hint =
        carousel.querySelector("[data-project-hint]");

    let currentIndex = 0;


    /* Remplace la prévisualisation par le projet courant et met à jour son lien et son texte accessible. */
    function renderCurrentProject() {

        const project =
            projects[currentIndex];

        if (!project || !cardSlot) {
            return;
        }

        cardSlot.innerHTML =
            renderProjectPreview(project);

        const card =
            cardSlot.querySelector(".project-card");

        if (card) {

            card.setAttribute(
                "href",
                getProjectHref(project)
            );

            card.setAttribute(
                "aria-label",
                `${project.title}, catégorie ${project.category}`
            );
        }

        if (hint) {

            hint.textContent =
                `${project.title} - ${project.category}`;
        }
    }


    /* Le ?. évite une erreur si le bouton est absent ; le modulo permet de boucler. */
    prevButton?.addEventListener(
        "click",
        () => {

            currentIndex =
                (currentIndex - 1 + projects.length) %
                projects.length;

            renderCurrentProject();
        }
    );


    nextButton?.addEventListener(
        "click",
        () => {

            currentIndex =
                (currentIndex + 1) %
                projects.length;

            renderCurrentProject();
        }
    );


    renderCurrentProject();
}


/* =========================================================
   PAGE DU PROJET
   ========================================================= */

/* Remplit les emplacements de projet.html avec le projet demandé, son thème et son processus. */
function initProjectPage() {

    const heroSlot =
        document.querySelector("[data-project-hero]");

    const detailsSlot =
        document.querySelector("[data-project-details]");

    const processSlot =
        document.querySelector("[data-project-process]");

    if (!heroSlot || !detailsSlot) {
        return;
    }


    const projectId =
        getRequestedProjectId();

    const project =
        getProjectById(projectId);

    if (!project) {
        return;
    }


    const previousProject =
        getPreviousProject(project.id);

    const nextProject =
        getNextProject(project.id);


    const theme =
        project.theme ?? {};


    /* =====================================================
       COULEURS DU PROJET
    ====================================================== */

    document.documentElement.style.setProperty(
        "--project-accent",
        theme.accent ?? "#ef8db6"
    );

    document.documentElement.style.setProperty(
        "--project-surface",
        theme.surface ?? "#f4f1eb"
    );

    document.documentElement.style.setProperty(
        "--project-ink",
        theme.ink ?? "#0e0e12"
    );

    document.documentElement.style.setProperty(
        "--project-background",
        theme.background ?? "#f4f1eb"
    );


    /* =====================================================
       BANNIÈRE
    ====================================================== */

    heroSlot.innerHTML =
        renderProjectHero(project);


    /* =====================================================
       DÉTAILS
    ====================================================== */

    detailsSlot.innerHTML =
        renderProjectDetails(project);


    /* =====================================================
       PROCESSUS
       
       Le processus est généré uniquement si le projet
       possède des données "process".
    ====================================================== */

    if (processSlot) {

        const processMarkup =
            renderProjectProcess(project);

        if (processMarkup) {

            processSlot.outerHTML =
                processMarkup;

        } else {

            processSlot.remove();

        }
    }


    initProjectGallery(project);

    /* =====================================================
       TITRE DE LA PAGE
    ====================================================== */

    document.title =
        `${project.title} | Projet`;


    /* =====================================================
       NAVIGATION PROJET PRÉCÉDENT / SUIVANT
    ====================================================== */

    const previousLink =
        document.querySelector("[data-project-prev]");

    const nextLink =
        document.querySelector("[data-project-next]");


    if (previousLink && previousProject) {

        previousLink.setAttribute(
            "href",
            getProjectHref(previousProject)
        );

        previousLink.setAttribute(
            "aria-label",
            `Projet précédent : ${previousProject.title}`
        );
    }


    if (nextLink && nextProject) {

        nextLink.setAttribute(
            "href",
            getProjectHref(nextProject)
        );

        nextLink.setAttribute(
            "aria-label",
            `Projet suivant : ${nextProject.title}`
        );
    }
}



/* =========================================================
   GALERIE DES CAPTURES D'ÉCRAN DU PROJET
   Réutilise les flèches de la page d'accueil.
   ========================================================= */
function initProjectGallery(project) {
    const gallery = document.querySelector("[data-project-gallery]");
    if (!gallery) return;

    const images = Array.isArray(project.gallery) ? project.gallery : [];
    if (project.id.toLowerCase() !== "sweeny" || images.length === 0) {
        gallery.hidden = true;
        return;
    }

    gallery.hidden = false;
    gallery.innerHTML = `
        <h2 class="project-gallery__title">Aperçus du site Web</h2>
        <div class="project-gallery__carousel" aria-label="Captures d’écran du site Sweeny">
            <button type="button" class="projects__arrow projects__arrow--prev"
                data-gallery-prev aria-label="Image précédente">
                <img src="./assets/fleches/fleche_5.png" alt=""
                    class="projects__arrow-icon" aria-hidden="true">
            </button>
            <div class="project-gallery__slot" aria-live="polite">
                <img class="project-gallery__image" data-gallery-image
                    alt="Capture d’écran du site Sweeny">
            </div>
            <button type="button" class="projects__arrow projects__arrow--next"
                data-gallery-next aria-label="Image suivante">
                <img src="./assets/fleches/fleche_5.png" alt=""
                    class="projects__arrow-icon" aria-hidden="true">
            </button>
        </div>
        <p class="project-gallery__counter" data-gallery-counter></p>
    `;

    const image = gallery.querySelector("[data-gallery-image]");
    const counter = gallery.querySelector("[data-gallery-counter]");
    let index = 0;

    function showImage() {
        image.src = images[index];
        image.alt = `Capture d’écran ${index + 1} sur ${images.length} du site Sweeny`;
        counter.textContent = `${index + 1} / ${images.length}`;
    }

    gallery.querySelector("[data-gallery-prev]").addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        showImage();
    });
    gallery.querySelector("[data-gallery-next]").addEventListener("click", () => {
        index = (index + 1) % images.length;
        showImage();
    });

    showImage();
}

/* =========================================================
   ANIMATION DU TITRE PORTFOLIO
   ========================================================= */

/* Transforme le titre en lettres séparées ; leur indice pilote le délai d’animation défini dans hero.css. */
function initPortfolioAnimation() {

    const title =
        document.querySelector(".hero__title");

    if (!title) {
        return;
    }

    const text =
        title.textContent.trim();

    /*
       On vide le titre pour reconstruire
       chaque lettre individuellement.
    */

    title.innerHTML = "";

    [...text].forEach((letter, index) => {

        const span =
            document.createElement("span");

        span.textContent =
            letter;

        span.style.setProperty(
            "--letter-index",
            index
        );

        title.appendChild(span);
    });
}


/* =========================================================
   INITIALISATION
   ========================================================= */

/* Attend la fin du chargement avant d’utiliser la liste des projets. */
loadProjects().then(() => {

    initPortfolioAnimation();

    if (
        document.body.classList.contains(
            "project-page"
        )
    ) {

        initProjectPage();

    } else {

        initProjectCarousel();

    }

});