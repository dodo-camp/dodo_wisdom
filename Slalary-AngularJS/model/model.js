app.factory("salFact", function () {
    var object = {
        hra: 0,
        da: 0,
        ta: 0,
        pf: 0,
        ns: 0,
        tax:0,
        gross:0,
        calculate: function (sal) {
            console.log("factory start");
            this.hra = isNaN(parseInt(sal * 0.3)) ? 0 : parseInt(sal * 0.3);
            this.da = isNaN(parseInt(sal * 0.2)) ? 0 : parseInt(sal * 0.2);
            this.ta = isNaN(parseInt(sal * 0.1)) ? 0 : parseInt(sal * 0.1);
            this.pf = isNaN(parseInt(sal * 0.05)) ? 0 : parseInt(sal * 0.05);
            this.gross=this.hra + this.da + this.ta - (this.pf * 2) + sal;
            
            if ((sal > 300000) && (sal < 500000)){
                this.tax = 0.01 * sal;
            }
            else
            if ((sal > 500000) && (sal < 900000)) {
                this.tax = 0.05 * sal;
            } else
            if (sal > 900000) {
                this.tax = 0.09 * sal
            } else
            if (sal < 300000) {
                this.tax = 0 * sal;
            }
            this.ns = this.hra + this.da + this.ta - (this.pf * 2) + sal - this.tax;

            console.log("factory end");
        }
    }
    return object;
});
