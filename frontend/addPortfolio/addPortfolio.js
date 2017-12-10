angular.module('myApp').controller('addPortfolioCtrl',function ($http,$stateParams,$localStorage,Upload) {
	var vm = this;
	vm.file = {};
	vm.portfolio = {}
	vm.photoUploaded = '';

	if($stateParams.id){
		$http.get("/api/portfolio/"+$stateParams.id)
		.success(function(response){
			vm.portfolio = response;
		})
		.error(function(err){
		}); 
	}

	vm.save = function(){
		var url =  '/api/portfolio/';
		if($stateParams.id) url = url+$stateParams.id
		vm.photoUploaded = '';
		var data = {file: vm.file,portfolio:vm.portfolio};
		Upload.upload({
			data: data,
			url: url
		}).then(function (resp) {
			vm.portfolio = {};
			vm.file = {}
			vm.photoUploaded = 'Портфолио успешно сохранено!';
		}, function (resp) {
			vm.portfolio = {};
			vm.file = {}
			vm.photoUploaded = 'Ошибка при сохранении,поробуйте еще раз';
			console.log('Error status: ' + resp.status);
		}, function (evt) {

		});
	}


});
