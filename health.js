
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const pnumber = document.getElementById("pnumber");

form.addEventListener("submit",(e)=> {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    //get the values from the input

   
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const pnumberValue = pnumber.value.trim();

    if (firstnameValue === ""){

        setErrorFor(firstname,"First name is blank");
    }

    else if (firstnameValue.length < 3){
        setErrorFor(firstname, "First name must at least be 4 aphabet long");
    }

    else if (firstnameValue.length > 25){
        setErrorFor(firstname, "First name is too long");
    }

    else {
        setSuccessFor (firstname);
    }

    // last name vallidation 
    if (lastnameValue === ""){

        setErrorFor(lastname,"last name is blank");
    }

    else if (lastnameValue.length < 3){
        setErrorFor(lastname, "last name must at least be 4 aphabet long");
    }

    else if (lastnameValue.length > 25){
        setErrorFor(lastname, "last name is too long");
    }

    else {
        setSuccessFor (lastname);
    }

    // email validation
    if (emailValue === ""){

        setErrorFor(email,"Email is blank");
    }

    else if (emailValue.length < 10){
        setErrorFor(email, "Email must at least be 4 aphabet long");
    }

    else {
        setSuccessFor (email);
    }
    // password validation
    if (passwordValue === ""){

        setErrorFor(password,"password is blank");
    }

    else if (passwordValue.length < 3){
        setErrorFor(password, "password must at least be 4 aphabet long");
    }

    else if (passwordValue.length > 25){
        setErrorFor(password, "password is too long");
    }

    else {
        setSuccessFor (password);
    }

    // password2 validation
    if (password2Value === ""){

        setErrorFor(password2,"Repeat password is blank");
    }

    else if (password2Value !== passwordValue){
        setErrorFor(password2, "password mismatch");
    }

    else if(password2Value === passwordValue) {
        setSuccessFor(password2)
    }

    else {
        setErrorFor (password2);
    }

    // phone number 
    if (pnumberValue === ""){
        setErrorFor(pnumber,"Phone number is blank");
    }

    else if (pnumberValue.length < 3){
        setErrorFor(pnumber, "last name must at least be 11 numbers long");
    }

    else if (pnumberValue.length > 14){
        setErrorFor(pnumber, "last name is too long");
    }

    else {
        setSuccessFor (pnumber);
    }



}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = "form-control error";
};

function setSuccessFor(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //add error class
    formControl.className = "form-control success";
};

