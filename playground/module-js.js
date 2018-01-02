var calculette =(()=>{
    var self ={};
     var arrond = (a)=>{
         return Math.round(a);
     };
    self.add = (a,b)=>{
        return a+b;
    };

    self.sub = (a,b)=>{
        return a-b;
    };

    self.mul = (a,b)=>{
        return arrond(a*b);
    };

    self.div = (a,b)=>{
        return arrond(a/b);
    };

    return self;
})();

console.log(calculette.mul(4.5,10.2));