/**
 * Header directive
 * */
function Header() {
  const directive = {
    restrict: 'E',
    replace: true,
    scope: {
    },
    templateUrl: 'app/directives/header/header.html',
    controller: HeaderController,
    controllerAs: 'ctrl',
    link: HeaderLink,
    bindToController: true
  };

  function HeaderLink() {

  }

  function HeaderController() {
    let ctrl = this;
  }

  return directive;
}

angular.module('app').directive('headerComponent', Header);
