
var app = angular.module("myinq_3", []);

app.controller("inq_3", function ($http, $scope){

    $http.get('/api/trading_point').then(function (response){
        var tradingPoint = response.data;
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

        var indexOftradingPoint = document.getElementById("tradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("tradingPoint").options[indexOftradingPoint].value;

        $scope.goodsOfTradingPoints = [];
        $http.get('/api/goods_of_trading_point/getGoodsByTradingPoint?tradingPointId=' + tradingPointId).then(function (response){

            document.getElementById("Rezultat").innerText = " ";
            $scope.goodsOfTradingPoints = response.data;

            if ($scope.goodsOfTradingPoints.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }
        });

    };

});