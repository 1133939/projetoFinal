import angular from 'angular';
import uirouter from 'angular-ui-router';

import GarrafaController from './garrafa.controller';

import garrafaService from '../../servicos/garrafa.service';

export default angular.module('myApp.garrafa', [uirouter, garrafaService])
  .controller('GarrafaController', GarrafaController)
  .name;

  