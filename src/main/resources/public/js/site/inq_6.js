
var app = angular.module("myinq_6", []);

app.controller("inq_6", function ($http, $scope){


    this.update_request = function add() {

        console.log("Start...");

        var start_time = document.getElementById("StartTime").value;
        var finish_time = document.getElementById("FinishTime").value;

        $scope.counts = [];
        $http.get('/api/sold_goods/getNumberOfSoldGoodsByDateOfSale?startTime=' + start_time +"&finishTime="+ finish_time).then(function (response){
            $http.get('/api/seller/getCountOfSeller').then(function (response2){

                console.log(response.data);
                console.log(response2.data);
                document.getElementById("Rezultat").innerText = ((response.data/response2.data).toFixed(2))+"\tодиниць товарів на одного продавця.";

                console.log(response.data/response2.data)
            });
        });

    };

});