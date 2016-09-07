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
    Object.defineProperties(Function.prototype, {
        tap: {
            value: function Function_tap(fn) {
                var self = this;
                return function(data) {
                    fn(data);
                    return self(data);
                };
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
                return this.split(" ");
            }
        }
    });
})();