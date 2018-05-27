
var app = angular.module("myinq_8", []);

app.controller("inq_8", function ($http, $scope){

    $http.get('/api/trading_point').then(function (response){
        var tradingPoint = response.data;

        var selector = document.getElementById("tradingPoint");
        var defaultOption = document.createElement("option");
        defaultOption.value="";
        defaultOption.text = "Виберіть торгівельну точку";
        defaultOption.disabled = true;
        defaultOption.selected = true;

        selector.add(defaultOption);
        $(selector).empty();
        for (var i = 0; i < tradingPoint.length; i++) {
            var option = document.createElement("option");
            option.text = tradingPoint[i].nameOfTradingPoint;
            option.value = tradingPoint[i].id;
            selector.add(option);
        }
    });
    $http.get('/api/seller').then(function (response){
        var seller = response.data;
        var selector = document.getElementById("seller");

        var defaultOption = document.createElement("option");
        defaultOption.value="";
        defaultOption.text = "Виберіть продавця";
        defaultOption.disabled = true;
        defaultOption.selected = true;

        selector.add(defaultOption);
        $(selector).empty();
        for (var i = 0; i < seller.length; i++) {
            var option = document.createElement("option");
            option.text = seller[i].nameOfSeller;
            option.value = seller[i].id;
            selector.add(option);
        }
    });

    this.update_request = function add() {

        console.log("Start...");

        var indexOfTradingPoint = document.getElementById("tradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("tradingPoint").options[indexOfTradingPoint].value;

        var indexOfSeller = document.getElementById("seller").selectedIndex;
        var sellerId = document.getElementById("seller").options[indexOfSeller].value;

        var start_time = document.getElementById("StartTime").value;
        var finish_time = document.getElementById("FinishTime").value;

        $scope.counts = [];
        $http.get('/api/sold_goods/getNumberOfSoldGoodsByTradingPointAndSellerAndDateOfSale?tradingPointId=' + tradingPointId +"&sellerId="+ sellerId +"&startTime="+ start_time +"&finishTime="+ finish_time).then(function (response){
                console.log(response.data);
                document.getElementById("Rezultat").innerText = response.data;
        });
    };


    document.getElementById("tradingPoint").addEventListener("change", changeTradingPointInsert);
    function changeTradingPointInsert() {
        var indexTradingPoint= document.getElementById("tradingPoint").selectedIndex;
        var tradingPointId= document.getElementById("tradingPoint").options[indexTradingPoint].value;

        $http.get('/api/trading_point/get?id=' + tradingPointId).then(function (response) {
            $scope.selectedTradingPointInsert = response.data;
        });

        $http.get('/api/seller').then(function (response) {
            var seller = response.data;
            var selector = document.getElementById("seller");

            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть продавця";
            defaultOption.disabled = true;
            defaultOption.selected = true;

            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < seller.length; i++) {
                if (seller[i].tradingPoint.id == $scope.selectedTradingPointInsert.id) {
                    var option = document.createElement("option");
                    option.text = seller[i].nameOfSeller;
                    option.value = seller[i].id;
                    selector.add(option);
                }
            }
        });
    }

});