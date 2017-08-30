var app = angular.module("spaapp", ['ngRoute', 'app.directives']);
app.controller("myCntrl", function ($scope, fact) {
    $scope.menudata = fact;
});
app.controller('speechController', function ($scope) {
    this.rec = new webkitSpeechRecognition();
    this.interim = [];
    this.final = '';
    var self = this;

    this.rec.continuous = false;
    this.rec.lang = 'en-US';
    this.rec.interimResults = true;
    this.rec.onerror = function (event) {
        console.log('error!');
    };

    this.start = function () {
        self.rec.start();
    };

    this.rec.onresult = function (event) {
        for (var i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                self.final = self.final.concat(event.results[i][0].transcript);
                console.log(event.results[i][0].transcript);
                $scope.ser = event.results[i][0].transcript;
                $scope.$apply();

            }
        }
    };

});

app.directive("dodoHeadTag", function () {
    return {
        template: `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">`,
        restrict: 'E'
    }
});

app.directive("dodoDirective", function () {
    return {
        controller: "myCntrl",
        template: `<nav class='navbar navbar-inverse'>
        <div class="page-header">
  <h1>Gizmos</h1>
</div>
<div class='container-fluid'><div class='navbar-header'><button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'><span class='sr-only'>Toggle navigation</span>
        <span class='icon-bar'></span>
        <span class='icon-bar'></span>
        <span class='icon-bar'></span>
      </button>
    </div>
    
    <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
      <ul class='nav navbar-nav' ng-repeat='obj in menudata.menu' >
        
        <li><a href='{{obj.url}}'>{{obj.value}}</a></li>
       
      </ul> 
         <ul class="nav navbar-nav navbar-right">
        <li><a href="#/signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
  </div>
</nav>`,
        restrict: "E"
    }
});

app.directive("dodoSer", function () {
    return {
        controller: "speechController as spc",
        template: `<div class="results">
      <input class="final" ng-model="ser"  placeholder="search" id="inputS"><span style="border:1px;border-style:ridge;height:50px"><i class="glyphicon glyphicon-search"></i></span>
      <button ng-click="spc.start()">
      speech
      </button>
      </div>`,
        restrict: "E"
    }
});

app.controller("cartCont", function ($scope, $route,coutFact,cartFact) {
    var z = false;
    $scope.init = function () {

        var Obj = JSON.parse(localStorage.det);
        Obj.forEach(function (k) {
            if (k.login == true) {
                console.log("heyyyyy");
                z = true;
            }
        });
    }

    $scope.checkLocal = function () {
        if (z == true) {
            return false;
            console.log(z);
        } else {
            return true;
            console.log(z);
        }
    }

    console.log(localStorage.det);
    var obj = JSON.parse(localStorage.det);
    obj.forEach(function (w) {
        if (w.login == true) {
            $scope.cartData = w.cart;
        }
    });


    $scope.remCart = function (i) {

        var Obj = JSON.parse(localStorage.det);
        Obj.forEach(function (w) {
            if (w.login == true) {
                w.cart.forEach(function (k) {
                    if (k.name == i.name) {
                        k.rem = true;
                    }
                });
            }
        });

        Obj.forEach(function (a) {
            if (a.login == true) {
                a.cart = a.cart.filter(function (emp) {
                    return !emp.rem;
                });
            }
        });

        var json = JSON.stringify(Obj);
        localStorage.det = json;
        var Obj2 = JSON.parse(localStorage.det);
        $scope.cartData = Obj2;
        $route.reload();
        
    Obj2.forEach(function(w){
        if(w.login==true){
            if(w.cart.length==0){
                $scope.checkLocal=function(){
                    return true;
                }
            }
        }
    });
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
                  var object=new cartFact.Buy(i.name,i.image,address);
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
                $scope.userDet.s=true;
                z=0;
            }
        }
        if(z==1){
           $window.location.hash="/login";
            alert("First Login"); 
        }
    }
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

