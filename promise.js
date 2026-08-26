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

function createData(newData) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData);
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject("Invalid");
            }
        }, 2000);
    })

}

createData({ name: "Vivek", Profession: "Software Engineer" }).then(getDatas);

