//Promise with TypeScript
function fetchUser(id: number): Promise<{ id: number, name: string }> {
    return new Promise(() => {
        setTimeout(() => {
            resolve({ id, name: "Zubi" });
        }, 1000);
    })
}


//Async/await
async function getUserData(id: number): Promise<void> {
    try {
        const user = await fetchUser(id);
        console.log(user.name);
    } catch (error) {
        console.error("Error fetching user: ", error);
    }
}