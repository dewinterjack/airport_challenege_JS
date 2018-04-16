var Airport = function(){
  this.planes = [];
};

Airport.prototype.dock = function(plane){
  if(this.planes.length == 3){
    throw "Maximum capacity reached!";
  }
  this.planes.push(plane);
  plane.airport = this;
};

Airport.prototype.name = function(name){
  this.name = name;
};

Airport.prototype.release = function(plane){
  if(this.planes.length == 0){
    throw "No planes to release!";
    }
  delete this.planes[this.planes.indexOf(plane)];
};

Airport.prototype.amount = function(){
  return this.amount;
};


