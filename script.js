const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project");
const languageButtons = document.querySelectorAll("[data-language]");
const originalText = new Map(
  [...document.querySelectorAll("[data-i18n]")].map((element) => [element, element.textContent])
);
const originalAttributes = new Map(
  [...document.querySelectorAll("[data-i18n-attr]")].map((element) => {
    const [attribute] = element.dataset.i18nAttr.split(":");
    return [element, [attribute, element.getAttribute(attribute)]];
  })
);

const translations = {
  en: {},
  de: {
    "meta.title": "Yasaman Najafi Jozani — KI & Data",
    "meta.description": "Portfolio von Yasaman Najafi Jozani: angewandte KI, Sprachtechnologien und wissenschaftliche Datenanalyse.",
    "home.label": "Yasaman Najafi Jozani, Startseite",
    "nav.label": "Hauptnavigation",
    "nav.work": "Erfahrungen",
    "nav.about": "Über mich",
    "nav.contact": "Kontakt",
    "language.label": "Sprache auswählen",
    "hero.eyebrow": "KI & DATA SCIENCE",
    "hero.portfolio": "PORTFOLIO",
    "hero.intro": "Ob angewandte KI, Sprachtechnologien oder komplexe Daten: Ich suche nach Mustern, prüfe ihre Bedeutung und verfolge, wohin neue Ideen führen.",
    "hero.explore": "Erfahrungen entdecken",
    "hero.github": "GitHub-Profil",
    "portrait.alt": "Yasaman Najafi Jozani neben einem Baum",
    "work.eyebrow": "01 / ERFAHRUNG",
    "work.selected": "Ausgewählte",
    "work.experiences": "Erfahrungen",
    "work.note": "Projekte aus Data Science und KI-Engineering.",
    "filter.label": "Projekte filtern",
    "filter.science": "Data Science",
    "filter.ai": "KI-Engineering",
    "meta.science": "ERFAHRUNG IN DATA SCIENCE",
    "meta.ai": "ERFAHRUNG IM KI-ENGINEERING",
    "tags.methods": "Technologien und Methoden",
    "tags.technologies": "Technologien",
    "tags.template": "Template-Fitting",
    "tags.flux": "Photonenflussanalyse",
    "tags.bayesian": "Bayes'sche Inferenz",
    "tags.lensing": "Gravitationslinseneffekt",
    "tags.sentiment": "Sentimentanalyse",
    "tags.generative": "Generative KI",
    "ams.visual.alt": "Offizielle AMS-02-Website besuchen",
    "ams.image.alt": "AMS-02-Detektor an der Internationalen Raumstation",
    "ams.visual.kicker": "AMS02 / DATENANALYSE",
    "ams.visual.caption": "DAS ALPHA-MAGNET-SPEKTROMETER AUF DER ISS",
    "ams.title": "AMS-02: Das Alpha-Magnet-Spektrometer",
    "ams.summary": "An der RWTH Aachen leitete ich die durchgängige Analyse von Hunderten Milliarden AMS-02-Ereignissen. Dafür entwickelte ich reproduzierbare Workflows für Datenintegration, Validierung und HPC-Verarbeitung, überwiegend in Python und mit einigen C++-Komponenten. Mit Template-Fitting, Bayes'scher Inferenz und Monte-Carlo-Simulationen bestimmte ich den Photonenfluss und trennte seltene, schwache Signale vom Hintergrund.",
    "ams.link.about": "Über AMS-02",
    "links.source": "Quellcode ansehen",
    "kids.visual.kicker": "SCHWACHER GRAVITATIONSLINSENEFFEKT / KOSMOLOGIE",
    "kids.visual.caption": "DIE MATERIEVERTEILUNG VERMESSEN",
    "kids.image.alt": "Visualisierung der kosmischen Scherung von KiDS-1000",
    "kids.dates": "Feb. 2020 – Apr. 2021",
    "kids.summary": "Für meine Masterarbeit an der Universität Bonn analysierte ich rund 21 Millionen Galaxienbeobachtungen mit Python (NumPy, SciPy, Pandas und Matplotlib) und entwickelte reproduzierbare Abläufe zur Datenvalidierung und Korrektur systematischer Fehler. Mit Bayes'scher Inferenz und likelihood-basierten Modellen in CosmoSIS bestimmte ich kosmologische Parameter. Korrelationsfunktionsanalysen einschließlich E-/B-Moden-Dekomposition dienten dazu, schwache Gravitationslinsensignale zu messen und systematische Effekte zu kontrollieren. Außerdem trug ich statistische Analysen und die Validierung der Methodik zu einer begutachteten Veröffentlichung in Astronomy & Astrophysics (2022) bei.",
    "kids.link.data": "KiDS-1000-Daten zum Gravitationslinseneffekt",
    "kids.link.publication": "Zur Veröffentlichung",
    "travel.visual.label": "DIE REISE PLANEN",
    "travel.weather": "WETTER",
    "travel.forecast": "Vorhersage",
    "travel.transit": "ÖPNV",
    "travel.routes": "Verbindungen",
    "travel.currency": "WÄHRUNG",
    "travel.exchange": "Wechselkurs",
    "travel.title": "KI-Reiseberater",
    "travel.summary": "Ich entwickelte einen dialogbasierten Reiseberater mit der OpenAI-API und einem eigenen FastAPI-Backend. Systemanweisungen und Tool-Integrationen helfen dem Modell, strukturierte Tagespläne mit aktuellen Informationen zu Wetter, Währung und Verkehr zu erstellen. Frontend und Backend sind auf Vercel bereitgestellt.",
    "links.live": "Live-App öffnen",
    "sentiment.screen": "STIMMUNGSBILD",
    "sentiment.positive": "POSITIV",
    "sentiment.neutral": "NEUTRAL",
    "sentiment.negative": "NEGATIV",
    "reviews.title": "Sentimentanalyse von Amazon-Bewertungen",
    "reviews.summary": "Gemeinsam entwickelten wir ein NLP-Projekt zur Analyse von Amazon-Kundenbewertungen. Für die Sentiment-Klassifikation kombinierten wir TF-IDF und Text-Embeddings mit feinabgestimmten vortrainierten Hugging-Face-Modellen sowie einem eigenen Modell. Außerdem untersuchten wir Produktkategorien und erstellten kurze Zusammenfassungen der Bewertungen. Die interaktive App wurde mit Streamlit bereitgestellt.",
    "about.heading.first": "Neugier ist",
    "about.heading.second": "eine ",
    "about.heading.emphasis": "Arbeitsweise.",
    "about.summary": "Mit meinem Physik-Hintergrund und mehr als fünf Jahren Erfahrung in der Big-Data-Analyse interessieren mich Fragestellungen, bei denen sorgfältiges Denken ein aussagekräftiges Signal sichtbar macht. Komplexe Fragen gehe ich analytisch und mit fundierten Statistikkenntnissen an. Dieselbe Neugier bringe ich ins KI-Engineering ein und entwickle Projekte, die APIs und KI-Tools mit praktischen Anwendungen verbinden.",
    "about.discipline.one": "01 / Angewandtes maschinelles Lernen",
    "about.discipline.two": "02 / Sprach- und generative KI",
    "about.discipline.three": "03 / Experimentelle Datenanalyse",
    "contact.eyebrow": "03 / KONTAKT",
    "contact.heading.first": "Eine gute",
    "contact.heading.second": "Frage?",
    "contact.summary": "Für Kooperationen, Projektgespräche oder einen anregenden Austausch.",
    "contact.github": "Auf GitHub ansehen",
    "footer.credit": "MIT NEUGIER GEMACHT · 2026",
    "footer.top": "ZURÜCK NACH OBEN ↑"
  }
};

function setLanguage(language) {
  const dictionary = translations[language] ?? translations.en;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = dictionary[element.dataset.i18n] ?? originalText.get(element);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const [attribute, key] = element.dataset.i18nAttr.split(":");
    element.setAttribute(attribute, dictionary[key] ?? originalAttributes.get(element)?.[1] ?? "");
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });

  try {
    localStorage.setItem("portfolio-language", language);
  } catch {}
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

let initialLanguage = "en";
try {
  initialLanguage = localStorage.getItem("portfolio-language") === "de" ? "de" : "en";
} catch {}
setLanguage(initialLanguage);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-active");
    button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));

    let selectedFilters = [...filterButtons]
      .filter((item) => item.classList.contains("is-active"))
      .map((item) => item.dataset.filter);

    if (selectedFilters.length === 0) {
      filterButtons.forEach((item) => {
        item.classList.add("is-active");
        item.setAttribute("aria-pressed", "true");
      });
      selectedFilters = [...filterButtons].map((item) => item.dataset.filter);
    }

    projects.forEach((project) => {
      project.hidden = !selectedFilters.includes(project.dataset.category);
    });
  });
});
