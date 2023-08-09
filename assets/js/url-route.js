const urlPageTitle = "MOTH";
const sidebar = document.getElementById("sidebar");

document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches(".nav_link")) return;

  e.preventDefault();
  urlRoute();
});

document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches(".nav_link .icon")) return;

  e.preventDefault();
  urlRoute();
});

sidebar.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches(".sidebar_link")) return;

  e.preventDefault();
  urlRoute();
});

const urlRoutes = {
  "/": {
    template: "/pages/home.html",
    title: "MOTH Drinks - The Best Coktails in a Can",
    description: "This is home page",
  },
  "/collections": {
    template: "/pages/collections.html",
    title: "Collections - " + urlPageTitle,
    description: "this is collections page",
  },
  "/gift": {
    template: "/pages/gift.html",
    title: "Collections - " + urlPageTitle,
    description: "this is gift page",
  },
  "/story": {
    template: "/pages/story.html",
    title: "Collections - " + urlPageTitle,
    description: "this is stories page",
  },
  "/about": {
    template: "/pages/about.html",
    title: "About - " + urlPageTitle,
    description: "this is about page",
  },
  "/account": {
    template: "/pages/account.html",
    title: "Account - " + urlPageTitle,
    description: "this is account page",
  },
};

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlLocationHandle();
};

const urlLocationHandle = async () => {
  const location = window.location.pathname;
  if (location.length == 0) {
    location = "/";
  }

  const route = urlRoutes[location];
  const html = await fetch(route.template).then((res) => res.text());
  document.getElementById("main").innerHTML = html;
  document.title = route.title;
  document
    .querySelector("meta[name='description']")
    .setAttribute("content", route.description);
};

window.onpopstate = urlLocationHandle;
window.route = urlRoute;

urlLocationHandle();
