// IMPORTANT: REMOVE CLEAR

localStorage.clear();

var Storage = function () {

    this.instance = null;

    this.defaults = {

        house: {
            modules: [
                {id: 1, displayName: "Haustür", name: "door"}]

        },

        rooms: [
            {
                iconUrl: "assets/img/icons/Kitchen-96.png", name: "Küche", modules: [
                {id: 0, displayName: "Multi Room Audio", name: "multiRoomAudio"},
                {id: 0, displayName: "Multi Room Audio", name: "multiRoomAudio"}]
            },
            
            {iconUrl: "assets/img/icons/Living Room-96.png", name: "Wohnzimmer", modules: []},
            {iconUrl: "assets/img/icons/Toilet Paper-96.png", name: "Bad", modules: []},
            {iconUrl: "assets/img/icons/Bedroom-96.png", name: "Schlafzimmer", modules: []},
            {iconUrl: "child_friendly", name: "Kinderzimmer", modules: []},
            {iconUrl: "fitness_center", name: "Hobbyraum", modules: []},
            {iconUrl: "business_center", name: "Büro", modules: []},
            {iconUrl: "spa", name: "Waschkeller", modules: []}
        ],

        users: [
            {name: "Hans-Peter", image: "./assets/img/icons/rhabarber_icon.png"},
            {name: "Kevin", image: "./assets/img/icons/rhabarber_icon.png"},
            {name: "Peter Lendig", image: "./assets/img/icons/rhabarber_icon.png"}]
    };

    for (var i = 0; i < this.defaults["rooms"].length; ++i) {
        this.defaults["rooms"].id = i;
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
        var allObj = getHelper(key);

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
};

Storage.getInstance = function () {
    if (Storage.instance == null) {
        Storage.instance = new Storage();
    }

    return Storage.instance;
};