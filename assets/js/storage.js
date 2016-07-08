// IMPORTANT: REMOVE CLEAR

localStorage.clear();

var Storage = function () {

    this.instance = null;

    var self = this;

    this.defaults = {

        houseSettings: {
            street: "Am Geigengrund 5",
            zip: "95028",
            location: "Hof",
            country: "Deutschland"
        },

        forbiddenSceneEditorModules : [
            "scene"
        ],

        centralHeaterSettings: {
            timeStates: [
                {
                    id: 0,
                    name: "Tag",
                    from: {
                        hour: 6,
                        min: 0
                    },
                    to: {
                        hour: 21,
                        min: 59
                    }
                },
                {
                    id: 1,
                    name: "Nacht",
                    from: {
                        hour: 22,
                        min: 0
                    },
                    to: {
                        hour: 5,
                        min: 59
                    }
                }
            ],
            modes: [
                {
                    id: 0,
                    name: "Automatisch",
                    temperature: [20, 17]
                },
                {
                    id: 1,
                    name: "Komforttemperatur",
                    temperature: [23, 15]
                }
            ]

        },

        roomModules: {


            "Multi Room Audio": {
                id: 1,
                displayName: "Multi Room Audio",
                name: "multiRoomAudio",
                iconUrl: "Music-96.png",
                hasComponents: false,
                description: "Mit dem Multi Room Audio Modul können Sie Musik in dem aktuellen Raum abspielen. Synchronisieren Sie Ihre Lieblingslieder in gewünschten Räumen."
            },

            "Licht": {
                id: 2,
                displayName: "Licht",
                name: "light",
                iconUrl: "Light On-96.png",
                hasComponents: true,
                componentName: "Licht",
                description: "Dieses Modul steuert all Ihre Lichter in dem aktuellen Raum."
            },

            "Jalousien": {
                id: 3,
                displayName: "Jalousien",
                name: "blinds",
                iconUrl: "General Blind-96.png",
                hasComponents: true,
                componentName: "Fenster",
                description: "Automatisieren Sie die Steuerung der Jalousien mithilfe dieses Moduls."
            },

            "Backofen": {
                id: 4,
                displayName: "Backofen",
                name: "oven",
                iconUrl: "Cooker-96.png",
                hasComponents: false,
                description: "Erweitern Sie Ihre Küche um einen Backofen mit automatischem Timer."
            },

            "Waschmaschine": {
                id: 5,
                displayName: "Waschmaschine",
                name: "washingMachine",
                iconUrl: "Washing Machine-96.png",
                hasComponents: false,
                description: "Eine Steuerung zur Überwachung Ihrer Waschmaschine."
            },

            "Szenen": {
                id: 6,
                displayName: "Szenen",
                name: "scene",
                iconUrl: "Start-96.png",
                hasComponents: false,
                description: "Erschaffen Sie mithilfe dieses Moduls beliebige Abläufe und speichern Sie diese als Szene."

            },

            "Verbraucher": {
                id: 7,
                displayName: "Verbraucher",
                name: "consumer",
                iconUrl: "Electrical-96.png",
                hasComponents: true,
                componentName: "Verbraucher",
                description: "Verschaffen Sie sich einen Überblick über Ihre angeschlossenen Geräte, die in Steckdosen eingesteckt sind. Das Modul gibt Ihnen Aufschluss über den Strom- und Wasserverbrauch."

            },

            "Heizung": {
                id: 8,
                displayName: "Heizung",
                name: "heater",
                iconUrl: "Heating Radiator-96.png",
                hasComponents: false,
                description: "Das Heizungsmodul temperiert den gewählten Raum immer perfekt. Abhängig von der Zentralheizung oder Ihren aktuellen Wünschen."

            },

            "Photovoltaik": {
                id: 10,
                displayName: "Photovoltaik",
                name: "photovoltaic",
                iconUrl: "Solar Panel-96.png",
                hasComponents: false,
                description: "Dieses Modul verschaft Ihnen einen Überblick Ihrer Photovoltaikanlage."
            }


        },

        house: {
            name: "Haus",
            roomImageUrl: "assets/img/room_images/haus.png",
            iconUrl: "Roofing-96.png",
            modules: [
                {id: 101, displayName: "Wetter", name: "weather", iconUrl: "Sun-96.png"},
                {id: 102, displayName: "Haustür", name: "door", iconUrl: "Door Sensor-96.png"},
                {id: 103, displayName: "Log", name: "log", iconUrl: "Page Overview -96.png"},
                {id: 105, displayName: "Photovoltaik", name: "photovoltaic", iconUrl: "Solar Panel-96.png"}
            ]

        },

        rooms: [
            {
                iconUrl: "Kitchen-96.png",
                name: "Küche",
                type: "Küche",
                roomImageUrl: "assets/img/room_images/kueche.png",
                modules: [
                    {
                        id: 1,
                        displayName: "Multi Room Audio",
                        name: "multiRoomAudio",
                        iconUrl: "Music-96.png",
                        hasComponents: false
                    },

                    {
                        id: 2,
                        displayName: "Licht",
                        name: "light",
                        iconUrl: "Light On-96.png",
                        hasComponents: true,
                        components: [{name:"Licht 1", isColorAble:false}, {name:"Licht 2", isColorAble:true}]
                    },

                    {
                        id: 3,
                        displayName: "Jalousien",
                        name: "blinds",
                        iconUrl: "General Blind-96.png",
                        hasComponents: true,
                        components: [{name:"Fenster links"}, {name:"Fenster Rechts"}]
                    },

                    {id: 4, displayName: "Backofen", name: "oven", iconUrl: "Cooker-96.png", hasComponents: false},

                    {id: 5, displayName: "Heizung", name: "heater", iconUrl: "Heating Radiator-96.png"},

                    {id: 6, displayName: "Szenen", name: "scene", iconUrl: "Start-96.png"},


                    {
                        id: 7, displayName: "Verbraucher",
                        name: "consumer",
                        iconUrl: "Electrical-96.png",
                        hasComponents: true,
                        components: [
                            {
                                name: "Kühlschrank",
                                isSwitchOffAble :false
                            },
                            {
                                name: "Kaffe Maschine",
                                isSwitchOffAble :true
                            },
                            {
                                name: "Telefon",
                                isSwitchOffAble :false
                            }]
                    }
                ],
                scenes: [
                    {
                        displayName: "Alle Lichter Dimmen",
                        modules:[
                            {
                                name:"multiRoomAudio"
                            },
                            {
                                id: 2,
                                displayName: "Licht",
                                name: "light",
                                iconUrl: "Light On-96.png",
                                hasComponents: true,
                                components: [{name:"Licht 1", isColorAble:false}, {name:"Licht 2", isColorAble:true}]
                            }

                        ]
                    },
                    {
                        displayName: "Alle Lichter Rot",
                        modules:[
                            {
                                name:"multiRoomAudio"
                            },
                            {
                                name:"heater"
                            }
                        ]
                    }
                ]
            },

            {
                iconUrl: "Living Room-96.png",
                name: "Wohnzimmer",
                type: "Wohnzimmer",
                roomImageUrl: "assets/img/room_images/wohnzimmer.png",
                modules: [
                    {
                        id: 1,
                        displayName: "Multi Room Audio",
                        name: "multiRoomAudio",
                        iconUrl: "Music-96.png",
                        hasComponents: false
                    },

                    {
                        id: 2,
                        displayName: "Licht",
                        name: "light",
                        iconUrl: "Light On-96.png",
                        hasComponents: true,
                        components: [{name:"Licht 1", isColorAble:false}, {name:"Licht 2", isColorAble:true}, {name:"Licht 3", isColorAble:true}]
                    },

                    {id: 5, displayName: "Heizung", name: "heater", iconUrl: "Heating Radiator-96.png"},

                    {id: 6, displayName: "Szenen", name: "scene", iconUrl: "Start-96.png"},

                    {
                        id: 3,
                        displayName: "Jalousien",
                        name: "blinds",
                        iconUrl: "General Blind-96.png",
                        hasComponents: true,
                        components: [{name:"Fenster links"}, {name:"Fenster Mitte"}, {name:"Fenster Rechts"}]
                    },



                    {
                        id: 7, displayName: "Verbraucher",
                        name: "consumer",
                        iconUrl: "Electrical-96.png",
                        hasComponents: true,
                        components: [
                            {
                                name: "TV",
                                isSwitchOffAble :true
                            },
                            {
                                name: "XBox",
                                isSwitchOffAble :true
                            },
                            {
                                name: "BluRay Player",
                                isSwitchOffAble :true
                            },
                            {
                                name: "Telefon",
                                isSwitchOffAble :false
                            }]
                    }
                ],
                scenes: [
                    {
                        displayName: "Party"
                    },
                    {
                        displayName: "Chill"
                    }
                ]
            },
            {
                iconUrl: "Shower and Tub-96.png",
                name: "Bad",
                type: "Badezimmer",
                roomImageUrl: "assets/img/room_images/badezimmer.png",
                modules: [
                    {
                        id: 1,
                        displayName: "Multi Room Audio",
                        name: "multiRoomAudio",
                        iconUrl: "Music-96.png",
                        hasComponents: false
                    },

                    {
                        id: 2,
                        displayName: "Licht",
                        name: "light",
                        iconUrl: "Light On-96.png",
                        hasComponents: true,
                        components: [{name:"Spiegel", isColorAble:true}, {name:"Decke", isColorAble:false}]
                    },

                    {id: 5, displayName: "Heizung", name: "heater", iconUrl: "Heating Radiator-96.png"},

                    {id: 6, displayName: "Szenen", name: "scene", iconUrl: "Start-96.png"},

                    {
                        id: 3,
                        displayName: "Jalousien",
                        name: "blinds",
                        iconUrl: "General Blind-96.png",
                        hasComponents: true,
                        components: [{name:"Fenster"}]
                    },

                    {
                        id: 7, displayName: "Verbraucher",
                        name: "consumer",
                        iconUrl: "Electrical-96.png",
                        hasComponents: true,
                        components: [
                            {
                                name: "Zahnbürste",
                                isSwitchOffAble :true
                            },
                            {
                                name: "Rasierer",
                                isSwitchOffAble :true
                            }]
                    }
                ],
                scenes: [
                    {
                        displayName: "Vorheizen",
                        modules:[
                            {
                                name:"heater"
                            }
                        ]
                    }
                ]
            },
            {
                iconUrl: "Bedroom-96.png",
                name: "Schlafzimmer",
                type: "Schlafzimmer",
                roomImageUrl: "assets/img/room_images/schlafzimmer.png",
                modules: [
                    {
                        id: 1,
                        displayName: "Multi Room Audio",
                        name: "multiRoomAudio",
                        iconUrl: "Music-96.png",
                        hasComponents: false
                    },

                    {
                        id: 2,
                        displayName: "Licht",
                        name: "light",
                        iconUrl: "Light On-96.png",
                        hasComponents: true,
                        components: [{name:"Decke", isColorAble:false}, {name:"Bett", isColorAble:false}]
                    },

                    {id: 5, displayName: "Heizung", name: "heater", iconUrl: "Heating Radiator-96.png"},

                    {id: 6, displayName: "Szenen", name: "scene", iconUrl: "Start-96.png"},

                    {
                        id: 3,
                        displayName: "Jalousien",
                        name: "blinds",
                        iconUrl: "General Blind-96.png",
                        hasComponents: true,
                        components: [{name:"Fenster links"}, {name:"Fenster Ecke"}]
                    },

                    {
                        id: 7, displayName: "Verbraucher",
                        name: "consumer",
                        iconUrl: "Electrical-96.png",
                        hasComponents: true,
                        components: [
                            {
                                name: "TV",
                                isSwitchOffAble :true
                            },
                            {
                                name: "Handy",
                                isSwitchOffAble :true
                            }]
                    }
                ],
                scenes: [

                ]
            },
            {
                iconUrl: "Teddy Bear-96.png",
                name: "Kinderzimmer",
                type: "Kinderzimmer",
                roomImageUrl: "assets/img/room_images/kinderzimmer.png",
                modules: [
                    {
                        id: 1,
                        displayName: "Multi Room Audio",
                        name: "multiRoomAudio",
                        iconUrl: "Music-96.png",
                        hasComponents: false
                    },

                    {
                        id: 2,
                        displayName: "Licht",
                        name: "light",
                        iconUrl: "Light On-96.png",
                        hasComponents: true,
                        components: [{name:"Licht 1", isColorAble:false}, {name:"Licht 2", isColorAble:true}, {name:"Licht 3", isColorAble:true}]
                    },

                    {id: 5, displayName: "Heizung", name: "heater", iconUrl: "Heating Radiator-96.png"},


                    {
                        id: 3,
                        displayName: "Jalousien",
                        name: "blinds",
                        iconUrl: "General Blind-96.png",
                        hasComponents: true,
                        components: [{name:"Fenster links"}, {name:"Fenster Rechts"}]
                    },

                    {
                        id: 7, displayName: "Verbraucher",
                        name: "consumer",
                        iconUrl: "Electrical-96.png",
                        hasComponents: true,
                        components: [
                            {
                                name: "Carrerabahn",
                                isSwitchOffAble :true
                            },
                            {
                                name: "Wii",
                                isSwitchOffAble :true
                            },
                            {
                                name: "Handy",
                                isSwitchOffAble :true
                            }]
                    }
                ],
                scenes: [
                    {
                        displayName: "Party"
                    },
                    {
                        displayName: "Chill"
                    }
                ]
            },
            {
                iconUrl: "Movie Projector-96.png",
                name: "Hobbyraum",
                type: "Multimediaraum",
                roomImageUrl: "assets/img/room_images/hobbyraum.png",
                modules: [
                    {
                        id: 1,
                        displayName: "Multi Room Audio",
                        name: "multiRoomAudio",
                        iconUrl: "Music-96.png",
                        hasComponents: false
                    },

                    {
                        id: 2,
                        displayName: "Licht",
                        name: "light",
                        iconUrl: "Light On-96.png",
                        hasComponents: true,
                        components: [{name:"Decke", isColorAble:false}, {name:"Billiard", isColorAble:false}]
                    },

                    {id: 5, displayName: "Heizung", name: "heater", iconUrl: "Heating Radiator-96.png"},

                    {id: 6, displayName: "Szenen", name: "scene", iconUrl: "Start-96.png"},


                    {
                        id: 7, displayName: "Verbraucher",
                        name: "consumer",
                        iconUrl: "Electrical-96.png",
                        hasComponents: true,
                        components: [
                            {
                                name: "Dart",
                                isSwitchOffAble :true
                            },
                            {
                                name: "Flipper",
                                isSwitchOffAble :true
                            },

                            {
                                name: "TV",
                                isSwitchOffAble :true
                            },

                            {
                                name: "NES",
                                isSwitchOffAble :true
                            },

                            {
                                name: "BlurRay Player",
                                isSwitchOffAble :true
                            }]
                    }
                ],
                scenes: [
                    {
                        displayName: "Party"
                    },
                    {
                        displayName: "Chill"
                    }
                ]
            },
            {
                iconUrl: "Laptop-96.png",
                name: "Büro",
                type: "Arbeitszimmer",
                roomImageUrl: "assets/img/room_images/buero.png",

                modules: [
                    {
                        id: 1,
                        displayName: "Multi Room Audio",
                        name: "multiRoomAudio",
                        iconUrl: "Music-96.png",
                        hasComponents: false
                    },

                    {
                        id: 2,
                        displayName: "Licht",
                        name: "light",
                        iconUrl: "Light On-96.png",
                        hasComponents: true,
                        components: [{name:"Decke", isColorAble:false}, {name:"Tisch", isColorAble:false}]
                    },

                    {id: 5, displayName: "Heizung", name: "heater", iconUrl: "Heating Radiator-96.png"},

                    {id: 6, displayName: "Szenen", name: "scene", iconUrl: "Start-96.png"},


                    {
                        id: 7, displayName: "Verbraucher",
                        name: "consumer",
                        iconUrl: "Electrical-96.png",
                        hasComponents: true,
                        components: [
                            {
                                name: "Handy",
                                isSwitchOffAble :true
                            },
                            {
                                name: "PC",
                                isSwitchOffAble :true
                            },

                            {
                                name: "TV",
                                isSwitchOffAble :true
                            }]
                    }
                ],
                scenes: [
                    {
                        displayName: "Party"
                    },
                    {
                        displayName: "Chill"
                    }
                ]
            },
            {
                iconUrl: "Washing Machine-96.png",
                name: "Waschraum",
                type: "Waschraum",
                roomImageUrl: "assets/img/room_images/waschraum.png",
                modules: [
                    {
                        id: 1,
                        displayName: "Multi Room Audio",
                        name: "multiRoomAudio",
                        iconUrl: "Music-96.png",
                        hasComponents: false
                    },
                    {
                        id: 5,
                        displayName: "Waschmaschine",
                        name: "washingMachine",
                        iconUrl: "Washing Machine-96.png",
                        hasComponents: false
                    }
                ],
                scenes: [
                    {
                        displayName: "Party"
                    },
                    {
                        displayName: "Chill"
                    }
                ]
            }
        ],

        users: [
            {
                id: 0,
                name: "Martin",
                isAdmin: true,
                hasSettingsPrivileges: true,
                profileUrl: "./assets/img/people_images/image02.png",
                pin: "1234"
            },
            {
                id: 1,
                name: "Maria",
                isAdmin: false,
                hasSettingsPrivileges: true,
                profileUrl: "./assets/img/people_images/image03.png",
                pin: "1234"
            },
            {
                id: 2,
                name: "Jan-Leon",
                isAdmin: false,
                hasSettingsPrivileges: false,
                profileUrl: "./assets/img/people_images/image01.png",
                pin: "1234"
            }],

        scenes: [
            {
                name: "Party",
                modules: [{
                    id: 1
                }]

            }
        ]


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

    this.getRoomModules = function () {
        return this.defaults.roomModules;
    };

    this.getHouseSettings = function () {
        return this.getHelper("houseSettings");
    };

    this.saveHouseSettings = function (settings) {
        localStorage.setObject("houseSettings", settings);
    };

    this.saveRooms = function (rooms) {
        localStorage.setObject("rooms", rooms);
    };

    this.saveUser = function (user) {
        var users = this.getUsers();

        for (var i = 0; i < users.length; ++i) {
            var current = users[i];

            if (current.id === user.id) {
                users[i] = user;
                break;
            }
        }

        localStorage.setObject("users", users);
    };

    this.getCountries = function () {
        return ["Deutschland", "Österreich", "Schweiz"];
    };

    this.getRoomsWithModuleById = function (moduleId) {
        var rooms = this.getRooms();
        var result = [];

        for (var i = 0; i < rooms.length; ++i) {
            var room = rooms[i];

            for (var m = 0; m < room.modules.length; ++m) {
                var module = room.modules[m];

                if (module.id === moduleId) {
                    result.push(room);
                    break;
                }
            }
        }
        return result;
    };

    this.getRoomTypes = function () {
        var types = [
            {name: "Wohnzimmer", iconUrl: "Living Room-96.png"},
            {name: "Küche", iconUrl: "Kitchen-96.png"},
            {name: "Esszimmer", iconUrl: "Dining Room-96.png"},
            {name: "Schlafzimmer", iconUrl: "Bedroom-96.png"},
            {name: "Badezimmer", iconUrl: "Shower and Tub-96.png"},
            {name: "Kinderzimmer", iconUrl: "Teddy Bear-96.png"},
            {name: "Arbeitszimmer", iconUrl: "Laptop-96.png"},
            {name: "Multimediaraum", iconUrl: "Movie Projector-96.png"},
            {name: "Waschraum", iconUrl: "Washing Machine-96.png"}
        ];

        return types;
    };

    this.getCentralHeaterSettings = function () {
        return this.getHelper("centralHeaterSettings");
    };

    this.getForbiddenSceneEditorModules = function () {
        return this.getHelper("forbiddenSceneEditorModules");
    };
};

Storage.getInstance = function () {
    if (Storage.instance == null) {
        Storage.instance = new Storage();
    }

    return Storage.instance;
};