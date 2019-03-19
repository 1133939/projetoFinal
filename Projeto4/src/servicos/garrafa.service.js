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
   	this.$http.delete(this.path, id);
  }
  saveGarrafa(garrafa){
    this.$http.post(this.path, garrafa);
  }
  searchGarrafa(garrafa){
   return this.$http.get(this.path, garrafa);
  }

}

export default angular.module('services.garrafa-service', [])
.service('garrafaService', GarrafaService)
.name;