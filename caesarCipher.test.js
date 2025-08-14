const caesarCipher = require("./caesarCipher");

test('shifts the string "xyz" by 3 places', () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test('shifts the string "HeLLo" by 3 places', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})

test('shifts the stentence "Hello, World!" by 3 places', () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})