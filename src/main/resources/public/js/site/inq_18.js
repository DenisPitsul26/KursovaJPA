
var app = angular.module("myinq_18", []);

app.controller("inq_18", function ($http, $scope){

    this.update_request = function add() {

        var time = document.getElementById("Time").value;

        $http.get('/api/product/getPriceProductByDay?time=' + time ).then(function (response){

            document.getElementById("Rezultat").innerText = ("$" + response.data);
            $scope.providers = ("$" + response.data);
           
        });

    };

});