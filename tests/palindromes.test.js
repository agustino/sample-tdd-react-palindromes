const palindromes = require('../palindromes');
const { prepareStr, isPalindrome, findLongestPalindrome } = palindromes;

describe('palindromes()', () => {
  it('correctly indentifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']);
    expect(palindromes('racecar')).toEqual(['racecar']);
  });
});

describe('prepareStr()', () => {
  it('converts the given string to lowercase', () => {
    expect(prepareStr('aAaA')).toBe('aaa');
  });

  it('removes all non-letter characters', () => {
    expect(prepareStr('To infinity, and beyond!')).toBe('toinfinityandbeyond');
  });
});
