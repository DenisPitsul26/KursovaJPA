
var app = angular.module("myinq_16", []);

app.controller("inq_16", function ($http, $scope){

    $http.get('/api/request/getDifferentNumberRequest').then(function (response){
        var request = response.data;
        var selector = document.getElementById("request");
        $(selector).empty();
        for (var i = 0; i < request.length; i++) {
            var option = document.createElement("option");
            option.text = request[i].numberRequest;
            option.value = request[i].numberRequest;
            selector.add(option);
        }
    });

    this.update_request = function add() {
        console.log("Start...");

        var indexOfRequest = document.getElementById("request").selectedIndex;
        var requestId = document.getElementById("request").options[indexOfRequest].value;

        console.log("Start...");

        $scope.request = [];
        $http.get('/api/request/getRequestByNumberRequest?numberRequest=' + requestId).then(function (response){
            document.getElementById("Rezultat").innerText = " ";
            $scope.request = response.data;
            console.log(response.data);

            if ($scope.request.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }
        });

    };

});