/**
 * Created by yannic on 09.05.16.
 */

//var app = angular.module('MainApp', ['ngMaterial']);

var test = {lol: "123",
    test:42};

localStorage.setObject("test", test);

console.log(localStorage.getObject("test"));