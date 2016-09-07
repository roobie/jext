Object.defineProperties(Array.prototype, {
  first: {
    value: function Array_first() {
      return this[0];
    }
  },
  last: {
    value: function Array_last() {
      return this[this.length - 1];
    }
  }
});
