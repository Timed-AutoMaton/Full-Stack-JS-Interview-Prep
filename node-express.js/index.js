const http = require("http");

const server = http.createServer((req, res) => {
    const obj = {
        name: "Zubi",
        surname: "Khal"
    }
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(obj));
});

server.listen(3000, () => {
    console.log("Server Started");
})