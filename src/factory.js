var AirControl = function(){
  this.planes = [];
  this.airports = [];
};

AirControl.prototype.createPlane = function(name){
  this.planes.push(new Plane());
};

AirControl.prototype.createAirport = function(name){
  this.airports.push(new Airport());
};




