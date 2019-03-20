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

// BUSCA TODOS AS GARRAFAS NO BANCO E RETORNA UM OBJETO
    init();
    function init(){
      garrafaService.getGarrafas().then(function abc(resp) {
        vm.garrafas = resp.data;
      });
    }
// SALVAR GARRAFA CARREGANDO COM SI A LISTA DE COPOS DENTRO DA VM.MODEL.COPOS
    function saveGarrafa(){
      var vm = this;
      console.log("garrafa", vm.model);
      garrafaService.saveGarrafa(vm.model);
    }
// ADICIONAR COPO NO OBJETO
    function addCopo(nomeCopo){
      var vm = this;
     if(vm.model.copos.length<5 && nomeCopo != ""){
      vm.model.copos.push({nome: nomeCopo});
      vm.model.copos;
     listaCopos();
   }
    }
// SETAR O COPO COMO VAZIO PARA LISTAR
   function listaCopos(){
     vm.nomeCopo="";
   }

// BUSCAR GARRAFA POR NOME
  function searchGarrafa(){
          var vm = this;
      garrafaService.findGarrafa(vm.model.buscanome).then(function cba(resposta){
        vm.garrafas=resposta.data;
      });
  }
// EDITGARRAFA PARA LISTAR OS COPOS E A GARRAFA PARA SEREM EDITADOS E EDITARGARRAFA PARA MANDAR A REQUISIÇÃO 
// DE ATUALIZAR
  function editGarrafa(garrafa){
    var vm = this;
     vm.garrafaCopo = garrafa;
  }
  function editarGarrafa(){
    var vm = this;
    vm.garrafaCopo.nome=vm.editaGarrafa;
garrafaService.editGarrafa(vm.garrafaCopo);
  }

// DELETAR COPO E DELETAR GARRAFA
 function deleteCopo(id){
  garrafaService.deleteCopo(id);
}
 function deleteGarrafa(id){
  garrafaService.deleteGarrafa(id);
  }

  }
}



GarrafaController.$inject = ['garrafaService'];
