const EXAMPLES = {
  projects: [
    {
      example: true,
      title: "Board or system name",
      year: "Year",
      summary: "What you built, the circuit or mechanism, and the result you measured.",
      tags: ["Altium", "Bring-up", "Test"],
      highlights: [
        "The part of the design you owned.",
        "A measurement, bug, or tradeoff you can talk about.",
        "Tools: schematic, layout, firmware, or lab equipment.",
      ],
    },
    {
      example: true,
      title: "Firmware or robotics build",
      year: "Year",
      summary: "The behavior you implemented and the hardware it ran on.",
      tags: ["C", "Embedded", "Robotics"],
      highlights: [
        "What the system had to do.",
        "How you tested it on the bench or on the robot.",
      ],
    },
  ],
  experience: [
    {
      example: true,
      role: "Electrical Engineering Intern",
      org: "Company",
      dates: "Summer 2026",
      location: "City, ST",
      summary: "The team you joined and the hardware you were responsible for.",
      highlights: [
        "A circuit, board, or test you owned.",
        "What you found, and what you changed.",
      ],
    },
  ],
};

const dialog = document.getElementById("project-dialog");
const projectGrid = document.getElementById("project-grid");
const rolesEl = document.getElementById("roles");

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function boardArt(index) {
  const variant = index % 2;
  const traces = variant
    ? `
      <rect x="86" y="78" width="86" height="86" rx="43" fill="none" stroke="#1e3f36" stroke-width="3"/>
      <path d="M172 121 H250 V230 H430" fill="none" stroke="#1e3f36" stroke-width="3"/>
      <path d="M250 160 H360 V280" fill="none" stroke="#b5693c" stroke-width="3"/>
      <rect x="410" y="196" width="130" height="70" rx="8" fill="none" stroke="#1e3f36" stroke-width="3"/>
      <circle cx="455" cy="231" r="6" fill="#b5693c"/>
      <circle cx="495" cy="231" r="6" fill="#1e3f36"/>`
    : `
      <rect x="90" y="92" width="128" height="78" rx="6" fill="none" stroke="#1e3f36" stroke-width="3"/>
      <circle cx="112" cy="114" r="5" fill="#b5693c"/>
      <circle cx="196" cy="148" r="5" fill="#b5693c"/>
      <path d="M218 131 H330 V250 H500" fill="none" stroke="#1e3f36" stroke-width="3"/>
      <path d="M154 170 V268 H310" fill="none" stroke="#b5693c" stroke-width="3"/>
      <rect x="400" y="214" width="150" height="68" rx="6" fill="none" stroke="#1e3f36" stroke-width="3"/>
      <circle cx="524" cy="92" r="10" fill="none" stroke="#1e3f36" stroke-width="3"/>`;
  return `
    <svg class="card-art" viewBox="0 0 640 400" aria-hidden="true">
      <rect width="640" height="400" fill="#e7efe9"/>
      <rect x="48" y="36" width="544" height="328" rx="18" fill="#f7f4ee" stroke="#1e3f36" stroke-width="3"/>
      ${traces}
    </svg>`;
}

function tagsHtml(tags) {
  return (tags || []).map((tag) => `<span class="tag">${esc(tag)}</span>`).join("");
}

