const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onFormSubmit); //Блок подписок

function onFormSubmit(event) {
    //блок обработчиков
    event.preventDefault();

    const form = event.currentTarget;
    const formElement = form.elements;
    const mail = formElement.email.value;
    const password = formElement.password.value;

    if (mail.length === 0 || password.length === 0) {
        alert("All fields must be filled!");
        form.reset();
    } else {
        const formData = {
            mail,
            password,
        };

        form.reset();
        console.log(formData);
    }
}

// + Обработка отправки формы form.login-form должна быть по событию submit.
// + При отправке формы страница не должна перезагружаться.
// + Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// + Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// + Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.