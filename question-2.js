console.log("heloo2");



// Q2



fetch ("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=9283a1ff815744d8a21d5b3579501f60")

.then (response => response.json())

.then (function (data) {
     soonFunction(data.results)
     console.log(data.results)
})

.catch (error => console.log(error.message))



outPut = document.getElementById("Hey");

function soonFunction(list) {

    outPut.innerHTML = "";
    
    let slicedLIst = list.slice (0, 8); //Kunne satt denne i fetch og

    for (let item of slicedLIst) {
        
    let newDiv = "";
    newDiv =
    `<div>
    <h2>Game name: ${item.name}</h2>
    <p>Rating: ${item.rating}</p>
    <p>Tags: ${item.tags.length}</p>
    </div>
    `
    outPut.innerHTML += newDiv;
}
}





/*
// hvordan få det til med break istedenfor slice?

function soonFunction(list) {

    outPut.innerHTML = "";
    for (let item of list) {

    let newDiv = "";
    newDiv =
    `<div>
    <h2>Game name: ${item.name}</h2>
    <p>Rating: ${item.rating}</p>
    <p>Tags: ${item.tags.length}</p>
    </div>
    `
    outPut.innerHTML += newDiv;
    if (item > max) {break};

}
}
*/




 
/* Hvordan bruke vanlig for, og accessere objekt properties? Hva må inni ${ }? Må skrive list[i].name

function soonFunction(list) {
for (let i = 0; i < 8; i++) {
    let newDiv = "";
    newDiv =
    `<div>
    <h2>My name is ${i.name}</h2>
    </div>
    `
    outPut.innerHTML += newDiv;
}
}
*/
