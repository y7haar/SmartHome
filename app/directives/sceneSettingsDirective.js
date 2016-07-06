/**
 * Created by Core on 07.07.2016.
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

    var url = $location.url();

    if(url === '/settings/scene/scenes/:roomId') {
        $scope.mobile=true;
    }


};
