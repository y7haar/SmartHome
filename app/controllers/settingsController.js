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


    if(settingsService.selectedTabIndex !== undefined)
        $scope.selectedTabIndex = settingsService.selectedTabIndex;

    if(settingsService.selectedAdminIndex !== null)
        $scope.selectedAdminIndex = settingsService.selectedAdminIndex;
    

    $scope.$watch(function() { return $scope.selectedTabIndex; }, function(newVal) {
        settingsService.selectedTabIndex = newVal;
    }, true);

    //$scope.selectedTabIndex = 0;

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

        if($scope.isXs())
            $state.go("settingsAdminRoomconfiguration");
    };

    $scope.selectUserManagement = function () {
        settingsService.setSelectedAdminIndex(2);
    };

    $scope.getRoomToEdit = function() {
        return settingsService.roomToEdit;
    };

    $scope.getRoomIdToEdit = function() {
        return settingsService.roomToEditIndex;
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
    
    // Alex Kern

    $scope.selectRoomForScene = function (index) {
        settingsService.setSelectedRoomForSceneIndex(index);

        if($scope.isXs())
            $state.go("settingsSceneScenes", {roomId: index});
    };

    $scope.getScenes = function () {
    };

    $scope.getSelectedRoomForSceneIndex = function () {
        return settingsService.selectedRoomForSceneIndex;
    }

});