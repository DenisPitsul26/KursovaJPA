
var app = angular.module("myinq_20", []);

app.controller("inq_20", function ($http, $scope){

    this.update_request = function add() {

        var time = document.getElementById("Time").value;

        $scope.product = [];
        $http.get('/api/product/getProductByDay?time='+ time).then(function (response){


            document.getElementById("Rezultat").innerText = " ";
            $scope.product = response.data;

            console.log($scope.product.length);

            if ($scope.product.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }


        });

    };

});