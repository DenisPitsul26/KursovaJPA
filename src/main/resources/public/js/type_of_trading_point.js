var app = angular.module("type_of_trading_point", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.typeOfTradingPoint = [];
    $http.get('/api/type_of_trading_point').then(function (response) {
        $scope.typeOfTradingPoint = response.data;
    });

    this.insertTypeOfTradingPoint = function () {
        var type1 = document.getElementById("type1").value;

        var regex =/^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
        if(regex.test(type1)) {
            var req = {
                method: 'POST',
                url: '/api/type_of_trading_point/insert',
                data: {
                    typeOfTypeOfTradingPoint: type1
                }
            };
            console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            })
        }
        else {
            alert("Поле 'Тип торгівельної точки' заповнене не коректно. (Перша буква велика, мова Українська, допустимі символи ' ' або '-')")
        }
    };

    this.deleteTypeOfTradingPoint = function (id) {
        $http.get("api/type_of_trading_point/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdate = function startUpdate(id, type) {
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateType").value = type;
    };

    this.updateTypeOfTradingPoint = function update() {
        var id = document.getElementById("updateId").innerText;
        var type1 = document.getElementById("updateType").value;

        var regex =/^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
        if(regex.test(type1)) {
            var req = {
                method: 'POST',
                url: "/api/type_of_trading_point/update?id="+id,
                data: {
                    typeOfTypeOfTradingPoint: type1
                }
            };
            // console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            });
        }
        else {
            alert("Поле 'Тип торгівельної точки' заповнене не коректно. (Перша буква велика, мова Українська, допустимі символи ' ' або '-')")
        }
    };
});