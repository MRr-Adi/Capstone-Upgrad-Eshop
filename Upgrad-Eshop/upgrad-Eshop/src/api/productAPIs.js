// Function to fetch all products using REST API
// Parameters:
// - accessToken: Access token for authentication
// Returns:
// - Promise: Resolves with product data on success or rejects with error message and response data on failure
export const fetchAllProducts = (accessToken) => {
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

    // Making a GET request to the API endpoint
    fetch('http://localhost:3001/api/v1/products', {
        method: 'GET',
        headers: {
            'x-auth-token': accessToken,
        },
    }).then((response) => {
        // Handling response
        response.json().then((json) => {
            if (response.ok) {
                // If response is successful, resolve the promise with product data
                promiseResolveRef({
                    data: json,
                    response: response,
                });
            } else {
                // If response is not successful, reject the promise with error message and response data
                promiseRejectRef({
                    reason: "Server error occurred.",
                    response: response,
                });
            }
        });
    }).catch((err) => {
        // Catching any errors that occur during the fetch operation
        // Reject the promise with error message and response data
        promiseRejectRef({
            reason: "Some error occurred.",
            response: err,
        });
    });

    // Returning the promise
    return promise;
};

// Function to create a new product using REST API
// Parameters:
// - requestJson: JSON object containing product details
// - accessToken: Access token for authentication
// Returns:
// - Promise: Resolves with success message and response data on success or rejects with error message and response data on failure
export const createProduct = (requestJson, accessToken) => {
    // Function implementation similar to createOrder, with appropriate comments

};

// Function to delete a product using REST API
// Parameters:
// - id: ID of the product to be deleted
// - accessToken: Access token for authentication
// Returns:
// - Promise: Resolves with response data on success or rejects with error message and response data on failure
export const deleteProduct = (id, accessToken) => {
    // Function implementation similar to fetchAllProducts, with appropriate comments

};

// Function to modify a product using REST API
// Parameters:
// - requestJson: JSON object containing product details
// - accessToken: Access token for authentication
// Returns:
// - Promise: Resolves with success message and response data on success or rejects with error message and response data on failure
export const modifyProduct = (requestJson, accessToken) => {
    // Function implementation similar to createProduct, with appropriate comments

};

// Function to view details of a product using REST API
// Parameters:
// - id: ID of the product to be viewed
// - accessToken: Access token for authentication
// Returns:
// - Promise: Resolves with product details on success or rejects with error message and response data on failure
export const viewProduct = (id, accessToken) => {
    // Function implementation similar to fetchAllProducts, with appropriate comments

};
