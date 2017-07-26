app.controller("salCont", function ($scope, salFact) {
    console.log("cont start");
    $scope.doCal = function () {
        var z = $scope.sal;
        salFact.calculations(z);
        $scope.hra = salFact.hra;
        $scope.da = salFact.da;
        $scope.ta = salFact.ta;
        $scope.pf = salFact.pf;
        $scope.tax = salFact.tax;
        $scope.ns = salFact.ns;
        $scope.grade=salFact.grade;
    }
    $scope.doClear = function () {
        $scope.sal = null;
    }
    $scope.doAddRec = function () {
        var obj={
            sal:$scope.sal,
            hra:salFact.hra,
            da:salFact.da,
            ta:salFact.ta,
            pf:salFact.pf,
            tax:salFact.tax,
            ns:salFact.ns,
            grade:salFact.grade,
        }
        salFact.count++;
        $scope.count = "Count = " + salFact.count;
        salFact.salArr.push(obj);
        $scope.salArr=salFact.salArr;
    }
});
