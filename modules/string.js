Object.defineProperties(String.prototype, {
    contains: {
        value: function stringContains(substring) {
            return !!(~this.indexOf(substring));
        }
    },

    words: {
        value: function stringWords() {
            return this.split(' ');
        }
    }
});
