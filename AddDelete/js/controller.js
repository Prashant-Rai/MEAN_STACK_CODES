app.controller("salaryController",function($scope,salaryFactory){
    var index=-1;
    $scope.Calculate = function(){
    var salary=parseInt($scope.salary);
        var hra = salary * 0.2;
        var ta = salary * 0.1;
        var da = salary * 0.1;
        
        $scope.hra = hra;
        $scope.ta = ta;
        $scope.da = da;
    }
    
    
                $scope.AddSalary = function(myform){
                   // console.log($scope.myform.$valid);
                    if($scope.myform.$dirty && $scope.myform.$valid){
                    salaryFactory.addRecord($scope.salary,$scope.hra,$scope.ta,$scope.da);
                    $scope.result = salaryFactory.salaryArr;
                   $scope.clearFields();
                    }
                    else{
                    $scope.message="Field Required";}
                }
    $scope.clearFields=function(){
        $scope.salary="";
        $scope.hra="";
        $scope.ta="";
        $scope.da="";
         }
    
                    $scope.DeleteRow= function(salary){
                        let index=-1;
                        for(var i=0;i<salaryFactory.salaryArr.length;i++){
                            if(salaryFactory.salaryArr[i].salary===salary){
                                index=i;
                            }
                        }
                        if(index===-1){

                            window.alert("Something goes Wrong");}
                        salaryFactory.salaryArr.splice(index,1);
                    }
    
    $scope.EditRow=function(salary){
     
         for(var i=0;i<salaryFactory.salaryArr.length;i++){
            
            if(salaryFactory.salaryArr[i].salary===salary){
                index=i;
                $scope.salary = salaryFactory.salaryArr[i].salary;
                $scope.hra = salaryFactory.salaryArr[i].hra;
                $scope.ta = salaryFactory.salaryArr[i].ta;
                $scope.da = salaryFactory.salaryArr[i].da;
                
               
                
            }
         }
    }
    
    
    $scope.SaveSalary = function(){
          salaryFactory.salaryArr[index].salary=$scope.salary;
          salaryFactory.salaryArr[index].hra=$scope.hra ;
          salaryFactory.salaryArr[index].ta=$scope.ta;
          salaryFactory.salaryArr[index].da=$scope.da; 
    }
    
    
});