
var app = angular.module("myinq_5", []);

app.controller("inq_5", function ($http, $scope){

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

        var indexOfGoods = document.getElementById("goods").selectedIndex;
        var goodsId = document.getElementById("goods").options[indexOfGoods].value;

        $scope.goodsOfTradingPoints = [];
        $http.get('/api/goods_of_trading_point/getGoodsPriceAndNumberOfGoodsByAllTradingPointAndGoods?goodsId=' + goodsId).then(function (response){

            document.getElementById("Rezultat").innerText = " ";
            $scope.goodsOfTradingPoints = response.data;

            if ($scope.goodsOfTradingPoints.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }
        });

    };

});