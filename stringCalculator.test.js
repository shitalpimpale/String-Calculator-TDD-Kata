const add = require('./index');

test('Add should return 0 for an empty string', () => {
    const result = add("");
    expect(result).toBe(0);
});
test('Add should return the number itself if only one number is provided', () => {
    const result = add("1");
    expect(result).toBe(1);
});
test('Add should return the sum of two numbers', () => {
    const result = add("1,2");
    expect(result).toBe(3);
});
test('Add should return the sum of multiple numbers', () => {
    const result = add("1,2,3,4,5");
    expect(result).toBe(15);
});
test('Add should handle new lines as delimiters', () => {
    const result = add("1\n2,3");
    expect(result).toBe(6);
});
test('Add should support custom delimiters', () => {
    const result = add("//;\n1;2");
    expect(result).toBe(3);
});
test('Add should throw an exception for negative numbers', () => {
    expect(() => {
        add("1,-2,3,-4");
    }).toThrow("Negative numbers not allowed: -2, -4");
});
