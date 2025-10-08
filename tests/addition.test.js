const {add} = require('../src/addition');

describe("tests for add function", () =>{
    test("returns 0 for empty string", () =>{
        expect(add("")).toBe(0);
    });

    test("sum of multiple comma and new line seperated numbers", () =>{
        expect(add("1\n2,3")).toBe(6);
    })

    test("tests for custom delimiter", () =>{
        expect(add("//;\n1;2")).toBe(3);})                  
})

