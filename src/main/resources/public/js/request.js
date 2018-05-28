var app = angular.module("request", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.request = [];
    $http.get('/api/request').then(function (response) {
        $scope.request = response.data;
    });

    this.startInsertRequest = function () {
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
        $http.get('/api/provider').then(function (response) {
            var provider = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.text = "Виберіть постачальника";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("provider");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < provider.length; i++) {
                var option = document.createElement("option");
                option.text = provider[i].nameOfProvider;
                option.value = provider[i].id;
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

    this.insertRequest = function add() {
        var numberRequest = document.getElementById("numberRequest").value;

        var indexTradingPoint = document.getElementById("tradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("tradingPoint").options[indexTradingPoint].value;

        var indexProvider = document.getElementById("provider").selectedIndex;
        var providerId = document.getElementById("provider").options[indexProvider].value;

        var indexGoods = document.getElementById("goods").selectedIndex;
        var goodsId = document.getElementById("goods").options[indexGoods].value;

        var numberOfGoods = document.getElementById("numberOfGoods").value;
        var price = document.getElementById("price").value;
        var dateOfRequest = document.getElementById("dateOfRequest").value;

        $http.get('/api/trading_point/get?id='+tradingPointId).then(function (response) {
            $http.get('/api/provider/get?id=' + providerId).then(function (response1) {
                    $http.get('/api/goods/get?id=' + goodsId).then(function (response2) {
                        var selectedTradingPoint = response.data;
                        var selectedProvider = response1.data;
                        var selectedGoods = response2.data;

                        var regex0 = /^[0-9]+$/;
                        if (regex0.test(numberRequest)) {
                            var regex = /^([0-9]+[\\.][0-9]+)|[0-9]+$/;
                            if (regex.test(price)) {
                                var regex2 = /^[0-9]+$/;
                                if (regex2.test(numberOfGoods)) {
                                    var req = {
                                        method: 'POST',
                                        url: '/api/request/insert',
                                        data: {
                                            numberRequest: numberRequest,
                                            tradingPoint: selectedTradingPoint,
                                            provider: selectedProvider,
                                            goods: selectedGoods,
                                            numberOfGoods: numberOfGoods,
                                            price: price,
                                            dateOfRequest: dateOfRequest
                                        }
                                    };
                                    $http(req).then(function (resp) {
                                        window.location.reload();
                                    })
                                }
                                else alert("Поле 'Кількість товару' заповнене не коректно. (Приклад 14)");
                            }
                            else alert("Поле 'Ціна' заповнене не коректно. (Приклад 22.5)");
                        }
                        else alert("Поле 'Номер заявки' заповнене не коректно. (Приклад 25)");
                    });
            });
        });
    };

    this.deleteRequest = function del(id) {
        $http.get("api/request/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateRequest = function startUpdate(id, numberRequest, tradingPoint, provider, goods, numberOfGoods, price, dateOfRequest) {
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
        $http.get('/api/provider').then(function (response) {
            var providers = response.data;
            var selector = document.getElementById("updateProvider");
            $(selector).empty();
            for (var i = 0; i < providers.length; i++) {
                var option = document.createElement("option");
                if (providers[i].id == provider.id){
                    option.selected = 'selected';
                }
                option.text = providers[i].nameOfProvider;
                option.value = providers[i].id;
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
        document.getElementById("updateNumberRequest").value = numberRequest;
        document.getElementById("updateNumberOfGoods").value = numberOfGoods;
        document.getElementById("updatePrice").value = price;
        document.getElementById("updateDateOfRequest").value = dateOfRequest;
    };

    this.updateRequest = function update() {
        var id = document.getElementById("updateId").innerText;

        var indexTradingPoint = document.getElementById("updateTradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("updateTradingPoint").options[indexTradingPoint].value;

        var indexProvider = document.getElementById("updateProvider").selectedIndex;
        var providerId = document.getElementById("updateProvider").options[indexProvider].value;

        var indexGoods = document.getElementById("updateGoods").selectedIndex;
        var goodsId = document.getElementById("updateGoods").options[indexGoods].value;

        var numberOfGoods = document.getElementById("updateNumberOfGoods").value;
        var numberRequest = document.getElementById("updateNumberRequest").value;
        var price = document.getElementById("updatePrice").value;
        var dateOfRequest = document.getElementById("updateDateOfRequest").value;

        $http.get('/api/trading_point/get?id='+tradingPointId).then(function (response) {
            $http.get('/api/provider/get?id=' + providerId).then(function (response1) {
                    $http.get('/api/goods/get?id=' + goodsId).then(function (response2) {
                        var selectedTradingPoint = response.data;
                        var selectedProvider = response1.data;
                        var selectedGoods = response2.data;

                        var regex0 = /^[0-9]+$/;
                        if (regex0.test(numberRequest)) {
                            var regex = /^([0-9]+[\\.][0-9]+)|[0-9]+$/;
                            if(regex.test(price)) {
                                var regex2 = /^[0-9]+$/;
                                if (regex2.test(numberOfGoods)) {
                                    var req = {
                                        method: 'POST',
                                        url: 'api/request/update?id=' + id,
                                        data: {
                                            numberRequest: numberRequest,
                                            tradingPoint: selectedTradingPoint,
                                            provider: selectedProvider,
                                            goods: selectedGoods,
                                            numberOfGoods: numberOfGoods,
                                            price: price,
                                            dateOfRequest: dateOfRequest
                                        }
                                    };
                                    $http(req).then(function (resp) {
                                        window.location.reload();
                                    })
                                }
                                else alert("Поле 'Кількість товару' заповнене не коректно. (Приклад 14)");
                            }
                            else alert("Поле 'Ціна' заповнене не коректно. (Приклад 22.5)");
                        }
                        else alert("Поле 'Номер заявки' заповнене не коректно. (Приклад 25)");
                    });
            });
        });
    };
});