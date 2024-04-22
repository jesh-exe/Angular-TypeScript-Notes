// Will always give something either it will be resolved or rejected



var replyFromServer = new Promise(function(resolve,reject){
    var flag = true;
    setTimeout(()=>{
        if(flag)
        return resolve("Connected!");
        else
        return reject("Disconnected!");
    },2000)
})

replyFromServer.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

console.log("Other Task Done even if the Response is bit late from server")