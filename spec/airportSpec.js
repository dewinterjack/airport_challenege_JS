describe('Airport', function(){

  beforeEach(function(){
    airport = new Airport();
  });

  it('has no planes when created', function(){
    expect(airport.amount).toEqual(0);
  });

  
  describe('#dock', function(){
    it('can only dock once a plane has been created');
    it('adds a plane to the airport');
  });

  it('has one more in amount when a plane is docked');
  it('has one less in amount when a plane is released');
  
});