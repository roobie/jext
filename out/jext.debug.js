(function() {
    Object.defineProperties(Function.prototype, {
        tap: {
            value: function functionTap(fn) {
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
            value: function stringContains(substring) {
                return !!~this.indexOf(substring);
            }
        },
        words: {
            value: function stringWords() {
                return this.split(" ");
            }
        }
    });
})();