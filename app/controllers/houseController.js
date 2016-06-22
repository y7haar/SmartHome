/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("houseCtrl", function ($scope, $mdMedia) {

    $scope.house = Storage.getInstance().getHouse();
    $scope.room = $scope.house;
});