class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Rosales Nolasco Damian
      </p>`;
  }
}

customElements.define("mi-footer", MiFooter);
