
var app = angular.module("myinq_2", []);

app.controller("inq_2", function ($http, $scope){


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

        var number = document.getElementById("number").value;

        var regex2 = /^[0-9]+$/;
        if (regex2.test(number)) {
            $scope.buyers = [];
            $http.get('/api/buyer/getBuyerByGoodsAndNumberOfSoldGoods?goods_id=' + goods_id + "&number=" + number).then(function (response){
                document.getElementById("Rezultat").innerText = " ";
                $scope.buyers = response.data;

                console.log($scope.buyers.length);

                if ($scope.buyers.length <= 0) {
                    document.getElementById("Rezultat").innerText = "Даної інформації в базі не знайдено";
                }
            });
        }
        else alert("Поле 'Кількість товару' заповнене не коректно. (Приклад 14)");

    };

});