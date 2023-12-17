const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      name: "characters",
      message: "Please enter three characters.",
    },
    {
      type: "input",
      name: "text_color",
      message: "What color would you like for your text?",
    },
    {
      type: "list",
      name: "shapes",
      message: "Choose a shape for your logo.",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shape_color",
      message: "What color would you like your shape to be?",
    },
  ])
  .then(response => {

    var svgCode ="";

    let selectedShape;
    if (response.shapes === "circle"){
      selectedShape = new Circle(response.characters, response.text_color);
    }
    else if (response.shapes === "triangle"){
      selectedShape = new Triangle(response.characters, response.text_color);
    }
    else if (response.shapes === "square"){
      selectedShape = new Square(response.characters, response.text_color);
    }

    selectedShape.setColor(response.shape_color)

    svgCode += selectedShape.render(); 

    fs.writeFile("./examples/logo.svg", svgCode, () => {
      
      console.log("Generated logo.svg");
    });
  });