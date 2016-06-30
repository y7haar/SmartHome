/**
 * Created by AlexK on 29.06.2016.
 */
mainApp.controller("consumerCtrl", function ($scope) {

    $scope.totalConsumption = 0;
    $scope.chart = "";

    $scope.consumers = [
        {
            id: 0,
            name: "TV",
            isOn: false,
            isSwitchOffAble :true,
            consumption: 47
        },
        {
            id: 1,
            name: "Kühlschrank",
            isOn: true,
            isSwitchOffAble :false,
            consumption: 103
        },
        {
            id: 2,
            name: "Spülmaschine",
            isOn: false,
            isSwitchOffAble :false,
            consumption: 75
        },
        {
            id: 3,
            name: "Kaffe Maschine",
            isOn: false,
            isSwitchOffAble :true,
            consumption: 3
        },
        {
            id: 4,
            name: "Telefon",
            isOn: true,
            isSwitchOffAble :false,
            consumption: 0.3
        },
        {
            id: 5,
            name: "TV 2",
            isOn: true,
            isSwitchOffAble :true,
            consumption: 21
        }
    ];


    $scope.calcTotalConsumption= function () {
        $scope.totalConsumption = 0;
        for(var i= 0; i< $scope.consumers.length;++i){
            if($scope.consumers[i].isOn)
                $scope.totalConsumption+= $scope.consumers[i].consumption;
        }
    };

    $scope.consumerClicked = function (id) {
        if($scope.consumers[id].isSwitchOffAble){
            $scope.consumers[id].isOn = !$scope.consumers[id].isOn;
            $scope.calcTotalConsumption();
        }
    };


    $scope.chartOptions = {
        chart:{
            width: null,
            events: {
                load : function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.round(25+Math.random() * 50);
                        series.addPoint([x, y], true, true);
                    }, 5000);
                }
            }
        },
        navigator: {
            margin: 5
        },

        rangeSelector: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Verbrauch'
        },
        xAxis: {
            range: 30 * 1000 // six months
        },

        series : [{
            type: "areaspline",
            name : 'Verbrauch in kWh',
            data : (function () {
                // generate an array of random data
                var data = [], time = (new Date()).getTime(), i;

                for (i = -999; i <= 0; i += 1) {
                    data.push([
                        time + i * 1000,
                        Math.round(Math.random() * 100)
                    ]);
                }
                return data;
            }())
        }],
        tooltip:{
            crosshairs: [true],
            formatter: function() {
                return 'Verbrauch <br>' + Highcharts.dateFormat('%d.%m.%Y %H:%M:%S', this.x) +': '+ this.y+' kWh';
            }
        }
    };






});