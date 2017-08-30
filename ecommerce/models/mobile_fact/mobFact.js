app.factory("mobFactory", function ($http, $q) {
        var getJSON=function () {
        var defered = $q.defer();
        console.log("Calling JSON");
        $http.get("https://raw.githubusercontent.com/Dhruv1996oct1/dodo_wisdom/master/mobile.json").then(function (data) {
            console.log("Inside success"+data.data);
            defered.resolve(data);
        }, function (er) {
            defered.reject(er);
        });
        return defered.promise;
    }
        var addToCart=function(name,image,price){
            this.name=name;
            this.image=image;
            this.price=price;
            this.rem=false;
            this.add=[];
        }
        var buyProd=function(name,image,address){
            this.product=name;
            this.image=image;
            this.address=address;
        }
    return {"getjson":getJSON,"Cart":addToCart,"Buy":buyProd};
});
