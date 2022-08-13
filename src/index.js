import "./style.css";
import RestaurantImg from "././jason-leung-poI7DelFiVA-unsplash.jpg";

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
