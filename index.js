const fs = require("fs");
const inquirer = require("inquirer");
const {} = require("./lib/shapes");

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

    fs.writeFile("./examples/logo.svg", data, () => {
      // TO DO: add function to create svg file

      console.log("Generated logo.svg");
    });
  });