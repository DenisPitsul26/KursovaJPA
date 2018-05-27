
var app = angular.module("myinq_17", []);

app.controller("inq_17", function ($http, $scope){

    $http.get('/api/type_of_trading_point').then(function (response){
        var typeOfTradingPoint = response.data;
        var selector = document.getElementById("typeOfTradingPoint");
        var defaultOption = document.createElement("option");
        defaultOption.value="";
        defaultOption.text = "Виберіть тип торгівельної точки";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        $(selector).empty();
        for (var i = 0; i < typeOfTradingPoint.length; i++) {
            var option = document.createElement("option");
            option.text = typeOfTradingPoint[i].typeOfTypeOfTradingPoint;
            option.value = typeOfTradingPoint[i].id;
            selector.add(option);
        }
    });

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

        var indexOfTypeOfTradingPoint = document.getElementById("typeOfTradingPoint").selectedIndex;
        var typeOfTradingPointId = document.getElementById("typeOfTradingPoint").options[indexOfTypeOfTradingPoint].value;

        var indexOfGoods = document.getElementById("goodsOfTradingPoint").selectedIndex;
        var goodsId = document.getElementById("goodsOfTradingPoint").options[indexOfGoods].value;

        var start_time = document.getElementById("StartTime").value;
        var finish_time = document.getElementById("FinishTime").value;

        $scope.soldGoods = [];
        $http.get('/api/sold_goods/getBuyerByTradingPointAndGoodsAndDateOfSale?typeOfTradingPointId=' + typeOfTradingPointId + "&goodsId="+ goodsId +"&startTime=" + start_time + "&finishTime=" + finish_time).then(function (response){
            document.getElementById("Rezultat").innerText = " ";
            $scope.soldGoods = response.data;

            if ($scope.soldGoods.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }
        });

    };

    document.getElementById("typeOfTradingPoint").addEventListener("change", changeTypeOfTradingPointInsert);
    function changeTypeOfTradingPointInsert() {
        var indexTypeOfTradingPoint= document.getElementById("typeOfTradingPoint").selectedIndex;
        var typeOfTradingPointId= document.getElementById("typeOfTradingPoint").options[indexTypeOfTradingPoint].value;

        $http.get('/api/type_of_trading_point/get?id=' + typeOfTradingPointId).then(function (response) {
            $scope.selectedTypeOfTradingPointInsert = response.data;
        });

        $http.get('/api/goods_of_trading_point').then(function (response) {
            var goodsOfTradingPoint = response.data;
            var selector = document.getElementById("goodsOfTradingPoint");

            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть товар";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < goodsOfTradingPoint.length; i++) {
                if (goodsOfTradingPoint[i].tradingPoint.typeOfTradingPoint.id == $scope.selectedTypeOfTradingPointInsert.id) {
                    var option = document.createElement("option");
                    option.text = goodsOfTradingPoint[i].goods.nameOfGoods;
                    option.value = goodsOfTradingPoint[i].id;
                    selector.add(option);
                }
            }
        });
    }

});