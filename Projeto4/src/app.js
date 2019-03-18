'use strict';

import angular from 'angular'
import uirouter from 'angular-ui-router';
var blockUI = require('angular-block-ui');

import 'bootstrap';
import './scss/app.scss';

import routing from './app.config';

import garrafa from 'C:/Users/mathe/projetoFinal/projetoFinal/Projeto4/src/modulos/garrafa/garrafa.js';
import home from './modulos/home/home.js';

angular
.module('myApp', [
  uirouter,
  blockUI,
  garrafa, 
  home
])
.config(routing);