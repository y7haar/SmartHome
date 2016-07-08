/**
 * @author Alexander Kern
 */

mainApp.controller("photovoltaicCtrl", function ($scope,$mdMedia) {

    var chartWidth = null;

    if($mdMedia("xs"))
        chartWidth = 365;
    else if($mdMedia("gt-md"))
        chartWidth=440;

    $scope.data = {
        pvElecGeneration : undefined,
        houseConsumption : undefined,
        battery:{
            isLoading: false,
            state : undefined,
            maxCapacity: 10,
            generation: undefined
        },
        outside:{
            type:undefined,
            value: undefined
        }
    };

    var setData = function(){
        $scope.data.pvElecGeneration = (Math.random() *5).toFixed(2);
        $scope.data.houseConsumption = (Math.random() *7).toFixed(2);
        $scope.data.battery.generation = (Math.random() *3).toFixed(2);

        var state = (0.35+ Math.random()).toFixed(2);
        if(state >=1) state = 1;
        $scope.data.battery.state = state;
        if(state ==1 || Math.random()>0.5) $scope.data.battery.isLoading = false;
        else
            $scope.data.battery.isLoading = true;


        if($scope.data.houseConsumption> $scope.data.pvElecGeneration){
            if(!$scope.data.battery.isLoading) {
                if ($scope.data.houseConsumption > ( parseFloat($scope.data.pvElecGeneration) + parseFloat($scope.data.battery.generation))) {
                    $scope.data.outside.type = "Bezug";
                    $scope.data.outside.value = parseFloat($scope.data.houseConsumption) - ( parseFloat($scope.data.pvElecGeneration) + parseFloat($scope.data.battery.generation));
                    $scope.data.outside.value =$scope.data.outside.value.toFixed(2);


                }
                else {
                    $scope.data.outside.type = "Bezug";
                    $scope.data.outside.value = 0;
                }
            }
            else
            {
                $scope.data.outside.type = "Bezug";
                $scope.data.outside.value = $scope.data.houseConsumption -  $scope.data.pvElecGeneration;
                $scope.data.outside.value =$scope.data.outside.value.toFixed(2);

            }
        }
        else
        {
            $scope.data.battery.isLoading = true;
            if($scope.data.battery.isLoading){
                $scope.data.outside.type = "Bezug";
                $scope.data.outside.value = 0;
            }
            else {
                $scope.data.outside.type = "Verkaufen";
                $scope.data.outside.value =( $scope.data.pvElecGeneration) - $scope.data.houseConsumption ;
                $scope.data.outside.value =$scope.data.outside.value.toFixed(2);
            }
        }


    };
    setData();



    console.log("PV: "+$scope.data.pvElecGeneration);
    console.log("H: "+$scope.data.houseConsumption);
    console.log("B: "+$scope.data.battery.state+ "- "+$scope.data.battery.generation+" Charging"+$scope.data.battery.isLoading);
    console.log("S: "+$scope.data.outside.type+" - "+$scope.data.outside.value);

    $scope.chartOptions = {
        chart:{
            width:chartWidth,
            type:"pie",
            events: {
                load : function (){
                    chartTest = this;
                    /*
                    var series = this.series;

                     setInterval(function () {
                     var x = (new Date()).getTime();
                     var y1= Math.round(5+Math.random(x*42) *35);
                     var y2= Math.round(1+Math.random(x*21) *5);
                     series[0].addPoint([x, y1], true, true);
                     series[1].addPoint([x, y2], true, true);

                     }, 15000);
                     */
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
            //text: 'Verbrauch'
        },
        xAxis: {
            range: 15 * 1000,
            type:'datetime'
        },

        series: [{
            data: [{
                name: "Microsoft Internet Explorer",
                y: 56.33,
                color: '#5d8e1a'
            }, {
                name: "Chrome",
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: "Firefox",
                y: 10.38
            }, {
                name: "Safari",
                y: 4.77
            }, {
                name: "Opera",
                y: 0.91
            }, {
                name: "Proprietary or Undetectable",
                y: 0.2
            }]
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
