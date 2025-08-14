const capitalize = require('./capitalize');

test('capitalizes the first letter of the string "test"', () =>{
    expect(capitalize("test")).toBe("Test");
})

test('capitalizes the first letter of the sentence "this is a test"', () =>{
    expect(capitalize("this is a test")).toBe("This is a test");
})