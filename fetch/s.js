let url = "https://swapi.dev/api/people";

async function getData() {
    try {
        let data = await fetch(url);
        let newdat = await data.json();
        console.log(newdat);

        if (newdat.results) {
            newdat.results.forEach(element => {
                show(element);
            });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

let container = document.querySelector(".container");
let peopleList = document.querySelector(".people");
let dat = getData();

function show(person) {
    let name = document.createElement("div");
    let height = document.createElement("div");
    let gender = document.createElement("div");
    name.classList.add("namee");
    height.classList.add("hight");
    gender.classList.add("gender");
    name.innerHTML = `Name: ${person.name}`;
    height.innerHTML = `height: ${person.height}`;
    gender.innerHTML = `gender: ${person.gender}`;
    peopleList.appendChild(name);
    peopleList.appendChild(height);
    peopleList.appendChild(gender);
}
