/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("houseCtrl", function ($scope, $mdMedia) {

    $scope.house = Storage.getInstance().getHouse();
    $scope.room = $scope.house;
    $scope.modules = $scope.house.modules;

    $scope.modulesLeft = [];
    $scope.modulesRight = [];

    for(var i = 0;i < $scope.modules.length;++i) {

        if(i % 2 != 0) {
            $scope.modulesLeft.push($scope.modules[i]);
        }

        else {
            $scope.modulesRight.push($scope.modules[i]);
        }
    }
});