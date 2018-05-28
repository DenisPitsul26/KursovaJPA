var app = angular.module("provider", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.provider = [];
    $http.get('/api/provider').then(function (response) {
        $scope.provider= response.data;
    });

    this.insertProvider = function () {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;

        var regex =/^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
        if(regex.test(name)) {
            var regex2 = /^[0-9]+$/;
            if (regex2.test(phone)) {
                var req = {
                    method: 'POST',
                    url: '/api/provider/insert',
                    data: {
                        nameOfProvider: name,
                        phone: phone
                    }
                };
                console.log(req);
                $http(req).then(function (resp) {
                    window.location.reload();
                })
            }
            else alert("Поле 'Номер телефону' заповнене не коректно. (Приклад 0968654332)");
        }
        else {
            alert("Поле 'Ім'я постачальника' заповнене не коректно. (Перша буква велика, Мова Українська, Допустимий символи ' ' або '-')\"")
        }
    };

    this.deleteProvider = function (id) {
        $http.get("api/provider/delete?id="+id).then(function (response) {
            window.location.reload();
        })
    }

    this.startUpdate = function startUpdate(id, name, phone) {
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateName").value = name;
        document.getElementById("updatePhone").value = phone;
    };

    this.updateProvider = function update() {
        var id = document.getElementById("updateId").innerText;
        var name = document.getElementById("updateName").value;
        var phone = document.getElementById("updatePhone").value;

        var regex =/^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
        if(regex.test(name)) {
            var regex2 = /^[0-9]+$/;
            if (regex2.test(phone)) {
                var req = {
                    method: 'POST',
                    url: "/api/provider/update?id="+id,
                    data: {
                        nameOfProvider: name,
                        phone: phone
                    }
                };
                // console.log(req);
                $http(req).then(function (resp) {
                    window.location.reload();
                });
            }
            else alert("Поле 'Номер телефону' заповнене не коректно. (Приклад 0968654332)");
        }
        else {
            alert("Поле 'Ім'я постачальника' заповнене не коректно. (Перша буква велика, Мова Українська, Допустимий символи ' ' або '-')\"")
        }
    };
});