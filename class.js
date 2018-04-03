// 老牌类，继承、封装
// https://segmentfault.com/a/1190000008739672
// http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html
// http://www.jianshu.com/p/dee9f8b14771
// http://www.jianshu.com/p/cd3fee40ef59

// ES6加入了Class概念
// http://es6.ruanyifeng.com/#docs/class
{
    // An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:
    // var p = new Rectangle(); // ReferenceError
    
    // class Rectangle {}
}

{
    class Rectangle{
        constructor(height, width) {
            this.height=height;
            this.width=width;
        }
        get area(){
        return this.calcArea() 
        }
        calcArea(){
            return this.height*this.width
        }

    }
    const square = new Rectangle(10, 10);
    console.log(square.area);

}

{
    class Point{
        constructor(x, y) {
            this.x= x;
            this.y= y;
        }
    
        static calcuDis(a, b){
            const dx = a.x -b.x;
            const dy = a.y -b.y;
            return Math.hypot(dx, dy)
        }
    
    }
    
    const p1 = new Point(5,5);
    const p2 = new Point(6,5);
    console.log(Point.calcuDis(p1, p2));
}
{
    class Animal{
        constructor(species) {
            this.species = species;    
        }
        speak(){
            console.log(this.species);
        }


    }
    class Dog extends Animal {
           speak(){
               console.log(this.species);
           } 
    };

    var d = new Dog('animal')
    d.speak();
    

}