//Add Enter button functionality
document
    .getElementById("search-field")
    .addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            document.getElementById("search-btn").click();
        }
    });
//Call the api
const searchItems = () => {
    const searchField = document.getElementById("search-field").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchField}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => showItems(data.meals));
};
//Showing Items
const showItems = (items) => {
    const foodsContainer = document.getElementById("food-container");
    foodsContainer.innerHTML = "";
    items.forEach((singleItem) => {
        const foodsDiv = document.createElement("div");
        foodsDiv.className = "food-items";
        foodsDiv.innerHTML = 
                            `<div onclick="getItemDetails('${items[0].strMeal}');" class='food-box'>
                            <div class='food-icon'><img src='${singleItem.strMealThumb}'></div>
                            <div class='food-name'><h2>${singleItem.strMeal}</h2></div>`;
        foodsContainer.appendChild(foodsDiv);
        // getItemDetails(items[0].strMeal);
        console.log(items);
    });
};
//Item Details
const getItemDetails = async (name) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    const res = await fetch(url);
    const data = await res.json();
    showItemDetails(data);
};
//show item details
const showItemDetails = (details) => {
    console.log(details);
    const foodDetails = document.getElementById("food-details");
    const detailsDiv = document.createElement("div");
    detailsDiv.innerHTML = `<img src="${details.meals[0].strMealThumb}">
                            <div class="details-name">${details.meals[0].strMeal}</div>
                            <div class="details-ingredient">${details.meals[0].strIngredient1}</div>
                            <div class="details-ingredient">${details.meals[0].strIngredient10}</div>`;
    foodDetails.appendChild(detailsDiv);
};
