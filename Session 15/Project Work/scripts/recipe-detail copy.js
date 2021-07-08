let params = window.location.href.split("?")[1];
let recipeName = decodeURI(params.split("=")[1]);

document.getElementById("recipe-title").innerHTML = recipeName;

var xhttp = new XMLHttpRequest();
xhttp.open("GET", `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`, true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        addToPage(JSON.parse(this.responseText).meals[0]);
    }
}

function addToPage(data) {
    let ingredients = [];
    let measurements = []; 
    for(let d in data) {
        if(d.indexOf("strIngredient") !== -1 && (data[d] !== "" && data[d] !== null)) {
            ingredients.push(data[d]);
        };
        if(d.indexOf("strMeasure") !== -1 && (data[d] !== "" && data[d] !== null)) {
            measurements.push(data[d]);
        } 
    }

    for(let i=0; i<ingredients.length; i++) {
        let list = document.createElement("li");
        list.setAttribute("class", "recipe-ingredient");
        let text = document.createTextNode(`${ingredients[i]} (${measurements[i]})`);
        list.appendChild(text);
        let ingredientsContainer = document.getElementById('recipe-ingredients');
        ingredientsContainer.appendChild(list);
    }
    
    document.getElementById("recipe-video").src = data.strYoutube.replace("watch?v=", "embed/");
    document.getElementById("recipe-instructions").innerHTML = data.strInstructions;
}