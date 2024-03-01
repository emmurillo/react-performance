const addLoadingTime = () => {
    return `
    // Simulate a network delay of 3 seconds (adjust as needed)
    const delayMilliseconds = 3000;

    // Add overhead using Fetch
    setTimeout(function () {
        fetch('https://jsonplaceholder.typicode.com/todos/1') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, delayMilliseconds);
    `
}

const randomElements = () => {
    return `
    // Generate 1000 random numbers and add them to the array
    for (let i = 0; i < 200000000; i++) {
        Math.floor(Math.random() * (1000 - 1 + 1)) + 1; // Adjust the range as needed
    }
    console.log('done');
    `
}

export {
    addLoadingTime,
    randomElements
};