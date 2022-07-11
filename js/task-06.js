const textInput = document.querySelector("#validation-input");
//console.dir(textInput);

const maxLengthTextInput = document.querySelector('input[data-length="6"]');
//console.log(maxLengthTextInput.dataset.length);

textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  let inputValue = event.currentTarget.value
  console.log(inputValue);
}

/* textInput.addEventListener("focus", onInputFocus);

textInput.addEventListener("change", onInputChange);
textInput.addEventListener("input", onLicenseChange);

function onInputFocus() {
    console.log("инпут получил фокус - focus");
} */

/* function onInputBlur(event) {
    console.log("инпут потерял фокус - blur");
} */

/* function onInputChange(event) {
    console.log(event.currentTarget.value);
}

function onLicenseChange() {} */