app.controller("buyCont",function($scope){
    
  var z = false;
    $scope.init = function () {

        var Obj = JSON.parse(localStorage.det);
        Obj.forEach(function (k) {
            if (k.login == true) {
                console.log("heyyyyy");
                z = true;
            }
        });
    }

    $scope.checkLocal = function () {
        if (z == true) {
            return false;
            console.log(z);
        } else {
            return true;
            console.log(z);
        }
    }

    console.log(localStorage.det);
    var obj = JSON.parse(localStorage.det);
    obj.forEach(function (w) {
        if (w.login == true) {
            $scope.cartData = w.buy;
        }
    });  
    
});


app.controller("loginCont", function ($scope, loginFact, $route, $window) {
    //Here
    $scope.init = function () {
        if (localStorage.length == 0) {
            $scope.isDisable = false;
        } else {
            console.log("under it");
            var initL = JSON.parse(localStorage.disL);
            $scope.isDisable = initL;
            $scope.checkLog = function () {
                var obj = JSON.parse(localStorage.disL);
                if (obj == true) {
                    console.log("under user");
                    var nameU = JSON.parse(localStorage.nameOfUser);
                    console.log(nameU);
                    $scope.UserName = nameU;
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
    $scope.signup=function(){
        $window.location.hash='/signup'
    }
    $scope.submitS = function (regForm) {
        if (regForm.$valid) {
            if(localStorage.length==0){
            var name = $scope.name;
            var email = $scope.userS;
            var pass = $scope.passS;
            var obj = new loginFact.objS(name, email, pass);
            var arr = loginFact.sub;
            arr.push(obj);
            var json = JSON.stringify(arr);
            console.log(json);
            localStorage.det = json;
            console.log(localStorage.det);
            $scope.s = false;
            alert("You have successfully Signed Up");
        }
            else{
               var name = $scope.name;
            var email = $scope.userS;
            var pass = $scope.passS;
            var obj = new loginFact.objS(name, email, pass);
            var Obj=JSON.parse(localStorage.det);
            Obj.push(obj);
            var json=JSON.stringify(Obj);
            localStorage.det=json;
            console.log(localStorage.det);
            $scope.s = false;
            alert("You have successfully Signed Up"); 
            $window.location.hash='/login';
            }
        }
        else {
            $scope.s = true;
        }
    }

    $scope.login = function (regForm1) {
        if (regForm1.$valid) {
            var obj = JSON.parse(localStorage.det);
            var email = $scope.userL;
            var pass = $scope.passL;
            obj.forEach(function (w) {

                if ((w.email == email) && (w.pass == pass)) {
                    w.login = true;
                    console.log(w.name + " is loged in");
                    var dis = JSON.stringify(true);
                    localStorage.disL = dis;
                    var obj2 = JSON.parse(localStorage.disL);
                    $scope.isDisable = obj2;
                    console.log($scope.isDisable);
                    $scope.UserName = w.name;
                    var nameofUser = w.name;
                    var jsonName = JSON.stringify(nameofUser);
                    localStorage.nameOfUser = jsonName;

                }

            });
            var json = JSON.stringify(obj);
            console.log(json);
            localStorage.det = json;
            console.log(localStorage.det);


            $scope.checkLog = function () {
                var obj = JSON.parse(localStorage.disL);
                if (obj == true) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    $scope.logout = function () {
        var obj = JSON.parse(localStorage.det);
        obj.forEach(function (w) {
            if (w.login == true) {
                w.login = false;
            }
        });
        var json = JSON.stringify(obj);
        console.log(json);
        localStorage.det = json;
        console.log(localStorage.det);
        $scope.userL = "";
        $scope.passL = "";
        $scope.isDisable = false;
        var obj = JSON.stringify(false);
        localStorage.disL = obj;
        var obj2 = JSON.parse(localStorage.disL);
        $scope.isDisable = obj2;
        $scope.checkLog = function () {
            if (obj2 == false) {
                return false;
            } else {
                return true;
            }
        }
    }
});
