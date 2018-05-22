
var app = angular.module("myinq_19", []);

app.controller("inq_19", function ($http, $scope){

    this.update_request = function add() {

        var time = document.getElementById("Time").value;

        $scope.providers = [];
        $http.get('/api/product/getCountProductByDay?time=' + time ).then(function (response){

            document.getElementById("Rezultat").innerText = response.data;
            $scope.providers = response.data;

        });

    };

});