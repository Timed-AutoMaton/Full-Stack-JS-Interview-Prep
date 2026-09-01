import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString()); // ✅ Fixed!
            console.log("Hi");
        }, 1000);

    }, []);

    return (
        <>
            <h1>Current Time: {time}</h1>
        </>
    );
}

export default Clock;