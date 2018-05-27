
var app = angular.module("myinq_12", []);

app.controller("inq_12", function ($http, $scope){


    $scope.seller = [];
    $http.get('/api/seller/getSallaryOfSellerByAllTradingPoint').then(function (response) {
        document.getElementById("Rezultat").innerText = " ";
        $scope.seller = response.data;
        if ($scope.seller.length <= 0) {
            document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
        }
    });

});