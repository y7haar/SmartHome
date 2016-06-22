mainApp.controller("roomCtrl", function ($scope, $mdMedia) {

    $scope.$watch(function() { return $mdMedia('gt-md'); }, function(desktopView) {
        $scope.desktopView = desktopView;
    });

    $scope.rooms = Storage.getInstance().getRooms();

    $scope.getSelectedRoom = function () {
        $scope.selectedRoom = $scope.rooms[$scope.selectedRoomTab];
        return $scope.selectedRoom;
    };

    $scope.modulesLeft = [];
    $scope.modulesRight = [];


    for(var room = 0;room < $scope.rooms.length;++room) {
        $scope.rooms[room].modulesLeft = [];
        $scope.rooms[room].modulesRight = [];

        for(var module = 0;module < $scope.rooms[room].modules.length;++module) {

            if(module % 2 != 0) {
                $scope.rooms[room].modulesLeft.push($scope.rooms[room].modules[module]);
            }

            else {
                $scope.rooms[room].modulesRight.push($scope.rooms[room].modules[module]);
            }
        }
    }


});