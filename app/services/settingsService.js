/**
 * @author Yannic Siebenhaar
 */

mainApp.service("settingsService", [

    function () {

        this.rooms = Storage.getInstance().getRooms();
        this.roomModules = Storage.getInstance().getRoomModules();

        this.selectedRoom = this.rooms[0];
        this.selectedRoomModules = this.roomModules[0];
    }]
);