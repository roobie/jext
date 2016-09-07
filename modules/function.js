/**
 * @namespace Function
 */
Object.defineProperties(Function.prototype, {
  /**
   * @method Function.prototype.tap
   *
   * @desc
   * Wraps the function bound to this with an higher order function
   * that in turn calls the supplied function with the value originally
   * intended for the function bound to this
   *
   * @summary wraps this function so that we can tap the argument
   *
   * @param {function} fn - the tapping function.
   *
   * @returns {function}
   * the wrapper function.
   *
   * @example
   * var handle = (data) => data.id;
   * getPromise().then(handle.tap(val => window.val = val))
   */
  tap: {
    value: function Function_tap(fn) {
      const self = this;
      return function (data) {
        fn(data);
        return self(data);
      };
    }
  },

  not: {
    value: function Function_not() {
      return function (arg) {
        return !this(arg);
      };
    }
  },

  memoize: {
    value: function Function_memoize() {
      const self = this;
      const cache = {};
      self.cache = cache;

      return function (arg) {
        if (!(arg in cache)) {
          cache[arg] = self(arg);
        }

        return cache[arg];
      }
    }
  }
});
