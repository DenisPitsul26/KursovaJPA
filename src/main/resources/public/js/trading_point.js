var app = angular.module("trading_point", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.tradingPoint = [];
    $http.get('/api/trading_point').then(function (response) {
        $scope.tradingPoint = response.data;
    });

    this.startInsertTradingPoint = function () {
        $http.get('/api/type_of_trading_point').then(function (response) {
            var typeOfTradingPoint = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть тип торгівельної точки";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("typeOfTradingPoint");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < typeOfTradingPoint.length; i++) {
                var option = document.createElement("option");
                option.text = typeOfTradingPoint[i].typeOfTypeOfTradingPoint;
                option.value = typeOfTradingPoint[i].id;
                selector.add(option);
            }
        });
    };

    this.insertTradingPoint = function add() {
        var indexTypeOfTradingPoint = document.getElementById("typeOfTradingPoint").selectedIndex;
        var typeOfTradingPointId = document.getElementById("typeOfTradingPoint").options[indexTypeOfTradingPoint].value;

        var nameOfTradingPoint = document.getElementById("nameOfTradingPoint").value;
        var numberOfHalls = document.getElementById("numberOfHalls").value;
        var sizeOfTheTradingPoint = document.getElementById("sizeOfTheTradingPoint").value;
        var leasePayments = document.getElementById("leasePayments").value;
        var utilities = document.getElementById("utilities").value;
        var numberOfCounters = document.getElementById("numberOfCounters").value;

        $http.get('/api/type_of_trading_point/get?id='+typeOfTradingPointId).then(function (response) {
            var selectedTypeOfTradingPoint = response.data;

            var regex = /^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
            if (regex.test(nameOfTradingPoint)) {
                var regex1 = /^[0-9]+$/;
                if(regex1.test(numberOfHalls)) {
                    var regex2 = /^[0-9]+$/;
                    if (regex2.test(sizeOfTheTradingPoint)) {
                        var regex3 = /^([0-9]+[\\.][0-9]+)|[0-9]+$/;
                        if (regex3.test(leasePayments)) {
                            var regex4 = /^([0-9]+[\\.][0-9]+)|[0-9]+$/;
                            if(regex4.test(utilities)) {
                                var regex5 = /^[0-9]+$/;
                                if (regex5.test(numberOfCounters)) {
                                    var req = {
                                        method: 'POST',
                                        url: '/api/trading_point/insert',
                                        data: {
                                            typeOfTradingPoint: selectedTypeOfTradingPoint,
                                            nameOfTradingPoint: nameOfTradingPoint,
                                            numberOfHalls: numberOfHalls,
                                            sizeOfTheTradingPoint: sizeOfTheTradingPoint,
                                            leasePayments: leasePayments,
                                            utilities: utilities,
                                            numberOfCounters: numberOfCounters
                                        }
                                    };
                                    $http(req).then(function (resp) {
                                        window.location.reload();
                                    })
                                }
                                else alert("Поле 'Кількість Прилавків' заповнене не коректно. (Приклад 16)");
                            }
                            else alert("Поле 'Комунальні послуги' заповнене не коректно. (Приклад 550.5)");
                        }
                        else alert("Поле 'Оплата за оренду' заповнене не коректно. (Приклад 1450.5)");
                    }
                    else alert("Поле 'Розмір торгівельної точки' заповнене не коректно. (Приклад 350)");
                }
                else alert("Поле 'Кількість залів' заповнене не коректно. (Приклад 6)");
            }
            else alert("Поле 'Назва торгівельної точки' заповнене не коректно. (Перша буква велика, мова Українська, допустимі символи ' ' або '-')");
        });
    };

    this.deleteTradingPoint = function del(id) {
        $http.get("api/trading_point/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateTradingPoint = function startUpdate(id, typeOfTradingPoint, nameOfTradingPoint, numberOfHalls, sizeOfTheTradingPoint, leasePayments, utilities, numberOfCounters) {
        $http.get('/api/type_of_trading_point').then(function (response) {
            var typeOfTradingPoints = response.data;
            var selector = document.getElementById("updateTypeOfTradingPoint");
            $(selector).empty();
            for (var i = 0; i < typeOfTradingPoints.length; i++) {
                var option = document.createElement("option");
                if (typeOfTradingPoints[i].id == typeOfTradingPoint.id){
                    option.selected = 'selected';
                }
                option.text = typeOfTradingPoints[i].typeOfTypeOfTradingPoint;
                option.value = typeOfTradingPoints[i].id;
                selector.add(option);
            }
        });
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateNameOfTradingPoint").value = nameOfTradingPoint;
        document.getElementById("updateNumberOfHalls").value = numberOfHalls;
        document.getElementById("updateSizeOfTheTradingPoint").value = sizeOfTheTradingPoint;
        document.getElementById("updateLeasePayments").value = leasePayments;
        document.getElementById("updateUtilities").value = utilities;
        document.getElementById("updateNumberOfCounters").value = numberOfCounters;
    };

    this.updateTradingPoint = function update() {
        var id = document.getElementById("updateId").innerText;

        var indexTypeOfTradingPoint = document.getElementById("updateTypeOfTradingPoint").selectedIndex;
        var typeOfTradingPointId = document.getElementById("updateTypeOfTradingPoint").options[indexTypeOfTradingPoint].value;

        var nameOfTradingPoint = document.getElementById("updateNameOfTradingPoint").value;
        var numberOfHalls = document.getElementById("updateNumberOfHalls").value;
        var sizeOfTheTradingPoint = document.getElementById("updateSizeOfTheTradingPoint").value;
        var leasePayments = document.getElementById("updateLeasePayments").value;
        var utilities = document.getElementById("updateUtilities").value;
        var numberOfCounters = document.getElementById("updateNumberOfCounters").value;
        $http.get('/api/type_of_trading_point/get?id='+typeOfTradingPointId).then(function (response) {
            var selectedTypeOfTradingPoint = response.data;

            var regex = /^[А-ЯІ]([а-яА-ЯіІ]|[- ]?)*$/;
            if (regex.test(nameOfTradingPoint)) {
                var regex1 = /^[0-9]+$/;
                if(regex1.test(numberOfHalls)) {
                    var regex2 = /^[0-9]+$/;
                    if (regex2.test(sizeOfTheTradingPoint)) {
                        var regex3 = /^([0-9]+[\\.][0-9]+)|[0-9]+$/;
                        if (regex3.test(leasePayments)) {
                            var regex4 = /^([0-9]+[\\.][0-9]+)|[0-9]+$/;
                            if(regex4.test(utilities)) {
                                var regex5 = /^[0-9]+$/;
                                if (regex5.test(numberOfCounters)) {
                                    var req = {
                                        method: 'POST',
                                        url: 'api/trading_point/update?id='+id,
                                        data: {
                                            typeOfTradingPoint: selectedTypeOfTradingPoint,
                                            nameOfTradingPoint: nameOfTradingPoint,
                                            numberOfHalls: numberOfHalls,
                                            sizeOfTheTradingPoint: sizeOfTheTradingPoint,
                                            leasePayments: leasePayments,
                                            utilities: utilities,
                                            numberOfCounters: numberOfCounters
                                        }
                                    };
                                    $http(req).then(function (resp) {
                                        window.location.reload();
                                    })
                                }
                                else alert("Поле 'Кількість Прилавків' заповнене не коректно. (Приклад 16)");
                            }
                            else alert("Поле 'Комунальні послуги' заповнене не коректно. (Приклад 550.5)");
                        }
                        else alert("Поле 'Оплата за оренду' заповнене не коректно. (Приклад 1450.5)");
                    }
                    else alert("Поле 'Розмір торгівельної точки' заповнене не коректно. (Приклад 350)");
                }
                else alert("Поле 'Кількість залів' заповнене не коректно. (Приклад 6)");
            }
            else alert("Поле 'Назва торгівельної точки' заповнене не коректно. (Перша буква велика, мова Українська, допустимі символи ' ' або '-')");
        });
    };

});