/**
*
* Class for passenger
*
**/

class Passenger {

  constructor(model) {
    this.id = model && model.id ? model.id : undefined;
    this.name = model && model.name ? model.name : undefined;
    this.phone = model && model.phone ? model.phone : undefined;
  }
}
