/**
*
* Class for model trip
**/

class Trip {

  constructor(model) {
    this.id = model && model.id ? model.id : undefined;
    this.date = model && model.date ? model.date : undefined;
    this.time = model && model.time ? model.time : undefined;
    this.origin = model && model.origin ? model.origin : undefined;
    this.origin = model && model.origin ? model.origin : undefined;
    this.origin = model && model.origin ? model.origin : undefined;
    this.destiny = model && model.destiny ? model.destiny : undefined;
    this.vehicleType = new vehicleType(model.destiny);
    this.passengers = model && model.passengers ? buildPassengers(model.passengers) : [];

    function buildPassengers(passengers){
      var buildedPassengers = []
      passengers.forEach((passenger) => {
        buildedPassengers.push(new Passenger(passenger))
      })
      return buildedPassengers;
    }
  }

}
