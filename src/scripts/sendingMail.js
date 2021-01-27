import {validateName, validateEmail, validateMessage} from './validateForm.js'

const sendingMail = () => {
    const sendButton = document.querySelector('.contact-form__button')
sendButton.addEventListener("click", function(event){
    let nameValidation = validateName()
    let mailValidation = validateEmail()
    let messageValidation = validateMessage()
   // console.log(`name: ${nameV}, mail: ${mailV}, message: ${messageV}`)
    if(nameValidation && mailValidation && messageValidation){
        let data = new URLSearchParams();
        data.append("name", document.querySelector('#name').value)
        data.append("email", document.querySelector('#email').value)
        data.append("topic", document.querySelector('#topic').value)
        data.append("message", document.querySelector('#message').value)
        fetch("../kontakt.php", {
            method: "post",
            body: data
        })
        .then(function(response){
            return response.text();
        })
        .then(function(text){
            console.log(text)
        })
        .catch(function(error){
            console.log(error)
        })
        //return false;
        event.preventDefault()
        let myForm = document.querySelector(".contact-form__form");
        myForm.innerHTML = `<div class="contact-form__confirmation">
        <h4>Thank you!</h4>
        <p>Sorry, in github I can't send emails with PHP :(. Just write email to me: p.budnicki95@gmail.com</p>
        <p>Your message has been successfully sent.</p>
        </div>`
    }else{
        event.preventDefault()
    }
})
}

export default sendingMail