Object.defineProperties(Function.prototype, {
    tap: {
        /**
           @usage:
           var handle = (data) => data.id;
           getPromise().then(handle.tap(val => window.val = val))
         */
        value: function Function_tap(fn) {
            var self = this;

            return function (data) {
                fn(data);
                return self(data);
            };
        }
    }
});
