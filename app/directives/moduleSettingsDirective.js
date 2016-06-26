/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('moduleSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/moduleSettingsView.html",
        restrict: "E",
        controller:moduleSettingsController
    };
});

var moduleSettingsController = function($scope, settingsService) {
    $scope.selectedModule = function(){
        return settingsService.selectedModule;
    };

};
