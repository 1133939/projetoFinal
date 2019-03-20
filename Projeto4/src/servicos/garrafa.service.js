import angular from 'angular';

class GarrafaService {

    constructor($http) {
        this.$http = $http;
       const apiBase = "http://localhost:8080/projeto/api";
       //const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/garrafa";
        this.pathCopo = apiBase + "/copo";
    }
    
    getGarrafas() {
        return this.$http.get(this.path);
    }
  saveGarrafa(garrafa){
    this.$http.post(this.path, garrafa);
  }
  findGarrafa(garrafa){
    console.log('teste'+garrafa)
   return this.$http.get(this.path+'/'+garrafa);
  }
  editGarrafa(garrafa){
    console.log('teste2'+garrafa.id);
  this.$http.put(this.path+'/'+garrafa.id, garrafa);
  }
  deleteCopo(id){
    console.log('ASDADZ  '+id);
  this.$http.delete(this.pathCopo+'/'+id);  
  }
  deleteGarrafa(id){
    this.$http.delete(this.path+'/'+id);
  }

}

export default angular.module('services.garrafa-service', [])
.service('garrafaService', GarrafaService)
.name;