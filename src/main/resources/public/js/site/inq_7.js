
var app = angular.module("myinq_7", []);

app.controller("inq_7", function ($http, $scope){

    $http.get('/api/type').then(function (response){
        var types = response.data;
        var selector = document.getElementById("Type");
        $(selector).empty();
        for (var i = 0; i < types.length; i++) {
            var option = document.createElement("option");
            option.text = types[i].name;
            option.value = types[i].id;
            selector.add(option);
        }
    });

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
        
        var indexOfType = document.getElementById("Type").selectedIndex;
        type_id = document.getElementById("Type").options[indexOfType].value;
        
        var indexOfStatus = document.getElementById("Status").selectedIndex;
        status_id = document.getElementById("Status").options[indexOfStatus].value;
        

        $scope.providers = [];
        $http.get('/api/product/getCountProductByTypeAndStatus?type_id=' + type_id + "&status_id=" + status_id).then(function (response){

            document.getElementById("Rezultat").innerText = response.data;

        });

    };

});