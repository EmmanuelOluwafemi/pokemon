import { colorPicker } from '../utils'

describe('Utils', () => {
  describe('should pick the right color for each type', () => {
    test('should return the class of correct type', () => {
      expect(colorPicker('fire')).toBe('bg-orange-400');
    });
    test('should the default class of new type', () => {
      expect(colorPicker('random')).toBe('bg-gray-200');
    });
  });
});