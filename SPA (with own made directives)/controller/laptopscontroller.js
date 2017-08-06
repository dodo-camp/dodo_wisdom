app.controller("lapCont", function ($scope, lapfactory) {
    var promise = lapfactory.getjson();

    function pass(data) {
        $scope.laptops = data.data;
    }

    function fail(er) {
        $scope.error = er;
    }
    promise.then(pass, fail);
});
