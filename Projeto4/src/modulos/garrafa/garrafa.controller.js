import { inherit } from "@uirouter/core";

export default class GarrafaController {

  constructor(garrafaService) {
    var vm = this;
    this.name = 'Garrafa';

    init();

    function init(){
      garrafaService.getGarrafas().then(function abc(resp) {
        vm.garrafas = resp.data;
      });
    }
  }
   //  function delete(id){
  // garrafaService.delete(id);
   //}
  
}
GarrafaController.$inject = ['garrafaService'];
