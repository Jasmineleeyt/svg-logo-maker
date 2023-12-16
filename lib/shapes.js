
class Shape {
    constructor(){ 
        this.color = shapes;
    }
    setColor(color){ 
        this.color = color;
    }
}

class Circle extends Shape {
    render(){
        `<circle cx="25" cy="75" r="20" style="fill:${this.color}/>`
    }
}

class Square extends Shape {
    render(){
        `<rect x="50" y="20" width="150" height="150" style="fill:${this.color}"/>`
    }
}

class Triangle extends Shape {
    render(){
        `<polygon points="100 30, 200 200, 0 200" style="fill:${this.color}/>`
    }
}

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}