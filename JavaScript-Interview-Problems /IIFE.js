const systemStatus = {
    message: "online",
    time: (() => {
        const now = new Date();
        const hourPart = now.getHours().toString().padStart(2, "0");
        const minutePart = now.getMinutes().toString().padStart(2, "0");

        

        return `${hourPart}: ${minutePart}`;
    })(),
};

console.log(systemStatus);
