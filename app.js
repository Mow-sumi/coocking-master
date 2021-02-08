
const searchFoods = () =>{
    const searchText = document.getElementById('search-field');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText.value}`
    fetch(url)
  .then(res => res.json())
  .then (data =>displayStrMeals (data.meals))
}

const displayStrMeals = meals =>{
const mealContainerDiv = document.getElementById('meal-container');
    meals.forEach(meal=>{
    const mealDiv = document.createElement('div');
    mealDiv.className = 'meal'
    

const mealsInfo = `
<h2 class="mealName">${meal.strMeal}</h2>
<p class="mealCategory">${meal.strCategory}</p>
<p class="ingredient">${meal.strIngredient1}</p>
<p class="ingredient">${meal.strIngredient2}</p>
<p class="ingredient">${meal.strIngredient3}</p>
<p class="ingredient">${meal.strIngredient4}</p>
<p class="ingredient">${meal.strIngredient5}</p>
<img src="strThumb"></img>
<button onclick = "displayMealDetail('${meal.strMeal}')">Details</button>
`
    mealDiv.innerHTML= mealsInfo;
    mealContainerDiv.appendChild(mealDiv);


    });
        

}
const displayMealDetail = meal=>{
    const url = `https://www.themealdb.com/api/json/v1/1/${meal.strInstruction}`
  console.log(meal);  
}


