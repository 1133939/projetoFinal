import { inherit } from "@uirouter/core";

export default class GarrafaController {

  constructor(garrafaService) {
    var vm = this;
    this.name = 'Garrafa';
    this.addCopo = addCopo;
    this.saveGarrafa = saveGarrafa;
    this.deleteGarrafa = deleteGarrafa;
    this.searchGarrafa = searchGarrafa;
    this.editGarrafa = editGarrafa;
    vm.model = {};
    vm.model.copos = [];
    vm.garrafaCopo=[];

    init();

    function init(){
      garrafaService.getGarrafas().then(function abc(resp) {
        vm.garrafas = resp.data;
      });
    }

    function saveGarrafa(){
      var vm = this;
      console.log("garrafa", vm.model);
      garrafaService.saveGarrafa(vm.model);
    }

    function addCopo(nomeCopo){

      var vm = this;
     if(vm.model.copos.length<5 && nomeCopo != ""){
      vm.model.copos.push({nome: nomeCopo});
      vm.model.copos;
     listaCopos();
   }
    }

   function listaCopos(){
     vm.nomeCopo="";

   }
      function deleteGarrafa(id){
    
  garrafaService.deleteGarrafa(id);
  }
  function searchGarrafa(){
          var vm = this;
      garrafaService.searchGarrafa(vm.model.buscanome).then(function cba(resp){
        vm.garrafas=resp.data;
      });
  }
  function editGarrafa(garrafa){
    var vm = this;
     vm.garrafaCopo = garrafa;
     return vm.garrafaCopo;
  }

  }
}



GarrafaController.$inject = ['garrafaService'];
