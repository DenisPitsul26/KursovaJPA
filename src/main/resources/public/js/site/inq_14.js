
var app = angular.module("myinq_14", []);

app.controller("inq_14", function ($http, $scope){

    $http.get('/api/trading_point').then(function (response){
        var tradingPoint = response.data;
        console.log(response.data);
        var selector = document.getElementById("tradingPoint");
        $(selector).empty();
        for (var i = 0; i < tradingPoint.length; i++) {
            var option = document.createElement("option");
            option.text = tradingPoint[i].nameOfTradingPoint;
            option.value = tradingPoint[i].id;
            selector.add(option);
        }
    });

    this.update_request = function add() {

        console.log("Start...");

        var indexOfTradingPoint = document.getElementById("tradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("tradingPoint").options[indexOfTradingPoint].value;

        $scope.counts = [];
        $http.get('/api/sold_goods/getCountOfSoldGoodsByTradingPoint?tradingPointId=' + tradingPointId).then(function (response){
            $http.get('/api/trading_point/getNumberOfCountersByTradingPoint?tradingPointId='+ tradingPointId).then(function (response2){

                document.getElementById("Rezultat").innerText = ((response.data/response2.data).toFixed(2));
                console.log(response.data/response2.data)
            });
        });

    };

});