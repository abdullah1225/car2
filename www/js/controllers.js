angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('pageCtrl', ['$scope', '$stateParams', '$http' ,// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
$scope.connected=false;







	
$scope.push=function(x){
	$http.defaults.headers.post["Content-Type"] = "application/json";
	console.log(x);
    $http.post('http://192.168.137.15:5000/foo',{hi:x})
		.success(function(resp){
			console.log(resp);
			if(Object.keys(resp).length>=1){
				$scope.connected=true;
			};
			console.log(Object.keys(resp).length);
		})
	
};
}])
 
