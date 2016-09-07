(function() {
    "use strict";
    const defProps = Object.defineProperties;
    const __proto = "prototype";
    defProps(Array[__proto], {
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
    defProps(Date[__proto], {
        frob: {
            value: function thingFrob() {}
        }
    });
    defProps(Function[__proto], {
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
    defProps(Number[__proto], {
        toMoney: {
            value: function Number_toMoney() {
                return parseFloat(this.toFixed(2));
            }
        }
    });
    defProps(Object[__proto], {
        frob: {
            value: function thingFrob() {}
        }
    });
    defProps(Promise[__proto], {
        tap: {
            value: function Promise_tap(fn) {
                return this.then(function(value) {
                    fn(value);
                    return value;
                });
            }
        }
    });
    defProps(String[__proto], {
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