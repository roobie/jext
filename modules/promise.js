/**
 * @namespace Promise
 */
defProps(Promise[__proto], {
  /**
   * @method Promise.prototype.tap
   */
  tap: {
    value: function Promise_tap(fn) {
      return this.then(function (value) {
        fn(value);
        return value;
      });
    }
  }
});
