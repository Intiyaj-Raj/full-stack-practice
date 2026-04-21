let arr = [10, 20, 30, 40, 50, 60]

arr.forEach((a) => {
    console.log(a)
})

console.log()
// print value + index number
arr.forEach((a, b) => {
    console.log("index = " + b)
    console.log("value = " + a)
});

console.log()

arr.forEach((value, index, array) => {
    console.log("index:  " + index)
    console.log("value: " + value)
    console.log("array: " + array)
    console.log()
})

