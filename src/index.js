import "./style.css";
import initialPage from "./initial-page";
import Menu from "./menu";
import Contact from "./contact";

initialPage();

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const menuTab = document.querySelector(".menu-btn");
menuTab.onclick = () => {
  const content = document.querySelector("#content");
  removeAllChildNodes(content);
  Menu();
};

const contactTab = document.querySelector(".contact-btn");
contactTab.addEventListener("click", () => {
  const content = document.querySelector("#content");
  removeAllChildNodes(content);
  Contact();
});
