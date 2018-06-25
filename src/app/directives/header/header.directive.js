/**
 * Header directive
 * */
function Header() {
  const directive = {
    restrict: 'E',
    replace: true,
    scope: {
      btnAction: '='
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
    const ctrl = this;

    ctrl.callToAction = () => {
      ctrl.btnAction();
    };
  }

  return directive;
}

angular.module('app').directive('headerComponent', Header);
