/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('addModule', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/addModuleView.html",
        restrict: "E",
        scope: {
            "room":"="
        },
        controller:addModuleController
    };
});

var addModuleController = function($scope, settingsService) {
    $scope.roomModules = settingsService.roomModules;
};
