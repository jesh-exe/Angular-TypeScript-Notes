var flag = false;

var talkToDatabase = () => {
    setTimeout(() => {
        console.log("Data Fetched from the database");
        flag = true;
    }, 2000);
}

var showToClient = () => {
    if(flag)
        console.log("Data shown to the client");
    else
        console.log("Data not recieved from the database yet!")
}

talkToDatabase();
showToClient();