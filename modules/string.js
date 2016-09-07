Object.defineProperties(String.prototype, {
  /**
   * @method String.prototype.contains
   *
   * checks whether the `substring` is a part of `this`
   *
   * @param {string} substring - the substring to check for.
   *
   * @returns {boolean}
   * `true` if substring is a part of `this` string,
   * otherwise `false`.
   *
   * @example:
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
   * splits a string of text into words.
   *
   * @returns {array<string>}
   * An array containing the words.
   *
   * @example:
   * 'This is a senctence'.words() // ['This', 'is', 'a', 'sentence.']
   */
  words: {
    value: function String_words() {
      return this.split(' ');
    }
  }
});
