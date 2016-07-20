angular.module("MyApp", [])
	.controller("Rounding", function($scope) {
		$scope.pi = 3.14159265359;
		$scope.ranges = [1, 2, 3, 4, 5];
		$scope.selectedRange = $scope.ranges[4];
	})
	.controller("Total", function($scope) {
		// console.log($scope.cost, $scope.tip);
		$scope.$watch('percentage', function() {
			$scope.tip = $scope.cost * $scope.percentage;
			$scope.total = $scope.cost + $scope.tip;
		});
	})
	.controller("Cards", function($scope, $sce) {
		$scope.cards = {
			"Spades": $sce.trustAsHtml("&hearts;"), // FIXME
			"Clubs": "&clubs;",
			"Hearts": "&hearts;",
			"Diamonds": "&diams;"
		};
	})
	.controller("Cameras", function($scope) {
		$scope.cameras = [{
			title: 'Nikon D3100 DSLR',
			image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
			rating: 3.4,
			price: 369.99,
			onSale: true
		}, {
			title: 'Canon EOS 70D',
			image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
			rating: 2.0,
			price: 1099.0,
			onSale: false
		}, {
			title: 'Nikon D810A',
			image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
			rating: 4.2,
			price: 3796.95,
			onSale: true
		}];
	});
