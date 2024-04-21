// Function to create a new order using REST API
// Parameters:
// - requestJson: JSON object containing order details
// - accessToken: Access token for authentication
// Returns:
// - Promise: Resolves with response data on success or rejects with error message and response data on failure
export const createOrder = (requestJson, accessToken) => {
    // Note: We are returning a promise to handle asynchronous behavior
    // Caller of the function should await the promise to get the result

    // Variables to hold references for resolving or rejecting the promise
    let promiseResolveRef = null;
    let promiseRejectRef = null;

    // Creating a new promise instance
    let promise = new Promise((resolve, reject) => {
        promiseResolveRef = resolve;
        promiseRejectRef = reject;
    });

    // Making a POST request to the API endpoint
    fetch('http://localhost:3001/api/v1/orders', {
        method: 'POST',
        body: JSON.stringify(requestJson),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'x-auth-token': accessToken,
        },
    }).then((response) => {
        // Handling response
        response.text().then(() => {
            if (response.ok) {
                // If response is successful, resolve the promise with response data
                promiseResolveRef({
                    response: response,
                });
            } else {
                // If response is not successful, reject the promise with error message and response data
                promiseRejectRef({
                    reason: "Some error occurred. Please try again.",
                    response: response,
                });
            }
        });
    }).catch((err) => {
        // Catching any errors that occur during the fetch operation
        // Reject the promise with error message and response data
        promiseRejectRef({
            reason: "Server error occurred. Please try again.",
            response: err,
        });
    });

    // Returning the promise
    return promise;
};
