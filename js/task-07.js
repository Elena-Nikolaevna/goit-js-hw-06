/* Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */
const refs = {
    input: document.querySelector("#font-size-control"),
    span: document.querySelector("#text"),
};
console.dir(refs.input);
//console.log(refs.span);

refs.input.addEventListener("input", onClickResize); // Слушатель принимает( инпут, что сделать)
function onClickResize(event) {
    const inputValue = event.currentTarget.value;
    refs.span.style.fontSize = `${inputValue}px`;
}
