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
const inputSelectedFile = document.getElementById("inputfile");
let contentFile = undefined;
let productsFromFile = [];
const currentFilepage = () => {
  const localpath = window.location.href.split("/");
  return localpath[localpath.length - 1].replace(" ", "");
};

const getItemsFromFile = (content, sep = ",") => {
  let items = [];
  let [headersFile, ...rowsFile] = content.split("\n");
  headersFile = headersFile.split(sep);
  items = rowsFile.map((row) => {
    let item = {};
    let columns = row.split(sep);
    headersFile.forEach((header, i) => {
      item = { ...item, [header]: columns[i] };
    });

    return item;
  });
  return items;
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

inputSelectedFile.addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    contentFile = fr.result;
    productsFromFile = getItemsFromFile(contentFile);
    localStorage.setItem("products", JSON.stringify(productsFromFile));
  };
  
  fr.readAsText(this.files[0]);
});

generateNavItems(pages);
