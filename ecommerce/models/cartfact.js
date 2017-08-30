app.factory("cartFact",function(){
    var cartAdd=[];
     var buyProd=function(name,image,address){
            this.product=name;
            this.image=image;
            this.address=address;
        }
    return{"retCart":cartAdd,"Buy":buyProd}
});