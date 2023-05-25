const Shape= require('./shapes.js');

class Square extends Shape {
    constructor(shape,text, textColor, shapeColor) {
        super(shape,text, textColor, shapeColor);
    }
    render() {
        return `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = Square;
