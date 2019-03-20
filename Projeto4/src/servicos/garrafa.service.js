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
   deleteGarrafa(id){
   	this.$http.delete(this.path+'/'+id);

  }
  saveGarrafa(garrafa){
    this.$http.post(this.path, garrafa);
  }
  // NA CAMADA REST FALTA CRIAR O GET BUSCA POR NOME
  searchGarrafa(garrafa){
    console.log('teste'+garrafa)
   return this.$http.get(this.path+'/'+garrafa);
  }
  editarGarrafa(garrafa){
    console.log('teste2'+garrafa.id);
  this.$http.put(this.path+'/'+garrafa.id, garrafa);
  }
  deleteCopo(id){
    console.log('ASDADZ  '+id);
  this.$http.delete(this.pathCopo+'/'+id);  
  }

}

export default angular.module('services.garrafa-service', [])
.service('garrafaService', GarrafaService)
.name;