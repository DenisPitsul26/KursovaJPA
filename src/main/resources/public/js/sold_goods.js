var app = angular.module("sold_goods", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.soldGoods = [];
    $http.get('/api/sold_goods').then(function (response) {
        $scope.soldGoods = response.data;
    });

    this.startInsertSoldGoods = function () {
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
        $http.get('/api/seller').then(function (response) {
                var seller = response.data;
                var defaultOption = document.createElement("option");
                defaultOption.value = "";
                defaultOption.text = "Виберіть продавця";
                defaultOption.disabled = true;
                defaultOption.selected = true;
                var selector = document.getElementById("seller");
                $(selector).empty();
                selector.add(defaultOption);
                for (var i = 0; i < seller.length; i++) {
                    var option = document.createElement("option");
                    option.text = seller[i].nameOfSeller;
                    option.value = seller[i].id;
                    selector.add(option);
                }
        });
        /*var indexTradingPoint = document.getElementById("tradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("tradingPoint").options[indexTradingPoint].value;

        $http.get('/api/seller').then(function (response) {
            $http.get('/api/trading_point/get?id='+tradingPointId).then(function (response1) {
                var seller = response.data;
                var selectedTradingPoint = response1.data;
                var defaultOption = document.createElement("option");
                defaultOption.value = "";
                defaultOption.text = "Виберіть продавця";
                defaultOption.disabled = true;
                defaultOption.selected = true;
                var selector = document.getElementById("seller");
                $(selector).empty();
                selector.add(defaultOption);
                for (var i = 0; i < seller.length; i++) {
                    if (selectedTradingPoint.id == seller[i].tradingPoint.id) {
                        var option = document.createElement("option");
                        option.text = seller[i].nameOfSeller;
                        option.value = seller[i].id;
                        selector.add(option);
                    }
                }
            });
        });*/
        $http.get('/api/buyer').then(function (response) {
            var buyer = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть покупця";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("buyer");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < buyer.length; i++) {
                var option = document.createElement("option");
                option.text = buyer[i].nameOfBuyer;
                option.value = buyer[i].id;
                selector.add(option);
            }
        });
        $http.get('/api/goods_of_trading_point').then(function (response) {
            var goodsOfTradingPoint = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть товар";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("goodsOfTradingPoint");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < goodsOfTradingPoint.length; i++) {
                var option = document.createElement("option");
                option.text = goodsOfTradingPoint[i].goods.nameOfGoods;
                option.value = goodsOfTradingPoint[i].id;
                selector.add(option);
            }
        });
    };

    this.insertSoldGoods = function add() {
        var indexTradingPoint = document.getElementById("tradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("tradingPoint").options[indexTradingPoint].value;

        var indexSeller = document.getElementById("seller").selectedIndex;
        var sellerId = document.getElementById("seller").options[indexSeller].value;

        var indexBuyer = document.getElementById("buyer").selectedIndex;
        var buyerId = document.getElementById("buyer").options[indexBuyer].value;

        var indexGoodsOfTradingPoint = document.getElementById("goodsOfTradingPoint").selectedIndex;
        var goodsOfTradingPointId = document.getElementById("goodsOfTradingPoint").options[indexGoodsOfTradingPoint].value;

        var numberOfSoldGoods = document.getElementById("numberOfSoldGoods").value;
        var dateOfSale = document.getElementById("dateOfSale").value;
        var price = document.getElementById("price").value;

        $http.get('/api/trading_point/get?id='+tradingPointId).then(function (response) {
            $http.get('/api/seller/get?id=' + sellerId).then(function (response1) {
                $http.get('/api/buyer/get?id=' + buyerId).then(function (response2) {
                    $http.get('/api/goods_of_trading_point/get?id=' + goodsOfTradingPointId).then(function (response3) {
                        var selectedTradingPoint = response.data;
                        var selectedSeller = response1.data;
                        var selectedBuyer = response2.data;
                        var selectedGoodsOfTradingPoint = response3.data;
                        var req = {
                            method: 'POST',
                            url: '/api/sold_goods/insert',
                            data: {
                                tradingPoint: selectedTradingPoint,
                                seller: selectedSeller,
                                buyer: selectedBuyer,
                                goodsOfTradingPoint: selectedGoodsOfTradingPoint,
                                numberOfSoldGoods: numberOfSoldGoods,
                                dateOfSale: dateOfSale,
                                price: price
                            }
                        };
                        $http(req).then(function (resp) {
                            window.location.reload();
                        })
                    });
                });
            });
        });
    };

    this.deleteSoldGoods = function del(id) {
        $http.get("api/sold_goods/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateSoldGoods = function startUpdate(id, tradingPoint, seller, buyer, goodsOfTradingPoint, numberOfSoldGoods, dateOfSale, price) {
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
        $http.get('/api/seller').then(function (response) {
            var sellers = response.data;
            var selector = document.getElementById("updateSeller");
            $(selector).empty();
            for (var i = 0; i < sellers.length; i++) {
                var option = document.createElement("option");
                if (sellers[i].id == seller.id){
                    option.selected = 'selected';
                }
                option.text = sellers[i].nameOfSeller;
                option.value = sellers[i].id;
                selector.add(option);
            }
        });
        $http.get('/api/buyer').then(function (response) {
            var buyers = response.data;
            var selector = document.getElementById("updateBuyer");
            $(selector).empty();
            for (var i = 0; i < buyers.length; i++) {
                var option = document.createElement("option");
                if (buyers[i].id == buyer.id){
                    option.selected = 'selected';
                }
                option.text = buyers[i].nameOfBuyer;
                option.value = buyers[i].id;
                selector.add(option);
            }
        });
        $http.get('/api/goods_of_trading_point').then(function (response) {
            var goodsOfTradingPoints = response.data;
            var selector = document.getElementById("updateGoodsOfTradingPoint");
            $(selector).empty();
            for (var i = 0; i < goodsOfTradingPoints.length; i++) {
                var option = document.createElement("option");
                if (goodsOfTradingPoints[i].id == goodsOfTradingPoint.id){
                    option.selected = 'selected';
                }
                option.text = goodsOfTradingPoints[i].goods.nameOfGoods;
                option.value = goodsOfTradingPoints[i].id;
                selector.add(option);
            }
        });
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateNumberOfSoldGoods").value = numberOfSoldGoods;
        document.getElementById("updateDateOfSale").value = dateOfSale;
        document.getElementById("updatePrice").value = price;
    };

    this.updateSoldGoods = function update() {
        var id = document.getElementById("updateId").innerText;

        var indexTradingPoint = document.getElementById("updateTradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("updateTradingPoint").options[indexTradingPoint].value;

        var indexSeller = document.getElementById("updateSeller").selectedIndex;
        var sellerId = document.getElementById("updateSeller").options[indexSeller].value;

        var indexBuyer = document.getElementById("updateBuyer").selectedIndex;
        var buyerId = document.getElementById("updateBuyer").options[indexBuyer].value;

        var indexGoodsOfTradingPoint = document.getElementById("updateGoodsOfTradingPoint").selectedIndex;
        var goodsOfTradingPointId = document.getElementById("updateGoodsOfTradingPoint").options[indexGoodsOfTradingPoint].value;

        var numberOfSoldGoods = document.getElementById("updateNumberOfSoldGoods").value;
        var dateOfSale = document.getElementById("updateDateOfSale").value;
        var price = document.getElementById("updatePrice").value;

        $http.get('/api/trading_point/get?id='+tradingPointId).then(function (response) {
            $http.get('/api/seller/get?id=' + sellerId).then(function (response1) {
                $http.get('/api/buyer/get?id=' + buyerId).then(function (response2) {
                    $http.get('/api/goods_of_trading_point/get?id=' + goodsOfTradingPointId).then(function (response3) {
                        var selectedTradingPoint = response.data;
                        var selectedSeller = response1.data;
                        var selectedBuyer = response2.data;
                        var selectedGoodsOfTradingPoint = response3.data;
                        var req = {
                            method: 'POST',
                            url: 'api/sold_goods/update?id=' + id,
                            data: {
                                tradingPoint: selectedTradingPoint,
                                seller: selectedSeller,
                                buyer: selectedBuyer,
                                goodsOfTradingPoint: selectedGoodsOfTradingPoint,
                                numberOfSoldGoods: numberOfSoldGoods,
                                dateOfSale: dateOfSale,
                                price: price
                            }
                        };
                        $http(req).then(function (resp) {
                            window.location.reload();
                        })
                    });
                });
            });
        });
    };
});