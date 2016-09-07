/**
 * @namespace Number
 */
Object.defineProperties(Number.prototype, {
  /**
   * @method Number.prototype.toMoney
   *
   * Truncates a number to a maximum precision of 0.01
   *
   * @example
   * (3.3123).toMoney() // -> 3.31
   */
  toMoney: {
    value: function Number_toMoney() {
      return parseFloat(this.toFixed(2));
    }
  }
});
