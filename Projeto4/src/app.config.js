routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    let homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './modulos/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
      $stateProvider.state(homeState);
      
      let garrafaState = {
        name: 'garrafa',
        url: '/garrafa',
        templateUrl: './modulos/garrafa/garrafa.view.html',
        controller: 'GarrafaController',
        controllerAs: 'vm'
      }
      $stateProvider.state(garrafaState);
      
      $urlRouterProvider.otherwise('/home')  
}