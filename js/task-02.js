const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientElement = {
    ingredientsList: document.querySelector("#ingredients"),
};

const newIngredientList = ingredients.map(nameIngridients => {    
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = nameIngridients;

    return listItem;
});
ingredientElement.ingredientsList.append(...newIngredientList);
//console.log(newIngredientList)

//+Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//+Добавит название ингредиента как его текстовое содержимое.
//+Добавит элементу класс item.
//+После чего вставит все <li> за одну операцию в список ul#ingredients. 

