
var app = angular.module("myinq_1", []);

app.controller("inq_1", function ($http, $scope){

    $http.get('/api/goods').then(function (response){
        var goods = response.data;
        var selector = document.getElementById("goods");
        $(selector).empty();
        for (var i = 0; i < goods.length; i++) {
            var option = document.createElement("option");
            option.text = goods[i].nameOfGoods;
            option.value = goods[i].id;
            selector.add(option);
        }
    });

    this.update_request = function add() {
        console.log("Start...");

        var indexOfGoods = document.getElementById("goods").selectedIndex;
        var goods_id = document.getElementById("goods").options[indexOfGoods].value;

        var start_time = document.getElementById("StartTime").value;
        var finish_time = document.getElementById("FinishTime").value;

        //var amount = document.getElementById("Amount").value;

        $scope.providers = [];
        $http.get('/api/provider/getProvidersByGoodsAndDateOfRequest?goods_id=' + goods_id + "&startTime=" + start_time + "&finishTime=" + finish_time).then(function (response){
            document.getElementById("Rezultat").innerText = " ";
            $scope.providers = response.data;

            if ($scope.providers.length <= 0) {
                document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
            }
        });

    };

});