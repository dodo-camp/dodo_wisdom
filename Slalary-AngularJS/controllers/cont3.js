app.controller("cont3",function($scope,salFact){
   $scope.taxation=function(){
       $scope.tax="Tax :- " + salFact.tax;
       $scope.ns="Net Salary :-" + salFact.ns;
   } 
});