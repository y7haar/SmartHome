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


    $scope.getModules = function () {
        return settingsService.selectedSceneToEdit.modules;
    }



};
