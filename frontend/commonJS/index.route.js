angular.module('myApp')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('glavnaya', {
                url: '/glavnaya',
                templateUrl: 'glavnaya/glavnaya.html',
                controller:'glavnayaCtrl',
                controllerAs:'vm'
            })
            .state('adminPanel', {
                url: '/adminPanel',
                templateUrl: 'adminPanel/adminPanel.html',
                controller:'adminPanelCtrl',
                controllerAs:'vm'
            })
            .state('addPhoto', {
                url: '/addPhoto',
                templateUrl: 'addPhoto/addPhoto.html',
                controller:'addPhotoCtrl',
                controllerAs:'vm'
            })
            .state('addPortfolio', {
                url: '/addPortfolio/:id',
                templateUrl: 'addPortfolio/addPortfolio.html',
                controller:'addPortfolioCtrl',
                controllerAs:'vm'
            })
            .state('editContacts', {
                url: '/editContacts/:id',
                templateUrl: 'editContacts/editContacts.html',
                controller:'editContactsCtrl',
                controllerAs:'vm'
            })
        $urlRouterProvider.otherwise('/glavnaya');
    });
