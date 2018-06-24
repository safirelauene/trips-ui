/**
 * Trip card directive
 * */
function TripCard() {
  const directive = {
    restrict: 'E',
    replace: true,
    scope: {
      trip: '='
    },
    templateUrl: 'app/directives/tripCard/tripCard.html',
    controller: TripCardController,
    controllerAs: 'ctrl',
    link: TripCardLink,
    bindToController: true
  };

  function TripCardLink() {

  }

  function TripCardController() {
    let ctrl = this;
  }

  return directive;
}

angular.module('app').directive('tripCard', TripCard);
