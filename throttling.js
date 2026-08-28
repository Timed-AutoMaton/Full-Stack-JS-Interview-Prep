const myThrottle = (fn, d) => {
    return function (...args) {
        document.getElementById("myid").disabled = true;
        setTimeout(() => {
            fn();
        }, d);
    }
}


const newFun = myThrottle(() => {
    document.getElementById("myid").disabled = false;
    console.log("User Clicked!");
}, 5000);
