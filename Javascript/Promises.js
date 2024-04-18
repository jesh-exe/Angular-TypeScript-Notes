// Will always give something either it will be resolved or rejected

var replyFromServer = new Promise(function(resolve,reject){
    var flag = true;
    if(flag)
        return resolve("Connected!");
    else
        return reject("Disconnected!");
})

replyFromServer.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

