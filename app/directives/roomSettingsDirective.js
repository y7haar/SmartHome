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

var roomSettingsController = function($scope, $mdMedia, settingsService) {

    var sizeXs = $mdMedia('xs');

    if(!sizeXs) {
        settingsService.setSelectedRoomIndex(0);
    }

    $scope.selectedRoom = function(){
        return settingsService.selectedRoom;
    };

    $scope.selectedRoomIndex = function() {
        return settingsService.selectedRoomIndex;
    }
};
