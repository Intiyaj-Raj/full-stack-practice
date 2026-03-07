function claculateArea(l, b) {

    if (l <= 0) {
        throw new Error("Length should be a positive number")
    }
    if (b <= 0) {
        throw new Error("widht should be positive number")
    }
    const area = l * b;
    console.log(area)
}

claculateArea(2, 3)
claculateArea(2, -2)
claculateArea(2, 0)
claculateArea(10, 66)
claculateArea(NaN, 2)
claculateArea(NaN, 0)