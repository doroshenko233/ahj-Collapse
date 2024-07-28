export default class Collapse {
  constructor(container) {
    this.container = container;
  }

  init() {
    this.bindToDOM();
    this.registerEvents();
  }

  bindToDOM() {
    const template = this.markup();
    this.container.insertAdjacentHTML("afterbegin", template);
    this.collapseBtn = this.container.querySelector(".btn");
    this.collapseBodyElement = this.container.querySelector(".collapse__body");
  }

  markup() {
    return `
      <div class='collapse__container'>
        <div class='collapse__button'>
          <button class='btn btn-primary' data-aria-expanded='false'>Collapse</button>
        </div>
        <div class='collapse__body'>
          <p class='collapse__text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae commodi 
            doloribus impedit molestias non officiis quasi repellendus reprehenderit ut. 
            Aliquam at autem dolorum illo nulla optio quaerat recusandae sequi!
          </p>
        </div>
      </div>
    `;
  }

  registerEvents() {
    this.collapseBtn.addEventListener("click", (event) =>
      this.onCollapseBtnClick(event),
    );
  }

  onCollapseBtnClick(event) {
    this.isClicked = event.target.dataset.ariaExpanded;
    if (this.isClicked === "false") {
      this.collapseBodyElement.style.display = "block";
      const textParams = this.collapseBodyElement
        .querySelector(".collapse__text")
        .getBoundingClientRect();
      this.collapseBodyElement.style.height = `${textParams.height}px`;
      event.target.dataset.ariaExpanded = "true";
    } else {
      event.target.dataset.ariaExpanded = "false";
      this.collapseBodyElement.style.height = 0;
      setTimeout(() => {
        this.collapseBodyElement.style.display = "none";
      }, 300);
    }
  }
}
