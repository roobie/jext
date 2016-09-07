Object.defineProperties(String.prototype, {
    contains: {
        value: function String_contains(substring) {
            return !!(~this.indexOf(substring));
        }
    },

    words: {
        value: function String_words() {
            return this.split(' ');
        }
    }
});
