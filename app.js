angular.module("MyApp", [])
	.controller("Rounding", function($scope) {
    $scope.pi = 3.14159265359;
    $scope.ranges = [1, 2, 3, 4, 5];
		$scope.selectedRange = $scope.ranges[4];
	})
  .controller("Total", function ($scope) {
    // console.log($scope.cost, $scope.tip);
    $scope.$watch('percentage', function () {
			$scope.tip = $scope.cost * $scope.percentage;
	    $scope.total = $scope.cost + $scope.tip;
    });
  });
