const datas = [
    { name: "Zubi", Profession: "Software Engineer" },
    { name: "Salman", Profession: "Software Engineer" }
];

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

getDatas();