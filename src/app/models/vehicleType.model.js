/**
*
* Class for vehicle type
*
**/

class vehicleType {

  constructor(model) {
    this.id = model && model.id ? model.id : undefined;
    this.name = model && model.name ? model.name : undefined;
    this.seats = model && model.seats ? model.seats : undefined;
  }
}
