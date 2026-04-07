let isDegree = true;

function add(val) {
    document.getElementById("display").value += val;
}

function calculate() {
    let exp = document.getElementById("display").value;
    let result = eval(exp);
    document.getElementById("display").value = result;

}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function square() {
    let v = getVal();
    setVal(Math.pow(v, 2));
}

function sqrt() {
    let v = getVal();
    setVal(Math.sqrt(v));
}

function sin() {
    let v = convert(getVal());
    setVal(Math.sin(v));
}

function cos() {
    let v = convert(getVal());
    setVal(Math.cos(v));
}

function tan() {
    let v = convert(getVal());
    setVal(Math.tan(v));
}

function log() {
    let v = getVal();
    setVal(Math.log10(v));
}

function pi() {
    setVal(Math.PI);
}

function toggleMode() {
    isDegree = !isDegree;
    alert(isDegree ? "Degree Mode" : "Radian Mode");
}

function convert(val) {
    return isDegree ? val * Math.PI / 180 : val;
}

function getVal() {
    return Number(document.getElementById("display").value);
}

function setVal(v) {
    document.getElementById("display").value = v;
}

// 🔥 Keyboard Support
document.addEventListener("keydown", function (e) {
    let key = e.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        add(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        let val = document.getElementById("display").value;
        document.getElementById("display").value = val.slice(0, -1);
    }
});
