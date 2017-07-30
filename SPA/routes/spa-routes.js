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
    }).otherwise({
        template: "Error Page,No match found",
        redirectTo: "/"
    });
});
