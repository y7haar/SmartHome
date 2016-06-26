/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('roomSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/roomSettingsView.html",
        restrict: "E",
        controller:roomSettingsController
    };
});

var roomSettingsController = function($scope, settingsService) {
    $scope.selectedRoom = function(){
        return settingsService.selectedRoom;
    };
};
