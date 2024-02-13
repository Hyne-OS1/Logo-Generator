const Shape = require('./shape.js');

class Square extends Shape {
    render () {
        return `<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="250" height="250" fill="${this.color}"/>
    <text fill="${this.textColor}" font-size="70" x="70" y="150">${this.text}</text>
    </svg>`
    }
}

module.exports = Square;