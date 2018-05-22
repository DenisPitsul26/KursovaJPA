
var app = angular.module("myinq_3", []);

app.controller("inq_3", function ($http, $scope){

    $http.get('/api/type').then(function (response){
        var type = response.data;
        var selector = document.getElementById("Type");
        $(selector).empty();
        for (var i = 0; i < type.length; i++) {
            var option = document.createElement("option");
            option.text = type[i].name;
            option.value = type[i].id;
            selector.add(option);
        }
    });

    $http.get('/api/provider').then(function (response){
        var provider = response.data;
        var selector = document.getElementById("Provider");
        $(selector).empty();
        for (var i = 0; i < provider.length; i++) {
            var option = document.createElement("option");
            option.text = provider[i].name;
            option.value = provider[i].id;
            selector.add(option);
        }
    });


    this.update_request = function add() {

        var indexOfProvider = document.getElementById("Provider").selectedIndex;
        provider_id = document.getElementById("Provider").options[indexOfProvider].value;

        var indexOfType = document.getElementById("Type").selectedIndex;
        type_id = document.getElementById("Type").options[indexOfType].value;

        var price = document.getElementById("Price").value;

        $scope.products = [];
        $http.get('/api/product/getProductByTypeAndProviderAndPrice?type_id=' +type_id + "&provider_id=" + provider_id + "&price=" + price).then(function (response){


            document.getElementById("Rezultat").innerText = " ";
            $scope.products = response.data;

            console.log($scope.products.length);

            if ($scope.products.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }


        });

    };

});