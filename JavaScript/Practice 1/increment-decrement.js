let b = 7
let a = 5
let c = 6

let d = a++ - --a - a
console.log(d)


let e = b++ + c-- - --c + c++ - b-- + d + --a - a--
console.log(e)

let t = a++ + ++a + ++a - b - b - c-- - d
console.log(t)

console.log()

let r = a-- + --b - --c + 5 + 8 + t - e - d
console.log(r)
