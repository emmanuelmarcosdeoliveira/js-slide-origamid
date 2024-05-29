export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalposition: 0, startX: 0, movement: 0 };
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px , 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.4;
    return this.dist.finalposition - this.dist.movement;
  }

  onStart(event) {
    event.preventDefault();
    this.dist.startX = event.clientX;
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  onMove(event) {
    const finalposition = this.updatePosition(event.clientX);
    this.moveSlide(finalposition);
  }

  onEnd(event) {
    this.wrapper.removeEventListener("mousemove", this.onMove);
    this.dist.finalposition = this.dist.movePosition;
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
