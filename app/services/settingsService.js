/**
 * @author Yannic Siebenhaar
 */

mainApp.service("settingsService", [

    function () {

        var storage = Storage.getInstance();
        this.rooms = storage.getRooms();
        this.roomModules = storage.getRoomModules();

        

        for(var i = 0;i < this.roomModules.length;++i) {
            var rooms = storage.getRoomsWithModuleById(this.roomModules[i].id);

            this.roomModules[i].rooms = rooms;
            this.roomModules[i].roomsLeft = [];
            this.roomModules[i].roomsRight = [];

            for(var r = 0;r < rooms.length;++r) {

                if(r % 2 != 0) {
                    this.roomModules[i].roomsLeft.push(rooms[r]);
                }

                else {
                    this.roomModules[i].roomsRight.push(rooms[r]);
                }
            }
        }


        this.selectedTabIndex = 0;
        this.selectedAdminIndex = null;
        

        this.setSelectedRoomIndex = function(index) {
            this.selectedRoomIndex = index;
            this.selectedRoom = this.rooms[index];
        };

        this.setSelectedModuleIndex = function(index) {
            this.selectedModuleIndex = index;
            this.selectedModule = this.roomModules[index];
        };

        this.setSelectedAdminIndex = function(index) {
            this.selectedAdminIndex = index;
        };

        this.setSelectedTabIndex = function(index) {
            this.selectedRoomIndex = index;
            this.selectedRoom = this.rooms[index];
        };

        for(var room = 0;room < this.rooms.length;++room) {
            this.rooms[room].modulesLeft = [];
            this.rooms[room].modulesRight = [];

            for(var module = 0;module < this.rooms[room].modules.length;++module) {

                if(module % 2 != 0) {
                    this.rooms[room].modulesLeft.push(this.rooms[room].modules[module]);
                }

                else {
                    this.rooms[room].modulesRight.push(this.rooms[room].modules[module]);
                }
            }
        }

    }]
);