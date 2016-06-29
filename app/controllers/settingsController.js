/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("settingsCtrl", function ($scope, $mdMedia, $mdDialog, settingsService, mainService) {

    var isXs = $mdMedia("xs");

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

    $scope.selectRoom = function (index) {
        settingsService.setSelectedRoomIndex(index);
    };

    $scope.selectModule = function (index) {
        $scope.selectedModuleIndex = index;
        settingsService.setSelectedModuleIndex(index);
    };


    $scope.getSelectedAdminIndex = function () {
        return settingsService.selectedAdminIndex;
    };

    $scope.selectHouseSettings = function (ev) {
        settingsService.setSelectedAdminIndex(0);

        if (isXs) {
            $mdDialog.show({
                template: '<house-settings></house-settings>',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true
            })
        }
    };
    
    $scope.selectRoomConfiguration = function () {
        settingsService.setSelectedAdminIndex(1);
    };

    $scope.selectUserManagement = function () {
        settingsService.setSelectedAdminIndex(2);
    };

    $scope.getRoomToEdit = function() {
        return settingsService.roomToEdit;
    };

    $scope.isEditingRoom = function() {
        return settingsService.editingRoom;
    };


    if(! isXs) {
        $scope.selectHouseSettings();
    }

});