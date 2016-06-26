/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("settingsCtrl", function ($scope, settingsService, mainService) {

    $scope.rooms = settingsService.rooms;
    $scope.roomModules = settingsService.roomModules;
    $scope.user = mainService.getCurrentUser();

    $scope.selectedRoomIndex = settingsService.selectedRoomIndex;
    $scope.selectedModuleIndex = settingsService.selectedModuleIndex;

    $scope.selectRoom = function(index) {
        $scope.selectedRoomIndex = index;
        settingsService.setSelectedRoomIndex(index);
    };

    $scope.selectModule = function(index) {
        $scope.selectedModuleIndex = index;
        settingsService.setSelectedModuleIndex(index);
    };

    $scope.selectedTabIndex = 0;

    $scope.selectHouseSettings = function() {
        $scope.selectedAdminIndex = 0;
    };

    $scope.selectRoomConfiguration = function() {
        $scope.selectedAdminIndex = 1;
    };

    $scope.selectUserManagement= function() {
        $scope.selectedAdminIndex = 2;
    };

    $scope.selectHouseSettings();
});