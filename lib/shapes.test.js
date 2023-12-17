const { Circle, Square, Triangle } = require("./shapes");

describe("circle", () => {
  it("should render a circle svg with the specified colors", () => {
  // Simulates the response from inquirer
  const response = {
    characters:"YAY",
    text_color:"red",
    shape_color:"green",
  }

  // Converts inquirer inputs into svg code
  selectedShape = new Circle(response.characters, response.text_color);
  selectedShape.setColor(response.shape_color)

  
    // Tests if what's generated is what expects
    expect(selectedShape.render()).toEqual(
      '<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="110" fill="green"/><text x="150" y="170" font-size="55" text-anchor="middle" fill="red">YAY</text></svg>'
    );
  });
});

describe("square", () => {
  it("should render a square svg with the specified colors", () => {
  // Simulates the response from inquirer
  const response = {
    characters:"YAY",
    text_color:"white",
    shape_color:"blue",
  }

  // Converts inquirer inputs into svg code
  selectedShape = new Square (response.characters, response.text_color);
  selectedShape.setColor(response.shape_color)

  
    // Tests if what's generated is what expects
    expect(selectedShape.render()).toEqual(
      '<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" fill="blue"/><text x="150" y="170" font-size="55" text-anchor="middle" fill="white">YAY</text></svg>'
    );
  });
});

describe("triangle", () => {
  it("should render a triangle svg with the specified colors", () => {
  // Simulates the response from inquirer
  const response = {
    characters:"YAY",
    text_color:"pink",
    shape_color:"purple",
  }

  // Converts inquirer inputs into svg code
  selectedShape = new Triangle(response.characters, response.text_color);
  selectedShape.setColor(response.shape_color)

  
    // Tests if what's generated is what expects
    expect(selectedShape.render()).toEqual(
      '<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150 20, 270 230, 30 230" fill="purple"/><text x="150" y="170" font-size="55" text-anchor="middle" fill="pink">YAY</text></svg>'
    );
  });
});