const Menu = () => {
  const div = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.innerText = "Menu";
  div.appendChild(h1);

  const h2 = document.createElement("h2");
  h2.innerText = "Club Salad";
  div.appendChild(h2);

  const p = document.createElement("p");
  p.innerText =
    "Mixture of spinach, romaine, tomatoes, carrots, cucumbers and half boiled egg topped with turkey and ham, Swiss and American cheese. Served with dressing of choice.";
  div.appendChild(p);

  const price = document.createElement("p");
  price.innerText = "$8.99";
  div.appendChild(price);

  const content = document.querySelector("#content");
  content.appendChild(div);
};

export default Menu;
