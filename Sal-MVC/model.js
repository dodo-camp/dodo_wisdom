app.factory("salFact", function () {
    console.log("Call factory");
    var object = {
        salArr: [],
        grade:"",
        count: 0,
        hra: 0,
        da: 0,
        ta: 0,
        pf: 0,
        ns: 0,
        calculations: function (sal) {
            console.log("factory start");
            this.hra = isNaN(parseInt(sal * 0.3)) ? 0 : parseInt(sal * 0.3);
            this.da = isNaN(parseInt(sal * 0.2)) ? 0 : parseInt(sal * 0.2);
            this.ta = isNaN(parseInt(sal * 0.1)) ? 0 : parseInt(sal * 0.1);
            this.pf = isNaN(parseInt(sal * 0.05)) ? 0 : parseInt(sal * 0.05);
            if ((sal > 300000) && (sal < 500000)){
                this.tax = 0.01 * sal;
            this.grade="C";
            }
            else
            if ((sal > 500000) && (sal < 900000)) {
                this.tax = 0.05 * sal;
                this.grade="B";
            } else
            if (sal > 900000) {
                this.tax = 0.09 * sal;
                this.grade="A";
            } else
            if (sal < 300000) {
                this.tax = 0 * sal;
                this.grade="D";
            }
            this.ns = this.hra + this.da + this.ta - (this.pf * 2) + sal - this.tax;

            console.log("factory end");
        }
    
    }
    console.log("object return");
    return object;
});
