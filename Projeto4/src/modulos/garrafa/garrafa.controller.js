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
    this.editarGarrafa = editarGarrafa;
    this.deleteCopo = deleteCopo;
    vm.model = {};
    vm.model.copos = [];
    vm.garrafaCopo;
    vm.editaGarrafa;


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
      garrafaService.searchGarrafa(vm.model.buscanome).then(function cba(resposta){
        vm.garrafas=resposta.data;
      });
  }
  function editGarrafa(garrafa){
    var vm = this;
    console.log('asd'+garrafa.nome)
     vm.garrafaCopo = garrafa;
     console.log('ASDZ'+vm.garrafaCopo.nome);
  }
  function editarGarrafa(){
    var vm = this;
    vm.garrafaCopo.nome=vm.editaGarrafa;
garrafaService.editarGarrafa(vm.garrafaCopo);
  }

function deleteCopo(id){
  garrafaService.deleteCopo(id);
}

  }
}



GarrafaController.$inject = ['garrafaService'];
