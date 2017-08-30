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
    var addToCart = function (name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.rem = false;
        this.add=[];
    }
    var buyProd=function(name,image,address){
            this.product=name;
            this.image=image;
            this.address=address;
        }
    return {
        "getjson": getJSON,"Cart":addToCart,"Buy":buyProd
    };
});
