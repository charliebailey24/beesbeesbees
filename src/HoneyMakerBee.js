var HoneyMakerBee = function() {
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

//call the Bee superclass
HoneyMakerBee.prototype = new Bee();
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};