
var app = angular.module("myinq_2", []);

app.controller("inq_2", function ($http, $scope){


    var product_id = 1;
    var date = '2017-01-01';
    var amount = 3;

    $scope.providers = [];
    $http.get('/api/provider/getProvidersByTimerAndCount?product_id='+ product_id + "&timerStart="+ date + "&timerFinish="+ date + "&amount="+ amount).then(function (response){
        $scope.providers = response.data;
    });

    $http.get('/api/product').then(function (response){
        var products = response.data;
        var selector = document.getElementById("Product");
        $(selector).empty();
        for (var i = 0; i < products.length; i++) {
            var option = document.createElement("option");
            option.text = products[i].name;
            option.value = products[i].id;
            selector.add(option);
        }
    });

    this.update_request = function add() {

        console.log("Start...");

        var indexOfProduct = document.getElementById("Product").selectedIndex;
        product_id = document.getElementById("Product").options[indexOfProduct].value;

        var start_time = document.getElementById("StartTime").value;
        var finish_time = document.getElementById("StartTime").value;

        var amount = document.getElementById("Amount").value;

        $scope.providers = [];
        $http.get('/api/provider/getProvidersByTimerAndCount?product_id=' + product_id + "&timerStart=" + date + "&timerFinish=" + date + "&amount=" + amount).then(function (response){


            document.getElementById("Rezultat").innerText = " ";
            $scope.providers = response.data;

            console.log($scope.providers.length);

            if ($scope.providers.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }


        });

    };

});