// Import the functions to test
import { map, map2 } from './4-mutations.js';

describe('Immutable Map Tests', () => {
    // Test case for map
    test('map should have initial values', () => {
        // Assert initial values
        expect(map.get(1)).toBe('Liam');
        expect(map.get(2)).toBe('Noah');
        expect(map.get(3)).toBe('Elijah');
        expect(map.get(4)).toBe('Oliver');
        expect(map.get(5)).toBe('Jacob');
        expect(map.get(6)).toBe('Lucas');
    });

    // Test case for map2
    test('map2 should have modified values', () => {
        // Assert modified values
        expect(map2.get(1)).toBe('Liam');
        expect(map2.get(2)).toBe('Benjamin');
        expect(map2.get(3)).toBe('Elijah');
        expect(map2.get(4)).toBe('Olivia');
        expect(map2.get(5)).toBe('Jacob');
        expect(map2.get(6)).toBe('Lucas');
    });
});

