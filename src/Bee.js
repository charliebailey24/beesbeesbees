var Bee = function() {
  // Q: how do I instantiate bee as an instance of Grub?

  // Grub.call(this); // forgot why I needed this line -- I don't

  // set the constructor
  // constructor is a function

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

  // inherit food from grub. I think this means just don't set it
  // this.food = Object.create(bee);

  // inherit eat
  // a job property that is set to 'keep on growing'
};

// call the Grub superclass
Bee.prototype = new Grub;
// set the prototype
Bee.prototype.constructor = Bee;



// var redCar = new Car ("red", 10);

// Location.prototype = Object.create(Car.prototype);
