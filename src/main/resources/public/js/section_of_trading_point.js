var app = angular.module("section_of_trading_point", []);
app.controller("AppCtrl", function ($scope, $http) {

    $scope.sectionOfTradingPoint = [];
    $http.get('/api/section_of_trading_point').then(function (response) {
        $scope.sectionOfTradingPoint = response.data;
    });

    this.startInsertSectionOfTradingPoint = function () {
        $http.get('/api/trading_point').then(function (response) {
            var tradingPoint = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть торгівельну точку";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("tradingPoint");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < tradingPoint.length; i++) {
                var option = document.createElement("option");
                option.text = tradingPoint[i].nameOfTradingPoint;
                option.value = tradingPoint[i].id;
                selector.add(option);
            }
        });
        $http.get('/api/section').then(function (response) {
            var section = response.data;
            var defaultOption = document.createElement("option");
            defaultOption.value="";
            defaultOption.text = "Виберіть секцію";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            var selector = document.getElementById("section");
            $(selector).empty();
            selector.add(defaultOption);
            for (var i = 0; i < section.length; i++) {
                var option = document.createElement("option");
                option.text = section[i].typeOfSection;
                option.value = section[i].id;
                selector.add(option);
            }
        });
    };

    this.insertSectionOfTradingPoint = function add() {
        var indexTradingPoint = document.getElementById("tradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("tradingPoint").options[indexTradingPoint].value;

        var indexSection = document.getElementById("section").selectedIndex;
        var sectionId = document.getElementById("section").options[indexSection].value;

        var numberOfHalls = document.getElementById("numberOfHalls").value;

        /*var req = {
            method: 'POST',
            url: '/api/section_of_trading_point/insert',
            data: {
                tradingPoint: tradingPointId,
                section: sectionId,
                numberOfHalls: numberOfHalls
            }
        };
        $http(req).then(function (resp) {
            window.location.reload();
        })*/
        $http.get('/api/trading_point/get?id='+tradingPointId).then(function (response) {
            $http.get('/api/section/get?id='+sectionId).then(function (response1) {
                var selectedTradingPoint = response.data;
                var selectedSection = response1.data;
                var req = {
                    method: 'POST',
                    url: '/api/section_of_trading_point/insert',
                    data: {
                        tradingPoint: selectedTradingPoint,
                        section: selectedSection,
                        numberOfHalls: numberOfHalls
                    }
                };
                $http(req).then(function (resp) {
                    window.location.reload();
                })
            });
        });
    };

    this.deleteSectionOfTradingPoint = function del(id) {
        $http.get("api/section_of_trading_point/delete?id="+id).then(function (response) {
            window.location.reload();
        });
    };

    this.startUpdateSectionOfTradingPoint = function startUpdate(id, tradingPoint, section, numberOfHalls) {
        $http.get('/api/trading_point').then(function (response) {
            var tradingPoints = response.data;
            var selector = document.getElementById("updateTradingPoint");
            $(selector).empty();
            for (var i = 0; i < tradingPoints.length; i++) {
                var option = document.createElement("option");
                if (tradingPoints[i].id == tradingPoint.id){
                    option.selected = 'selected';
                }
                option.text = tradingPoints[i].nameOfTradingPoint;
                option.value = tradingPoints[i].id;
                selector.add(option);
            }
        });
        $http.get('/api/section').then(function (response) {
            var sections = response.data;
            var selector = document.getElementById("updateSection");
            $(selector).empty();
            for (var i = 0; i < sections.length; i++) {
                var option = document.createElement("option");
                if (sections[i].id == section.id){
                    option.selected = 'selected';
                }
                option.text = sections[i].typeOfSection;
                option.value = sections[i].id;
                selector.add(option);
            }
        });
        document.getElementById("updateId").innerText = id;
        document.getElementById("updateNumberOfHalls").value = numberOfHalls;
    };

    this.updateSectionOfTradingPoint = function update() {
        var id = document.getElementById("updateId").innerText;

        var indexTradingPoint = document.getElementById("updateTradingPoint").selectedIndex;
        var tradingPointId = document.getElementById("updateTradingPoint").options[indexTradingPoint].value;

        var indexSection = document.getElementById("updateSection").selectedIndex;
        var sectionId = document.getElementById("updateSection").options[indexSection].value;

        var numberOfHalls = document.getElementById("updateNumberOfHalls").value;

        $http.get('/api/trading_point/get?id='+tradingPointId).then(function (response) {
            $http.get('/api/section/get?id=' + sectionId).then(function (response1) {
                var selectedTradingPoint = response.data;
                var selectedSection = response1.data;
                var req = {
                    method: 'POST',
                    url: 'api/section_of_trading_point/update?id=' + id,
                    data: {
                        tradingPoint: selectedTradingPoint,
                        section: selectedSection,
                        numberOfHalls: numberOfHalls,
                    }
                };
                $http(req).then(function (resp) {
                    window.location.reload();
                })
            });
        });
    };
});