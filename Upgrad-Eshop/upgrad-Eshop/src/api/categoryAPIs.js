// Function to fetch all categories from the server
export const fetchAllCategories = (accessToken) => {
    // Create a promise to handle asynchronous operation
    let promiseResolveRef = null;
    let promiseRejectRef = null;
    let promise = new Promise((resolve, reject) => {
        promiseResolveRef = resolve;
        promiseRejectRef = reject;
    });
    // Fetch categories from the server
    fetch('http://localhost:3001/api/v1/products/categories', {
        method: 'GET',
        headers: {
            'x-auth-token': accessToken,
        },
    }).then((response) => {
        // Handle response from the server
        response.json().then((json) => {
            // Capitalize and filter unique categories
            let arr = [];
            for(let i = 0; i < json.length; i++) {
                let c = json[i].toUpperCase();
                if(!arr.includes(c)) {
                    arr.push(c);
                }
            }
            arr.sort();
            arr = ["ALL", ...arr];
            if(response.ok) {
                // Resolve promise with formatted categories on success
                promiseResolveRef({
                    data: arr,
                    response: response,
                });
            } else {
                // Reject promise with error message on failure
                promiseRejectRef({
                    reason: "Server error occurred.",
                    response: response,
                });
            }
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
