/**
 * @author Yannic Siebenhaar
 */

mainApp.service("settingsService", [

    function () {

        var storage = Storage.getInstance();
        this.house = storage.getHouse();
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
        

        this.getRoomsWithHouse = function() {
            var rooms = [];

            for(var i = 0;i < this.rooms.length;++i) {
                rooms.push(this.rooms[i]);
            }

            rooms.push(this.house);

            return rooms;
        };

        this.setSelectedRoomIndex = function(index) {
            this.selectedRoomIndex = index;
            this.selectedRoom = this.rooms[index];
        };
     

        this.setSelectedRoomWithHouseIndex = function(index) {
            this.selectedRoomWithHouseIndex = index;
            this.selectedRoomWithHouse = this.getRoomsWithHouse()[index];
        };

        this.setSelectedModuleIndex = function(index) {
            this.selectedModuleIndex = index;
            this.selectedModule = this.selectedRoom.modules[index];
        };

        this.setSelectedAdminIndex = function(index) {
            this.selectedAdminIndex = index;
        };

        this.setSelectedTabIndex = function(index) {
            this.selectedRoomIndex = index;
            this.selectedRoom = this.rooms[index];
        };

        this.updateRoomModules = function () {
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
        };

        this.saveAllRooms = function() {
            storage.saveRooms(this.rooms);
        };


        this.updateRoomModules();
        
        
        
        
        // Alex K

        this.selectedSceneToEditIndex = null;
        this.selectedRoomForSceneIndex = 0;
        this.selectedRoomForScene = this.rooms[ this.selectedRoomForSceneIndex];

        this.setSelectedRoomForSceneIndex = function(index) {
            this.selectedRoomForSceneIndex = index;
            this.selectedRoomForScene = this.rooms[index];
        };


    }]
);