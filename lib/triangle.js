const Shape = require('./shape.js');

class Triangle extends Shape {
    render () { 
    return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 250,190 50,190" fill="${this.color}"/>
    <text fill="${this.textColor}" font-size="35" x="115" y="130">${this.text}</text>
    </svg>`;
    }
}

module.exports = Triangle;
