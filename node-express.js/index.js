const EventEmitter = require("events");
const event = new EventEmitter();

event.on("doorbell", (val) => {
    if (val === "Salman") {
        console.log("Okay, coming!");
    }
})
event.on("doorbell", (val) => {
    console.log("Okay, coming!");
})

event.emit("doorbell", "Salman");