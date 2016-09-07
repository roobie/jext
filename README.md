# jext
Usable extensions to native prototypes in JavaScript 
using `Object.defineProperties`

## Development

### template

```js
Object.defineProperties(Thing.prototype, {
  frob: {
    value: function thingFrob() {
    }
  }
});
```
