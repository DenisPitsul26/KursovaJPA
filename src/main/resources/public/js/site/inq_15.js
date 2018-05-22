
var app = angular.module("myinq_15", []);

app.controller("inq_15", function ($http, $scope){


    // var product_id = 1;
    // var date = '2017-01-01';
    // var amount = 3;
    //
    // $scope.providers = [];
    // $http.get('/api/provider/getProvidersByTimerAndCount?product_id='+ product_id + "&timerStart="+ date + "&timerFinish="+ date + "&amount="+ amount).then(function (response){
    //     $scope.providers = response.data;
    // });
    //
    //
    // //
    // // $scope.providers = [];
    // // $http.get('/api/provider/getProvidersByTimerAndCount?product_id='+ id + "&timer="+ date + "&amount="+ amount).then(function (response){
    // //     $scope.providers = response.data;
    // // });
    //
    //
    // //
    // $http.get('/api/type').then(function (response){
    //     var types = response.data;
    //     var selector = document.getElementById("Type");
    //     $(selector).empty();
    //     for (var i = 0; i < types.length; i++) {
    //         var option = document.createElement("option");
    //         option.text = types[i].name;
    //         option.value = types[i].id;
    //         selector.add(option);
    //     }
    // });
    //
    // $http.get('/api/provider').then(function (response){
    //     var provider = response.data;
    //     var selector = document.getElementById("Provider");
    //     $(selector).empty();
    //     for (var i = 0; i < provider.length; i++) {
    //         var option = document.createElement("option");
    //         option.text = provider[i].name;
    //         option.value = provider[i].id;
    //         selector.add(option);
    //     }
    // });


    this.update_request = function add() {

        // console.log("Start...");


        var start_time = document.getElementById("StartTime").value;
        var finish_time = document.getElementById("FinishTime").value;

        $scope.providers = [];
        $http.get('/api/defect/getCountDefectByDay?startTime='+ start_time + "&finishTime=" + finish_time).then(function (response){

            document.getElementById("Rezultat").innerText = response.data;

            // document.getElementById("Rezultat").innerText = " ";
            // $scope.providers = response.data;
            //
            // console.log($scope.providers.length);
            //
            // if ($scope.providers.length <= 0) {
            //     document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            // }


        });

    };

});