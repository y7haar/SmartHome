/**
 * @author Yannic Siebenhaar
 */

mainApp.service("settingsService", [

    function () {

        this.rooms = Storage.getInstance().getRooms();
        this.roomModules = Storage.getInstance().getRoomModules();

        this.selectedRoomIndex = 0;
        this.selectedRoom = this.rooms[this.selectedRoomIndex];
        this.selectedRoomModules = this.roomModules[0];


        this.setSelectedRoomIndex = function(index) {
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