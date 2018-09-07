//contains helper methods for now, will change later

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};
