const pages = [
  {
    page: "Inicio",
    url: "../admin/admin.html",
    file: "admin.html",
  },
  {
    page: "Ventas",
    url: "../sale/sale.html",
    file: "sale.html",
  },
];

const currentFilepage = () => {
  const localpath = window.location.href.split("/");
  return localpath[localpath.length - 1].replace(" ", "");
};
const generateNavItems = (pages) => {
  let ulItemsDom = document.querySelector(".nav_items");

  const items = pages.map(({ page, url, file }) => {
    const currentFile = currentFilepage();
    return `<li class="nav_item"><a class="nav_item_link${
      file == currentFile ? " active" : ""
    }" href="${url}">${page}</a> </li>`;
  });
  
  ulItemsDom.innerHTML = items.join("");
};
generateNavItems(pages);
