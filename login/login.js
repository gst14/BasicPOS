const users = [
  {
    username: "admin",
    password: "admin",
    allow: [
      { page: "sale_page", default: false },
      { page: "home_page", default: true },
    ],
  },
  {
    username: "empl",
    password: "empl",
    allow: [{ page: "sale_page", default: true }],
  },
];

const pages = [
  {
    page: "home_page",
    url: "../admin/admin.html",
  },
  {
    page: "sale_page",
    url: "../sale/sale.html",
  },
];

window.addEventListener("load", () => {
  let user = sessionStorage.getItem("user");
  if (user) {
    console.log(`Usuario: ${user}`);
    // window.location = ''
  } else {
    console.log("No hay usuario logueado");
  }
});

const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
let btn_login = document.querySelector("#btn-login");

btn_login.addEventListener("click", (e) => {
  if (usernameInput.value == "" || passwordInput.value == "") {
    alert("Debes ingresar datos validos para iniciar sesion");
    return;
  }

  let userToLog = users.find((user) => {
    return (
      user.username === usernameInput.value &&
      user.password === passwordInput.value
    );
  });

  if (!userToLog) {
    alert("Los datos ingresados no coinciden con algun usuario registrado");
    return;
  }

  let pageDefault = userToLog.allow.find((page) => page.default);
  console.log(pageDefault);
  let location = pages.find((p) => p.page === pageDefault.page);
  console.log(location);
  window.location = location.url;
});
