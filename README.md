
# dice-throw
a dice-throw game with canvas

##  Demand
* 7/11  √
* 2/3/12 ×
* other count into sum
    - 7 ×
    - except 7,11,2,12 √

## Design
Click `throw` , two dice faces will change its number util t second. Then, The points will be displayed and `You Win!` or `You Lose TAT` will be shown.

## Tech
 canvas
    `<canvas>Your browser don't support canvas tag</canvas>`
    `ctx = doc.getEleById`
    `ctx.strokeRect(Lx, Ly, w, h)`
    `ctx.lineWidth = `
    `ctx.strokeStyle = "rgb(255, 0, 0)"`
    `ctx.fillStyle = "rgb(255, 0, 0)"`
    `ctx.fillReact(x, y, w, h) `
    `ctx.beginPath()`
    `ctx.closePath()`
    `ctx.fill()`
    `ctx.arc(cx, cy, radius, start_angle, end_angle, direction)`
    `ctx.clearRext(x, y, w, h)`
    `ctx.moveTo`
    `ctx.lineTo`
    
## Implement
* display
    1. Real-time drawing
draw points according the points you throw.
    2. hidden and show
draw all points at once and hide, when needed, then show.
* assembly
    1.One by one
![onebyone_1](/images/one.png)
    2.At least