/**
 * @author Alexander Kern
 */


mainApp.directive('sceneModuleSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/sceneModuleSettingsView.html",
        restrict: "E",
        controller:sceneModuleSettingsController
    };
});

var sceneModuleSettingsController = function($scope, $mdDialog,$stateParams, settingsService) {

    $scope.mobile = false;
    var roomId = $stateParams.roomId;
    var moduleId = $stateParams.moduleId;
    if (roomId !== undefined && moduleId !== undefined) {
        settingsService.selectedSceneToEditIndex = moduleId;
        settingsService.selectedRoomForSceneIndex = roomId;
        $scope.mobile = true;
    }

    $scope.modules = settingsService.selectedSceneToEdit.modules;

    $scope.availableModules = settingsService.selectedRoomForScene.modules;

    $scope.getModules = function () {
        return settingsService.selectedSceneToEdit.modules;
    };

    $scope.saveModuleSettings=function (ev) {
        var dialog = $mdDialog.alert()
            .title('Szeneneditor')
            .textContent('Moduleinstellungen wurden gespeichert')
            .ariaLabel('Moduleinstellungen gespeichert')
            .clickOutsideToClose(true)
            .targetEvent(ev)
            .ok('Ok');

        $mdDialog.show(dialog);

    };


    $scope.addModule = function (ev) {

        $mdDialog.show({
            templateUrl: "app/views/settings/addModuleToSceneView.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true,
            controller: addModuleToSceneController
            /*
             resolve: {
             room: function () {
             return
             }
             }
             */
        });
    };

    $scope.deleteModule = function(moduleIndex,ev){

        var moduleDisplayName = null;
        var moduleName = $scope.modules[moduleIndex].name;

        var roomModules = settingsService.selectedRoomForScene.modules;

        for(var i =0; i< roomModules.length;++i){
            if(roomModules[i].name == moduleName) {
                moduleDisplayName = roomModules[i].displayName;
                break;
            }
        }

        var confirm = $mdDialog.confirm()
            .title('Modul entfernen?')
            .textContent('Soll das Modul ' + "'" + moduleDisplayName + "'" +  ' wirklich entfernt werden?')
            .ariaLabel('Löschen bestätigen')
            .targetEvent(ev)
            .clickOutsideToClose(true)
            .ok('Modul entfernen')
            .cancel('Abbrechen');

        $mdDialog.show(confirm).then(function () {
            settingsService.selectedSceneToEdit.modules.splice(moduleIndex, 1);

            settingsService.saveAllRooms();
        }, function () {
        });



    };


};


var addModuleToSceneController = function($scope, $mdDialog, settingsService) {

    var forbiddenModules = settingsService.getForbiddenSceneEditorModules();
    var availableModules = settingsService.selectedRoomForScene.modules;

    $scope.modulesInsideRoom = [];
    $scope.roomModules = settingsService.roomModules;

    for(var i = 0; i< availableModules.length;i++) {
        if (forbiddenModules.indexOf(availableModules[i].name) == -1)
            $scope.modulesInsideRoom.push(availableModules[i]);
    }


    $scope.selectedModule = undefined;

    $scope.$watch('selectedModule',function (a, b) {
        console.log(a,b);
    });

    $scope.close = function(){
        $mdDialog.hide();
    };

    $scope.saveModule = function (ev) {

        if(settingsService.selectedSceneToEdit.modules == undefined)
            settingsService.selectedSceneToEdit.modules = [];

        settingsService.selectedSceneToEdit.modules.push($scope.selectedModule);
        settingsService.saveAllRooms();


        var dialog = $mdDialog.alert()
            .title('Modul hinzugefügt')
            .textContent('Das Modul wurde hinzugefügt.')
            .ariaLabel('Modul hinzugefügt')
            .clickOutsideToClose(true)
            .targetEvent(ev)
            .ok('Ok');

        $mdDialog.show(dialog);

    }

};


