app.factory("tabfactory", function ($http, $q) {
    var getJSON = function () {
        var pr = $q.defer();
        $http.get("https://raw.githubusercontent.com/Dhruv1996oct1/dodo_wisdom/master/tablet.json").then(function (data) {
            console.log("Success data");
            pr.resolve(data);
        }, function (er) {
            pr.reject(er);
        });
        return pr.promise;
    }
    return {
        "getjson": getJSON
    };
});
