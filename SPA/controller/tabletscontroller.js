app.controller("tabCont", function ($scope, tabfactory) {
    console.log("Inside controller of tab");
    var promise = tabfactory.getjson();

    function pass(data) {
        $scope.tablets = data.data;
    }

    function fail(er) {
        $scope.error = er;
    }
    promise.then(pass, fail);
});
