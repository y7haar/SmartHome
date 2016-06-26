/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('houseSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/houseSettingsView.html",
        restrict: "E",
        controller:houseSettingsController
    };
});

var houseSettingsController = function($scope, settingsService) {
    $scope.houseSettings = Storage.getInstance().getHouseSettings();

    $scope.countries = ["Deutschland", "Kaufland", "Schlaraffenland"];
    
    $scope.saveSettings = function() {
        Storage.getInstance().saveHouseSettings($scope.houseSettings);
    }
};
