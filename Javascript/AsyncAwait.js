// Example using async and await
async function fetchData() {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Failed to fetch data");
            }
        }, 2000); // Simulating a delay of 2 seconds
    });
}

async function processData() {
    try {
        // Wait for the fetchData function to complete
        const data = await fetchData();
        console.log("Data:", data);
        console.log("Code Blocked Till the promise is resolved")

    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
processData();
console.log("Other Non Blocking Tasks");