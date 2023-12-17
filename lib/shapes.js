// Define Shape class to include the common properties that are shared among all shapes
class Shape { 
    constructor(characters, text_color){ 
        this.characters = characters;
        this.textColor = text_color;
        this.svgCanvas = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">`
        this.svgText = `<text x="150" y="170" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`
    }
    setColor(shape_color) {
        this.shapeColor = shape_color;
    }
    render(){
        return ""
    }
}

//Defines Circle class
class Circle extends Shape {
    // Inherit from Shape class
    constructor(characters, text_color) {
        super(characters, text_color);
    }
    // Renders a circle in SVG
    render(){
        return this.svgCanvas + `<circle cx="150" cy="150" r="110" fill="${this.shapeColor}"/>` + this.svgText + `</svg>`
    }
}

//Defines Square class
class Square extends Shape {
    // Inherit from Shape class
    constructor(characters, text_color, shape_color) {
        super(characters, text_color, shape_color);
    }
    // Renders a square in SVG
    render(){
        return this.svgCanvas + `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}"/>` + this.svgText + `</svg>`
    }
}

//Defines Triangle class
class Triangle extends Shape {
    // Inherit from Shape class
    constructor(characters, text_color, shape_color) {
        super(characters, text_color, shape_color);
    }
    render(){
        // Renders a triangle in SVG 
        return this.svgCanvas + `<polygon points="150 20, 270 230, 30 230" fill="${this.shapeColor}"/>` + this.svgText + `</svg>`
    }
}

// Export the classes to use in another file
module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}