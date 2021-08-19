// Basic Types
let id: number = 5
let company: string = 'Novailoveyou'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Nover', true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Nover'],
  [2, 'Brad'],
  [4, 'Jill']
]

// Union
let pid: string | number = 22

pid = '22'

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}
