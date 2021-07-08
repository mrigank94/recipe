let url = window.location.href;
let recipeName = url.split("=")[1];

let decodedRecipeName = decodeURI(recipeName);

document.getElementById("recipe-title").innerHTML = decodedRecipeName;

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${decodedRecipeName}`)
        .then(response => response.json())
        .then(recipeData => addToPage(recipeData.meals[0]));


function addToPage(data) {
    let ingredients = [];
    let measurements = []; 
    for(let key in data) {
        if(key.includes("strIngredient") && (data[key] !== "" && data[key] !== null)) {
            ingredients.push(data[key]);
        };
        if(key.includes("strMeasure") && (data[key] !== "" && data[key] !== null)) {
            measurements.push(data[key]);
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