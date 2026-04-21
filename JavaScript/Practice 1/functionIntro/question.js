function demo(a = 3, b = 4) {
    console.log(a + b)
}
demo()
demo(null, 10)
demo(undefined, 10)
demo(13, undefined)


// logical question
console.log(null >= 0)  //true
console.log(undefined >= 0) //false