//complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  
  get width() {
    return this._width; // Fixed the typo
  }
  
  get height() {
    return this._height; // Corrected the getter syntax
  }

  getArea() {
    return this._width * this._height; // Returns the area of the rectangle
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width; 
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
