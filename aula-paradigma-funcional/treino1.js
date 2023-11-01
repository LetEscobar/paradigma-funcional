function soma(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(soma(3)(4)(5))
