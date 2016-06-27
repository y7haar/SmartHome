/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("settingsCtrl", function ($scope, settingsService, mainService) {

    $scope.rooms = settingsService.rooms;
    $scope.roomModules = settingsService.roomModules;
    $scope.user = mainService.getCurrentUser();


    $scope.roomTabIndex = 0;
    $scope.sceneTabIndex = 1;
    $scope.adminTabIndex = 2;


    $scope.selectedTabIndex = 0;

    $scope.selectedModuleIndex = settingsService.selectedModuleIndex;


    $scope.getSelectedRoomIndex = function () {
        return settingsService.selectedRoomIndex;
    };

    $scope.selectRoom = function(index) {
        settingsService.setSelectedRoomIndex(index);
    };

    $scope.selectModule = function(index) {
        $scope.selectedModuleIndex = index;
        settingsService.setSelectedModuleIndex(index);
    };


    $scope.getSelectedAdminIndex = function () {
        return settingsService.selectedAdminIndex;
    };

    $scope.selectHouseSettings = function() {
        settingsService.setSelectedAdminIndex(0);
    };

    $scope.selectRoomConfiguration = function() {
        settingsService.setSelectedAdminIndex(1);
    };

    $scope.selectUserManagement= function() {
        settingsService.setSelectedAdminIndex(2);
    };


    $scope.selectHouseSettings();
});