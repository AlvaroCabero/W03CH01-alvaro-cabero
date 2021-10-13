class Component {
  element;
  parentElement = document.body;
  tag = "div";
  constructor(parentElement, className, tag) {
    this.element = document.querySelector(tag);
    this.element.className = className;
    this.parentElement = parentElement;
    this.parentElement.append(this.element);
  }
}

export default Component;
