function Owner(name){
    this.name = name;
    this.bikes = [];
}

Owner.prototype.buildBike = function(name, type, color){
  // code goes here...
  var b = new Bike(name, type, color);
  this.bikes.push(b);
};

Owner.prototype.rideBike = function(name, miles) {
  var ride = new Bike(name, miles);
  this.bikes.forEach(function(bike){
    if (bike.name === name){
      bike.condition = "needs a tune up";
    }
  });
}