/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("settingsCtrl", function ($scope, $mdMedia, $mdDialog, $state, settingsService, mainService) {
    $scope.isXs = function() {
        return $mdMedia("xs");
    };

    $scope.isGtMd = function() {
        return $mdMedia("gt-md");
    };

    $scope.rooms = settingsService.rooms;
    $scope.roomModules = settingsService.roomModules;
    $scope.user = mainService.getCurrentUser();


    $scope.roomTabIndex = 0;
    $scope.sceneTabIndex = 1;
    $scope.adminTabIndex = 2;


    $scope.selectedTabIndex = 0;

    $scope.selectedModuleIndex = settingsService.selectedModuleIndex;


    $scope.getSelectedRoomIndex = function () {
        return settingsService.selectedRoomWithHouseIndex;
    };

    $scope.selectRoom = function (index) {
        settingsService.setSelectedRoomWithHouseIndex(index);

        if($scope.isXs())
            $state.go("settingsRoomsDetail", {roomId: index});
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

        if ($scope.isXs()) {
            $state.go("settingsAdminHousesettings");

            /*
            $mdDialog.show({
                template: '<house-settings></house-settings>',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true
            })
            */
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

    $scope.isAddingRoom = function() {
        return settingsService.addingRoom;
    };

    $scope.getRoomsWithHouse = function () {
        return settingsService.getRoomsWithHouse();
    };

    settingsService.setSelectedAdminIndex($scope.isXs() ? undefined : 0);

});