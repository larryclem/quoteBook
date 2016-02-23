angular.module('quoteBook')
.controller('mainCtrl', ['$scope', 'dataService', function($scope, dataService){

	$scope.quotes = dataService.getData();

	$scope.addQuote = function (){
		dataService.addData($scope.toAdd);
		$scope.toAdd = {};
	}

	$scope.removeQuote = function (){
		dataService.removeData($scope.toRemove);
		$scope.toRemove = {};
	}

	$scope.filterClick = function (){
		$scope.filterTerm = $scope.filterFinal;
	}

}]);
