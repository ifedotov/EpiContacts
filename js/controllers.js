'use strict';

/* Controllers */


function ContactListCtrl($scope, contacts) {
	$scope.list = contacts.list;
	$scope.orderProp = 'name';

	$scope.showMoreIndex = '';

	$scope.doShowMore = function (contactIndex) {
		if($scope.showMoreIndex == contactIndex){
			$scope.showMoreIndex = ''; // hide more info
		} else {
	        $scope.showMoreIndex = contactIndex;
		}
    };
        
    $scope.isShowMore = function (contactIndex) {
        return $scope.showMoreIndex == contactIndex;
    };

    $scope.deleteContact = contacts.delete;

}

function ContactFormCtrl($scope, $routeParams, contacts) {
	$scope.contactID = $routeParams.contactID;
}
