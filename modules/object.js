const _ = require('lodash');

Object.defineProperties(Object.prototype, {
  getIn: {
    value: function Object_getIn(path) {
      return _.get(this, path);
    }
  },
  updateIn: {
    value: function Object_updateIn(path, transform) {
      return _.update(this, path, transform);
    }
  }
});
