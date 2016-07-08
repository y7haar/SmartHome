/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('newRoom', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/newRoomView.html",
        restrict: "E",
        controller:newRoomController,

        scope: {
            roomId: "="
        }
    };
});



var addModuleController = function($scope, $mdDialog, moduleId, room, settingsService) {
    $scope.moduleId = moduleId;
    $scope.room = room;
    $scope.roomModules = settingsService.roomModules;

    if($scope.moduleId < $scope.room.modules.length) {
        $scope.module = $scope.room.modules[$scope.moduleId];
    }

    else {
        $scope.module = {};
    }

    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.saveNewModule = function() {
        $scope.room.modules.push();

        settingsService.saveAllRooms();
    };

    $scope.saveEditedModule = function() {
        alert("asd");

        settingsService.saveAllRooms();
    };
};



var newRoomController = function($scope, $mdDialog, $mdMedia, $stateParams, settingsService) {
    $scope.roomTypes = Storage.getInstance().getRoomTypes();

    $scope.mobile = false;

    $scope.room = settingsService.rooms[$scope.roomId];

    $scope.$watch(function() { return settingsService.roomToEditIndex; }, function(newVal) {
        $scope.roomId = newVal;
        $scope.room = settingsService.rooms[newVal];

        if($scope.room === undefined) {
            $scope.room = {};
            $scope.room.modules = [];
        }

    }, true);


    if($stateParams.roomId !==undefined && $stateParams.roomId !== "") {
        $scope.room = settingsService.rooms[$stateParams.roomId];
        $scope.mobile = true;
    }

    $scope.roomTypesByName = {};

    for(var i = 0;i < $scope.roomTypes.length;++i) {
        $scope.roomTypesByName[$scope.roomTypes[i].name] = $scope.roomTypes[i].iconUrl;
    }

    $scope.getBarTitle = function() {
        return ($scope.room !== undefined) ? $scope.room.name : "Neuer Raum";
    };

    $scope.saveNewRoom = function(ev) {
        $scope.room.iconUrl = $scope.roomTypesByName[$scope.room.type];

        if(! settingsService.editingRoom) {
            settingsService.rooms.push($scope.room);
        }


        settingsService.saveAllRooms();

        var dialog = $mdDialog.alert()
            .title('Einstellungen gespeichert')
            .textContent('Die Einstellungen des Raums wurden gespeichert.')
            .ariaLabel('Einstellungen gespeichert')
            .clickOutsideToClose(true)
            .targetEvent(ev)
            .ok('Ok');

        $mdDialog.show(dialog);
    };


    $scope.deleteModule = function(index, ev) {
        var confirm = $mdDialog.confirm()
            .title('Modul löschen?')
            .textContent('Soll das Modul ' + "'" + $scope.room.modules[index].displayName + "'" + ' wirklich gelöscht werden?')
            .ariaLabel('Löschen bestätigen')
            .targetEvent(ev)
            .clickOutsideToClose(true)
            .ok('Modul löschen')
            .cancel('Abbrechen');

        $mdDialog.show(confirm).then(function () {
            $scope.room.modules.splice(index, 1);

            settingsService.updateRoomModules();
            settingsService.saveAllRooms();

        }, function () {
        });
    };

    var scope = $scope.$new();
    scope.params = {moduleId:"lol"};

    $scope.addModule = function(ev) {

        $mdDialog.show({
            templateUrl: "app/views/settings/addModuleView.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true,
            controller:addModuleController,
            resolve: {
                moduleId: function () {
                    return $scope.room.modules.length;
                },

                room: function () {
                    return $scope.room;
                }
            }
        });
    };

    $scope.editModule = function(moduleId, ev) {

        $mdDialog.show({
            templateUrl: "app/views/settings/addModuleView.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true,
            controller:addModuleController,
            resolve: {
                moduleId: function () {
                    return moduleId;
                },

                room: function () {
                    return $scope.room;
                }
            }
        });
    }
};
