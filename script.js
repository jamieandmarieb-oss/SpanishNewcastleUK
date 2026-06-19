import hispanicWorldData from "./data.js";

const categoryLabels = {
  newspapers: "Newspapers",
  magazines: "Magazines",
  youtubeChannels: "YouTube Channels",
  musicians: "Musicians",
  artists: "Artists",
  writers: "Writers",
  celebrities: "Celebrities"
};

const categoryIcons = {
  newspapers: "News",
  magazines: "Features",
  youtubeChannels: "Video",
  musicians: "Music",
  artists: "Art",
  writers: "Books",
  celebrities: "People"
};

const countriesContainer = document.querySelector("#countries");
const searchInput = document.querySelector("#searchInput");
const countryFilter = document.querySelector("#countryFilter");
const categoryFilter = document.querySelector("#categoryFilter");
const resetFilters = document.querySelector("#resetFilters");
const resultCount = document.querySelector("#resultCount");
const backToTop = document.querySelector("#backToTop");

function normaliseText(value) {
  return String(value || "")
    .toLocaleLowerCase("en")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function makeElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function populateFilters() {
  hispanicWorldData.forEach(({ country }) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countryFilter.append(option);
  });

  Object.entries(categoryLabels).forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    categoryFilter.append(option);
  });
}

function createPlaceholder(name, categoryKey) {
  const placeholder = makeElement("div", "entry-placeholder");
  placeholder.setAttribute("role", "img");
  placeholder.setAttribute("aria-label", `${name} ${categoryLabels[categoryKey] || "resource"} placeholder`);
  placeholder.textContent = (name || "?").slice(0, 2).toLocaleUpperCase("en");
  return placeholder;
}

function createEntryCard(entry, categoryKey, countryName) {
  const card = makeElement("article", "entry-card");
  card.dataset.category = categoryKey;
  card.dataset.country = countryName;

  const media = makeElement("div", "entry-media");
  if (entry.image) {
    const image = document.createElement("img");
    image.src = entry.image;
    image.alt = `${entry.name}, ${categoryLabels[categoryKey]} from ${countryName}`;
    image.loading = "lazy";
    media.append(image);
  } else {
    media.append(createPlaceholder(entry.name, categoryKey));
  }

  const body = makeElement("div", "entry-body");
  const meta = makeElement("p", "entry-meta", `${countryName} · ${categoryLabels[categoryKey]}`);
  const title = makeElement("h4", "", entry.name || "Untitled resource");
  const description = makeElement("p", "", entry.description || "Description unavailable.");
  const link = document.createElement("a");
  link.className = entry.url ? "visit-button" : "visit-button disabled";
  link.textContent = entry.url ? "Visit" : "Unavailable";
  link.setAttribute("aria-label", entry.url ? `Visit ${entry.name}` : `${entry.name} link unavailable`);

  if (entry.url) {
    link.href = entry.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.setAttribute("aria-disabled", "true");
    link.tabIndex = -1;
  }

  body.append(meta, title, description, link);
  card.append(media, body);
  return card;
}

function createCategoryBlock(categoryKey, entries, countryName) {
  const block = makeElement("section", "category-block");
  block.dataset.categoryBlock = categoryKey;

  const header = makeElement("div", "category-header");
  const labelWrap = makeElement("div");
  const eyebrow = makeElement("span", "category-chip", categoryIcons[categoryKey] || "Resource");
  const heading = makeElement("h3", "", categoryLabels[categoryKey] || categoryKey);
  labelWrap.append(eyebrow, heading);

  const count = makeElement("span", "category-count", `${entries.length} entries`);
  header.append(labelWrap, count);

  const grid = makeElement("div", "entries-grid");
  entries.forEach((entry) => grid.append(createEntryCard(entry, categoryKey, countryName)));
  block.append(header, grid);
  return block;
}

