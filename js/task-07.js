
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
// + В результате при перетаскивании ползунка будет меняться размер текста.
