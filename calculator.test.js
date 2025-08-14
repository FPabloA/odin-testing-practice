const calculator = require("./calculator");

test("adds the numbers 1 and 2", () => {
    expect(calculator(1,2,"add")).toBe(3);
})

test("subtracts the numbers 5 and 2", () => {
    expect(calculator(5,3,"subtract")).toBe(2);
})

test("multiplies the numbers 6 and 5", () => {
    expect(calculator(6,5,"multiply")).toBe(30);
})

test("divides the numbers 100 and 10", () => {
    expect(calculator(100,10,"divide")).toBe(10);
})