/* @ngInject */
function ContentController(ContentService) {
  const vm = this;

  /**
   * To toggle display form trip request property
   * */
  vm.toggleDisplayForm = () => {
    vm.showForm = !vm.showForm;
  };

  function init() {
    vm.trips = ContentService.getTrips();
    vm.showForm = false;
  }

  init();
}
angular.module('app').controller('ContentController', ContentController);
