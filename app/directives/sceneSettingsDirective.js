/**
 * Created by Alex Kern on 05.07.2016.6
 */


mainApp.directive('sceneSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/sceneSettingsView.html",
        restrict: "E",
        controller:sceneSettingsController
    };
});

var sceneSettingsController = function($scope, $mdDialog, $location, settingsService) {

    $scope.mobile = false;
    $scope.sceneToEditIndex = settingsService.selectedSceneToEditIndex;


    var url = $location.url();

    if(url === '/settings/scene/scenes/:roomId') {
        $scope.mobile=true;
    }

    $scope.selectedRoom = function () {
        return settingsService.selectedRoomForScene;
    };

    $scope.editScene = function (index) {
        settingsService.selectedSceneToEditIndex = index;
        settingsService.selectedSceneToEdit = settingsService.selectedRoomForScene.scenes[index];
        $scope.sceneToEditIndex = index;
        console.log(settingsService.selectedSceneToEdit);

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