function fillHero() {
  const nameParts = SITE.name.trim().split(/\s+/);
  const heroName = document.getElementById("hero-name");
  heroName.innerHTML = nameParts.map((part) => `<span>${esc(part)}</span>`).join(" ");
  document.getElementById("hero-role").textContent = SITE.role;
  document.getElementById("hero-blurb").textContent = SITE.blurb;
  document.getElementById("hero-school").innerHTML =
    `<span>${esc(SITE.school)}</span><span>Class of ${esc(SITE.classYear)}</span>`;
  document.getElementById("card-school").textContent = SITE.school;
  document.getElementById("card-degree").textContent =
    `${SITE.degree} · Class of ${SITE.classYear}`;
  const openHeading = document.getElementById("card-open");
  if (openHeading && SITE.openTo) openHeading.textContent = SITE.openTo;
  document.getElementById("card-seeking").textContent =
    SITE.seekingFocus || "Electrical engineering, robotics, and mechatronics.";
  document.title = `${SITE.name} — ${SITE.role}`;

  const social = document.getElementById("social-row");
  const links = [
    ["GitHub", SITE.github],
    ["LinkedIn", SITE.linkedin],
    ["Email", SITE.email ? `mailto:${SITE.email}` : ""],
    ["Resume", SITE.resume],
  ].filter(([, href]) => href);

  social.innerHTML = links
    .map(
      ([label, href]) =>
        `<a href="${esc(href)}" ${href.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener noreferrer"'}>${esc(label.slice(0, 2))}</a>`
    )
    .join("");
  social.querySelectorAll("a").forEach((anchor, index) => {
    anchor.setAttribute("aria-label", links[index][0]);
    anchor.title = links[index][0];
  });
}

