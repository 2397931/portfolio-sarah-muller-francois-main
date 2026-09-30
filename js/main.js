import {
	getNextProject,
	getPreviousProject,
	getProjectById,
	getProjectHref,
	getProjectIndex,
	projects,
	renderProjectDetails,
	renderProjectHero,
	renderProjectPreview,
} from "./components/project-card.js";

function getRequestedProjectId() {
	const searchParams = new URLSearchParams(window.location.search);
	const projectId = searchParams.get("project");
	if (projectId) {
		return projectId;
	}

	return projects[0]?.id;
}

function initProjectCarousel() {
	const carousel = document.querySelector("[data-project-carousel]");
	if (!carousel) {
		return;
	}

	const cardSlot = carousel.querySelector("[data-project-slot]");
	const prevButton = carousel.querySelector("[data-project-prev]");
	const nextButton = carousel.querySelector("[data-project-next]");
	const hint = carousel.querySelector("[data-project-hint]");
	let currentIndex = 0;

	function renderCurrentProject() {
		const project = projects[currentIndex];
		cardSlot.innerHTML = renderProjectPreview(project);
		const card = cardSlot.querySelector(".project-card");
		if (card) {
			card.setAttribute("href", getProjectHref(project));
			card.setAttribute("aria-label", `${project.title}, catégorie ${project.category}`);
		}
		if (hint) {
			hint.textContent = `${project.title} - ${project.category}`;
		}
	}

	prevButton?.addEventListener("click", () => {
		currentIndex = (currentIndex - 1 + projects.length) % projects.length;
		renderCurrentProject();
	});

	nextButton?.addEventListener("click", () => {
		currentIndex = (currentIndex + 1) % projects.length;
		renderCurrentProject();
	});

	renderCurrentProject();
}

function initProjectPage() {
	const heroSlot = document.querySelector("[data-project-hero]");
	const detailsSlot = document.querySelector("[data-project-details]");
	if (!heroSlot || !detailsSlot) {
		return;
	}

	const projectId = getRequestedProjectId();
	const project = getProjectById(projectId);
	const previousProject = getPreviousProject(project.id);
	const nextProject = getNextProject(project.id);

	heroSlot.innerHTML = renderProjectHero(project);
	detailsSlot.innerHTML = renderProjectDetails(project);
	document.title = `${project.title} | Projet`;

	const previousLink = document.querySelector("[data-project-prev]");
	const nextLink = document.querySelector("[data-project-next]");
	if (previousLink) {
		previousLink.setAttribute("href", getProjectHref(previousProject));
		previousLink.setAttribute("aria-label", `Projet précédent : ${previousProject.title}`);
	}
	if (nextLink) {
		nextLink.setAttribute("href", getProjectHref(nextProject));
		nextLink.setAttribute("aria-label", `Projet suivant : ${nextProject.title}`);
	}
}

if (document.body.classList.contains("project-page")) {
	initProjectPage();
} else {
	initProjectCarousel();
}
