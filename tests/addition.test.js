const {add} = require('../src/addition');

describe("tests for add function", () =>{
    test("returns 0 for empty string", () =>{
        expect(add("")).toBe(0);
    });
})