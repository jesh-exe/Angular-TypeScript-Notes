var flag = false;

var talkToDatabase = (callback) => {
    setTimeout(() => {
        console.log("Data Fetched from the database");
        flag = true;
        callback();
    }, 2000);
}

var showToClient = () => {
    if(flag)
        console.log("Data shown to the client");
    else
        console.log("Data not recieved from the database yet!")
}

talkToDatabase(showToClient);