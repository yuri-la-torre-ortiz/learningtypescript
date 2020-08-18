
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
//first variable automatically gets a value of 0 and the rest are implicitly incremented, however, it's best practice to explicitly state values
enum Color { Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Red;