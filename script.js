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
        .then((data) => showItems(data.strMeal));
};
//Showing Items
const ShowItems = (items) => {
    const foodsContainer = document.getElementById("food-container");
    foodsContainer.innerHTML = "";
    items.forEach((singleItem) => {
        const foodsDiv = document.createElement("div");
        foodsDiv.className = "food-items";
        foodsDiv.innerHTML = `<div class='food-box'>
        <div class='food-icon'><img src='${singleItem.strMealThumb}'></div>
        <div class='food-name'><h2>${singleItem.strMeal}</h2></div>
        </div>`;
        foodsContainer.appendChild(foodsDiv);
    });
};
//Item Details
const getItemDetails = async (name) =>{
    const foodDetails = document.getElementById("food-details")
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    const res = await fetch(url)
    const data = await res.json();
    console.log(data);
}
