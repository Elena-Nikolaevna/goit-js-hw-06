const navCategories = {
    categories: document.querySelector("#categories"),
    categoriesItems: document.querySelectorAll(".item"),
};

//console.log(navCategories.categories);
//console.log(navCategories.categoriesItems);

const categorieslength = navCategories.categories.children.length;
console.log("Number of categories: ", categorieslength);

navCategories.categoriesItems.forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    const categoryCountElements = item.lastElementChild.children.length;
    console.log("Category: ", categoryName);
    console.log("Elements: ", categoryCountElements);
});


// +  1.Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// +  2.Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
//текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
  