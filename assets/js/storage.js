// IMPORTANT: REMOVE CLEAR

localStorage.clear();

var Storage = function () {

    this.instance = null;

    this.defaults = {
        rooms: [
            {
                icon: "kitchen", name: "Küche", modules: [
                {id: 0, displayName: "Multi Room Audio", name: "multiRoomAudio"},
                {id: 1, displayName: "Haustür", name: "door"}]
            },
            
            {icon: "free_breakfast", name: "Wohnzimmer", modules: []},
            {icon: "hot_tub", name: "Bad", modules: []},
            {icon: "casino", name: "Schlafzimmer", modules: []},
            {icon: "child_friendly", name: "Kinderzimmer", modules: []},
            {icon: "fitness_center", name: "Hobbyraum", modules: []},
            {icon: "business_center", name: "Büro", modules: []},
            {icon: "spa", name: "Waschkeller", modules: []}
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