var app = angular.module("section", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.section = [];
    $http.get('/api/section').then(function (response) {
        $scope.section= response.data;
    });

    this.insertSection = function () {
        var name = document.getElementById("name").value;
        var regex =/^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
        if(regex.test(name)) {
            var req = {
                method: 'POST',
                url: '/api/section/insert',
                data: {
                    typeOfSection: name
                }
            };
            console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            })
        }
        else {
            alert("Поле 'Тип секції' заповнене не коректно. (Перша буква велика, мова Українська, допустимі символи ' ' або '-')")
        }
    };

    this.deleteSection = function (id) {
        $http.get("api/section/delete?id="+id).then(function (response) {
            window.location.reload();
        })
    }

    this.startUpdate = function startUpdate(id, name) {
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateName").value = name;
    };

    this.updateSection = function update() {
        var id = document.getElementById("updateId").innerText;
        var name = document.getElementById("updateName").value;
        var regex =/^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
        if(regex.test(name)) {
            var req = {
                method: 'POST',
                url: "/api/section/update?id="+id,
                data: {
                    typeOfSection: name
                }
            };
            // console.log(req);
            $http(req).then(function (resp) {
                window.location.reload();
            });
        }
        else {
            alert("Поле 'Тип секції' заповнене не коректно. (Перша буква велика, мова Українська, допустимі символи ' ' або '-')")
        }
    };
});