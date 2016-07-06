/**
 * Created by AlexK on 29.06.2016.
 */
mainApp.controller("consumerCtrl", function ($scope,$mdMedia) {

    $scope.totalConsumption = 0;
    $scope.chart = "";
    var chartWidth = 0;

    if($mdMedia("xs")) chartWidth = 300;
    else
        chartWidth = 445;

    console.log("WIDTH: "+chartWidth);
    
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
            width: chartWidth,
            events: {
                load : function () {

                    // set up the updating of the chart each second
                    var series = this.series;
                    setInterval(function () {
                        var x = (new Date()).getTime();// current time
                        var y1= Math.round(5+Math.random(x.getMilliseconds()*42) *35);
                        var y2= Math.round(1+Math.random(x.getMilliseconds()*21) *5);
                        series[0].addPoint([x, y1], true, true);
                        series[1].addPoint([x, y2], true, true);

                    }, 15000);
                }
            }
        },
        navigator: {
            margin: 5,
            color:'#000000'
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
            range: 30 * 1000,
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
        }
    };






});