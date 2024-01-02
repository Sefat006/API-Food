const loadMeals = async(search)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    const res = await fetch(url);
    const data = await res.json();
    displayMeals(data.meals);
}
const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick="loadMealDetails(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })

}
const searchFood = () =>{
    // console.log('searching');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value= '';
}
document.getElementById('search-field').addEventListener('keypress', function(e){
    console.log(e.key);
    if(e.key === 'Enter'){
        searchFood('fish');
    }
})

// add detail of items,
// add a onclick on innerHTML and put a dynamic idname
const loadMealDetails = async(idMeal) =>{
    // console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
}
const displayMealDetails = meal =>{
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    detailContainer.appendChild(mealDiv);
}
// loadMeals('');