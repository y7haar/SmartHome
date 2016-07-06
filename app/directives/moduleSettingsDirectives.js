/**
 * @author Yannic Siebenhaar
 */


mainApp.directive('blindsSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/blindsSettingsView.html",
        restrict: "E",
        controller: blindsSettingsController
    };
});

function blindsSettingsController($scope, $mdDialog) {

    $scope.speed = 6;

    $scope.sensitivity = 65;
    
    $scope.windOpen = true;
    $scope.lamellsShut = 90;
    $scope.lamellsOpen = 5;

    $scope.close = function() {
        $mdDialog.hide();
    };
}


mainApp.directive('doorSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/doorSettingsView.html",
        restrict: "E",
        controller: doorSettingsController
    };
});

function doorSettingsController($scope, $mdDialog) {

    $scope.notifications = ["Klingeln", "Öffnen der Tür", "Sperren der Tür"];
    $scope.selected = [1];

    $scope.volTalk = 50;
    $scope.volHear = 60;

    $scope.check1 = true;
    $scope.check3 = true;

    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
            list.splice(idx, 1);
        }
        else {
            list.push(item);
        }
    };
    
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    
    $scope.isIndeterminate = function() {
        return ($scope.selected.length !== 0 &&
        $scope.selected.length !== $scope.notifications.length);
    };
    
    $scope.isChecked = function() {
        return $scope.selected.length === $scope.notifications.length;
    };
    
    $scope.toggleAll = function() {
        if ($scope.selected.length === $scope.notifications.length) {
            $scope.selected = [];
        } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
            $scope.selected = $scope.notifications.slice(0);
        }
    };


    $scope.close = function() {
        $mdDialog.hide();
    }
}

mainApp.directive('weatherSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/weatherSettingsView.html",
        restrict: "E",
        controller: weatherSettingsController
    };
});


function weatherSettingsController($scope, $mdDialog) {
    $scope.close = function() {
        $mdDialog.hide();
    };

    $scope.houseSettings = Storage.getInstance().getHouseSettings();
    $scope.syncPlace = true;

    $scope.countries = Storage.getInstance().getCountries();
}

mainApp.directive('multiRoomAudioSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/multiRoomAudioSettingsView.html",
        restrict: "E",
        controller: multiRoomAudioSettingsController
    };
});

function multiRoomAudioSettingsController($scope, $mdDialog) {
    $scope.close = function() {
        $mdDialog.hide();
    };

    $scope.maxVolume = 100;

    $scope.eqPresets = ["Pop", "Rock", "Negersprechgesang", "Benutzer"];

    $scope.eqValues = {};

    $scope.eqValues["Pop"] = {bass: 5, middle:-4, treble:6};
    $scope.eqValues["Rock"] = {bass: 2, middle:5, treble:-2};
    $scope.eqValues["Negersprechgesang"] = {bass: 8, middle:-7, treble:4};
    $scope.eqValues["Benutzer"] = {bass: 0, middle:0, treble:0};

    $scope.eqPreset = "Rock";


    $scope.$watch('eqPreset', function(eqPreset){
        $scope.bass = $scope.eqValues[eqPreset].bass;
        $scope.middle = $scope.eqValues[eqPreset].middle;
        $scope.treble = $scope.eqValues[eqPreset].treble;
    }, true);


    $scope.$watch('bass', function(bass){

        if($scope.eqValues[$scope.eqPreset].bass !== bass) {
            $scope.eqPreset = "Benutzer";
        }


        if($scope.eqPreset === "Benutzer") {
            $scope.eqValues["Benutzer"].bass = bass;
        }
    }, true);

    $scope.$watch('middle', function(middle){

        if($scope.eqValues[$scope.eqPreset].middle !== middle) {
            $scope.eqPreset = "Benutzer";
        }

        if($scope.eqPreset === "Benutzer") {
            $scope.eqValues["Benutzer"].middle = middle;
        }
    }, true);

    $scope.$watch('treble', function(treble){

        if($scope.eqValues[$scope.eqPreset].treble !== treble) {
            $scope.eqPreset = "Benutzer";
        }

        if($scope.eqPreset === "Benutzer") {
            $scope.eqValues["Benutzer"].treble = treble;
        }
    }, true);

}

mainApp.directive('ovenSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/ovenSettingsView.html",
        restrict: "E",
        controller: ovenSettingsController
    };
});


function ovenSettingsController($scope, $mdDialog) {

    $scope.notifications = ["Backvorgang beendet", "Ofen wurde angeschalten"];
    $scope.selected = [1];

    $scope.temperatureUnit = "Celsius";

    $scope.lightOn = true;


    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
            list.splice(idx, 1);
        }
        else {
            list.push(item);
        }
    };

    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };

    $scope.isIndeterminate = function() {
        return ($scope.selected.length !== 0 &&
        $scope.selected.length !== $scope.notifications.length);
    };

    $scope.isChecked = function() {
        return $scope.selected.length === $scope.notifications.length;
    };

    $scope.toggleAll = function() {
        if ($scope.selected.length === $scope.notifications.length) {
            $scope.selected = [];
        } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
            $scope.selected = $scope.notifications.slice(0);
        }
    };


    $scope.close = function() {
        $mdDialog.hide();
    };

    $scope.toggleAll();
}


mainApp.directive('washingMachineSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/washingMachineSettingsView.html",
        restrict: "E",
        controller:washingMachineController
    };
});


function washingMachineController($scope, $mdDialog) {

    $scope.notifications = ["Waschvorgang beendet", "Waschmaschine wurde angeschalten", "Entkalkung nötig"];
    $scope.selected = [1];

    $scope.temperatureUnit = "Celsius";

    $scope.lightOn = true;

    $scope.waterHardness = ["Weich", "Mittel", "Hart", "Sehr hart"];

    $scope.waterStep = 2;


    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
            list.splice(idx, 1);
        }
        else {
            list.push(item);
        }
    };

    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };

    $scope.isIndeterminate = function() {
        return ($scope.selected.length !== 0 &&
        $scope.selected.length !== $scope.notifications.length);
    };

    $scope.isChecked = function() {
        return $scope.selected.length === $scope.notifications.length;
    };

    $scope.toggleAll = function() {
        if ($scope.selected.length === $scope.notifications.length) {
            $scope.selected = [];
        } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
            $scope.selected = $scope.notifications.slice(0);
        }
    };


    $scope.close = function() {
        $mdDialog.hide();
    };

    $scope.toggleAll();
}


mainApp.directive('washingMachineSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/washingMachineSettingsView.html",
        restrict: "E",
        controller:washingMachineController
    };
});

//#####################################
/* Alex Kern*/

mainApp.directive('lightSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/lightSettingsView.html",
        restrict: "E",
        controller:lightController
    };
});


function lightController($scope, $mdDialog) {

    $scope.speed = 6;

    $scope.lightOnAnimation = false;
    $scope.lightOnSpeed =100;

    $scope.lightOffAnimation = false;
    $scope.lightOffSpeed =100;

    $scope.setToDefault = function (name) {
        console.log( $scope[name]);
        $scope[name] = 100;
    };

    $scope.close = function() {
        $mdDialog.hide();
    };
}
