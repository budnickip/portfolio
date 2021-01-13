const sendingMail = () => {
    const sendButton = document.querySelector('.contact-form__button')
sendButton.addEventListener("click", function(event){
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
    <p>Mail został poprawnie wysłany, dziękujemy za kontakt!<p>
    </div>`
})
}

export default sendingMail