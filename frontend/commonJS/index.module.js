angular.module('myApp', ['ngAnimate','ngFileUpload','ui.router','ngStorage','mgcrea.ngStrap'])
.config(function($httpProvider,$stateProvider) {
			$httpProvider.interceptors.push(function($q, $localStorage) {
		return {
			'request': function(config) {
				config.headers['sitenumber'] = $localStorage.sitenumber;
				return config;
			}
		};
	});
});;
