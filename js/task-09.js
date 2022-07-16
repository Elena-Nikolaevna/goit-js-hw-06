function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    bodyBackgroundColor: document.body,
    chengeColorButton: document.querySelector(".change-color"),
    requiredColor: document.querySelector(".color"),
};

refs.chengeColorButton.addEventListener("click", onchengeColorButton);

function onchengeColorButton() {
    let color = getRandomHexColor();
    refs.bodyBackgroundColor.style.backgroundColor = color;
    refs.requiredColor.textContent = color;
}
//console.log(refs.bodyBackgroundColor);
//console.log(refs.chengeColorBtn);
//console.log(refs.requiredColor);


// + Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color