/**
 * Created by AlexK on 22.06.2016.
 */
/**
 * @author Alexander Kern
 */

mainApp.controller("heaterCtrl", function ($scope) {

    var centralHeaterSettings = Storage.getInstance().getCentralHeaterSettings();

    $scope.currentTimeState = calcCurrentTimeState(centralHeaterSettings.timeStates);
    $scope.modes = centralHeaterSettings.modes;

    $scope.timeStateNames = [];
    for(var i =0; i<centralHeaterSettings.timeStates.length;++i )
        $scope.timeStateNames.push(centralHeaterSettings.timeStates[i].name);

    //workaround for ng-if new scope creating
    $scope.models = {
        currentMode: 0,
        currentTemp: []
    };
    for(var i =0; i< $scope.modes[$scope.models.currentMode].temperature.length; ++i)
        $scope.models.currentTemp[i] = $scope.modes[$scope.models.currentMode].temperature[i];

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

    var lockTempWatch = true;

    var watchGroupExpression = [];
    for(var i =0; i< $scope.modes[$scope.models.currentMode].temperature.length; ++i)
        watchGroupExpression.push('models.currentTemp['+i+']');

    $scope.$watchGroup(watchGroupExpression, function (newValue) {
        console.log(newValue);
        $scope.models.currentTemp[$scope.models.currentMode] = newValue;
        if (!lockTempWatch)
            $scope.models.currentMode = userDefinedId;
        lockTempWatch = false;
    });

    $scope.$watch('models.currentMode', function (newValue) {
        $scope.models.currentMode = newValue;

        if ($scope.models.currentMode != userDefinedId) {
            for(var i =0; i< $scope.modes[$scope.models.currentMode].temperature.length; ++i)
                $scope.models.currentTemp[i] = $scope.modes[$scope.models.currentMode].temperature[i];
            lockTempWatch = true;
        }
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

    };


});