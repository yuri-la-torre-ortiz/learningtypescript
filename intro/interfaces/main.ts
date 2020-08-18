
/*  Often it's better to pass an object than a set of different parameters
let drawPoint = (x, y) => {

}
*/
//inline annotation: not usually recommended as can be redundant
/* let drawPoint = (point: { x: number, y: number }) => {

} */
//when using interfaces, always use Pascal naming conventions [uppercase]
interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
 // ....
}

drawPoint({
    x: 1,
    y: 2
})