function Bike(name, bikeType, frameColor){
  this.name = name;
  this.bikeType = bikeType;
  this.frameColor = frameColor;
  this.condition = 'ready to go!';
  this.WHEELS = 2;
  // attributes go here...

}

Bike.prototype.takeForARide = function(miles){
  // code goes here...
    if (miles > 50) {
      this.condition = 'needs a tune up';
    } 
};

Bike.prototype.tuneUp = function(){
  this.condition = 'ready to go!';
};





