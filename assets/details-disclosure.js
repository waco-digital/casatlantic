class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector("details");

    this.addEventListener("keyup", this.onKeyUp);
    this.addEventListener("click", this.click);
    this.mainDetailsToggle.addEventListener(
      "focusout",
      this.onFocusOut.bind(this)
    );
  }

  onKeyUp(event) {
    if (event.code.toUpperCase() !== "ESCAPE") return;

    const openDetailsElement = event.target.closest("details[open]");
    if (!openDetailsElement) return;

    const summaryElement = openDetailsElement.querySelector("summary");

    openDetailsElement.removeAttribute("open");
    summaryElement.focus();
  }

  click(event) {
    const header = document.getElementById("shopify-section-header");
    const openDetailsElement = event.target.closest("details[open]");
    if (!openDetailsElement) {
      header.classList.add("shopify-section-header-sticky");
    }
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  close() {
    this.mainDetailsToggle.removeAttribute("open");
  }
}

customElements.define("details-disclosure", DetailsDisclosure);
