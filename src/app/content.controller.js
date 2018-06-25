/* @ngInject */
function ContentController(ContentService, VehicleTypeService) {
  /* global Trip */
  /* global Passenger */

  const vm = this;

  /**
   * To save trip request
   * */
  vm.addTrip = () => {
    if (vm.trip.passengers.length > 0) {
      ContentService.addTrip(vm.trip);
      vm.resetTrip();
      vm.resetPassenger();
      vm.tripForm.$setPristine();
      vm.tripForm.$setUntouched();
    } else {
      vm.displayPassengerError = true;
    }
  };

  /**
   * To add passenger into trip object
   * */
  vm.addPassenger = () => {
    vm.trip.passengers.push(new Passenger(vm.passenger));
    vm.displayPassengerError = false;
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
    vm.displayPassengerError = false;
    vm.resetTrip();
    vm.resetPassenger();
  }

  init();
}
angular.module('app').controller('ContentController', ContentController);
