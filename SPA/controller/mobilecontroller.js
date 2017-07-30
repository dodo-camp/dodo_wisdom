app.controller("mobCont", function ($scope, mobFactory) {
    var promise =mobFactory.getjson();
   function pass(data){
       $scope.mobiles=data.data;
       console.log(data);
   }
    function fail(er){
        $scope.error=er;
    }
    promise.then(pass,fail);
})
