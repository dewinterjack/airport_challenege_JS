describe('Plane', function(){
  
  beforeEach(function(){
    plane = new Plane();
  });

  it('has no value for landed when created', function(){
    expect(plane.landed).toEqual(undefined);
  });

  it('has no airport when created', function(){
    expect(plane.airport).toEqual(undefined);
  });

  it('has no airport when it is airbourne', function(){
    plane.takeOff();
    expect(plane.airport).toEqual(undefined);
  });

  describe('#land', function(){

    it('throws an error if plane is landed');

    it('sets landed to true', function(){
      plane.land("Luton");
      expect(plane.landed).toEqual(true);
    });

    it('sets the airport to the landed airport', function(){
      plane.land("Luton");
      expect(plane.airport).toEqual("Luton");
    });
    it('docks the plane to the landed airport');
  });


  describe('#takeOff', function(){
    it('throws an error if plane is not landed');
    it('calls release on airport');
    it('sets airport to undefined');
  });
});