export const projects = [
	{
		id: "hyunjin",
		title: "Hyunjin.aep",
		category: "Montage vidéo",
		year: "2026",
		mediaType: "video",
		image: "",
		link: "assets/video/hyunjinParty.mp4",
		summary: "Montage vidéo créé autour de Hyunjin du groupe Stray Kids, avec une ambiance luxe et un contraste fort.",
		concept: "Le thème principal du montage est l’argent et le luxe. J’ai utilisé principalement les couleurs rouge, vert et blanc pour créer une esthétique stylée et marquée.",
		visual: [
			"Couleurs dominantes : rouge, vert et blanc.",
			"Ambiance luxe et contraste fort.",
			"Montage rythmé avec des éléments graphiques marqués.",
		],
		support: "After Effects",
	},
	{
		id: "Sweeny",
		title: "Sweeny",
		category: "Design web",
		year: "2025",
		mediaType: "image",
		image: "assets/Img/SweenyIMG.png",
		link: "https://202397931.tim-momo.com/Projet-Final/",
		summary: "Site Web pour une petite compagnie de pâtisserie, pensé pour être simple, coloré et chaleureux.",
		concept: "J’ai créé un site Web pour une petite compagnie de pâtisserie appelée Sweeny. Le site présente leurs différents produits avec une présentation simple et colorée.",
		visual: [
			"Palette rose, brun et blanc.",
			"Ambiance douce et chaleureuse.",
			"Sections pensées pour découvrir les produits, la compagnie et les contacts.",
		],
		support: "HTML, CSS et JavaScript",
	},
	{
		id: "Imparfaite",
		title: "Imparfaite",
		category: "Montage vidéo",
		year: "2024",
		mediaType: "video",
		image: "assets/Img/ImparfaiteIMG.png",
		link: "assets/video/Imparfaite_h264_1920_1080.mp4",
		summary: "Micro-montage construit pour raconter une histoire avec une ambiance sombre et cohérente.",
		concept: "J’ai créé un micro-montage à partir de différentes séquences vidéo pour raconter l’histoire du personnage.",
		visual: [
			"Transitions et effets visuels pour donner du rythme.",
			"Couleurs sombres pour renforcer l’atmosphère.",
			"Montage sonore et musical pour garder une cohérence globale.",
		],
		support: "After Effects",
	},
	{
		id: "IChooseF5ve",
		title: "IChooseF5ve",
		category: "Montage vidéo",
		year: "2026",
		mediaType: "video",
		image: "",
		link: "assets/video/IChooseF5ve.mp4",
		summary: "Montage nostalgique inspiré des années 2010, avec des couleurs vives et une énergie rétro.",
		concept: "Cette création est un montage vidéo de la chanson I Choose You du groupe f5ve. Je l’ai créé afin de recréer une ambiance nostalgique inspirée des années 2010.",
		visual: [
			"Couleurs vives et flash pour rappeler l’esthétique de l’époque.",
			"Images prises avec un iPhone SE pour renforcer le côté nostalgique.",
			"Ensemble visuel inspiré des années 2010.",
		],
		support: "After Effects",
	},
];

function escapeHtml(value) {
	return String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");
}

function getProjectSlug(project) {
	return encodeURIComponent(project.id);
}

export function getProjectIndex(projectId) {
	return Math.max(0, projects.findIndex((project) => project.id.toLowerCase() === String(projectId).toLowerCase()));
}

export function getProjectById(projectId) {
	const foundProject = projects.find((project) => project.id.toLowerCase() === String(projectId).toLowerCase());
	return foundProject ?? projects[0];
}

export function getPreviousProject(projectId) {
	const currentIndex = getProjectIndex(projectId);
	return projects[(currentIndex - 1 + projects.length) % projects.length];
}

export function getNextProject(projectId) {
	const currentIndex = getProjectIndex(projectId);
	return projects[(currentIndex + 1) % projects.length];
}

export function getProjectHref(project) {
	return `projet.html?project=${getProjectSlug(project)}`;
}

function getProjectSupport(project) {
	return project.support ?? (project.category === "Design web" ? "HTML, CSS et JavaScript" : "After Effects");
}

function getProjectMediaMarkup(project, context) {
	if (project.mediaType === "image") {
		return `<img class="${context === "hero" ? "project-hero__visual" : "project-card__image"}" src="${project.image}" alt="Aperçu du projet ${escapeHtml(project.title)}">`;
	}

	if (context === "hero") {
		return `<video class="project-hero__visual" controls playsinline preload="metadata" ${project.image ? `poster="${project.image}"` : ""}>
			<source src="${project.link}" type="video/mp4">
			Votre navigateur ne prend pas en charge la lecture vidéo.
		</video>`;
	}

	return `<span class="project-card__graphic project-card__graphic--${project.id.toLowerCase()}" aria-hidden="true"></span>`;
}

export function renderProjectPreview(project) {
	const isImageProject = project.mediaType === "image";
	const cardClassName = isImageProject ? "project-card project-card--image" : `project-card project-card--dark project-card--${project.id.toLowerCase()}`;
	return `
		<a class="${cardClassName}" href="${getProjectHref(project)}" aria-label="${escapeHtml(project.title)}, catégorie ${escapeHtml(project.category)}">
			<span class="project-card__media">${getProjectMediaMarkup(project, "preview")}</span>
			<span class="project-card__content">
				<span class="project-card__eyebrow">Projet ${projects.findIndex((item) => item.id === project.id) + 1}</span>
				<span class="project-card__name">${escapeHtml(project.title)}</span>
				<span class="project-card__category">${escapeHtml(project.category)}</span>
			</span>
		</a>
	`;
}

export function renderProjectHero(project) {
	const actionLabel = project.mediaType === "image" ? "Ouvrir le site" : "Ouvrir la vidéo";
	const previewMarkup = getProjectMediaMarkup(project, "hero");

	return `
		<article class="project-hero__media">
			${previewMarkup}
		</article>
		<article class="project-hero__content">
			<p class="project-hero__eyebrow">${escapeHtml(project.category)}</p>
			<h1 id="project-title">${escapeHtml(project.title)}</h1>
			<p class="project-hero__lead">${escapeHtml(project.summary)}</p>

			<dl class="project-meta">
				<div class="project-meta__item">
					<dt>Année</dt>
					<dd>${escapeHtml(project.year)}</dd>
				</div>
				<div class="project-meta__item">
					<dt>Catégorie</dt>
					<dd>${escapeHtml(project.category)}</dd>
				</div>
				<div class="project-meta__item">
					<dt>Support</dt>
					<dd>${escapeHtml(getProjectSupport(project))}</dd>
				</div>
			</dl>

			<div class="project-actions">
				<a class="project-actions__button project-actions__button--primary" href="${project.link}" target="_blank" rel="noreferrer">${actionLabel}</a>
				<a class="project-actions__button project-actions__button--secondary" href="index.html#projects">Retour aux projets</a>
			</div>
		</article>
	`;
}

export function renderProjectDetails(project) {
	return `
		<article class="project-panel">
			<h2>Concept</h2>
			<p>${escapeHtml(project.concept)}</p>
		</article>

		<article class="project-panel">
			<h2>Direction visuelle</h2>
			<ul class="project-list">
				${project.visual.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
			</ul>
		</article>

		<article class="project-panel project-panel--full">
			<h2>Accès rapide</h2>
			<p>
				Utilise les flèches en haut de page pour passer d’un projet à l’autre, ou reviens directement à la section projets du portfolio.
			</p>
		</article>
	`;
}
