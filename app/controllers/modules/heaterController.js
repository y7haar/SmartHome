/**
 * Created by AlexK on 22.06.2016.
 */
/**
 * @author Alexander Kern
 */

mainApp.controller("heaterCtrl", function ($scope) {

    var centralHeaterSettings = Storage.getInstance().getCentralHeaterSettings();
    
    //$scope.timeStates = centralHeaterSettings.timeStates;
    $scope.currentTimeState = calcCurrentTimeState(centralHeaterSettings.timeStates);
    $scope.modes = centralHeaterSettings.modes;

    $scope.timeStateNames = [];
    for(var i =0; i<centralHeaterSettings.timeStates.length;++i )
        $scope.timeStateNames.push(centralHeaterSettings.timeStates[i].name);

    //workaround for ng-if new scope creating
    $scope.models = {
        timeStates : centralHeaterSettings.timeStates,
        currentMode: 0,
        currentTemp: []
    };
    for(var j =0; j< $scope.modes[$scope.models.currentMode].temperature.length; ++j)
        $scope.models.currentTemp[j] = $scope.modes[$scope.models.currentMode].temperature[j];

    $scope.minTemp = 0;
    $scope.maxTemp = 30;


    // User defined
    var userDefinedName ="Benutzerdefiniert";
    var userDefinedId = $scope.modes.length;
    $scope.modes.push({id:userDefinedId,name:userDefinedName});
    //console.log($scope.modes);
    //-------------------


    //$scope.currentMode = 1;
    //$scope.currentTemp = $scope.modes[$scope.models.currentMode].temperature[$scope.timeState];

    var lockTempWatch = 1;


    $scope.$watchCollection("models.currentTemp", function (newValue) {

        for (var i = 0; i < $scope.modes.length - 1; ++i) {
            if (arraysEqual($scope.modes[i].temperature, newValue))
            {
                $scope.models.currentMode = $scope.modes[i].id;
                lockTempWatch =1;
                break;
            }
        }

        if (lockTempWatch <= 0)
            $scope.models.currentMode = userDefinedId;

        lockTempWatch = $scope.expanded ? lockTempWatch - $scope.models.timeStates.length : 0;

    });


    $scope.$watch('models.currentMode', function () {
        var tempTemp = [];
        if ($scope.models.currentMode != userDefinedId) {
            for(var i =0; i< $scope.modes[$scope.models.currentMode].temperature.length; ++i){
                tempTemp[i] = $scope.models.currentTemp[i];
                $scope.models.currentTemp[i] = $scope.modes[$scope.models.currentMode].temperature[i];
            }

        }

        if(!arraysEqual(tempTemp, $scope.models.currentTemp))
            lockTempWatch = $scope.expanded ? $scope.models.timeStates.length : 1;
    });


    function calcCurrentTimeState(timeStates) {
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();

        var timeStateID = null;

        for (var i = 0; i < timeStates.length; i++) {
            var totalMin = hour * 60 + min;
            var tempTotalMinuteFrom = timeStates[i].from.hour * 60 + timeStates[i].from.min;
            var tempTotalMinuteTo = timeStates[i].to.hour * 60 + timeStates[i].to.min;

            if (totalMin < tempTotalMinuteFrom)
                totalMin += 24 * 60;

            if (tempTotalMinuteTo < tempTotalMinuteFrom)
                tempTotalMinuteTo += 24 * 60;


            if (totalMin >= tempTotalMinuteFrom && totalMin <= tempTotalMinuteTo) {
                timeStateID = timeStates[i].id ;
                break;
            }
        }
        return timeStateID;
    }

    function arraysEqual(arr1, arr2) {
        if(arr1.length !== arr2.length)
            return false;
        for(var i = arr1.length; i--;) {
            if(arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }

    //console.log($scope);


});