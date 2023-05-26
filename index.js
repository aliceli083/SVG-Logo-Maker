const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

const inquirer = require('inquirer');
const fs = require('fs');



const questions = [{
    type: 'list',
    message: 'What shape should the logo be?',
    name: 'shape',
    choices:
        [{
            name: "Circle",
            value: "circle",
        },
        {
            name: "Square",
            value: "rect",
        },
        {
            name: "Triangle",
            value: "polygon",

        }]
},
{
    type: 'input',
    message: 'What color should the SVG be?',
    name: 'shapeColor',
},
{
    type: 'input',
    message: 'What color should the SVG logo text be?',
    name: 'textColor',
},
{
    type: 'input',
    message: 'What text should the SVG logo have?',
    name: 'text',
},
]
inquirer.prompt(questions).then(response => {
    console.log(response)
    if (response.shape === "circle") {
        const circle = new Circle(response.shape, response.text, response.textColor, response.shapeColor)
        fs.writeFileSync("logo.svg", circle.render())
    }
    if(response.shape ==="rect"){
        const rect= new Square(response.shape, response.text, response.textColor, response.shapeColor)
        fs.writeFileSync("logo.svg", rect.render())
    }
    if (response.shape === "polygon") {
        const rect = new Triangle(response.shape, response.text, response.textColor, response.shapeColor)
        fs.writeFileSync("logo.svg", polygon.render())
    }

})