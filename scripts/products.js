
(function(){

	var app = angular.module('store-products', []);

	app.directive('productPanels', [function () {
		return {
			// Use Element Directives for UI widgets and Attribute directives for mixin behaviours
			// like a tooltip 
			restrict: 'E',
			templateUrl : 'product-panels.html',
			controller : ['$scope', function ($scope){

				$scope.tab = 1;

				$scope.selectTab = function(setTab){
					$scope.tab = setTab;
				};

				$scope.isSelected = function(checkTab){
					return $scope.tab==checkTab;
				};

			}],

			controllerAs : 'panels',
			
		};
	}]);

})();