function renderProjects() {
  const real = SITE.projects.length > 0;
  const items = real ? SITE.projects : EXAMPLES.projects;
  const lead = document.getElementById("projects-lead");
  lead.textContent = real
    ? "Boards, firmware, robots, and lab setups."
    : "These two cards are examples of the layout. Your projects replace them as soon as you add one.";

  projectGrid.innerHTML = items
    .map((project, index) => {
      const photos = projectPhotos(project);
      const media = photos.length
        ? `<span class="card-photos${photos.length === 1 ? " card-photos-single" : ""}">${photos
            .map(
              (photo) =>
                `<img class="card-photo" src="${esc(photo.src)}" alt="${esc(photo.alt || project.title)}">`
            )
            .join("")}</span>`
        : project.video
        ? `<span class="card-photos card-photos-video">${videoTag(project.video, false)}</span>`
        : boardArt(index);
      const kicker = project.example ? "Example" : esc(project.year || "");
      const linkRow = (project.links || [])
        .filter((link) => link.href)
        .map(
          (link) =>
            `<a class="card-link" href="${esc(link.href)}" target="_blank" rel="noopener noreferrer">${esc(link.label || "Link")}</a>`
        )
        .join("");
      return `
        <div class="project-card" role="button" tabindex="0" data-index="${index}" data-example="${project.example ? "1" : "0"}">
          ${media}
          <span class="card-body">
            <span class="card-kicker"><span>${kicker}</span><span>${project.example ? "Placeholder" : "Open"}</span></span>
            <h3>${esc(project.title)}</h3>
            <p>${esc(project.summary)}</p>
            <span class="tags">${tagsHtml(project.tags)}</span>
            ${linkRow ? `<span class="card-links">${linkRow}</span>` : ""}
            <span class="card-open" aria-hidden="true">→</span>
          </span>
        </div>`;
    })
    .join("");

  projectGrid.querySelectorAll(".project-card").forEach((card) => {
    const open = () => openProject(items[Number(card.dataset.index)]);
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, video")) return;
      open();
    });
    card.addEventListener("keydown", (event) => {
      if (event.target.closest("a, video")) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function videoTag(video, large) {
  return `<video class="${large ? "dialog-video" : "card-video"}" controls playsinline preload="metadata" src="${esc(video.src)}"></video>${
    video.caption && large ? `<figcaption>${esc(video.caption)}</figcaption>` : ""
  }`;
}

function projectPhotos(project) {
  if (Array.isArray(project.images) && project.images.length) return project.images;
  if (project.image) return [{ src: project.image, alt: project.title, caption: "" }];
  return [];
}

function openProject(project) {
  document.getElementById("dialog-year").textContent = project.example
    ? "Example card"
    : project.year || "Project";
  document.getElementById("dialog-title").textContent = project.title;
  document.getElementById("dialog-summary").textContent = project.summary || "";
  const gallery = document.getElementById("dialog-gallery");
  const photos = projectPhotos(project);
  const figures = photos
    .map(
      (photo) => `
        <figure>
          <img src="${esc(photo.src)}" alt="${esc(photo.alt || project.title)}">
          ${photo.caption ? `<figcaption>${esc(photo.caption)}</figcaption>` : ""}
        </figure>`
    )
    .join("");
  if (project.video) {
    gallery.hidden = false;
    gallery.innerHTML = `<figure class="dialog-video-wrap">${videoTag(project.video, true)}</figure>${figures}`;
  } else {
    gallery.hidden = photos.length === 0;
    gallery.innerHTML = figures;
  }
  document.getElementById("dialog-tags").innerHTML = tagsHtml(project.tags);
  document.getElementById("dialog-highlights").innerHTML = (project.highlights || [])
    .map((item) => `<li>${esc(item)}</li>`)
    .join("");
  const links = document.getElementById("dialog-links");
  links.innerHTML = (project.links || [])
    .filter((link) => link.href)
    .map(
      (link) =>
        `<a class="btn btn-ghost" href="${esc(link.href)}" target="_blank" rel="noopener noreferrer">${esc(link.label || "Link")}</a>`
    )
    .join("");
  dialog.showModal();
}

function renderExperience() {
  const real = SITE.experience.length > 0;
  const items = real ? SITE.experience : EXAMPLES.experience;
  rolesEl.innerHTML = items
    .map((role, index) => {
      const open = index === 0;
      const place = [role.location, role.example ? "Example" : ""]
        .filter(Boolean)
        .join(" · ");
      return `
        <article class="role-item${open ? " open" : ""}">
          <button class="role-toggle" type="button" aria-expanded="${open ? "true" : "false"}">
            <span>
              <span class="role-org">${esc(role.org)}</span>
              <span class="role-meta"> · ${esc(role.role)}</span>
              <div class="role-meta">${esc(place)}</div>
            </span>
            <span class="role-dates">${esc(role.dates || "")}</span>
            <span class="chevron" aria-hidden="true">↓</span>
          </button>
          <div class="role-panel">
            <p>${esc(role.summary || "")}</p>
            <ul>${(role.highlights || []).map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
            ${
              role.href
                ? `<p><a href="${esc(role.href)}">Related project</a></p>`
                : ""
            }
          </div>
        </article>`;
    })
    .join("");

  rolesEl.querySelectorAll(".role-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".role-item");
      const open = item.classList.toggle("open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
}

function renderAbout() {
  document.getElementById("about-copy").innerHTML = (SITE.about || [])
    .map((paragraph) => `<p>${esc(paragraph)}</p>`)
    .join("");
  document.getElementById("glance").innerHTML = (SITE.glance || [])
    .map(
      (item) =>
        `<article><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></article>`
    )
    .join("");
  document.getElementById("skill-groups").innerHTML = (SITE.skills || [])
    .map(
      (group) => `
        <div class="skill-row">
          <h3>${esc(group.group)}</h3>
          <div class="tags">${tagsHtml(group.items)}</div>
        </div>`
    )
    .join("");
}

function renderContact() {
  const actions = document.getElementById("contact-actions");
  const lead = document.getElementById("contact-lead");
  const items = [
    SITE.email ? ["Email", `mailto:${SITE.email}`] : null,
    SITE.phone ? ["Phone", `tel:${SITE.phone}`] : null,
    SITE.linkedin ? ["LinkedIn", SITE.linkedin] : null,
    SITE.github ? ["GitHub", SITE.github] : null,
    SITE.resume ? ["Resume", SITE.resume] : null,
  ].filter(Boolean);

  if (!items.length) {
    lead.textContent =
      "Email, LinkedIn, GitHub, and a resume link will show up here once you add them.";
    actions.innerHTML = "";
    return;
  }

  lead.textContent = SITE.seeking;
  actions.innerHTML = items
    .map(([label, href]) => {
      const external = href.startsWith("http");
      return `<a class="btn ${label === "Email" ? "btn-primary" : "btn-ghost"}" href="${esc(href)}" ${
        external ? 'target="_blank" rel="noopener noreferrer"' : ""
      }>${esc(label)}</a>`;
    })
    .join("");
}

document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener("scroll", () => {
  document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 8);
}, { passive: true });

fillHero();
renderProjects();
renderExperience();
renderAbout();
renderContact();
