
var app = angular.module("myinq_7", []);

app.controller("inq_7", function ($http, $scope){

    $http.get('/api/type_of_trading_point').then(function (response){
        console.log("ddddd");
        var type = response.data;
        console.log(response.data);
        var selector = document.getElementById("Type");
        $(selector).empty();
        for (var i = 0; i < type.length; i++) {
            var option = document.createElement("option");
            option.text = type[i].typeOfTypeOfTradingPoint;
            option.value = type[i].id;
            selector.add(option);
        }
    });

    this.update_request = function add() {

        console.log("Start...");

        var indexOfTypeOfTradingPoint = document.getElementById("Type").selectedIndex;
        var typeOfTradingPointId = document.getElementById("Type").options[indexOfTypeOfTradingPoint].value;


        var start_time = document.getElementById("StartTime").value;
        var finish_time = document.getElementById("FinishTime").value;

        $scope.counts = [];
        $http.get('/api/sold_goods/getNumberOfSoldGoodsByTypeOfTradingPointAndDateOfSale?typeOfTradingPointId=' + typeOfTradingPointId +"&startTime="+ start_time +"&finishTime="+ finish_time).then(function (response){
            $http.get('/api/seller/getCountOfSellerByTypeOfTradingPointId?typeOfTradingPointId='+ typeOfTradingPointId).then(function (response2){

                console.log(response.data);
                console.log(response2.data);
                document.getElementById("Rezultat").innerText = ((response.data/response2.data).toFixed(2))+"\tодиниць товарів на одного продавця.";

                console.log(response.data/response2.data)
            });
        });

    };

});