/**
 * @classdesc A class for creating recipe pages
 *
 */
class RecipePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "/source/styles/recipe-page.css";

    const recipePage = document.getElementById("recipe-page-template").content;

    this.shadowRoot.append(stylesheet);
    this.shadowRoot.append(recipePage);
  }
}

customElements.define("recipe-page", RecipePage);