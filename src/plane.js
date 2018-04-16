// Default status is undefined
// Cannot land unless it has taken off first

var Plane = function(){};

//instead of passing in strings, pass in the airport object
// factory function

Plane.prototype.name = function(name){
  this.name = name;
};

Plane.prototype.land = function(airport){
  this.landed = true;
  this.airport.dock(this);
};

Plane.prototype.takeOff = function(){
  this.landed = false;
  this.airport.release(this);
  this.airport = undefined;
};