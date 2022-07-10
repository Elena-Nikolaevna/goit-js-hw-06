const refs = {
    counter: document.querySelector("#value"),
    buttonActionIncrement: document.querySelector("[data-action = increment]"),
    buttonActionDecrement: document.querySelector("[data-action = decrement]"),
};
//console.log(refs.counter);
//console.log(refs.buttonActionIncrement);
//console.log(refs.buttonActionDecrement);

refs.buttonActionDecrement.addEventListener(
    "click",
    onClickButtonActionDecrement,
);
refs.buttonActionIncrement.addEventListener(
    "click",
    onClickButtonActionIncrement,
);

let counterValue = 0;

function onClickButtonActionIncrement() {
    counterValue += 1;

    refs.counter.textContent = counterValue;
}
function onClickButtonActionDecrement() {
    counterValue -= 1;

    refs.counter.textContent = counterValue;
}
//+ Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//+ Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//+ Обновляй интерфейс новым значением переменной counterValue
