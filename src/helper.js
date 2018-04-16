function helper(){
  plane = new Plane();
  airport = new Airport();
  console.log(airport);
  airport.dock(plane);
  console.log(airport);
  plane.takeOff();
  console.log(airport);
  plane.land(airport);
  console.log(airport);
}
