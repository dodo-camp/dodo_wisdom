app.controller("lapCont", function ($scope, lapfactory, cartFact, loginFact, $window,coutFact) {
    var promise = lapfactory.getjson();

    $scope.addCart = function (i) {
        var z = 1;
        if (localStorage.length == 0) {
            $window.location.hash = "/login";
            alert("First Login");
            z = 0;
        } else {
            z = 1;
            var Obj = JSON.parse(localStorage.det);
            Obj.forEach(function (w) {
                if (w.login == true) {
                    z = 0;
                    var obj = new lapfactory.Cart(i.name, i.image, i.price);
                    var pro = w.cart;
                    pro.push(obj);
                    var json = JSON.stringify(Obj);
                    console.log(json);
                    localStorage.det = json;
                    alert("Added to Cart");
                }
            });

        }
        if (z == 1) {
            $window.location.hash = "/login";
            alert("First Login");
        }

    }
    
     $scope.userDet={};
    $scope.Buy=function(regForm,i){
        var z=1;
        if(localStorage.length==0){
            $window.location.hash="/login";
            alert("First Login");
            z=0;
        }
        else{
            if(regForm.$valid){
            z=1;
            var Obj=JSON.parse(localStorage.det);
            Obj.forEach(function(w){
                if(w.login==true){
                z=0;
                   var address=$scope.userDet.address;
                  var object=new lapfactory.Buy(i.name,i.image,address);
                  w.buy.push(object);
                    var json=JSON.stringify(Obj);
                    localStorage.det=json;
                    alert("You Successfully Purchased "+i.name);
                    console.log($scope.userDet.countrySrc);
                    $scope.userDet.email="";
                    $scope.userDet.address="";
                    $scope.userDet.zip="";
                    $scope.userDet.s=false;
                }
            }); 
            }
            else{
                alert("Complete Your Form First");
                z=0;
            }
        }
        if(z==1){
           $window.location.hash="/login";
            alert("First Login"); 
        }
    }
    
    

    function pass(data) {
        $scope.laptops = data.data;
    }

    function fail(er) {
        $scope.error = er;
    }
    promise.then(pass, fail);
    
    
     var prom = coutFact.getjson();

    function succ(data) {
        console.log(data);
        $scope.countries = data.data;

    }

    function failure(er) {
        $scope.error = er;
    }
    prom.then(succ, failure);
});
