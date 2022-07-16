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
