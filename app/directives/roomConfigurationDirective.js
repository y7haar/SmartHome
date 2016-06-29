/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('roomConfiguration', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/roomConfigurationView.html",
        restrict: "E",
        controller: roomConfigurationController
    };
});

var roomConfigurationController = function ($scope, $mdDialog, $mdMedia,settingsService) {
    $scope.rooms = settingsService.rooms;

    var isXs = $mdMedia("xs");

    $scope.deleteRoom = function (roomIndex, ev) {

        var confirm = $mdDialog.confirm()
            .title('Raum löschen?')
            .textContent('Soll der Raum wirklich gelöscht werden?')
            .ariaLabel('Löschen bestätigen')
            .targetEvent(ev)
            .clickOutsideToClose(true)
            .ok('Raum löschen')
            .cancel('Abbrechen');

        $mdDialog.show(confirm).then(function () {
            $scope.rooms.splice(roomIndex, 1);

            Storage.getInstance().saveRooms($scope.rooms);
        }, function () {
        });
        
    };

    $scope.moveRoomUp = function (roomIndex) {

        if (roomIndex === 0) {
            return;
        }

        var room = $scope.rooms[roomIndex];
        $scope.rooms.splice(roomIndex, 1);
        $scope.rooms.splice(roomIndex - 1, 0, room);

        Storage.getInstance().saveRooms($scope.rooms);
    };

    $scope.moveRoomDown = function (roomIndex) {
        if (roomIndex === $scope.rooms.length) {
            return;
        }

        var room = $scope.rooms[roomIndex];
        $scope.rooms.splice(roomIndex, 1);
        $scope.rooms.splice(roomIndex + 1, 0, room);

        Storage.getInstance().saveRooms($scope.rooms);
    };
    
    $scope.editRoom = function(roomIndex) {
        settingsService.roomToEdit = $scope.rooms[roomIndex];
        settingsService.roomToEditIndex = roomIndex;
        $scope.roomToEditIndex = roomIndex;
        settingsService.editingRoom = true;
    };

    $scope.addRoom = function() {

        var newRoom = {};

        settingsService.roomToEdit = newRoom;
        settingsService.roomToEditIndex = $scope.rooms.length;
        $scope.roomToEditIndex = $scope.rooms.length;
        settingsService.editingRoom = true;
    };


    if(!isXs) {
        $scope.editRoom(0);
    }
};
