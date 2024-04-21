// Function to fetch all addresses from the server
export const fetchAllAddresses = (accessToken) => {
    // Create a promise to handle asynchronous operation
    let promiseResolveRef = null;
    let promiseRejectRef = null;
    let promise = new Promise((resolve, reject) => {
        promiseResolveRef = resolve;
        promiseRejectRef = reject;
    });
    // Fetch addresses from the server
    fetch('http://localhost:3001/api/v1/addresses', {
        method: 'GET',
        headers: {
            'x-auth-token': accessToken,
        },
    }).then((response) => {
        // Handle response from the server
        response.json().then((json) => {
            if(response.ok) {
                // Resolve promise with data on success
                promiseResolveRef({
                    data: json,
                    response: response,
                });
            } else {
                // Reject promise with error message on failure
                promiseRejectRef({
                    reason: "Server error occurred.",
                    response: response,
                });
            }
        }).catch(() => {
            // Reject promise with error message if JSON parsing fails
            promiseRejectRef({
                reason: "Some error occurred.",
                response: response,
            });
        });
    }).catch((err) => {
        // Reject promise with error message if request fails
        promiseRejectRef({
            reason: "Some error occurred.",
            response: err,
        });
    });
    // Return the promise
    return promise;
};

// Function to create a new address
export const createAddress = (requestJson, accessToken) => {
    // Create a promise to handle asynchronous operation
    let promiseResolveRef = null;
    let promiseRejectRef = null;
    let promise = new Promise((resolve, reject) => {
        promiseResolveRef = resolve;
        promiseRejectRef = reject;
    });
    // Send request to create new address
    fetch('http://localhost:3001/api/v1/addresses', {
        method: 'POST',
        body: JSON.stringify(requestJson),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'x-auth-token': accessToken,
        },
    }).then((response) => {
        // Handle response from the server
        response.text().then((json) => {
            if(response.ok) {
                // Resolve promise with success message on success
                promiseResolveRef({
                    message: "Product " + requestJson.name + " added successfully.",
                    response: response,
                });
            } else {
                // Reject promise with error message on failure
                let message = json.message;
                if(message === undefined || message === null) {
                    message = "Server error occurred. Please try again.";
                }
                promiseRejectRef({
                    reason: message,
                    response: response,
                });
            }
        }).catch(() => {
            // Reject promise with error message if JSON parsing fails
            promiseRejectRef({
                reason: "Some error occurred.",
                response: response,
            });
        });
    }).catch((err) => {
        // Reject promise with error message if request fails
        promiseRejectRef({
            reason: "Some error occurred. Please try again.",
            response: err,
        });
    });
    // Return the promise
    return promise;
};
