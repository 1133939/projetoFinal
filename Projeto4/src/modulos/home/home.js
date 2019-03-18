import angular from 'angular';
import uirouter from 'angular-ui-router';

import HomeController from './home.controller';

export default angular.module('myApp.home', [uirouter])
  .controller('HomeController', HomeController)
  .name;