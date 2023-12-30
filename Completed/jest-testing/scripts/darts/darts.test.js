import {findScore} from "./darts.js";

describe('Darts', () => {
    test('missed the target', () => {
        expect(findScore(-9, 9)).toEqual(0);
    });

    test('Outer Cirlce', () => {
        expect(findScore(0, 10)).toEqual(1);
    });

    test('Inner Cirlce', () => {
        expect(findScore(2, 2)).toEqual(5);
    });

    test('BullsEye', () => {
        expect(findScore(0, 0)).toEqual(10);
    });

    test('Invalid input', () => {
        expect(findScore('a', 0)).toEqual(null);
    })
})