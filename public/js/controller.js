app.controller("contactpageCtrl",["$scope", "$http",function($scope,$http){
$scope.editshow=false;

$scope.savedata=function(postdata){
    console.log(postdata);
$http.post("api/getpage",postdata)
.then(
    function(response){
        console.log("success"+response);
        $scope.retrivedata();
    });
}

$scope.retrivedata=function(){
    $http.get("api/getpage")
    .then(function(response){
        $scope.display=response.data;
    });
}

$scope.retrivedata();

$scope.removeitems=function(deleteid){
    $http.delete("api/getpage/"+deleteid)
    .then(function(response){
        $scope.retrivedata(); 
    });
}
}]);