/* @ngInject */
function ContentController(ContentService) {
  const vm = this;

  function init() {
    vm.trips = ContentService.getTrips();
  }

  init();
}
angular.module('app').controller('ContentController', ContentController);
