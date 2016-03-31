// creating a module called myModule
var variable = angular.module("myModule",[]);



												// // creating a controller called myController
												// var myController  function($scope){
												// 	$scope.message = "Angular js tutorial";
												// }
												// //registering controller with module
												// myApp.controller("myController", myController);



//or alternatively, I can do the above two lines in one>>>
variable.controller("myController", function($scope){
	var dragon = {name: "Fluffy", occupation: "Destroyer", image:"images/5.png"};

	$scope.dragon = dragon;

});
