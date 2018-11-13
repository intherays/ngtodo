app = angular.module("myToDoApp",[]);
app.controller("toDoCtrl",toDoFn);
function toDoFn($scope){
    $scope.myToDoList = [
        
    ];
    $scope.addList = function(){
        console.log("add clicked" + $scope.addtodo);
        var item = $scope.addtodo;
        $scope.myToDoList.push(item);
        $scope.addtodo="";
        document.getElementById('todotxt').focus();
        console.log("add clicked after" + $scope.addtodo);
    }
    $scope.deleteToDo = function(itmNo){
        $scope.myToDoList.splice(itmNo,1);
    }
    $scope.updateList= function(itmNo,saveItm){
        console.log("Index is : "+itmNo + "\n List is : "+ saveItm);
        $scope.myToDoList[itmNo]=saveItm;
    }
    
}