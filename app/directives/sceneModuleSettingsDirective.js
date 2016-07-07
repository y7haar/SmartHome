/**
 * Created by Alex Kern on 07.07.2016.
 */


mainApp.directive('sceneModuleSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/sceneModuleSettingsView.html",
        restrict: "E",
        controller:sceneModuleSettingsController
    };
});

var sceneModuleSettingsController = function($scope, $mdDialog, $location, settingsService) {

    $scope.mobile = false;
    $scope.sceneToEditIndex = null;


    var url = $location.url();

    if(url === '/settings/scene/scenes/:roomId') {
        $scope.mobile=true;
    }

    $scope.selectedRoom = function () {
        return settingsService.selectedRoomForScene;
    };

    $scope.editScene = function (index) {
        settingsService.selectedSceneToEditIndex = index;
        $scope.sceneToEditIndex = index;

    };

    $scope.addScene = function () {
        var aScene = {displayName:"", modules:[]};

        settingsService.selectedRoomForScene.scenes.push(aScene);
        settingsService.roomToEditIndex = $scope.rooms.length;
        $scope.roomToEditIndex = $scope.rooms.length;
        settingsService.editingRoom = false;
        settingsService.addingRoom = true;

    };


    $scope.deleteScene = function (sceneIndex, ev) {

        console.log(settingsService.selectedRoomForScene);
        var confirm = $mdDialog.confirm()
            .title('Szene löschen?')
            .textContent('Soll die Szene ' + "'" + settingsService.selectedRoomForScene.scenes[sceneIndex].displayName + "'" +  ' wirklich gelöscht werden?')
            .ariaLabel('Löschen bestätigen')
            .targetEvent(ev)
            .clickOutsideToClose(true)
            .ok('Szene löschen')
            .cancel('Abbrechen');

        $mdDialog.show(confirm).then(function () {
            settingsService.selectedRoomForScene.scenes.splice(sceneIndex, 1);

            settingsService.saveAllRooms();
        }, function () {
        });

    };


};
