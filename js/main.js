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
} from "./components/project-card.js";


/* =========================================================
   PROJET DEMANDÉ
   ========================================================= */

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
       HERO
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
   ANIMATION DU TITRE PORTFOLIO
   ========================================================= */

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