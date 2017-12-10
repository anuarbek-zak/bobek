angular.module('myApp').controller('addPhotoCtrl',function ($http,$state,$localStorage,Upload) {
	var vm = this;
	vm.file = {};
	vm.photoUploaded = '';

	vm.save = function(){
		vm.photoUploaded = '';
		var data = {file: vm.file};
		Upload.upload({
			data: data,
			url: '/api/gallery/'
		}).then(function (resp) {
			vm.photoUploaded = 'Фото успешно добавлено!';
		}, function (resp) {
			vm.photoUploaded = 'Ошибка при добавлении фото,поробуйте еще раз';
			console.log('Error status: ' + resp.status);
		}, function (evt) {

		});
	}


});
