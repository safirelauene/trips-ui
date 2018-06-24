function ContentController() {
  const vm = this;

  function init() {
    vm.hello = 'Hello World';
  }

  init();
}
angular.module('app').controller('ContentController', ContentController);
