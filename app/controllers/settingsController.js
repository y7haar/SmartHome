/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("settingsCtrl", function ($scope, settingsService, mainService) {

    $scope.rooms = Storage.getInstance().getRooms();
    $scope.roomModules = Storage.getInstance().getRoomModules();
    $scope.user = mainService.getCurrentUser();

    $scope.selectedRoomIndex = settingsService.selectedRoomIndex;


    $scope.selectRoom = function(index) {
        $scope.selectedRoomIndex = index;
        settingsService.setSelectedRoomIndex(index);
    };

    $scope.selectedTabIndex = 0;
});