function main() {
    var a = Number(document.getElementById("first").value)
    var b = Number(document.getElementById("second").value)
    add(a, b)
    sub(a, b)
    mul(a, b)
    div(a, b)

}

function add(a, b) {
    var result = document.getElementById("add")
    result.innerHTML = a + b;
}

function sub(a, b) {
    var result = document.getElementById('sub')
    result.innerHTML = a - b
}

function mul(a, b) {
    var result = document.getElementById("mul")
    result.innerHTML = a * b;
}

function div(a, b) {
    var result = document.getElementById("div")
    result.innerHTML = a / b;
}
