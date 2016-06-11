/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("houseCtrl", function ($scope) {

    $scope.house = Storage.getInstance().getHouse();
});