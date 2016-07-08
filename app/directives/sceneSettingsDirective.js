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

var sceneSettingsController = function($scope, $mdDialog,$mdMedia,$state,$stateParams, $location, settingsService) {

    $scope.isXs = function() {
        return $mdMedia("xs");
    };

    $scope.mobile = false;
    $scope.sceneToEditIndex = settingsService.selectedSceneToEditIndex;


    var id = $stateParams.roomId;

    if (id !== undefined) {
        $scope.mobile = true;
    }

    $scope.selectedRoom = function () {
        return settingsService.selectedRoomForScene;
    };

    $scope.editScene = function (index) {
        settingsService.selectedSceneToEditIndex = index;
        settingsService.selectedSceneToEdit = settingsService.selectedRoomForScene.scenes[index];
        $scope.sceneToEditIndex = index;

        if($scope.isXs())
            $state.go("settingsSceneModules", {roomId: settingsService.selectedRoomForSceneIndex, moduleId: index});

    };

    $scope.addScene = function (ev) {
        console.log("ADD SCENE")

        $mdDialog.show({
            templateUrl: "app/views/settings/addSceneView.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true,
            controller: addSceneController
            /*
            resolve: {
                room: function () {
                    return
                }
            }
            */
        });

        /*
        var aScene = {displayName:"", modules:[]};

        settingsService.selectedRoomForScene.scenes.push(aScene);
        settingsService.roomToEditIndex = $scope.rooms.length;
        $scope.roomToEditIndex = $scope.rooms.length;
        settingsService.editingRoom = false;
        settingsService.addingRoom = true;
        */

    };


    $scope.deleteScene = function (sceneIndex, ev) {

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

var addSceneController = function($scope, $mdDialog, settingsService) {


    $scope.sceneName = "";
    $scope.isDisabled = true;
    $scope.close = function(){
        $mdDialog.hide();
    };

    $scope.$watch('sceneName',function () {

        if($scope.sceneName != undefined)
            $scope.isDisabled = !$scope.sceneName.length > 0;
        else
            $scope.isDisabled = true;

        console.log("ADD Aable: "+$scope.isDisabled);
    });

    $scope.saveNewScene = function (ev) {
        var scene = {
            displayName:$scope.sceneName
        };

        settingsService.selectedRoomForScene.scenes.push(scene);
        settingsService.saveAllRooms();

        /*  Autoselect new created Scene
        var index = settingsService.selectedRoomForScene.scenes.length -1;
        settingsService.selectedSceneToEditIndex = index;
        settingsService.selectedSceneToEdit = settingsService.selectedRoomForScene.scenes[index];
        */

        var dialog = $mdDialog.alert()
            .title('Neue Szene erstellt')
            .textContent('Die neue Szene wurde erstellt und gespeichert.')
            .ariaLabel('Neue Szene gespeichert')
            .clickOutsideToClose(true)
            .targetEvent(ev)
            .ok('Ok');

        $mdDialog.show(dialog);
    }

};

