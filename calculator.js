
function calculator (a, b, op) {
    if (op == "add") {
        return a + b;
    }
    else if (op == "subtract") {
        return a - b;
    }
    else if (op == "multiply") {
        return a * b;
    }
    else if (op == "divide") {
        return a / b;
    }
    else{
        return null;
    }
}

module.exports = calculator;