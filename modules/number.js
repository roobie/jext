Object.defineProperties(Number.prototype, {
  money: {
    value: function Number_money() {
      return parseFloat(this.toFixed(2));
    }
  }
});
