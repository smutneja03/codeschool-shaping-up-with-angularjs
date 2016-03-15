(function(){
	
	var app = angular.module('store', ['store-products' ]);

	// Module is the place where we write pieces of our angular application
	// Keeps our code encapsulated, maintainable, testable and readable
	// defines dependencies of our app

	/*
		Directives : HTML annotations that trigger Javascript behaviour
		Modules : Where our application components live
		Controllers : Where we add applciation behaviour
		Expressions : How values gets displayed within the page
	*/

	/*
		Services give your controller additional functionality like $http, $log, $filter
	*/

	app.controller('StoreCtrl', ['$scope', function ($scope) {
		
		// Controllers are where we define our app's behaviour by defining functions and values
		// The scope of the controller is only inside here

		$scope.products = gems;


	}]);

	app.controller('PanelCtrl', ['$scope', function ($scope) {
		
		$scope.tab = 1;

		$scope.selectTab = function(setTab){
			$scope.tab = setTab;
		};

		$scope.isSelected = function(checkTab){
			return $scope.tab==checkTab;
		};

	}]);

	app.controller('ReviewCtrl', ['$scope', function ($scope) {
		// Mention the name of the services that controller needs and then add the same as argument
		// in the function arguments
		// This way of specifying the services our controller needs is known as dependency injection
		$scope.review = {};

		$scope.addReview = function(product){

			product.reviews.push($scope.review);
			$scope.review = {};

		};

	}]);

	var gems = [
	{
		name : 'Dodecahedron',
		price : 2.95,
		description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		canPurchase : true,
		soldOut : false,
		
		images : [
			{
				full : 'https://www.qld.gov.au/about/assets/images/photos/emblems/qld-state-gem.jpg',
				thumb : 'http://wikiimages.qwika.com/thumb/en/e/e0/Dodecahedron.jpg/180px-Dodecahedron.jpg',
			}
		],

		reviews : [
			{
				stars : 5,
				body : "I Love this Product",
				author : "sahil@gmail.com"
			},

		],

	},

	{
		name : 'Pentagonal Gem',
		price : 3.19,
		description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		canPurchase : true,
		soldOut : false,
		
		images : [
			{
				full : 'http://pre05.deviantart.net/e7cc/th/pre/f/2012/199/0/8/gem_png_by_doloresdevelde-d57oyqr.png',
				thumb : 'http://wikiimages.qwika.com/thumb/en/e/e0/Dodecahedron.jpg/180px-Dodecahedron.jpg',
			}
		],

		reviews : [
			{
				stars : 5,
				body : "I Love this Product",
				author : "sahil@gmail.com"
			},

		],

	},

	{
		name : 'Sample Gem',
		price : 12.34,
		description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		canPurchase : true,
		soldOut : false,
		
		images : [
			{
				full : 'https://www.qld.gov.au/about/assets/images/photos/emblems/qld-state-gem.jpg',
				thumb : 'http://wikiimages.qwika.com/thumb/en/e/e0/Dodecahedron.jpg/180px-Dodecahedron.jpg',
			}
		],

		reviews : [
			{
				stars : 5,
				body : "I Love this Product",
				author : "sahil@gmail.com"
			},

		],

	},

	]






})();