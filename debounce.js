function debounce(fn, delay) {
    let timerId;                                  // (A) Shared across all calls
    return function (...args) {                   // (B) The debounced function
        clearTimeout(timerId);                    // (C) Cancel previous timer
        timerId = setTimeout(() => {              // (D) Start new timer
            fn(...args);
        }, delay);
    };
}

// The actual search function
const search = (query) => {
    console.log(`Searching for:`, query);
};

// Create a debounced version of search (1 second delay)
const searchWithDebounce = debounce(search, 1000);

// Get the input element
const input = document.getElementById('search');

// Attach event listener – every keyup triggers the debounced function
input.addEventListener('keyup', function (event) {
    const query = event.target.value;   // current text in input
    searchWithDebounce(query);
});