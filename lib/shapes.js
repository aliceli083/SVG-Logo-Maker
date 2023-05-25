{/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

  <circle cx="150" cy="100" r="80" fill="green"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}

class Shape {
    constructor(shape="",text="",textColor="", shapeColor=""){
        this.Shape = Shape;
        this.text=text;
        this.textColor=textColor;
        this.shapeColor=shapeColor;
    }
    render() {
        throw new Error('Child class must implement a render() method');
    }
}

module.exports= Shape;