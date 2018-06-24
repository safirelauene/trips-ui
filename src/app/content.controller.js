/* @ngInject */
function ContentController(ContentService) {
  const vm = this;

  function init() {
    vm.hello = "teste"
    vm.trips = ContentService.getTrips();
    console.log(vm.trips)
  }

  init();
}
angular.module('app').controller('ContentController', ContentController);
