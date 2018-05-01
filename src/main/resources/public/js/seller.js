var app = angular.module("seller", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.seller = [];
    $http.get('/api/seller').then(function (response) {
        $scope.seller = response.data;
    });

    this.startInsertSeller = function () {
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
    };

    this.insertSeller = function add() {
        var indexTradingPoint = document.getElementById("tradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("tradingPoint").options[indexTradingPoint].value;

        var nameOfSeller = document.getElementById("nameOfSeller").value;
        var sallary = document.getElementById("sallary").value;
        var dateStarOfWork = document.getElementById("dateStarOfWork").value;

        $http.get('/api/trading_point/get?id='+tradingPointId).then(function (response) {
                var selectedTradingPoint = response.data;
                var req = {
                    method: 'POST',
                    url: '/api/seller/insert',
                    data: {
                        tradingPoint: selectedTradingPoint,
                        nameOfSeller: nameOfSeller,
                        sallary: sallary,
                        dateStarOfWork: dateStarOfWork
                    }
                };
                $http(req).then(function (resp) {
                    window.location.reload();
                })
        });
    };

    this.deleteSeller = function del(id) {
        $http.get("api/seller/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateSeller = function startUpdate(id, tradingPoint, nameOfSeller, sallary, dateStarOfWork) {
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
                //option.text = tradingPoints[i].typeOfTradingPoint.typeOfTypeOfTradingPoint;
                option.value = tradingPoints[i].id;
                selector.add(option);
            }
        });
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateNameOfSeller").value = nameOfSeller;
        document.getElementById("updateSallary").value = sallary;
        document.getElementById("updateDateStarOfWork").value = dateStarOfWork;
    };

    this.updateSeller = function update() {
        var id = document.getElementById("updateId").innerText;

        var indexTradingPoint = document.getElementById("updateTradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("updateTradingPoint").options[indexTradingPoint].value;

        var nameOfSeller = document.getElementById("updateNameOfSeller").value;
        var sallary = document.getElementById("updateSallary").value;
        var dateStarOfWork = document.getElementById("updateDateStarOfWork").value;

        $http.get('/api/trading_point/get?id='+tradingPointId).then(function (response) {
                var selectedTradingPoint = response.data;
                var req = {
                    method: 'POST',
                    url: 'api/seller/update?id=' + id,
                    data: {
                        tradingPoint: selectedTradingPoint,
                        nameOfSeller: nameOfSeller,
                        sallary: sallary,
                        dateStarOfWork: dateStarOfWork
                    }
                };
                $http(req).then(function (resp) {
                    window.location.reload();
                })
        });
    };
});