class readMore {
  constructor() {
    this.content = ".readmore__content";
    this.buttonToggle = ".readmore__toggle";
  }

  bootstrap() {
    this.setNodes();
    this.init();
    this.addEventListeners();
  }

  setNodes() {
    this.nodes = {
      contentToggle: document.querySelector(this.content),
    };

    this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(
      this.buttonToggle
    );
  }

  init() {
    const { contentToggle } = this.nodes;

    this.stateContent = contentToggle.innerHTML;

    contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`;
  }

  addEventListeners() {
    this.buttonToggle.addEventListener("click", this.onClick.bind(this));
  }

  onClick(event) {
    const targetEvent = event.currentTarget;
    const { contentToggle } = this.nodes;

    if (targetEvent.getAttribute("aria-checked") === "true") {
      targetEvent.setAttribute("aria-checked", "false");
      contentToggle.innerHTML = this.stateContent;
      this.buttonToggle.innerHTML = "Show less";
    } else {
      targetEvent.setAttribute("aria-checked", "true");
      contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`;
      this.buttonToggle.innerHTML = "Show more";
    }
  }
}

const initReadMore = new readMore();
initReadMore.bootstrap();

// ==================================

const faqItemHead = document.querySelectorAll(".faq-item-head");

faqItemHead.forEach((head, index) => {
  head.addEventListener("click", () => {
    let icon = head.querySelector(".faq-item-icon").firstElementChild;
    if (icon.className == "fa fa-chevron-down") {
      head.nextElementSibling.classList.add("show-para");
      icon.className = "fa fa-chevron-up";
    } else if (icon.className == "fa fa-chevron-up") {
      head.nextElementSibling.classList.remove("show-para");
      icon.className = "fa fa-chevron-down";
    }
  });
});
