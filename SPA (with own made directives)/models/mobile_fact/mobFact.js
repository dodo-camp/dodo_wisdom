app.factory("mobFactory", function ($http, $q) {
        var getJSON=function () {
        var defered = $q.defer();
        console.log("Calling JSON");
        $http.get("https://raw.githubusercontent.com/Dhruv1996oct1/dodo_wisdom/master/mobile.json").then(function (data) {
            console.log("Inside success"+data);
            defered.resolve(data);
        }, function (er) {
            defered.reject(er);
        });
        return defered.promise;
    }
    return {"getjson":getJSON};
});
