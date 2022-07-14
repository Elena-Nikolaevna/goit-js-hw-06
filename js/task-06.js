const textInput = document.querySelector("#validation-input");
//console.dir(textInput);
textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    const maxLengthTextInput = +textInput.getAttribute("data-length");
    //console.log(maxLengthTextInput);
    const inputCurrent = event.currentTarget;
    //console.log(inputCurrent);
    const inputValueLength = inputCurrent.value.length;
    //console.log(inputValue);

    if (
        inputValueLength < maxLengthTextInput ||
        inputValueLength > maxLengthTextInput
    ) {
        inputCurrent.classList.remove("valid");
        return inputCurrent.classList.add("invalid");
    }
    if (inputValueLength === maxLengthTextInput) {
        inputCurrent.classList.remove("invalid");
        return inputCurrent.classList.add("valid");
    }
}
