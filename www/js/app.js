// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('calc', ['ionic'])

.controller('CalcCtrl', function($scope) {

  $scope.expression = "";
  $scope.savedValue = "";
  $scope.operator = "";
  $scope.displayingResult = false;

  $scope.numPress = function(num) {
    if ($scope.displayingResult) {
      $scope.displayingResult = false;
      $scope.expression = "";
    }
    $scope.expression += String(num);
  }

  $scope.operatorPress = function (op) {
    if ($scope.expression != "" && !($scope.displayingResult && $scope.operator != "")) {
      if ($scope.savedValue == "") {
        $scope.savedValue = $scope.expression;
        $scope.expression = "";
      } else {
        var a = parseFloat($scope.savedValue);
        var b = parseFloat($scope.expression);
        var result = $scope[$scope.operator](a, b);
        $scope.savedValue = String(result);
        $scope.expression = String(result);
        $scope.displayingResult = true;
      }
      $scope.operator = op;
    }
  }

  $scope.evaluate = function () {
    if ($scope.savedValue != "") {
      if ($scope.expression == "") {
        $scope.expression = $scope.savedValue;
        $scope.savedValue = "";
      } else {
        var a = parseFloat($scope.savedValue);
        var b = parseFloat($scope.expression);
        var result = $scope[$scope.operator](a, b);
        $scope.expression = String(result);
        $scope.savedValue = "";
      }
      $scope.operator = "";
      $scope.displayingResult = true;
    }
  }

  $scope.clear = function() {
    $scope.expression = "";
    $scope.savedValue = "";
    $scope.operator = "";
    $scope.displayingResult = false;
  }
  $scope.add = function (a, b) {
    return a + b;
  }
  $scope.subtract = function (a, b) {
    return a - b;
  }
  $scope.multiply = function (a, b) {
    return a * b;
  }
  $scope.divide = function (a, b) {
    return a / b;
  }
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
