// IMPORTANT: REMOVE CLEAR

localStorage.clear();

var Storage = function () {

    this.instance = null;

    var self = this;

    this.defaults = {

        houseSettings: {
            street: "Am Schnakenberg Hügel 7",
            zip: "88888",
            location: "Gifhorn",
            country: "Kaufland"
        },

        roomModules: [
            {id: 1, displayName: "Multi Room Audio", name: "multiRoomAudio", iconUrl: "Music-96.png"},
            {id: 2, displayName: "Licht", name: "light", iconUrl: "Light On-96.png"},
            {id: 3, displayName: "Jalousien", name: "blinds", iconUrl: "General Blind-96.png"},
            {id: 4, displayName: "Backofen", name: "oven", iconUrl: "Cooker-96.png"},
            {id: 5, displayName: "Waschmaschine", name: "washingMachine", iconUrl: "Washing Machine-96.png"},
            {id: 6, displayName: "Szenen", name: "scene", iconUrl: "Temperature-96.png"},
            {id: 7, displayName: "Verbraucher", name: "consumer", iconUrl: "Temperature-96.png"}

        ],
        
        house: {
            name: "Haus",
            roomImageUrl: "assets/img/room_images/haus.png",
            modules: [
                {id: 101, displayName: "Wetter", name: "weather"},
                {id: 102, displayName: "Haustür", name: "door"},
                {id: 103, displayName: "Log", name: "log"}
            ]

        },

        rooms: [
            {
                iconUrl: "Kitchen-96.png", name: "Küche", roomImageUrl: "assets/img/room_images/kueche.png",
                modules: [
                    {id: 1, displayName: "Multi Room Audio", name: "multiRoomAudio", iconUrl: "Music-96.png"},
                    {id: 2, displayName: "Licht", name: "light", iconUrl: "Light On-96.png"},
                    {id: 3, displayName: "Jalousien", name: "blinds", iconUrl: "General Blind-96.png"},
                    {id: 4, displayName: "Backofen", name: "oven", iconUrl: "Cooker-96.png"},
                    {id: 5, displayName: "Heizung", name: "heater", iconUrl: "Temperature-96.png"},
                    {id: 6, displayName: "Szenen", name: "scene", iconUrl: "Temperature-96.png"},
                    {id: 7, displayName: "Verbraucher", name: "consumer", iconUrl: "Temperature-96.png"}
                ]
            },
            
            {iconUrl: "Living Room-96.png", name: "Wohnzimmer", roomImageUrl: "assets/img/room_images/wohnzimmer.png",
                modules: [
                    {id: 1, displayName: "Multi Room Audio", name: "multiRoomAudio", iconUrl: "Music-96.png"},
                    {id: 2, displayName: "Licht", name: "light", iconUrl: "Light On-96.png"},
                    {id: 3, displayName: "Jalousien", name: "blinds", iconUrl: "General Blind-96.png"}
                ]},
            {iconUrl: "Shower and Tub-96.png", name: "Bad", roomImageUrl: "assets/img/room_images/badezimmer.png",
                modules: [
                    {id: 1, displayName: "Multi Room Audio", name: "multiRoomAudio", iconUrl: "Music-96.png"},
                    {id: 2, displayName: "Licht", name: "light", iconUrl: "Light On-96.png"},
                    {id: 3, displayName: "Jalousien", name: "blinds", iconUrl: "General Blind-96.png"}
                ]},
            {iconUrl: "Bedroom-96.png", name: "Schlafzimmer", roomImageUrl: "assets/img/room_images/schlafzimmer.png",
                modules: [
                    {id: 1, displayName: "Multi Room Audio", name: "multiRoomAudio", iconUrl: "Music-96.png"},
                    {id: 2, displayName: "Licht", name: "light", iconUrl: "Light On-96.png"},
                    {id: 3, displayName: "Jalousien", name: "blinds", iconUrl: "General Blind-96.png"}
                ]},
            {iconUrl: "Teddy Bear-96.png", name: "Kinderzimmer", roomImageUrl: "assets/img/room_images/kinderzimmer.png",
                modules: [
                    {id: 1, displayName: "Multi Room Audio", name: "multiRoomAudio", iconUrl: "Music-96.png"},
                    {id: 2, displayName: "Licht", name: "light", iconUrl: "Light On-96.png"},
                    {id: 3, displayName: "Jalousien", name: "blinds", iconUrl: "General Blind-96.png"}
                ]},
            {iconUrl: "Movie Projector-96.png", name: "Hobbyraum", roomImageUrl: "assets/img/room_images/hobbyraum.png",
                modules: [
                    {id: 1, displayName: "Multi Room Audio", name: "multiRoomAudio", iconUrl: "Music-96.png"},
                    {id: 2, displayName: "Licht", name: "light", iconUrl: "Light On-96.png"},
                    {id: 3, displayName: "Jalousien", name: "blinds", iconUrl: "General Blind-96.png"}
                ]},
            {iconUrl: "Laptop-96.png", name: "Büro", roomImageUrl: "assets/img/room_images/buero.png",
                modules: [
                    {id: 1, displayName: "Multi Room Audio", name: "multiRoomAudio", iconUrl: "Music-96.png"},
                    {id: 2, displayName: "Licht", name: "light", iconUrl: "Light On-96.png"},
                    {id: 3, displayName: "Jalousien", name: "blinds", iconUrl: "General Blind-96.png"}
                ]},
            {iconUrl: "Washing Machine-96.png", name: "Waschraum", roomImageUrl: "assets/img/room_images/waschraum.png",
                modules: [
                    {id: 1, displayName: "Multi Room Audio", name: "multiRoomAudio", iconUrl: "Music-96.png"},
                    {id: 2, displayName: "Licht", name: "light", iconUrl: "Light On-96.png"},
                    {id: 5, displayName: "Waschmaschine", name: "washingMachine", iconUrl: "Washing Machine-96.png"}
                ]}
        ],

        users: [
            {id:0, name: "Martin", isAdmin:true, hasSettingsPrivileges:true, profileUrl: "./assets/img/people_images/image02.png", pin:"1234"},
            {id:1, name: "Maria", isAdmin:false, hasSettingsPrivileges:true, profileUrl: "./assets/img/people_images/image03.png", pin:"1234"},
            {id:2, name: "Jan-Leon", isAdmin:false, hasSettingsPrivileges:false, profileUrl: "./assets/img/people_images/image01.png", pin:"1234"}]
    };

    for (var i = 0; i < this.defaults["rooms"].length; ++i) {
        this.defaults["rooms"][i].id = i;
    }

    for (var j = 0; j < this.defaults["users"].length; ++j) {
        this.defaults["users"][j].id = j;
    }

    /*

    for(var room = 0;room < this.defaults.rooms.length;++room) {
        var currentRoom = this.defaults.rooms[room];

        for(var module=0;module < currentRoom.modules.length;++module) {
            var currentModule = currentRoom.modules[module];


        }
    }
    */


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

    this.getRoomModules = function() {
        return this.defaults.roomModules;
    };

    this.getHouseSettings = function() {
        return this.getHelper("houseSettings");
    };

    this.saveHouseSettings = function(settings) {
      localStorage.setObject("houseSettings", settings);
    };

    this.saveRooms = function(rooms) {
        localStorage.setObject("rooms", rooms);
    };
    
    this.saveUser = function(user) {
        var users = this.getUsers();

        for(var i = 0;i < users.length;++i) {
            var current = users[i];

            if(current.id === user.id) {
                users[i] = user;
                break;
            }
        }

        localStorage.setObject("users", users);
    };

    this.getRoomsWithModuleById= function(moduleId) {
        var rooms = this.getRooms();
        var result = [];

        for(var i = 0;i < rooms.length;++i) {
            var room = rooms[i];

            for(var m = 0;m < room.modules.length;++m) {
                var module = room.modules[m];

                if(module.id === moduleId) {
                    result.push(room);
                    break;
                }
            }
        }
        return result;
    };

    this.getRoomTypes = function() {
        var types = [
            {name:"Wochnzimmer", iconUrl:"Living Room-96.png"},
            {name:"Küche", iconUrl:"Kitchen-96.png"},
            {name:"Esszimmer", iconUrl:"Dining Room-96.png"},
            {name:"Schlafzimmer", iconUrl:"Bedroom-96.png"},
            {name:"Badezimmer", iconUrl:"Shower and Tub-96.png"},
            {name:"Kinderzimmer", iconUrl:"Teddy Bear-96.png"},
            {name:"Arbeitszimmer", iconUrl:"Laptop-96.png"},
            {name:"Multimediaraum", iconUrl:"Movie Projector-96.png"},
            {name:"Waschraum", iconUrl:"Washing Machine-96.png"}
        ];

        return types;
    }
};

Storage.getInstance = function () {
    if (Storage.instance == null) {
        Storage.instance = new Storage();
    }

    return Storage.instance;
};