
var app = angular.module("myinq_19", []);

app.controller("inq_19", function ($http, $scope){

    $scope.sold_goods = [];
    $http.get('/api/sold_goods/getTheMostActiveBuyersByAllTradingPoint').then(function (response) {
        document.getElementById("Rezultat").innerText = " ";
        $scope.sold_goods = response.data;
        if ($scope.sold_goods.length <= 0) {
            document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
        }
    });

});