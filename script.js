//complete this code
class Rectangle {
constructor(width, height) {
    this.width = width;
    this.height = height;
    this._width = width;
    this._height = height;
}
  get widtH() {
    return this.width;

  get width() {
    return this._width;
}
  get heighT() {
    return this.height;

  get height() {
    return this._height;
}

getArea() {
    return (this.height * this.width);
    return this._width * this._height;
}
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

getPerimeter() {
    return (4 * super.width);
    return 4 * this.width;
}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;