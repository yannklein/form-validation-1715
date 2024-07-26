console.log("Hi Validators!");

// 1 select 
//select the inputs
const formInputs = document.querySelectorAll(".form-control");

//select the checkboxs
const formCheckbox = document.querySelector("#tos");
const formSubmit = document.querySelector("#shippingSubmit");

const enableSubmit = () => {
  if (validateForms()) {
    formSubmit.innerText = "Submit";
    formSubmit.disabled = false;
  }
}

const validateInput = (event) => {
  const selectedElement = event.currentTarget;
  // console.log(selectedElement);
  if (selectedElement.value !== ""  ) {
    selectedElement.classList.remove("is-invalid");
    selectedElement.classList.add("is-valid");
  }
  else {
    selectedElement.classList.remove("is-valid");
    selectedElement.classList.add("is-invalid");
  }
  console.log(validateForms());

  enableSubmit()
}

const validateForms = () => {
  const validated = Array.from(formInputs).every((input) => {
    return input.classList.contains("is-valid");
  })
  return validated && formCheckbox.checked
}


// 2 listen
formInputs.forEach((input) => {
  input.addEventListener("blur", validateInput)
});

formCheckbox.addEventListener("change", enableSubmit)

// add a listener for a BLUR on EACH inputs
// check IF input is VALID and add class "is valid"
// check the whole form to make sure that everything is valid 
//-> if valid = enable the input btn and change button text
// listen for a change on the checkbox
// check the whole form to make sure that everything is valid 