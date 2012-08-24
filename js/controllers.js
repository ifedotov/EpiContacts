'use strict';

/* Controllers */


function ContactListCtrl($scope) {
	$scope.contacts = [
		{"name":"Rio Watt","phone":"0131 650 8116","email":"rio.watt@ed.ac.uk"},
		{"name":"Sheena Jenkins","phone":"0131 650 8116","email":"sheena.jenkins@ed.ac.uk"},
		{"name":"Craig Shearer","phone":"0131 650 2214","email":"craig.shearer@ed.ac.uk"},
		{"name":"Fiona Potts","phone":"0131 650 2112","email":"fiona.potts@ed.ac.uk"},
		{"name":"Margaret Hurst","phone":"0131 650 2219","email":"margaret.hurst@ed.ac.uk"},
		{"name":"Dianne Henderson","phone":"0131 651 4072","email":"dianne.henderson@ed.ac.uk"},
		{"name":"John Donoghue","phone":"0131 650 2217","email":"john.donoghue@ed.ac.uk"},
		{"name":"Linda Craig","phone":"0131 650 2217","email":"linda.craig@ed.ac.uk"},
		{"name":"Cheryl Loney","phone":"0131 651 4072","email":"cheryl.loney@ed.ac.uk"},
		{"name":"Lok-Yin Drever","phone":"0131 651 4072","email":"lok-yin.drever@ed.ac.uk"},
		{"name":"Alistair Hudson","phone":"0131 650 2217","email":"alistair.hudson@ed.ac.uk"},
		{"name":"Linda Kerr","phone":"0131 651 4779","email":"linda.kerr@ed.ac.uk"},
		{"name":"Liz Carter","phone":"0131 650 2223","email":"liz.carter@ed.ac.uk"},
		{"name":"Jan Grant","phone":"0131 651 4068","email":"jan.grant@ed.ac.uk"},
		{"name":"James Slattery","phone":"0131 650 9263","email":"james.slattery@ed.ac.uk"},
		{"name":"Kathryn Fairfoul","phone":"0131 650 9664","email":"kfairfou@exseed.ed.ac.uk"},
		{"name":"Kevin McCormick","phone":"0131 651 4480","email":"kevin.mccormick@ed.ac.uk"},
		{"name":"Alison Ramsay","phone":"0131 650 6324","email":"alison.ramsay@ed.ac.uk"},
		{"name":"Lynda Henderson","phone":"0131 650 9169","email":"lynda.henderson@ed.ac.uk"},
		{"name":"Doug Wilson","phone":"0131 650 2229","email":"Douglas.Wilson@ed.ac.uk"},
		{"name":"Paul Gorman","phone":"0131 650 9186","email":"paul.gorman@ed.ac.uk"},
		{"name":"Kate Monroe","phone":"0131 651 4071","email":"kate.monroe@ed.ac.uk"},
		{"name":"Robert Lawrie","phone":"0131 651 4221","email":"robert.lawrie@ed.ac.uk"},
		{"name":"Jennifer Brown","phone":"0131 650 8182","email":"jennifer.brown@ed.ac.uk"},
		{"name":"Sharon Reid","phone":"0131 651 4778","email":"sharon.reid@ed.ac.uk"},
		{"name":"Jane Campbell","phone":"0131 651 4070","email":"jane.campbell@ed.ac.uk"},
		{"name":"Janet Edwards","phone":"0131 650 2129","email":"j.edwards@ed.ac.uk"},
		{"name":"Deborah Woolley","phone":"0131 651 4771","email":"deborah.woolley@ed.ac.uk"},
		{"name":"Roz Lewis","phone":"0131 650 9265","email":"rosamund.lewis@ed.ac.uk"},
		{"name":"Rhona Anderson","phone":"0131 650 6360","email":"rhona.anderson@ed.ac.uk"},
		{"name":"Geraldine Beattie","phone":"0131 650 9184","email":"geraldine.beattie@ed.ac.uk"},
		{"name":"Karen Todd","phone":"0131 650 2131","email":"k.todd@ed.ac.uk"},
		{"name":"Joe Lear","phone":"0131 650 9185","email":"joseph.lear@ed.ac.uk"},
		{"name":"Joanna Macpherson","phone":"0131 650 2042","email":"joanna.macpherson@ed.ac.uk"},
		{"name":"Kimberley Bruce","phone":"0131 650 2227","email":"kimberley.bruce@ed.ac.uk"},
		{"name":"Drew Howie","phone":"0131 650 2355","email":"andrew.howie@ed.ac.uk"},
		{"name":"Claire Renton","phone":"0131 650 2228","email":"claire.renton@ed.ac.uk"},
		{"name":"Sarah Nicol","phone":"0131 650 9268","email":"sarah.nicol@ed.ac.uk"}
	];
	$scope.orderProp = 'name';

	$scope.showMoreIndex = '';

	$scope.doShowMore = function (contactIndex) {
		if($scope.showMoreIndex == contactIndex){
			$scope.showMoreIndex = ''; // hide more info
		} else {
	        $scope.showMoreIndex = contactIndex;
		}
    }
        
    $scope.isShowMore = function (contactIndex) {
        return $scope.showMoreIndex == contactIndex;
    }

    $scope.deleteContact = function (contactIndex) {
    	var contacts = $scope.contacts;
        for (var i = 0; i < contacts.length; i++) {
        	if (contactIndex == contacts[i].email) {
        		alert(contacts[i].email);
        		contacts.splice(i,1);
        		break;
        	}
        }
    }

}

function ContactFormCtrl($scope, $routeParams) {
	$scope.contactID = $routeParams.contactID;
}
