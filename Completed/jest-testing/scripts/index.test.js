import {getName} from "./index.js";

it("Should return the string 'Thomas, 33 years old'", () => {
    const output = getName('Thomas', 33);
    expect(output).toBe("Thomas, 33 years old.");
})

it('Should return the name, followed by the age', () => {
    const output = getName ('Ollie', 27);
    expect(output).toBe('Ollie, 27 years old.')
})