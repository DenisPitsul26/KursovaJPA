var app = angular.module("tables", []);

app.controller("AppCtrl", function ($scope, $http) {

    $scope.goods = [];
    $http.get('/api/goods').then(function (response) {
        $scope.goods = response.data;
    });
    $scope.typeOfTradingPoint = [];
    $http.get('/api/type_of_trading_point').then(function (response) {
        $scope.typeOfTradingPoint = response.data;
    });
    $scope.tradingPoint = [];
    $http.get('/api/tradingPoint').then(function (response) {
        $scope.tradingPoint = response.data;
    });
    $scope.provider = [];
    $http.get('/api/provider').then(function (response) {
        $scope.provider = response.data;
    });
    $scope.buyer = [];
    $http.get('/api/buyer').then(function (response) {
        $scope.buyer = response.data;
    });
    $scope.section = [];
    $http.get('/api/section').then(function (response) {
        $scope.section = response.data;
    });
    $scope.sectionOfTradingPoint = [];
    $http.get('/api/sectionOfTradingPoint').then(function (response) {
        $scope.sectionOfTradingPoint = response.data;
    });
    $scope.goodsOfTradingPoint = [];
    $http.get('/api/goods_of_trading_point').then(function (response) {
        $scope.goodsOfTradingPoint = response.data;
    });
    $scope.seller = [];
    $http.get('/api/seller').then(function (response) {
        $scope.seller = response.data;
    });
    $scope.request = [];
    $http.get('/api/request').then(function (response) {
        $scope.request = response.data;
    });
    $scope.soldGoods = [];
    $http.get('/api/sold_goods').then(function (response) {
        $scope.soldGoods = response.data;
    });


    /*$scope.students = [];
    $http.get('/api/students').then(function (response) {
        //  $http.get('http://localhost:8080/api/students').then(function (response){
        $scope.students = response.data;
        //  console.log(response);
    });*/
    // this.delstud = function del(id) {
    //     $http.get('/api/student/del?id='+id).then(function (response){
    //         //  $http.get('http://localhost:8080/api/students').then(function (response){
    //         // $scope.students=response.data;
    //         window.alert('Student ' + response.data.lastName + ' ' + response.data.firstName + ' has been succesfully deleted!');
    //         window.location.reload();9
    //     });
    // }
    //
    // $scope.groups = [];
    // $http.get('/api/groups').then(function (response){
    //     //  $http.get('http://localhost:8080/api/students').then(function (response){
    //     $scope.groups=response.data;
    //     console.log(response);
    // });
    //
    //
    this.delchair = function del(id) {
        $http.get('/api/chair/del?id=' + id).then(function (response) {
            window.alert('Chair ' + ' ' + response.data.name + ' ' + response.data.id + ' ' + response.data.abr + ' ' + ' has been succesfully deleted!');
            window.location.reload();
        });
    };


    /*this.insertchair = function () {
        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var abr = document.getElementById("abr").value;
        var req = {
            method: 'POST',
            url: '/api/chair/insert',
            data: {
                id: id,
                name: name,
                abr: abr
            }
        };
        console.log(req);
        $http(req).then(function (resp) {

            window.location.reload();
        })
    };
    $scope.showInsert = true;
    $scope.showUpdate = false;
    $scope.disabledId = false;
    var chair;
    this.hideInsertButton = function (item) {
        document.getElementById("id").value = item.id;
        document.getElementById("name").value = item.name;
        document.getElementById("abr").value = item.abr;
        $scope.disabledId = true;
        chair = item;
        $scope.showInsert = false;
        $scope.showUpdate = true;
    };

    this.cancelUpdate = function () {
        $scope.showInsert = true;
        $scope.showUpdate = false;
        window.location.reload();
    };

    this.updatechair = function () {
        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var abr = document.getElementById("abr").value;
        var req = {
            method: 'POST',
            url: '/api/chair/update',
            data: {
                id: id,
                name: name,
                abr: abr
            }
        };
        // console.log(req);
        $http(req).then(function (resp) {

            window.location.reload();
        });

    };
    $scope.showInsert = true;
    $scope.showUpdate = false;
    $scope.disabledId = false;*/


});

