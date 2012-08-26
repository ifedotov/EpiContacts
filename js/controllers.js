'use strict';

/* Controllers */


function ContactListCtrl($scope, contacts) {

    var contactsPromise = contacts.getContacts();
    contactsPromise.then(function(b) {
            $scope.contacts = b;
    });

	//$scope.contacts = contacts.contacts;
	$scope.orderProp = 'name';

	$scope.showMoreIndex = '';

	$scope.doShowMore = function (contactID) {
		if($scope.showMoreIndex == contactID){
			$scope.showMoreIndex = ''; // hide more info
		} else {
	        $scope.showMoreIndex = contactID;
		}
    };
        
    $scope.isShowMore = function (contactID) {
        return $scope.showMoreIndex == contactID;
    };

    $scope.deleteContact = contacts.delete;

}

function ContactFormCtrl($scope, $routeParams, $location, contacts) {
	$scope.id = $routeParams.id;

	$scope.addContactButtonText = 'Save & Close';
	if ($scope.id == 0) {
		$scope.addContactButtonText = 'Save & Close';
	} else {
		$scope.contact = contacts.get($scope.id);
	}

	$scope.save = function (contact) {
		//require at least email
		console.log(contact);
        if(contact.email != '') {
        	if (contact.id == null || contact.id == 'undefined') {
        		contacts.add(contact);	
        	} else{
        		contacts.update(contact);
        	};
            
            $location.path('/contact-list');
        }
    };

    $scope.cancel = function () {
    	if(confirm('Are you sure you want to cancel?')) {
    		$location.path('/contact-list');
    	}
    	return false;
    };
}
