'use strict';


// Declare app level module which depends on filters, and services
angular.module('epiContacts', []).
	config(['$routeProvider', function($routeProvider) {
	    $routeProvider.when('/contact-list', {templateUrl: 'partials/contact-list.html', controller: ContactListCtrl});
	    $routeProvider.when('/contact-form/:contactID', {templateUrl: 'partials/contact-form.html', controller: ContactFormCtrl});
	    $routeProvider.otherwise({redirectTo: '/contact-list'});
	}]);
