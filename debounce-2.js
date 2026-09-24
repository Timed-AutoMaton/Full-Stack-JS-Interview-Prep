let counter = 0;
function getData() {
    console.log(`Fetching Data ${counter++}`);

}

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const betterFunction = debounce(getData, 1000);