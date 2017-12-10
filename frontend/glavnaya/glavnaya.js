angular.module('myApp').controller('glavnayaCtrl',function ($http,$state,$localStorage) {
  var vm = this;
  vm.photos = [];
  vm.photoLimit = 8;
  vm.portfolioLimit = 4;
  vm.portfolios = [];
  vm.isAdmin = $localStorage.admin?true:false;
  vm.isBobek = $localStorage.sitenumber=='1';
  vm.siteName = vm.isBobek?'Бобек':'Бес уйрек'

  vm.increaseLimit = function  (number,increase) {
    if(number==1) vm.photoLimit+=increase;
    if(number==2) vm.portfolioLimit+=increase;
  }

  vm.removePortfolio = function(people,i) {
    var confirmed = confirm('Вы уверены что хотите удалить профиль пользователя '+people.name+"?");
    if(confirmed){
      vm.portfolios.splice(i,1)
      $http.delete("/api/portfolio/"+people._id)
      .success(function(response){
      })
      .error(function(err){
      });
    }
  }

  vm.removePhoto = function(id,i) {
    var confirmed = confirm('Вы уверены что хотите удалить эту фотографию?');
    if(confirmed){
      vm.photos.splice(i,1)
      $http.delete("/api/gallery/"+id)
      .success(function(response){
      })
      .error(function(err){
      });
    }
  }

  $http.get("/api/gallery")
  .success(function(response){
    vm.photos = response;
  })
  .error(function(err){
  }); 

  $http.get("/api/portfolio")
  .success(function(response){
    console.log(response)
    vm.portfolios = response;
  })
  .error(function(err){
  });

  $http.get("/api/contacts")
  .success(function(response){
    console.log('55',response)
    vm.contacts = response;
  })
  .error(function(err){
  }); 

});