function createCountrySection(countryData, categoryKey = "all", query = "") {
  const section = makeElement("article", "country-card");
  section.dataset.country = countryData.country;

  const header = makeElement("div", "country-image-wrap");
  const image = document.createElement("img");
  image.src = countryData.image;
  image.alt = countryData.imageAlt || `${countryData.country} cultural photograph`;
  image.loading = "eager";
  header.append(image);

  const content = makeElement("div", "country-content");
  const titleRow = makeElement("div", "country-title-row");
  const title = makeElement("h2", "", `${countryData.flag} ${countryData.country}`);
  const toggle = makeElement("button", "collapse-button", "Collapse");
  const bottomToggle = makeElement("button", "collapse-button collapse-button-bottom", "Collapse");
  const bodyId = `country-${normaliseText(countryData.country).replace(/\s+/g, "-")}`;
  [toggle, bottomToggle].forEach((button) => {
    button.type = "button";
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-controls", bodyId);
    button.setAttribute("aria-label", `Collapse ${countryData.country} resources`);
  });
  titleRow.append(title, toggle);

  const intro = makeElement("p", "country-intro", countryData.intro);
  const body = makeElement("div", "country-body");
  body.id = bodyId;

  const selectedCategories = Object.entries(countryData.sections || {}).filter(([key]) => categoryKey === "all" || key === categoryKey);
  selectedCategories.forEach(([key, entries]) => {
    const filteredEntries = entries.filter((entry) => entryMatches(entry, query, countryData.country, key));
    if (filteredEntries.length > 0) {
      body.append(createCategoryBlock(key, filteredEntries, countryData.country));
    }
  });

  const setExpanded = (expanded) => {
    body.hidden = !expanded;
    section.classList.toggle("is-collapsed", !expanded);

    [toggle, bottomToggle].forEach((button) => {
      button.setAttribute("aria-expanded", String(expanded));
      button.setAttribute("aria-label", `${expanded ? "Collapse" : "Expand"} ${countryData.country} resources`);
      button.textContent = expanded ? "Collapse" : "Expand";
    });
  };

  [toggle, bottomToggle].forEach((button) => {
    button.addEventListener("click", () => {
      const willExpand = button.getAttribute("aria-expanded") !== "true";
      setExpanded(willExpand);

      if (button === bottomToggle && !willExpand) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  content.append(titleRow, intro, body, bottomToggle);
  section.append(header, content);
  return { element: section, entryCount: body.querySelectorAll(".entry-card").length };
}

function entryMatches(entry, query, countryName, categoryKey) {
  if (!query) return true;
  const haystack = normaliseText([
    countryName,
    categoryLabels[categoryKey],
    categoryKey,
    entry.name,
    entry.description
  ].join(" "));
  return haystack.includes(query);
}

function countryHasMatches(countryData, categoryKey, query) {
  if (countryFilter.value !== "all" && countryData.country !== countryFilter.value) return false;

  const countryText = normaliseText(`${countryData.country} ${countryData.intro}`);
  const countryNameMatches = query && countryText.includes(query);
  const categories = Object.entries(countryData.sections || {}).filter(([key]) => categoryKey === "all" || key === categoryKey);

  return categories.some(([key, entries]) => {
    if (countryNameMatches) return true;
    return entries.some((entry) => entryMatches(entry, query, countryData.country, key));
  });
}

function renderCountries(data) {
  countriesContainer.replaceChildren();
  const query = normaliseText(searchInput.value.trim());
  const selectedCategory = categoryFilter.value;
  let totalEntries = 0;
  let countryCount = 0;

  data
    .filter((countryData) => countryHasMatches(countryData, selectedCategory, query))
    .forEach((countryData) => {
      const { element, entryCount } = createCountrySection(countryData, selectedCategory, query);
      if (entryCount > 0) {
        countriesContainer.append(element);
        totalEntries += entryCount;
        countryCount += 1;
      }
    });

  if (countryCount === 0) {
    const empty = makeElement("div", "empty-state");
    empty.innerHTML = "<h2>No matching resources found</h2><p>Try a broader search term or reset the filters.</p>";
    countriesContainer.append(empty);
  }

  resultCount.textContent = `${countryCount} ${countryCount === 1 ? "country" : "countries"} · ${totalEntries} ${totalEntries === 1 ? "resource" : "resources"} shown`;
}

function applyFilters() {
  renderCountries(hispanicWorldData);
}

function resetAllFilters() {
  searchInput.value = "";
  countryFilter.value = "all";
  categoryFilter.value = "all";
  renderCountries(hispanicWorldData);
  searchInput.focus();
}

function updateBackToTop() {
  backToTop.classList.toggle("is-visible", window.scrollY > 420);
}

populateFilters();
renderCountries(hispanicWorldData);

searchInput.addEventListener("input", applyFilters);
countryFilter.addEventListener("change", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
resetFilters.addEventListener("click", resetAllFilters);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateBackToTop, { passive: true });
