app.factory("lapfactory", function ($http, $q) {
    var getJSON = function () {
        var pro = $q.defer();
        $http.get("https://raw.githubusercontent.com/Dhruv1996oct1/dodo_wisdom/master/laptops.json").then(function (data) {
            console.log("Success");
            pro.resolve(data);
        }, function (er) {
            pro.reject(er);
        });
        return pro.promise;
    }
    return {
        "getjson": getJSON
    };
});
