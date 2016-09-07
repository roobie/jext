/**
 * @namespace String
 */
defProps(String[__proto], {
  /**
   * @method String.prototype.contains
   *
   * @desc
   * Checks whether the supplied substring is a part of this.
   *
   * @param {string} substring - the substring to check for.
   *
   * @returns {boolean}
   * true if substring is a part of this string,
   * otherwise false.
   *
   * @example
   * 'foo'.contains('f') // -> true
   * 'foo'.contains('Q') // -> false
   */
  contains: {
    value: function String_contains(substring) {
      return !!(~this.indexOf(substring));
    }
  },

  /**
   * @method String.prototype.words
   *
   * @desc
   * splits a string of text into words.
   *
   * @returns {string[]}
   * An array containing the words.
   *
   * @example
   * 'This is a senctence'.words() // ['This', 'is', 'a', 'sentence.']
   */
  words: {
    value: function String_words() {
      return this.trim().split(' ');
    }
  }
});
