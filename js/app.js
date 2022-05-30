(function () {
    angular.module('App', [])
    .controller('myCtrl', myCtrl);

    myCtrl.$inject=['$scope'];

    function myCtrl($scope){
        $scope.fname="Jairo";
        $scope.lname= "Manalu"
    }
})();



