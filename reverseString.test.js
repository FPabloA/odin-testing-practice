const reverseString = require("./reverseString");

test('reverses the string "test"', () => {
    expect(reverseString("test")).toBe("tset");
})

test('reverses the sentence "this is a test"', () => {
    expect(reverseString("this is a test")).toBe("tset a si siht");
})