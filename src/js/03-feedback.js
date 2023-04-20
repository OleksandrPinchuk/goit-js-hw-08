import throttle from "lodash.throttle";
const STORAGE_KEY = `feedback-form-state`;
const formEl = document.querySelector(`.feedback-form`);

const savedMessage = localStorage.getItem(STORAGE_KEY);
const parsedMessage = JSON.parse(savedMessage);


formEl.addEventListener(`input`, throttle(onFormInput, 500));
formEl.addEventListener(`submit`, onFormSubmit);

onLoadingCheck();
    
function onFormInput() {
    const formMessage = {
        email: formEl.email.value,
        message: formEl.message.value,
    }
    const formMessageString = JSON.stringify(formMessage);
    localStorage.setItem(STORAGE_KEY, formMessageString);
};

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(localStorage.getItem(STORAGE_KEY));
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onLoadingCheck() {
    if (savedMessage) {
        formEl.email.value = parsedMessage.email;
        formEl.message.value = parsedMessage.message;
    }
};
