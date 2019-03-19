import { inherit } from "@uirouter/core";

export default class GarrafaController {

  constructor(garrafaService) {
    var vm = this;
    this.name = 'Garrafa';
    this.addCopo = addCopo;
    vm.model = {};
    vm.model.copos = [];

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
      // Validacao seguido de retorno da lista
      if(vm.model.copos.length<5){
      vm.model.copos.push({nome: nomeCopo});
      vm.model.copos;
      listaCopos();
    }
    }
    // lista Copos retorna a view a lista completa após ser tratada na funcao addCopo
    function listaCopos(){
      vm.nomeCopo="";
    return vm.model.copos

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
