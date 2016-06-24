var app = angular.module('ubitusWebApp', [
  'ngRoute'
]);


//route

app.config(['$routeProvider', function($routeProvider/*, $locationProvider*/) {
  $routeProvider
  // Home
    .when("/", {
      templateUrl: "pages/home.html",
      controller: "PageCtrl"
    })
    // Pages
    .when("/solutions", {
      templateUrl: "pages/solutions.html",
      controller: "PageCtrl"
    })
    .when("/products", {
      templateUrl: "pages/products.html",
      controller: "PageCtrl",
    })
    .when("/credentials", {
      templateUrl: "pages/credentials.html",
      controller: "PageCtrl"
    })
    .when("/aboutubitus", {
      templateUrl: "pages/contact.html",
      controller: "PageCtrl"
    })
    //press
    .when("/press", {
      templateUrl: "pages/press.html",
      controller: "PageCtrl"
    })
    // else 404
    .otherwise("/404", {
      templateUrl: "pages/404.html",
      controller: "PageCtrl"
    });
    
    //$locationProvider.html5Mode(true);
}]);


//controller

app.controller('PageCtrl', function( $scope, $route, $location /* , $http */ ) {


  //console.log($route.current.templateUrl)

  //nav

  $scope.isActive = function(route) {
    return route === $location.path();
  }

  //slidshow
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 3000,
    autoplayDisableOnInteraction: false,
    loop: true
  });

  //get
    $('.latest-press .date').load('../press/latest.html #press .title .date');
    $('.latest-press h2').load('../press/latest.html #press .title h1');
    $('.latest-press .summary').load('../press/latest.html #press .inner');

});

