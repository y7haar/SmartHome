/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('newRoom', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/newRoomView.html",
        restrict: "E",
        scope: {
            "room":"="
        },
        controller:newRoomController
    };
});

var newRoomController = function($scope, $mdDialog, $mdMedia, settingsService) {
    $scope.roomTypes = Storage.getInstance().getRoomTypes();

    $scope.getBarTitle = function() {
        return ($scope.room !== undefined) ? $scope.room.name : "Neuer Raum";
    };

    $scope.saveNewRoom = function() {
        settingsService.rooms.push()
    };
    
    $scope.addModule = function(ev) {

        $mdDialog.show({
            template: "<add-module></add-module>",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true
        });
    }
};
