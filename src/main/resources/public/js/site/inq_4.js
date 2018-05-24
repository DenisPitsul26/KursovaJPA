
var app = angular.module("myinq_4", []);

app.controller("inq_4", function ($http, $scope){

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
    $http.get('/api/goods').then(function (response){
        var goods = response.data;
        var selector = document.getElementById("goods");
        $(selector).empty();
        for (var i = 0; i < goods.length; i++) {
            var option = document.createElement("option");
            option.text = goods[i].nameOfGoods;
            option.value = goods[i].id;
            selector.add(option);
        }
    });

    this.update_request = function add() {
        console.log("Start...");

        var indexOfTypeOfTradingPoint = document.getElementById("typeOfTradingPoint").selectedIndex;
        var typeOfTradingPointId = document.getElementById("typeOfTradingPoint").options[indexOfTypeOfTradingPoint].value;

        var indexOfGoods = document.getElementById("goods").selectedIndex;
        var goodsId = document.getElementById("goods").options[indexOfGoods].value;

        $scope.goodsOfTradingPoints = [];
        $http.get('/api/goods_of_trading_point/getGoodsPriceAndNumberOfGoodsByTypeOfTradingPointAndGoods?typeOfTradingPointId=' + typeOfTradingPointId + "&goodsId=" + goodsId).then(function (response){

            document.getElementById("Rezultat").innerText = " ";
            $scope.goodsOfTradingPoints = response.data;

            if ($scope.goodsOfTradingPoints.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }
        });

    };

});