const Contact = () => {
  const div = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.innerText = "Contact";
  div.appendChild(h1);

  const content = document.querySelector("#content");
  content.appendChild(div);
};

export default Contact;
