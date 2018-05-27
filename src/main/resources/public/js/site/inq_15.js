
var app = angular.module("myinq_15", []);

app.controller("inq_15", function ($http, $scope){

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
        $http.get('/api/sold_goods/getAmountOfSoldGoodsByTradingPoint?tradingPointId=' + tradingPointId).then(function (response) {
            $http.get('/api/trading_point/getSumLeasePaymentsAndUtilitiesByTradingPoint?tradingPointId=' + tradingPointId).then(function (response2) {
                $http.get('/api/seller/getSumSallaryOfSellersByTradingPoint?tradingPointId=' + tradingPointId).then(function (response3) {

                    console.log(response.data);
                    console.log(response2.data);
                    console.log(response3.data);

                    document.getElementById("Rezultat").innerText = ((response.data / (response2.data+response3.data)).toFixed(5));
                    console.log(response.data / (response2.data+response3.data));
                });
            });
        });

    };

});