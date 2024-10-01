//complete this code
class Rectangle {}
class Rectangle {
    constructor(width, height){
        this.width=width;
        this.height=height;
    }
    get getArea(){
        return (width,height);
    }
}

class Square extends Animal {}
class Square extends Animal {
    constructor(width,height){
        super();
        this.width=width;
        this.height=height;
    }
    getPerimeter(){
        //perimeter=4*(a*a)
        let result=4*(width*width);
        return result;
    }
}

let result=new Rectangle(4,5);
console.log(result.getPerimeter);
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;