const Shape = require('./shape.js');

class Circle extends Shape {
    render () {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="${this.color}"/>
        <text fill="${this.textColor}" font-size="70" x="170" y="250">${this.text}</text>
        </svg>`
    }
}

module.exports = Circle;