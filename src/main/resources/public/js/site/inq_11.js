
var app = angular.module("myinq_11", []);

app.controller("inq_11", function ($http, $scope){


    $http.get('/api/type_of_trading_point').then(function (response){
        var typeOfTradingPoint = response.data;
        var selector = document.getElementById("typeOfTradingPoint");
        $(selector).empty();
        for (var i = 0; i < typeOfTradingPoint.length; i++) {
            var option = document.createElement("option");
            option.text = typeOfTradingPoint[i].typeOfTypeOfTradingPoint;
            option.value = typeOfTradingPoint[i].id;
            selector.add(option);
        }
    });

    this.update_request = function add() {
        console.log("Start...");

        var indexOfTypeOfTradingPoint = document.getElementById("typeOfTradingPoint").selectedIndex;
        var typeOfTradingPointId = document.getElementById("typeOfTradingPoint").options[indexOfTypeOfTradingPoint].value;

        $scope.sellers = [];
        $http.get('/api/seller/getSallaryOfSellerByTypeOfTradingPoint?typeOfTradingPointId=' + typeOfTradingPointId).then(function (response){
            document.getElementById("Rezultat").innerText = " ";
            $scope.sellers = response.data;
            console.log(response.data);

            if ($scope.sellers.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }
        });

    };

});