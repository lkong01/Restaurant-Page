import RestaurantImg from "././jason-leung-poI7DelFiVA-unsplash.jpg";

const initialPage = () => {
  //add header consisting of menu and contact tabs
  const header = document.createElement("div");
  header.classList.add("header");

  const menu = document.createElement("button");
  menu.innerText = "Menu";
  menu.classList.add("menu-btn");
  header.appendChild(menu);

  const contact = document.createElement("button");
  contact.innerText = "Contact";
  contact.classList.add("contact-btn");
  header.appendChild(contact);

  const body = document.querySelector("body");
  body.insertBefore(header, body.children[0]);

  //add title, introduction and a picture to body
  const content = document.querySelector("#content");

  const h1 = document.createElement("h1");
  h1.innerText = "Restaurant";
  content.appendChild(h1);

  const p = document.createElement("p");
  p.innerText =
    "Very wonderful Restaurant. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo doloremque accusantium iste deserunt expedita quisquam nam cum earum, explicabo sit eveniet, beatae saepe accusamus culpa perferendis vel cupiditate non facilis";
  content.appendChild(p);

  const img = new Image();
  img.src = RestaurantImg;
  content.appendChild(img);
};

export default initialPage;
