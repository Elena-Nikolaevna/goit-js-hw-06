const textInput = document.querySelector("#validation-input");
console.log(textInput);

const maxLengthTextInput = document.querySelector('input[data-length="6"]');
//console.log(maxLengthTextInput.dataset.length);

textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputValue = event.currentTarget.value.length
  console.log(inputValue);
  if (inputValue <= maxLengthTextInput){
    textInput.classList.remove("valid");
    return textInput.classList.add("invalid");
  }
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

