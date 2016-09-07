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
                var self = this;
                return function(data) {
                    fn(data);
                    return self(data);
                };
            }
        }
    });
    Object.defineProperties(Number.prototype, {
        money: {
            value: function Number_money() {
                return parseFloat(this.toFixed(2));
            }
        }
    });
    Object.defineProperties(Object.prototype, {
        frob: {
            value: function thingFrob() {}
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