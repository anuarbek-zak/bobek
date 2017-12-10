angular.module('myApp').controller('editContactsCtrl',function ($http,$stateParams,$localStorage,Upload) {
	var vm = this;
	vm.contacts = {}

		$http.get("/api/contacts")
		.success(function(response){
			vm.contacts = response;
		})
		.error(function(err){
		}); 

	vm.save = function(){
		$http.put("/api/contacts/"+vm.contacts._id,vm.contacts)
		.success(function(response){
			vm.uploaded = 'Изменения сохранены'
		})
		.error(function(err){
			vm.uploaded = 'Ошибка при сохранении изменений'
		});
	}


});
