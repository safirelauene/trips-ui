/**
 * Header directive
 * */
function Header() {
  const directive = {
    restrict: 'E',
    replace: true,
    scope: {
      show: '='
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

    /**
     * To toggle display form trip request property
     * */
    ctrl.toggleShow = () => {
      ctrl.show = !ctrl.show;
    };
  }

  return directive;
}

angular.module('app').directive('headerComponent', Header);
