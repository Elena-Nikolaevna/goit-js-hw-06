const refs = {
    textInput: document.querySelector("#name-input"), // Строка ввода текста
    output: document.querySelector("#name-output"), // Строка ответа и замены
};
//console.dir(refs.textInput);
//console.dir(refs.output);
refs.textInput.oninput = function () {
    /* if (refs.textInput.value === "") {
        refs.output.innerHTML = "Anonymous";
    } else refs.output.innerHTML = refs.textInput.value; */
    refs.textInput.value === ""
        ? (refs.output.innerHTML = "Anonymous")
        : (refs.output.innerHTML = refs.textInput.value);
};

/* +  Напиши скрипт который, при наборе текста в инпуте 
input#name-input (событие input), подставляет его 
текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться 
строка "Anonymous". */
