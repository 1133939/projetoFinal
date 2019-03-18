import angular from 'angular';

class GarrafaService {

    constructor($http) {
        this.$http = $http;
       const apiBase = "http://localhost:8080/projeto/api";
       //const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/garrafa";
    }
    
    getGarrafas() {
        return this.$http.get(this.path);
    }
   deleteGarrafa(id){
   	this.$http.delete(id);
  }

}

export default angular.module('services.garrafa-service', [])
.service('garrafaService', GarrafaService)
.name;