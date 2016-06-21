// IMPORTANT: REMOVE CLEAR

localStorage.clear();

var Storage = function () {

    this.instance = null;

    var self = this;

    this.defaults = {

        house: {
            modules: [
                {id: 1, displayName: "Haustür", name: "door"}]

        },

        rooms: [
            {
                iconUrl: "assets/img/icons/Kitchen-96.png", name: "Küche", roomImageUrl: "assets/img/room_images/kueche.png",
                modules: [
                {id: 0, displayName: "Multi Room Audio", name: "multiRoomAudio"}]
            },
            
            {iconUrl: "assets/img/icons/rooms/Living Room-96.png", name: "Wohnzimmer", roomImageUrl: "assets/img/room_images/wohnzimmer.png",
                modules: [
                    {id: 0, displayName: "Multi Room Audio", name: "multiRoomAudio"}
                ]},
            {iconUrl: "assets/img/icons/rooms/Shower and Tub-96.png", name: "Bad", roomImageUrl: "assets/img/room_images/badezimmer.png",
                modules: [
                    {id: 0, displayName: "Multi Room Audio", name: "multiRoomAudio"}
                ]},
            {iconUrl: "assets/img/icons/rooms/Bedroom-96.png", name: "Schlafzimmer", roomImageUrl: "assets/img/room_images/schlafzimmer.png",
                modules: [
                    {id: 0, displayName: "Multi Room Audio", name: "multiRoomAudio"}
                ]},
            {iconUrl: "assets/img/icons/rooms/Teddy Bear-96.png", name: "Kinderzimmer", roomImageUrl: "assets/img/room_images/kinderzimmer.png",
                modules: [
                    {id: 0, displayName: "Multi Room Audio", name: "multiRoomAudio"}
                ]},
            {iconUrl: "assets/img/icons/rooms/Movie Projector-96.png", name: "Hobbyraum", roomImageUrl: "assets/img/room_images/hobbyraum.png",
                modules: [
                    {id: 0, displayName: "Multi Room Audio", name: "multiRoomAudio"}
                ]},
            {iconUrl: "assets/img/icons/rooms/Laptop-96.png", name: "Büro", roomImageUrl: "assets/img/room_images/buero.png",
                modules: [
                    {id: 0, displayName: "Multi Room Audio", name: "multiRoomAudio"}
                ]},
            {iconUrl: "assets/img/icons/rooms/Washing Machine-96.png", name: "Waschraum", roomImageUrl: "assets/img/room_images/waschraum.png",
                modules: [
                    {id: 0, displayName: "Multi Room Audio", name: "multiRoomAudio"},
                    {id: 0, displayName: "Waschmaschine", name: "washingMachine"}
                ]}
        ],

        users: [
            {name: "Martin", profileUrl: "./assets/img/people_images/image02.png"},
            {name: "Maria", profileUrl: "./assets/img/people_images/image03.png"},
            {name: "Jan-Leon", profileUrl: "./assets/img/people_images/image01.png"}]
    };

    for (var i = 0; i < this.defaults["rooms"].length; ++i) {
        this.defaults["rooms"][i].id = i;
    }

    for (var j = 0; j < this.defaults["users"].length; ++j) {
        this.defaults["users"][j].id = j;
    }

    this.getHelper = function (key) {
        var storedObj = localStorage.getObject(key);

        if (storedObj === null) {
            localStorage.setObject(key, this.defaults[key]);
            storedObj = this.defaults[key];
        }

        return storedObj;
    };

    this.getByIdHelper = function (key, id) {
        var allObj = this.getHelper(key);

        for (var i = 0; i < allObj.length; ++i) {
            if (allObj[i].id === id) {
                return allObj[i];
            }
        }

        return null;
    };

    this.getRooms = function () {
        return this.getHelper("rooms");
    };

    this.getRoomById = function (id) {
        return this.getByIdHelper("rooms", id);
    };


    this.getHouse = function () {
        return this.getHelper("house");
    };

    this.getModules = function () {
        return this.getHelper("modules");
    };

    this.getUsers = function () {
        return this.getHelper("users");
    };

    this.getUserById = function (id) {
        return self.getByIdHelper("users", id);
    };
};

Storage.getInstance = function () {
    if (Storage.instance == null) {
        Storage.instance = new Storage();
    }

    return Storage.instance;
};