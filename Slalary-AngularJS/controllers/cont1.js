app.controller("cont1",function($scope,salFact){
    $scope.compute=function(){
        var sal=$scope.sal;
        salFact.calculate(sal);
        $scope.hra=salFact.hra;
        $scope.da=salFact.da;
        $scope.ta=salFact.ta;
        $scope.pf=salFact.pf;
    }
});