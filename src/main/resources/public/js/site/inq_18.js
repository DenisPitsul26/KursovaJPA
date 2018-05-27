
var app = angular.module("myinq_18", []);

app.controller("inq_18", function ($http, $scope){

    $http.get('/api/goods_of_trading_point').then(function (response){
        var goodsOfTradingPointId = response.data;
        var selector = document.getElementById("goodsOfTradingPoint");
        $(selector).empty();
        for (var i = 0; i < goodsOfTradingPointId.length; i++) {
            var option = document.createElement("option");
            option.text = goodsOfTradingPointId[i].goods.nameOfGoods;
            option.value = goodsOfTradingPointId[i].id;
            selector.add(option);
        }
    });

    this.update_request = function add() {
        console.log("Start...");

        var indexOfGoods = document.getElementById("goodsOfTradingPoint").selectedIndex;
        var goodsId = document.getElementById("goodsOfTradingPoint").options[indexOfGoods].value;

        var start_time = document.getElementById("StartTime").value;
        var finish_time = document.getElementById("FinishTime").value;

        $scope.soldGoods = [];
        $http.get('/api/sold_goods/getBuyerByGoodsAndDateOfSale?goodsId='+ goodsId +"&startTime=" + start_time + "&finishTime=" + finish_time).then(function (response){
            document.getElementById("Rezultat").innerText = " ";
            $scope.soldGoods = response.data;

            if ($scope.soldGoods.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }
        });

    };

});