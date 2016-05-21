/**
 * Created by Yannic on 20.05.2016.
 */

var storage = function() {

    var defaults = {
        rooms: [
            {icon: "kitchen", name: "Küche"},
            {icon: "free_breakfast", name: "Wohnzimmer"},
            {icon: "hot_tub", name: "Bad"},
            {icon: "casino", name: "Schlafzimmer"},
            {icon: "child_friendly", name: "Kinderzimmer"},
            {icon: "fitness_center", name: "Hobbyraum"},
            {icon: "business_center", name: "Büro"},
            {icon: "spa", name: "Waschkeller"},
        ]
    };

    this.getHelper = function(key) {
        
    };

    this.getRooms = function() {

        if(localStorage.getObject("rooms") === null) {
            localStorage.setObject("rooms", this.defaultRooms);
            return this.defaultRooms;
        }

        return local
    };
}

