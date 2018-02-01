app.factory("salaryFactory",function(){
    var salaryObject={
        salaryArr:[],
        addRecord:function(salary,hra,ta,da){
            var object = new salaryOpr(salary,hra,ta,da);
            this.salaryArr.push(object);
            
        }
    };
    
    function salaryOpr(salary,hra,ta,da){
        this.salary=salary;
        this.hra=hra;
        this.ta=ta;
        this.da=da;
    }
    return salaryObject;
});