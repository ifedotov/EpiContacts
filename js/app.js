'use strict';


// Declare app level module which depends on filters, and services
angular.module('epiContacts', ['epiContactServices']).
	config(['$routeProvider', function($routeProvider) {
	    $routeProvider.when('/contact-list', {templateUrl: 'partials/contact-list.html', controller: ContactListCtrl});
	    $routeProvider.when('/contact-form/:id', {templateUrl: 'partials/contact-form.html', controller: ContactFormCtrl});
	    $routeProvider.otherwise({redirectTo: '/contact-list'});
	}]);
