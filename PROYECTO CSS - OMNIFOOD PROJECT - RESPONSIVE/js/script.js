/****************************************/
/* DOM SECTION COMUNES*/
/****************************************/
const headerEl = document.querySelector(".header");
const heroSectionEl = document.querySelector(".section-hero");

/****************************************/
/* STICKY NAVIGATION */
/****************************************/

/*la clase de sticky solo la pondré en la cabecera cuando hayamos pasado la sección de hero*/
/*entonces usaré un observador para saber cuando el scroll haya pasad la hero section*/
const observer = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    //console.log(entry);
    if (entry.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (entry.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-96px",
  }
);
observer.observe(heroSectionEl);

/****************************************/
/* SMOOTH SCROLLING ANIMATION */
/****************************************/
const allLinks = document.querySelectorAll("a:link");
/*console.log(allLinks);*/

/*allLinks.forEach((link) => {
  console.log(link);
});*/

/* const printLink = function (link) {
  console.log(link);
};
allLinks.forEach(printLink); */

/*
const eventoLink = function (e) {
  e.preventDefault();

  //const el = e.target.closest("a");
  //console.log(el.getAttribute("href"));

  const href = e.currentTarget.getAttribute("href");

  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
*/

/*
allLinks.forEach(function (link) {
  link.addEventListener("click", eventoLink);
});
*/

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll al principio de la página
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    //Scroll a otra sección de la página
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Cerrando navegación hamburguesa
    if (link.classList.contains("main-nav-link")) {
      console.log("menú hamburguesa");
      headerEl.classList.toggle("nav-open");
    }
  });
});

/****************************************/
/* NAVIGATION MENU */
/****************************************/

/* sin delegación */
/*
const openMenuBtnMobile = document.querySelector(
  ".icon-mobile-nav[name='menu-outline']"
);
const closeMenuBtnMobile = document.querySelector(
  ".icon-mobile-nav[name='close-outline']"
);
openMenuBtnMobile.addEventListener("click", function () {
  headerEl.classList.add("nav-open");
});

closeMenuBtnMobile.addEventListener("click", function () {
  headerEl.classList.remove("nav-open");
});
*/

/*con delegación*/
const btnNavEl = document.querySelector(".btn-mobile-nav");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/****************************************/
/* FOOTER SECTION */
/****************************************/
const yearEl = document.querySelector(".year");
const updateYear = function () {
  yearEl.textContent = new Date().getFullYear();
};

/* init */
updateYear();
