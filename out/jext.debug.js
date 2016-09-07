(function() {
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
    Object.defineProperties(Date.prototype, {
        frob: {
            value: function thingFrob() {}
        }
    });
    Object.defineProperties(Function.prototype, {
        tap: {
            value: function Function_tap(fn) {
                const self = this;
                return function(data) {
                    fn(data);
                    return self(data);
                };
            }
        },
        not: {
            value: function Function_not() {
                return function(arg) {
                    return !this(arg);
                };
            }
        },
        memoize: {
            value: function Function_memoize() {
                const self = this;
                const cache = {};
                self.cache = cache;
                return function(arg) {
                    if (!(arg in cache)) {
                        cache[arg] = self(arg);
                    }
                    return cache[arg];
                };
            }
        }
    });
    Object.defineProperties(Number.prototype, {
        toMoney: {
            value: function Number_toMoney() {
                return parseFloat(this.toFixed(2));
            }
        }
    });
    Object.defineProperties(Object.prototype, {
        frob: {
            value: function thingFrob() {}
        }
    });
    Object.defineProperties(Promise.prototype, {
        tap: {
            value: function Promise_tap(fn) {
                return this.then(function(value) {
                    fn(value);
                    return value;
                });
            }
        }
    });
    Object.defineProperties(String.prototype, {
        contains: {
            value: function String_contains(substring) {
                return !!~this.indexOf(substring);
            }
        },
        words: {
            value: function String_words() {
                return this.trim().split(" ");
            }
        }
    });
})();