'use strict';

const _ = require('lodash');

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
  },
  isHomogenous: {
    value: function Array_isHomogenous() {
      if (this.isEmpty()) return true;

      const t = typeof(this.first());
      const len = this.length;

      // check typeof equality
      for (let i = 1; i < len; ++i) {
        if (typeof(this[i]) !== t) return false;
      }

      // check constructor equality, if value is not undefined
      if (t !== 'undefined') {
        const c = this.first().constructor;
        for (let i = 1; i < len; ++i) {
          const v = this[i];
          if (v && v.constructor !== c) return false;
        }
      }

      return true;
    }
  }
});
