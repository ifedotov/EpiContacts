'use strict';

/* Controllers */


function ContactListCtrl($scope, $location, contacts) {

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

    $scope.deleteContact = function(contactID)  {
        contacts.delete(contactID);
        contacts.getContacts().then(function(b) {
            $scope.contacts = b;
        }); // chit refresh after delete
    };

}

function ContactFormCtrl($scope, $routeParams, $location, contacts) {
	$scope.id = $routeParams.id;

	$scope.addContactButtonText = 'Save & Close';
	if ($scope.id == 0) {
		$scope.addContactButtonText = 'Save & Close';
	} else {
		//$scope.contact = contacts.get($scope.id);
        var contactPromise = contacts.get($scope.id);
        contactPromise.then(function(b) {
                $scope.contact = b;
        });
	}

	$scope.save = function (contact) {
		//require at least email
        if(contact.email != '') {
        	contacts.save(contact);
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
