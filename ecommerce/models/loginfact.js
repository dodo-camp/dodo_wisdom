app.factory("loginFact",function(){
    var loginS=[];
    var obj=function(name,email,pass){
        this.name=name;
        this.email=email;
        this.pass=pass;
        this.login=false;
        this.cart=[];
        this.buy=[];
    }
    return{"sub":loginS,"objS":obj};
});