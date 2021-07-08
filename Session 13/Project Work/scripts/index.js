let recipes = [
  "Spicy Arrabiata Penne",
  "Pizza Express Margherita",
  "Matar Paneer",
  "Rocky Road Fudge",
  "Vegan Lasagna",
  "Ratatouille",
  "Baingan Bharta",
  "Tuna and Egg Briks",
  "Pancakes",
  "Dal Fry",
];

let recipeDataList = [];

for(let i=0; i<recipes.length; i++) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipes[i]}`)
        .then(response => response.json())
        .then(recipeData => addToHome(recipeData.meals[0]));
}

let recipesTitlesContainer = document.getElementsByClassName("recipe-titles-container")[0];

function addToHome(data) {
    let container1 = `
        <div class="recipe-title"
             style="background-image: url(${data.strMealThumb})"
             onclick="goToRecipe(this)" 
             data-category=${data.strArea}
             recipe-name=${data.strMeal}>
             <div class="recipe-text-container">
                <span class="recipe-title-text">${data.strMeal}</span>
             </div>
        </div>
    `;

    recipesTitlesContainer.innerHTML += container1;
}

function goToRecipe(recipe) {
    let recipeName = recipe.getAttribute("recipe-name");
    window.location.href = `recipe-detail.html?recipe=${recipeName}`;
}

document.getElementById('categories').addEventListener('change', selectCategory);

function selectCategory(event) {
    let category = event.target.value;
    let recipeTitles = document.getElementsByClassName("recipe-title");

    for(let i=0; i<recipeTitles.length; i++) {
        if(category === 'All') {
            recipeTitles[i].style.display = "flex";
        } else {
            if(recipeTitles[i].getAttribute("data-category").toLowerCase() !== category.toLowerCase()) {
                recipeTitles[i].style.display = "none";
            } else {
                recipeTitles[i].style.display = "flex";
            }
        }
    }
}
