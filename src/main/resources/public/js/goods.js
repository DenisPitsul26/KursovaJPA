var app = angular.module("goods", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.goods = [];
    $http.get('/api/goods').then(function (response) {
        $scope.goods= response.data;
    });

    this.insertGoods = function () {
        var name = document.getElementById("name").value;
        var regex =/^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
        if(regex.test(name)) {
            var req = {
                method: 'POST',
                url: '/api/goods/insert',
                data: {
                    nameOfGoods: name
                }
            };
            console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            })
        }
        else {
            alert("Поле 'Назва товару' заповнене не коректно. (Перша буква велика, мова Українська, допустимі символи ' ' або '-')")
        }
    };

    this.deleteGoods = function (id) {
        $http.get("api/goods/delete?id="+id).then(function (response) {
            window.location.reload();
        })
    }

    this.startUpdate = function startUpdate(id, name) {
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateName").value = name;
    };

    this.updateGoods = function update() {
        var id = document.getElementById("updateId").innerText;
        var name = document.getElementById("updateName").value;
        var regex =/^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
        if(regex.test(name)) {
            var req = {
                method: 'POST',
                url: "/api/goods/update?id=" + id,
                data: {
                    nameOfGoods: name
                }
            };
            // console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            });
        }
        else {
            alert("Поле 'Назва товару' заповнене не коректно. (Перша буква велика, мова Українська, допустимі символи ' ' або '-')")
        }
    };
});