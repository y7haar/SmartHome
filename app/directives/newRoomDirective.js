/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('newRoom', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/newRoomView.html",
        restrict: "E",
        controller:newRoomController
    };
});

var newRoomController = function($scope, settingsService) {
    $scope.roomTypes = Storage.getInstance().getRoomTypes();

    $scope.saveNewRoom = function() {
        settingsService.rooms.push()
    }
};
