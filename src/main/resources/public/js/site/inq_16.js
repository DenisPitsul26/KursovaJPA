
var app = angular.module("myinq_16", []);

app.controller("inq_16", function ($http, $scope){

    $http.get('/api/product').then(function (response){
        var product = response.data;
        var selector = document.getElementById("Product");
        $(selector).empty();
        for (var i = 0; i < product.length; i++) {
            var option = document.createElement("option");
            option.text = product[i].name;
            option.value = product[i].id;
            selector.add(option);
        }
    });

    this.update_request = function add() {
        
        var indexOfProduct = document.getElementById("Product").selectedIndex;
        product_id = document.getElementById("Product").options[indexOfProduct].value;

        $scope.providers = [];
        $http.get('/api/provider/getProvidersByDefect?product_id=' + product_id).then(function (response){


            document.getElementById("Rezultat").innerText = " ";
            $scope.providers = response.data;
            
            if ($scope.providers.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }


        });

    };

});