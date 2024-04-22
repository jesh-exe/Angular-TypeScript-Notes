var flag = false;

var talkToDatabase = (callback) => {

    // Database Call Takes 2s to give response
    setTimeout(() => {
        console.log("Data Fetched from the database");
        flag = true;
        callback();
    }, 2000);

    // Async Behaviour (Non Blocking)
    console.log("Async Program in Execution");
}

var showToClient = () => {
    if(flag)
        console.log("Data shown to the client");
    else
        console.log("Data not recieved from the database yet!");
}

talkToDatabase(showToClient);