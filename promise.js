let promiseTogetnewcar = new promise(function(resolve,reject){
    let carisavailable = true;
    if(isavailable){
        resolve('buy the new car');
    }else{
        reject('car is not available');
    }
    });
    promiseTobuycar.then(function(fromResolve){
        console.log(fromResolve);
    }).catch(function(fromReject){
        console.log(fromReject);

    });

    //////////////////////////////////////////////////////


    let buyAccessories = function(){
        return new Promise(function(resolve, reject){
            resolve('accessories buyed');
        });
    };
    let fuelRefill = function(message){
        return new Promise(function(resolve, reject){
            resolve(message + 'fuel refilled');
        });
    };
    let getInsurance = function(message){
        return new Promise(function(resolve, reject){
            resolve(message + 'insurance covered');
        });
    };
 buyAccessories().then(function(result){
    return fuelRefill(result);          //the function are executed one after other this is called dependency
}).then(function(result){
    return getInsurance(result);
}).thenfunction(result){
    console.lgo('finished' + result);

}) 

////////by using promise all we are saying that to finish all the function then after print the result.

Promise.all([buyAccessories(),fuelRefill(),getInsurance()]).then(function(){
    console.log('all finished');
  });

 
 //////using race we are saying to print result for any one function is finished first.
 
  Promise.race([buyAccessories(),fuelRefill(),getInsurance()]).then(function(){
    console.log('one is finished');
  });