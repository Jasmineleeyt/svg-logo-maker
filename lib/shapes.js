
class Shape {
    constructor(characters, text_color){ 
        this.characters = characters;
        this.textColor = text_color;
        this.svgCanvas = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">`
        this.svgText = `<text x="150" y="160" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`
    }
    setColor(shape_color) {
        this.shapeColor = shape_color;
    }
    render(){
        return ""
    }
}

class Circle extends Shape {
    constructor(characters, text_color) {
        super(characters, text_color);
    }
    render(){
        return this.svgCanvas + `<circle cx="150" cy="150" r="120" fill="${this.shapeColor}"/>` + this.svgText
    }
}

class Square extends Shape {
    constructor(characters, text_color, shape_color) {
        super(characters, text_color, shape_color);
    }
    render(){
        return this.svgCanvas + `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}"/>` + this.svgText
    }
}

class Triangle extends Shape {
    constructor(characters, text_color, shape_color) {
        super(characters, text_color, shape_color);
    }
    render(){
        return this.svgCanvas + `<polygon points="140 30, 260 240, 20 240" fill="${this.shapeColor}"/>` + this.svgText
    }
}

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}