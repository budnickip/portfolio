const validate = () =>{
    validateName()
    validateEmail()
}

const validateName = () =>{
    const name = document.querySelector('#name')
    name.addEventListener('change', function(){ 
        const regex = /\w{3,}/g;
        if(!regex.test(name.value)){
            if(!name.classList.contains('nameInputError')){
                name.classList.add('nameInputError')
                let newError = createError('nameTextError', 'It should contain minimum 3 characters.')
                name.parentElement.insertBefore(newError, name.nextElementSibling)
            }
        }else{
            name.classList.remove('nameInputError')
            name.value = name.value.trim()
            name.value = name.value.charAt(0).toUpperCase() + name.value.slice(1)
            document.querySelector('.nameTextError') ? document.querySelector('.nameTextError').remove() : ''
        }
    })
}

const validateEmail = () =>{
    const email = document.querySelector('#email')
    email.addEventListener('change', function(){
        const regex = /\w{2,}[@]\w{1,}\.\w{2,}/g;
        if(!regex.test(email.value)){
            if(!email.classList.contains('emailInputError')){
                email.classList.add('emailInputError')
                let newError = createError('emailTextError', "It isn't email adress")
                email.parentElement.insertBefore(newError, email.nextElementSibling)
            }
        }else{
            email.classList.remove('emailInputError')
            email.value = email.value.trim()
            document.querySelector('.emailTextError') ? document.querySelector('.emailTextError').remove() : ''
        }
    })
}

const createError = (className, text) => {
    let newError = document.createElement('p');
    newError.className = className;
    newError.appendChild(document.createTextNode(text))
    return newError;
}

export default validate