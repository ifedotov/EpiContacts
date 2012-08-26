'use strict';

/* Services */

var services = angular.module('epiContactServices', []);

services.factory('contacts', function($http) {	

	var contactsService = function(data) {
	    angular.extend(this, data);
	}

	contactsService.getContacts = function() {
	    return $http.get('remote.cfc?method=list&returnformat=json').then(function(response) {
	    	return response.data;
	    });
	};

    
    contactsService.delete = function (contactID) {
    	if (confirm("Delete this contact?")) {
    		return $http.post('remote.cfc?method=delete&contactID=' + contactID).then(function(response) {
	      		return response.data;
	    });
    	}
    };


    contactsService.get = function(contactID) {
    	return $http.get('remote.cfc?method=get&returnformat=json&contactID=' + contactID).then(function(response) {
	      return response.data;
	    });
    };


    contactsService.save = function(contact) {
    	$http.post('remote.cfc?method=save&contact='+angular.toJson(contact));
    };

    
    return contactsService;
});
