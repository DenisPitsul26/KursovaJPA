
var app = angular.module("myinq_4", []);

app.controller("inq_4", function ($http, $scope){

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

    this.update_request = function add() {

        var indexOfType = document.getElementById("Type").selectedIndex;
        type_id = document.getElementById("Type").options[indexOfType].value;

        var start_time = document.getElementById("StartTime").value;
        var finish_time = document.getElementById("FinishTime").value;

        $scope.customers = [];
        $http.get('/api/customer/getCustomerByTypeAndDate?startTime=' + start_time + "&finishTime=" + finish_time + "&type_id=" + type_id).then(function (response){


            document.getElementById("Rezultat").innerText = " ";
            $scope.customers = response.data;

            console.log($scope.customers.length);

            if ($scope.customers.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }


        });

    };

});