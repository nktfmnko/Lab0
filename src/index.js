alert("Let's integrate!")

function f(x) {
    return 4 * x - x ** 2
}

function getNumberInput(promptMessage) {
    let value = parseFloat(prompt(promptMessage))
    while (isNaN(value)) {
        value = parseFloat(prompt(`Некорректный ввод. ${promptMessage}`))
    }
    return value
}

function integrate(f, x1, x2, n = 10_000) {
    if (x1 > x2) {
        [x1, x2] = [x2, x1]
    }

    const delta = (x2 - x1) / n
    let sum = 0

    for (let i = 0; i < n; i++) {
        const midpoint = x1 + delta * i + delta / 2
        sum += f(midpoint) * delta
    }

    return sum
}

let x1 = getNumberInput("Введите левую границу")
let x2 = getNumberInput("Введите правую границу")

res = integrate(f, x1, x2)

alert(`res = ${res.toFixed(2)}`)