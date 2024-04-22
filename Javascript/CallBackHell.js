
function asyncOperation1(callback) {
    setTimeout(function () {
        const result1 = "Result 1";
        console.log("Async operation 1 completed");
        callback(result1);
    }, 1000);
}

function asyncOperation2(result, callback) {
    setTimeout(function () {
        const result2 = result + ", Result 2";
        console.log("Async operation 2 completed");
        callback(result2);
    }, 1000);
}

function asyncOperation3(result, callback) {
    setTimeout(function () {
        const result3 = result + ", Result 3";
        console.log("Async operation 3 completed");
        callback(result3);
    }, 1000);
}

function asyncOperation4(result, callback) {
    setTimeout(function () {
        const result4 = result + ", Result 4";
        console.log("Async operation 4 completed");
        callback(result4);
    }, 1000);
}



asyncOperation1(function (result1) {

    asyncOperation2(result1, function (result2) {

        asyncOperation3(result2, function (result3) {

            asyncOperation4(result3, function (result4) {

                console.log("Final result:", result4);
            });
        });
    });
});