/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("settingsCtrl", function ($scope) {

    $scope.rooms = Storage.getInstance().getRooms();
    $scope.roomModules = Storage.getInstance().getRoomModules();
});