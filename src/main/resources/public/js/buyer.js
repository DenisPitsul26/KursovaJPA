var app = angular.module("buyer", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.buyer = [];
    $http.get('/api/buyer').then(function (response) {
        $scope.buyer= response.data;
    });

    this.insertBuyer = function () {
        var name = document.getElementById("name").value;
        var regex =/^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
        //var regex = new RegExp("^[А-ЯІ]([а-яА-ЯіІ]|[- ])*$");
        if(regex.test(name)) {
            var req = {
                method: 'POST',
                url: '/api/buyer/insert',
                data: {
                    nameOfBuyer: name
                }
            };
            console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            })
        }
        else {
            alert("Поле 'Ім'я покупця' заповнене не коректно. (Перша буква велика, мова Українська, допустимі символи ' ' або '-')")
        }
    };

    this.deleteBuyer = function (id) {
        $http.get("api/buyer/delete?id="+id).then(function (response) {
            window.location.reload();
        })
    };

    this.startUpdate = function startUpdate(id, name) {
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateName").value = name;
    };

    this.updateBuyer = function update() {
        var id = document.getElementById("updateId").innerText;
        var name = document.getElementById("updateName").value;

        var regex =/^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
        if(regex.test(name)) {
            var req = {
                method: 'POST',
                url: "/api/buyer/update?id=" + id,
                data: {
                    nameOfBuyer: name
                }
            };
            // console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            });
        }
        else {
            alert("Поле 'Ім'я покупця' заповнене не коректно. (Перша буква велика, Мова Українська, Допустимий символи ' ' або '-')\"")
        }
    };
});