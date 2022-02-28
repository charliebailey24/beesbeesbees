var ForagerBee = function() {
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

// set the prototype
ForagerBee.prototype = new Bee();

// set the constructor
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};