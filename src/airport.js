var Airport = function(){
  this.planes = [];
};

Airport.prototype.dock = function(plane){
  this.planes.push(plane);
  plane.airport = this;
};

Airport.prototype.name = function(name){
  this.name = name;
};

Airport.prototype.release = function(plane){
  delete this.planes[this.planes.indexOf(plane)];
};

Airport.prototype.amount = function(){
  return this.amount;
};


