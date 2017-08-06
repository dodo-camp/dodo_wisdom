var app=angular.module("spaapp",['ngRoute']);
app.controller("myCntrl",function($scope,fact){
    $scope.menudata=fact;
});

app.directive("dodoHeadTag",function(){
	return {
		template:`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">`,
		restrict : 'E'
	}
});

app.directive("dodoDirective",function(){
   return{
       template:`<nav class='navbar navbar-inverse'>
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
    </div>
  </div>
</nav>`,
       restrict:"E"
   } 
});

app.directive("dodoSer",function(){
    return{
        template:`<form class="navbar-form navbar-left" role="search">
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Search" ng-model="ser">
  </div>
</form>`,
        restrict:"E"
    }
});
app.directive("dodoFooter",function(){
    return{
        template:`</div>
  <div class="panel-footer">Copyrights</div>
</div>`,
        restrict:"E"
    }
});