//complete this code
class Rectangle {}
class Rectangle {
	constructor(getwidth , getheight)
	{
		this.width = getwidth;
		this.height = getheight;
	}
	getArea()
	{
		let w = this.width;
		let h = this.height;
		let area = w*h;
		return area;
	}
}

class Square extends Animal {}
class Square extends Rectangle {
	constructor(a)
	{
		// this.a = a;
		super(a,a);
	}
	getPerimeter()
	{
       let area = 4 * this.width;
		return area;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;