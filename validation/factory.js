app.factory("heyFact",function($http,$q){
    var getJSON=function(){
        var pr=$q.defer();
        $http.get("https://raw.githubusercontent.com/Dhruv1996oct1/dodo_wisdom/master/city.json").then(function(data){
            console.log("Success");
            pr.resolve(data);
        },function(er){
            console.log("error");
            pr.reject(er);
        });
        return pr.promise;
    }
    return{"getjson":getJSON};
});