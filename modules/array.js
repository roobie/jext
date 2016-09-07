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
  },
  isEmpty: {
    value: function Array_isEmpty() {
      return this.length === 0;
    }
  },
  skip: {
    value: function Array_skip(n) {
      return this.slice(n);
    }
  },
  take: {
    value: function Array_take(n) {
      return this.slice(0, n);
    }
  }
});
