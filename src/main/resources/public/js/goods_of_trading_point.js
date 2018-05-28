var app = angular.module("goods_of_trading_point", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.goodsOfTradingPoint = [];
    $http.get('/api/goods_of_trading_point').then(function (response) {
        $scope.goodsOfTradingPoint = response.data;
    });

    this.startInsertGoodsOfTradingPoint = function () {
        $http.get('/api/trading_point').then(function (response) {
            var tradingPoint = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть торгівельну точку";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("tradingPoint");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < tradingPoint.length; i++) {
                var option = document.createElement("option");
                option.text = tradingPoint[i].nameOfTradingPoint;
                option.value = tradingPoint[i].id;
                selector.add(option);
            }
        });
        $http.get('/api/goods').then(function (response) {
            var goods = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть товар";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("goods");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < goods.length; i++) {
                var option = document.createElement("option");
                option.text = goods[i].nameOfGoods;
                option.value = goods[i].id;
                selector.add(option);
            }
        });
    };

    this.insertGoodsOfTradingPoint = function add() {
        var indexTradingPoint = document.getElementById("tradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("tradingPoint").options[indexTradingPoint].value;

        var indexGoods = document.getElementById("goods").selectedIndex;
        var goodsId = document.getElementById("goods").options[indexGoods].value;

        var price = document.getElementById("price").value;
        var numberOfGoods = document.getElementById("numberOfGoods").value;

        $http.get('/api/trading_point/get?id='+tradingPointId).then(function (response) {
            $http.get('/api/goods/get?id='+goodsId).then(function (response1) {
                var selectedTradingPoint = response.data;
                var selectedGoods = response1.data;

                var regex = /^([0-9]+[\\.][0-9]+)|[0-9]+$/;
                if(regex.test(price)) {
                    var regex2 = /^[0-9]+$/;
                    if (regex2.test(numberOfGoods)) {
                        var req = {
                            method: 'POST',
                            url: '/api/goods_of_trading_point/insert',
                            data: {
                                tradingPoint: selectedTradingPoint,
                                goods: selectedGoods,
                                price: price,
                                numberOfGoods: numberOfGoods
                            }
                        };
                        $http(req).then(function (resp) {
                            window.location.reload();
                        })
                    }
                    else alert("Поле 'Кількість товару' заповнене не коректно. (Приклад 14)");
                }
                else alert("Поле 'Ціна' заповнене не коректно. (Приклад 22.5)");
            });
        });
    };

    this.deleteGoodsOfTradingPoint = function del(id) {
        $http.get("api/goods_of_trading_point/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateGoodsOfTradingPoint = function startUpdate(id, tradingPoint, goods, price, numberOfGoods) {
        $http.get('/api/trading_point').then(function (response) {
            var tradingPoints = response.data;
            var selector = document.getElementById("updateTradingPoint");
            $(selector).empty();
            for (var i = 0; i < tradingPoints.length; i++) {
                var option = document.createElement("option");
                if (tradingPoints[i].id == tradingPoint.id){
                    option.selected = 'selected';
                }
                option.text = tradingPoints[i].nameOfTradingPoint;
                option.value = tradingPoints[i].id;
                selector.add(option);
            }
        });
        $http.get('/api/goods').then(function (response) {
            var goodss = response.data;
            var selector = document.getElementById("updateGoods");
            $(selector).empty();
            for (var i = 0; i < goodss.length; i++) {
                var option = document.createElement("option");
                if (goodss[i].id == goods.id){
                    option.selected = 'selected';
                }
                option.text = goodss[i].nameOfGoods;
                option.value = goodss[i].id;
                selector.add(option);
            }
        });
        document.getElementById("updateId").innerText = id;
        document.getElementById("updatePrice").value = price;
        document.getElementById("updateNumberOfGoods").value = numberOfGoods;
    };

    this.updateGoodsOfTradingPoint = function update() {
        var id = document.getElementById("updateId").innerText;

        var indexTradingPoint = document.getElementById("updateTradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("updateTradingPoint").options[indexTradingPoint].value;

        var indexGoods = document.getElementById("updateGoods").selectedIndex;
        var goodsId = document.getElementById("updateGoods").options[indexGoods].value;

        var price = document.getElementById("updatePrice").value;
        var numberOfGoods = document.getElementById("updateNumberOfGoods").value;

        $http.get('/api/trading_point/get?id='+tradingPointId).then(function (response) {
            $http.get('/api/goods/get?id=' + goodsId).then(function (response1) {
                var selectedTradingPoint = response.data;
                var selectedGoods = response1.data;

                var regex = /^([0-9]+[\\.][0-9]+)|[0-9]+$/;
                if(regex.test(price)) {
                    var regex2 = /^[0-9]+$/;
                    if (regex2.test(numberOfGoods)) {
                        var req = {
                            method: 'POST',
                            url: 'api/goods_of_trading_point/update?id=' + id,
                            data: {
                                tradingPoint: selectedTradingPoint,
                                goods: selectedGoods,
                                price: price,
                                numberOfGoods: numberOfGoods
                            }
                        };
                        $http(req).then(function (resp) {
                            window.location.reload();
                        })
                    }
                    else alert("Поле 'Кількість товару' заповнене не коректно. (Приклад 14)");
                }
                else alert("Поле 'Ціна' заповнене не коректно. (Приклад 22.5)");
            });
        });
    };
});