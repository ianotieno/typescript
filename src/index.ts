let ida: number=5
let company:string ='ian'
let itscomplicated:boolean=true
let x :any ='hello'

let id :number[]= [1,2,3,4,5]
id.push(2)
let person:[number,string,boolean]=[1,'tom',true]
let employee:[number,string][]
employee=[
[ 1,'ian'],[2,'paul']]

let ids: string | number 
ids='22'

enum Direction1{
    Up=2,
    Down,
    Left,
    Right
}

console.log(Direction1.Right)

type User={
    id:number,
    name: string
}
const user:User={
    id:1,
    name:'ian'
}
console.log(user)

let cid:any =1
let customerId =<number>cid

function addNum(x:number,y:number):number{
    return x+y
}
console.log(addNum(1,2))

function log(message:string| number):void{
    console.log(message)
}
log('awesome')

interface UserI{
    id:number
    name:string
}
const user3: UserI={
    id:1,
    name:'john',
}