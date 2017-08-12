app.controller("heycntrl", function ($scope, heyFact) {
    $scope.submit = function (regForm) {
        if (regForm.$valid) {
            alert("Form submitted");
             var errors=regForm.$error;
             angular.forEach(errors.pattern,function(field){
                 if(field.$invalid){
                     var fieldname=field.$name;
                     console.log(fieldname);
                 }
             })
        } else {
            alert("Cant't submit");
        }
       
    }
  
   
    
   
    var z = 0;
    var strong = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var medium = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    var weak = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))|(?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9])|(?=.*[!@#\$%\^&\*]))(?=.{1,5})"); 
    $scope.checkPass = function (password) {
        if (strong.test(password)) {
            $scope.sw = "Strong";
            $scope.z = 1;
            console.log("strong");
        } else
        if (medium.test(password)) {
            console.log("medium");
            $scope.z = 2;
            $scope.sw = "Medium";
        } else
        if (weak.test(password)) {
            console.log("weak");
            $scope.sw = "Weak";
            $scope.z = 3;
        }


    }

    var promise = heyFact.getjson();
    $scope.GetSelectedCountry=function(){
        $scope.strCountry=$scope.countrySrc;
    }
     $scope.GetSelectedState = function() {
            $scope.strState = $scope.stateSrc;
          };
    function pass(data) {
        console.log(data);
        $scope.countries = data.data;

    }

    function fail(er) {
        $scope.error = er;
    }
    promise.then(pass, fail);

});
