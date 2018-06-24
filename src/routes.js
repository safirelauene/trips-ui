angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('content', {
      url: '/',
      templateUrl: 'app/content.html',
      controller: 'ContentController',
      controllerAs: 'vm'
    });
}
