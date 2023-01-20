const formElement = document.querySelector('[data-form]');

const toggleError = (element, condition) => {
  if (condition) {
    element.classList.remove('error');
    return true;
  }

  element.classList.add('error');
  return false;
};

const validatePhoneField = (fieldElement) => {
  const letters = /[А-Яа-яA-Za-z]/;
  const fieldValue = fieldElement.value.trim();
  const condition = !fieldValue.match(letters) && (fieldValue.length > 0);

  return toggleError(fieldElement, condition);
};

const validateNameField = (fieldElement) => {
  const fieldValue = fieldElement.value.trim();
  const letters = /^[А-Яа-яA-Za-z\s\-]+$/;
  const condition = (fieldValue.match(letters) && fieldValue.length > 0);

  return toggleError(fieldElement, condition);
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const target = event.target;
  const nameFieldElement = target.querySelector('[data-name]');
  const phoneFieldElement = target.querySelector('[data-phone]');

  if (validateNameField(nameFieldElement) && validatePhoneField(phoneFieldElement)) {
    target.submit();
  }
};

const initForm = () => {
  if (!formElement) {
    return;
  }

  formElement.addEventListener('submit', onFormSubmit);
};

export {initForm};
