const Shape= require('./shapes.js');

class Triangle extends Shape {
    constructor(shape,text, textColor, shapeColor) {
        super(shape,text, textColor, shapeColor);
    }
    render() {
        return `<svg height="210" width="500"><polygon points="200,10 250,190 160,210" style=" fill:${this.shapeColor};stroke:purple;stroke-width:1" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = Triangle;
