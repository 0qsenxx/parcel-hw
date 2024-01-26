import { formData } from "./form-data";

const formRef = document.querySelector(".form");
const nameInputRef = document.querySelector(".name-input");
const emailInputRef = document.querySelector(".email-input");
const formElements = formRef.elements;
formRef.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (nameInputRef.value.length > 1 || emailInputRef.value.length > 1) {
    formData.name = formElements.name.value;
    formData.email = formElements.email.value;
    formData.comments = formElements.comments.value;
    alert("Форма успішно відправлена 🥂");
    console.log(formData);
    formRef.reset();
  } else {
    alert("Заповніть поля форми ❗️");
  }
});
