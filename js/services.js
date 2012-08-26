'use strict';

/* Services */

var services = angular.module('epiContactServices', []);

services.factory('contacts', function($http) {
/*    var contacts = [
			{"id":"1","name":"Alison Ramsay","phone":"0131 650 6324","email":"alison.ramsay@ed.ac.uk"},
			{"id":"2","name":"Alistair Hudson","phone":"0131 650 2217","email":"alistair.hudson@ed.ac.uk"},
			{"id":"3","name":"Cheryl Loney","phone":"0131 651 4072","email":"cheryl.loney@ed.ac.uk"},
			{"id":"4","name":"Claire Renton","phone":"0131 650 2228","email":"claire.renton@ed.ac.uk"},
			{"id":"5","name":"Craig Shearer","phone":"0131 650 2214","email":"craig.shearer@ed.ac.uk"},
			{"id":"6","name":"Deborah Woolley","phone":"0131 651 4771","email":"deborah.woolley@ed.ac.uk"},
			{"id":"7","name":"Dianne Henderson","phone":"0131 651 4072","email":"dianne.henderson@ed.ac.uk"},
			{"id":"8","name":"Doug Wilson","phone":"0131 650 2229","email":"Douglas.Wilson@ed.ac.uk"},
			{"id":"9","name":"Drew Howie","phone":"0131 650 2355","email":"andrew.howie@ed.ac.uk"},
			{"id":"10","name":"Fiona Potts","phone":"0131 650 2112","email":"fiona.potts@ed.ac.uk"},
			{"id":"11","name":"Geraldine Beattie","phone":"0131 650 9184","email":"geraldine.beattie@ed.ac.uk"},
			{"id":"12","name":"James Slattery","phone":"0131 650 9263","email":"james.slattery@ed.ac.uk"},
			{"id":"13","name":"Jan Grant","phone":"0131 651 4068","email":"jan.grant@ed.ac.uk"},
			{"id":"14","name":"Jane Campbell","phone":"0131 651 4070","email":"jane.campbell@ed.ac.uk"},
			{"id":"15","name":"Janet Edwards","phone":"0131 650 2129","email":"j.edwards@ed.ac.uk"},
			{"id":"16","name":"Jennifer Brown","phone":"0131 650 8182","email":"jennifer.brown@ed.ac.uk"},
			{"id":"17","name":"Joanna Macpherson","phone":"0131 650 2042","email":"joanna.macpherson@ed.ac.uk"},
			{"id":"18","name":"Joe Lear","phone":"0131 650 9185","email":"joseph.lear@ed.ac.uk"},
			{"id":"19","name":"John Donoghue","phone":"0131 650 2217","email":"john.donoghue@ed.ac.uk"},
			{"id":"20","name":"Karen Todd","phone":"0131 650 2131","email":"k.todd@ed.ac.uk"},
			{"id":"21","name":"Kate Monroe","phone":"0131 651 4071","email":"kate.monroe@ed.ac.uk"},
			{"id":"22","name":"Kathryn Fairfoul","phone":"0131 650 9664","email":"kfairfou@exseed.ed.ac.uk"},
			{"id":"23","name":"Kevin McCormick","phone":"0131 651 4480","email":"kevin.mccormick@ed.ac.uk"},
			{"id":"24","name":"Kimberley Bruce","phone":"0131 650 2227","email":"kimberley.bruce@ed.ac.uk"},
			{"id":"25","name":"Linda Craig","phone":"0131 650 2217","email":"linda.craig@ed.ac.uk"},
			{"id":"26","name":"Linda Kerr","phone":"0131 651 4779","email":"linda.kerr@ed.ac.uk"},
			{"id":"27","name":"Liz Carter","phone":"0131 650 2223","email":"liz.carter@ed.ac.uk"},
			{"id":"28","name":"Lok-Yin Drever","phone":"0131 651 4072","email":"lok-yin.drever@ed.ac.uk"},
			{"id":"29","name":"Lynda Henderson","phone":"0131 650 9169","email":"lynda.henderson@ed.ac.uk"},
			{"id":"30","name":"Margaret Hurst","phone":"0131 650 2219","email":"margaret.hurst@ed.ac.uk"},
			{"id":"31","name":"Paul Gorman","phone":"0131 650 9186","email":"paul.gorman@ed.ac.uk"},
			{"id":"32","name":"Rhona Anderson","phone":"0131 650 6360","email":"rhona.anderson@ed.ac.uk"},
			{"id":"33","name":"Rio Watt","phone":"0131 650 8116","email":"rio.watt@ed.ac.uk"},
			{"id":"34","name":"Robert Lawrie","phone":"0131 651 4221","email":"robert.lawrie@ed.ac.uk"},
			{"id":"35","name":"Roz Lewis","phone":"0131 650 9265","email":"rosamund.lewis@ed.ac.uk"},
			{"id":"36","name":"Sarah Nicol","phone":"0131 650 9268","email":"sarah.nicol@ed.ac.uk"},
			{"id":"37","name":"Sharon Reid","phone":"0131 651 4778","email":"sharon.reid@ed.ac.uk"},
			{"id":"38","name":"Sheena Jenkins","phone":"0131 650 8116","email":"sheena.jenkins@ed.ac.uk"}
		];*/
	

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
    		$http.post('remote.cfc?method=delete&contactID=' + contactID);
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
