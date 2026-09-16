alert("Let's integrate!")

function f(x) {
    return 4 * x - x ** 2
}

let x1 = parseInt(prompt("Левая граница"))
let x2 = parseInt(prompt("Правая граница"))

while (x1 >= x2) {
    x2 = parseInt(prompt(`Правая граница должна быть больше ${x1}`))
}

const n = 10_000
const delta = (x2 - x1) / n
let sum = 0

for (let i = 0; i < n; i++) {
    sum += f(x1 + delta / 2 + delta * i) * delta
}

alert(`res = ${sum}`)