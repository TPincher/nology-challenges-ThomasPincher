import {Triangle} from './triangle.js';

describe('Tests to determine whether or not a shape entered is a triangle', () => {
    
    describe('equilateral triangle', () => {
        test('all sides should be equal', () => {
            const triangle = new Triangle (2, 2, 2);
            expect(triangle.isEqualateral).toBe(true);
        });

        test('no sides are equal', () => {
            const triangle = new Triangle (5, 4, 6);
            expect(triangle.isEqualateral).toBe(false);
        });

    })

    describe('isosceles triangle', () => {
        test('two sides should be equal', () => {
            const triangle = new Triangle (2, 3, 2);
            expect(triangle.isIsosceles).toBe(true);
        });

        test('no sides are equal', () => {
            const triangle = new Triangle (5, 4, 6);
            expect(triangle.isIsosceles).toBe(false);
        });

        test('all sides are equal', () => {
            const triangle = new Triangle (3, 3, 3);
            expect(triangle.isIsosceles).toBe(false);
        });

    })

    describe('scalene triangle', () => {
        test('no sides should be equal', () => {
            const triangle = new Triangle (2, 4, 3);
            expect(triangle.isScalene).toBe(true);
        });

        test('all sides are equal', () => {
            const triangle = new Triangle (5, 5, 5);
            expect(triangle.isScalene).toBe(true);
        });

        test('two sides are equal', () => {
            const triangle = new Triangle (5, 7, 5);
            expect(triangle.isScalene).toBe(false);
        });


    })

})