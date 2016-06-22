/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("weatherCtrl", function ($scope) {

    $scope.currentData = {
        iconUrl: "assets/img/icons/weather/Clouds-96.png",
        weatherStatus:"Stark bewölkt",
        temperature:16,
        minTemperature:12,
        maxTemperature:21,
        location:"Hof / Saale",
        weekDay:"Mo",
        timeHour:"13",
        timeMin:"37",
        dateDay:"30",
        dateMonth:"05",
        dateYear:"2016"
    };

    $scope.days = [
        {day:"Montag", iconUrl:"assets/img/icons/weather/Cloud Lighting-96.png", minTemperature:"10", maxTemperature:"15"},
        {day:"Dienstag", iconUrl:"assets/img/icons/weather/Light Rain-96.png", minTemperature:"15", maxTemperature:"23"},
        {day:"Mittwoch", iconUrl:"assets/img/icons/weather/Moderate Rain-96.png", minTemperature:"14", maxTemperature:"22"},
        {day:"Donnerstag", iconUrl:"assets/img/icons/weather/Sun-96.png", minTemperature:"13", maxTemperature:"21"},
        {day:"Freitag", iconUrl:"assets/img/icons/weather/Sun-96.png", minTemperature:"10", maxTemperature:"14"},
        {day:"Samstag", iconUrl:"assets/img/icons/weather/Clouds-96.png", minTemperature:"11", maxTemperature:"14"},
        {day:"Sonntag", iconUrl:"assets/img/icons/weather/Heavy Rain-96.png", minTemperature:"12", maxTemperature:"17"}
    ];
});