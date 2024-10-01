//complete this code
class Rectangle {
	constructor(width, height){
		this.width=width;
		this.height=height;
class Rectangle{
	constructor(width, height) {
		this.width = width;
		this.height = height;
}
	get width(){
		return this.width;

	get getWidth() {
	    return this.width;
}
	get height(){
		return this.height;
	
	get getHeight() {
	    return this.height;
}

	set width(newWidth){
		this.width=newWidth;
	set setWidth(width) {
		this.width  = width;
}
	get height(newHeight){
		this.height=newHeight;

	set setHeight(height) {
		this.height  = height;
}

	getArea(){
		return this.width*this.height;
	getArea() {
		return this.width  * this.height;
}
}

class Square extends Rectangle {
	constructor(side){
		 super(side,side);
		 this.side=side;
	constructor(side) {
		super(side, side);
        this.side = side;
}

	getPerimeter(){
		return 4*this.side;
	
	getPerimeter() {
		return 4 * this.side;
}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
window.Square = Square;