
var app = angular.module("myinq_13", []);

app.controller("inq_13", function ($http, $scope){

    $http.get('/api/provider').then(function (response){
        var provider = response.data;
        var selector = document.getElementById("provider");
        $(selector).empty();
        for (var i = 0; i < provider.length; i++) {
            var option = document.createElement("option");
            option.text = provider[i].nameOfProvider;
            option.value = provider[i].id;
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

        var indexOfProvider = document.getElementById("provider").selectedIndex;
        var providerId = document.getElementById("provider").options[indexOfProvider].value;

        var indexOfGoods = document.getElementById("goods").selectedIndex;
        var goodsId = document.getElementById("goods").options[indexOfGoods].value;

        $scope.request = [];
        $http.get('/api/request/getRequestByProviderAndGoods?providerId=' + providerId + "&goodsId=" + goodsId).then(function (response){
            document.getElementById("Rezultat").innerText = " ";
            $scope.request = response.data;
            console.log(response.data);

            if ($scope.request.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }
        });

    };

});