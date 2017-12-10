angular.module('myApp').controller('adminPanelCtrl',function ($http,$state,$localStorage,authService,$location) {
    var vm = this;
    vm.admin=$localStorage.admin?true:false;
     vm.name='';
  	vm.password='';

  	vm.logout = function(){
  		authService.logout();
  		$localStorage.admin = null;
  		$state.go('glavnaya');

  	}

	  vm.login = function () {
	    if(vm.name!='Бобек'||vm.password!='БобекСДУ'){
	    	vm.errorText='Не верный логин или пароль';
	     }else{
	     	 vm.errorText='';
					vm.admin=true;
					$localStorage.admin={name:'BOBEK'};
				}
	  };
});
