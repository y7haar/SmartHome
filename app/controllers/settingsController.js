/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("settingsCtrl", function ($scope, settingsService) {

    $scope.rooms = Storage.getInstance().getRooms();
    $scope.roomModules = Storage.getInstance().getRoomModules();

    $scope.selectedRoomIndex = settingsService.selectedRoomIndex;


    $scope.selectRoom = function(index) {
        $scope.selectedRoomIndex = index;
        settingsService.setSelectedRoomIndex(index);
    }
});