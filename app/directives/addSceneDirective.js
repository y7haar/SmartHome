/**
 * @author Alexander Kern
 */


mainApp.directive('addScene', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/addModuleView.html",
        restrict: "E",
        scope: {
            "room":"="
        },
        controller:addModuleController
    };
});

var addModuleController = function($scope, $mdDialog, settingsService) {
    $scope.roomModules = settingsService.roomModules;

    console.log($scope);

    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.saveModule = function() {
    }
};
