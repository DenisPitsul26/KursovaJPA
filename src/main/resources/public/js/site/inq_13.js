
var app = angular.module("myinq_13", []);

app.controller("inq_13", function ($http, $scope){

    $http.get('/api/status').then(function (response){
        var status = response.data;
        var selector = document.getElementById("Status");
        $(selector).empty();
        for (var i = 0; i < status.length; i++) {
            var option = document.createElement("option");
            option.text = status[i].name;
            option.value = status[i].id;
            selector.add(option);
        }
    });

    this.update_request = function add() {

        var indexOfStatus = document.getElementById("Status").selectedIndex;
        status_id = document.getElementById("Status").options[indexOfStatus].value;

        $scope.products = [];
        $http.get('/api/product/getCountProductNoByStatus?status_id=' + status_id).then(function (response){

            document.getElementById("Rezultat").innerText = response.data;

        });

    };

});