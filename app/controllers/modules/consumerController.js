/**
 * Created by AlexK on 29.06.2016.
 */
mainApp.controller("consumerCtrl", function ($scope,$mdMedia,$timeout,$window) {

    $scope.totalElecConsumption = 0;
    $scope.totalWaterConsumption = 10;

    $scope.consumerLimit = 3;
    var chartWidth = null;

    $scope.test = false;
    var calcWidth = function () {
        chartWidth = $timeout(function(){
            return document.getElementsByTagName('consumer')[0].clientWidth;
        },0);
        testWidth = chartWidth;
        return chartWidth;
    };

    var chartTest = null;
    
    $scope.$watch("expanded", function(newV,oldV){
        console.log("TEST :" +newV+" - "+oldV);
        console.log($scope.chart);

            console.log("Try reflow");
            chartTest.reflow();

    });


    $scope.consumers = [
        {
            id: 0,
            name: "TV",
            isOn: false,
            isSwitchOffAble :true,
            consumption:[
                {
                    type: "electricity",
                    measure:"kWh",
                    value:0.12
                }
            ],
            currentConsumption: {
                "electricity": 0
            },

            elecConsumption: 0.12,
            waterConsumption: 0
        },
        {
            id: 1,
            name: "Kühlschrank",
            isOn: true,
            isSwitchOffAble :false,
            elecConsumption: 0.26,
            waterConsumption: 0
        },
        {
            id: 2,
            name: "Waschmaschine",
            isOn: true,
            isSwitchOffAble :false,
            elecConsumption: 0.71,
            waterConsumption: 12
        },
        {
            id: 3,
            name: "Kaffe Maschine",
            isOn: false,
            isSwitchOffAble :true,
            elecConsumption: 0.001,
            waterConsumption: 0.3
        },
        {
            id: 4,
            name: "Telefon",
            isOn: true,
            isSwitchOffAble :false,
            elecConsumption: 0.1,
            waterConsumption: 0
        },
        {
            id: 5,
            name: "TV 2",
            isOn: true,
            isSwitchOffAble :true,
            elecConsumption: 0.04,
            waterConsumption: 0
        }
    ];


    $scope.calcTotalConsumption= function () {
        $scope.totalElecConsumption = 0;
        $scope.totalWaterConsumption = 0;
        for(var i= 0; i< $scope.consumers.length;++i){
            if($scope.consumers[i].isOn|| true) {
                $scope.totalElecConsumption += $scope.consumers[i].elecConsumption;
                console.log($scope.consumers[i].waterConsumption);
                $scope.totalWaterConsumption += $scope.consumers[i].waterConsumption;
            }
        }

        $scope.totalElecConsumption= $scope.totalElecConsumption.toFixed(3);
        $scope.totalWaterConsumption= $scope.totalWaterConsumption.toFixed(3);

    };

    $scope.consumerClicked = function (id) {
        if($scope.consumers[id].isSwitchOffAble){
            $scope.consumers[id].isOn = !$scope.consumers[id].isOn;
            $scope.calcTotalConsumption();
        }
    };


    $scope.chartOptions = {
        chart:{

            events: {
                load : function (){
                    chartTest = this;
                    var series = this.series;
                    setInterval(function () {
                        var x = (new Date()).getTime();
                        var y1= Math.round(5+Math.random(x*42) *35);
                        var y2= Math.round(1+Math.random(x*21) *5);
                        series[0].addPoint([x, y1], true, true);
                        series[1].addPoint([x, y2], true, true);
                    }, 15000);
                }
            }
        },
        navigator: {
            margin: 5,
            series: {
                color: "#5d8e1a",
                lineWidth: 2
            }
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
            range: 15 * 1000,
            type:'datetime'
        },

        series: [{
            type: "column",
            color: '#5d8e1a',
            name: 'Stromverbrauch in kWh',
            data: (function () {

                var data = [], time = (new Date()), i;
                time.setSeconds(0);
                time = time.getTime();

                for (i = -100; i <= 0; i += 1) {
                    data.push([
                        time + i * 15000,
                        Math.round(3+Math.random(time *2) * 35)
                    ]);
                }
                return data;
            }())
        },
            {
                type: "column",
                color: '#0956a9',
                name: 'Wasserverbrauch in m³',
                data: (function () {
                    var data = [], time = (new Date()), i;
                    time.setSeconds(0);
                    time = time.getTime();

                    for (i = -100; i <= 0; i += 1) {
                        data.push([
                            time + i * 15000,
                            Math.round(1+Math.random(time) * 5)
                        ]);
                    }
                    return data;
                }())
            }

        ],
        tooltip:{
            crosshairs: [true],
            formatter: function() {
                return Highcharts.dateFormat('%d.%m.%Y %H:%M:%S', this.x)+'<br>Stromverbrauch: '+ this.points[0].y+' kWh'+'<br>Wasserverbrauch: '+ this.points[1].y+' m³';
            }
        },
        func: function(chart) {
            $timeout(function() {
                console.log("OMG");
                chart.reflow();
                //The below is an event that will trigger all instances of charts to reflow
                //$scope.$broadcast('highchartsng.reflow');
            }, 0);
        }
    };







});