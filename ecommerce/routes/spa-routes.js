app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        templateUrl: "mobile.html",
        controller: "mobCont"
    }).when("/tablets", {
        templateUrl: "tablets.html",
        controller: "tabCont"
    }).when("/laptops", {
        templateUrl: "laptops.html",
        controller: "lapCont"
    }).when("/cart",{
        controller:"cartCont",
        templateUrl:"cart.html"
    }).when("/buy",{
        controller:"buyCont",
        templateUrl:"buy.html"
    }).when("/signup",{
        controller:"loginCont",
        templateUrl:"signup.html"
    }).when("/login",{
        controller:"loginCont",
        templateUrl:"login.html"
    }).otherwise({
        template: "Error Page,No match found",
        redirectTo: "/"
    });
});
