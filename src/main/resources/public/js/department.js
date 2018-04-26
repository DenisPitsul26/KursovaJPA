var app = angular.module("department", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.departments = [];
    $http.get('/api/departments').then(function (response) {
        $scope.departments = response.data;
    });

    this.startInsertDepartment= function () {
        $http.get('/api/deaneries').then(function (response) {
            var deaneries = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть деканат";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("deanery");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < deaneries.length; i++) {
                var option = document.createElement("option");
                option.text = deaneries[i].address;
                option.value = deaneries[i].id;
                selector.add(option);
            }
        });
    };

    this.insertDepartment = function add() {
        var name = document.getElementById("name").value;
        var dean = document.getElementById("dean").value;

        var indexDeanery = document.getElementById("deanery").selectedIndex;
        var deaneryId = document.getElementById("deanery").options[indexDeanery].value;

        $http.get('/api/deanery/get?id='+deaneryId).then(function (response) {
            var selectedDeanery = response.data;
            var req = {
                method: 'POST',
                url: '/api/department/insert',
                data: {
                    name: name,
                    dean: dean,
                    deanery: selectedDeanery
                }
            };
            $http(req).then(function (resp) {
            window.location.reload();
            })
        });
    };

    this.deleteDepartment = function del(id) {
        $http.get("api/department/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateDepartment = function startUpdate(id, name, dean, deanery) {
        $http.get('/api/deaneries').then(function (response) {
            var deaneries = response.data;
            var selector = document.getElementById("updateDeanery");
            $(selector).empty();
            for (var i = 0; i < deaneries.length; i++) {
                var option = document.createElement("option");
                if (deaneries[i].id == deanery.id){
                    option.selected = 'selected';
                }
                option.text = deaneries[i].address;
                option.value = deaneries[i].id;
                selector.add(option);
            }
        });
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateName").value = name;
        document.getElementById("updateDean").value = dean;
    };

    this.updateDepartment = function update() {
        var id = document.getElementById("updateId").innerText;
        var name = document.getElementById("updateName").value;
        var dean = document.getElementById("updateDean").value;

        var indexDeanery = document.getElementById("updateDeanery").selectedIndex;
        var deaneryId = document.getElementById("updateDeanery").options[indexDeanery].value;

        $http.get('/api/deanery/get?id='+deaneryId).then(function (response) {
            var selectedDeanery = selectedDeanery = response.data;
            var req = {
                method: 'POST',
                url: 'api/department/update?id='+id,
                data: {
                    name: name,
                    dean: dean,
                    deanery: selectedDeanery
                }
            };
            $http(req).then(function (resp) {
                window.location.reload();
            })
        });
    };

});