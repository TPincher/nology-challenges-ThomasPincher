import * as challenge from "./js11";

describe ('greetingtest', () => {
    test('Should return "Hello, nice to meet you"', () => {
        expect(challenge.greet()).toEqual("Hello, nice to meet you");
    });
})

describe ('sumTwoNumbersTest', () => {
    test('Should sum two numbers correctly', () => {
        expect(challenge.sumTwoNumbers(3, 6)).toEqual(9);
    });
})

describe ('checkLargerTest', () => {
    test('Should return a string', () => {
        expect(typeof challenge.checkLarger(1, 2)).toBe("string");
    });
    test('Should return the correct string sequence', () => {
        expect(challenge.checkLarger(3, 5)).toEqual("5 is bigger than 3")
    })
    test('Should return correct message if both numbers are equal', () => {
        expect(challenge.checkLarger(3, 3)).toEqual("Both numbers are equal");
    })
    test('Should return the correct string sequence', () => {
        expect(challenge.checkLarger(7, 5)).toEqual("7 is bigger than 5")
    })
})

describe ('filterByLengthTest', () => {
    test('Invalid inputs should return the correct string', () => {
        expect(challenge.filterByLength(["Biggest", "Longest", "Morethansix"])).toEqual("Sorry, no valid names supplied");
    });
    test('Valid input should return a filtered array', () => {
        expect(challenge.filterByLength(["Max", "Sam", "Legoshi"])).toMatchObject(["Max", "Sam"])
    });
})

describe ('reduceNumbersTest', () => {
    test('Cannot reduce past 0', () => {
        expect(challenge.reduceNumbers([12, 24, 36], 20)).toMatchObject([0, 4, 16])
    });
    test('Cannot remain over 255', () => {
        expect(challenge.reduceNumbers([100, 120, 300], 10)).toMatchObject([90, 110, 255])
    });
    test('Should reduce all array values by reducer', () => {
        expect(challenge.reduceNumbers([120, 130, 140], 5)).toMatchObject([115, 125, 135])
    });
})