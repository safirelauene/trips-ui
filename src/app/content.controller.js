/* @ngInject */
function ContentController(ContentService, VehicleTypeService) {
  /* global Trip */
  /* global Passenger */

  const vm = this;

  /**
   * To add passenger into trip object
   * */
  vm.addPassenger = () => {
    vm.trip.passengers.push(new Passenger(vm.passenger));
    vm.resetPassenger();
  };

  /**
   * To clean or create empty passenger object
   * */
  vm.resetPassenger = () => {
    vm.passenger = new Passenger();
  };

  /**
   * To clean or create empty trip object
   * */
  vm.resetTrip = () => {
    vm.trip = new Trip();
  };

  function init() {
    vm.trips = ContentService.getTrips();
    vm.vehicleTypes = VehicleTypeService.getVehicleTypes();
    vm.showForm = false;
    vm.resetTrip();
    vm.resetPassenger();
  }

  init();
}
angular.module('app').controller('ContentController', ContentController);
