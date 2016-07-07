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

var roomConfigurationController = function ($scope, $mdDialog, $mdMedia, $location, $state,  settingsService) {
    $scope.rooms = settingsService.rooms;

    var isXs = $mdMedia("xs");

    var isTablet = $mdMedia("sm") || $mdMedia("md");

    $scope.mobile = false;

    var url = $location.url();

    if(url === "/settings/admin/roomconfiguration") {
        $scope.mobile=true;
    }

    $scope.deleteRoom = function (roomIndex, ev) {

        var confirm = $mdDialog.confirm()
            .title('Raum löschen?')
            .textContent('Soll der Raum ' + "'" + $scope.rooms[roomIndex].name + "'" +  ' wirklich gelöscht werden?')
            .ariaLabel('Löschen bestätigen')
            .targetEvent(ev)
            .clickOutsideToClose(true)
            .ok('Raum löschen')
            .cancel('Abbrechen');

        $mdDialog.show(confirm).then(function () {
            $scope.rooms.splice(roomIndex, 1);

            settingsService.saveAllRooms();
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

        settingsService.saveAllRooms();
    };

    $scope.moveRoomDown = function (roomIndex) {
        if (roomIndex === $scope.rooms.length) {
            return;
        }

        var room = $scope.rooms[roomIndex];
        $scope.rooms.splice(roomIndex, 1);
        $scope.rooms.splice(roomIndex + 1, 0, room);

        settingsService.saveAllRooms();
    };
    
    $scope.editRoom = function(roomIndex) {
        settingsService.roomToEdit = $scope.rooms[roomIndex];
        settingsService.roomToEditIndex = roomIndex;
        $scope.roomToEditIndex = roomIndex;
        settingsService.editingRoom = true;
        settingsService.addingRoom = false;

        if(isXs || isTablet) {
            $state.go("settingsAdminRoomconfigurationRoom", {roomId: roomIndex});
        }


    };

    $scope.addRoom = function() {

        var newRoom = {modules:[]};

        settingsService.roomToEdit = newRoom;
        settingsService.roomToEditIndex = $scope.rooms.length;
        $scope.roomToEditIndex = $scope.rooms.length;
        settingsService.editingRoom = false;
        settingsService.addingRoom = true;

        if(isXs || isTablet) {
            $state.go("settingsAdminRoomconfigurationRoom", {roomId: settingsService.roomToEditIndex});
        }
    };


    if(!isXs && !isTablet) {
        $scope.editRoom(0);
    }
};
