
var app = angular.module("myinq_5", []);

app.controller("inq_5", function ($http, $scope){

    $http.get('/api/product').then(function (response){
        var product = response.data;
        var selector = document.getElementById("Ptoduct");
        $(selector).empty();
        for (var i = 0; i < product.length; i++) {
            var option = document.createElement("option");
            option.text = product[i].name;
            option.value = product[i].id;
            selector.add(option);
        }
    });

    this.update_request = function add() {

        var indexOfProduct = document.getElementById("Ptoduct").selectedIndex;
        product_id = document.getElementById("Ptoduct").options[indexOfProduct].value;

        var amount = document.getElementById("Amount").value;

        $scope.customers = [];
        $http.get('/api/customer/getCustomerByTypeAndPrice?product_id=' + product_id + "&amount=" + amount).then(function (response){

            document.getElementById("Rezultat").innerText = " ";
            $scope.customers = response.data;

            console.log($scope.customers.length);

            if ($scope.customers.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }


        });

    };

});