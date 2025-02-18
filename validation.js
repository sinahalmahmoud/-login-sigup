const form=document.getElementById('form')
const firstname_input = document.getElementById('firstname_input')
const lastname_input = document.getElementById('lastname_input')
const email_input = document.getElementById('email_input')
const password_input = document.getElementById('password_input')
const repeat_password_input = document.getElementById('repeat-password_input')
const error_message = document.getElementById('error-message')
form.addEventListener('submit', (e) =>{

   
 let errors =[]   

 if(firstname_input)// we are in the signup page
    {
    errors = getSignupFormErrors(firstname_input.value, lastname_input.value,email_input.value,password_input.value,repeat_password_input.value)
    }
 else//we are in the login page
  { errors = getLoginFormErrors(email_input.value,password_input.value)
  }

  if(errors.length > 0){
    e.preventDefault();
    error_message.innerText = errors.join(". ")
  }
})
function getSignupFormErrors(firstname,lastname,email,password,repeatpassword)
{
let errors =[]
if(firstname === '' || firstname === null ) {
    errors.push('firstname is required')
    firstname_input.parentElement.classList.add('incorrect')

}
if(lastname === '' || lastname === null ) {
    errors.push('lastname is required')
    lastname_input.parentElement.classList.add('incorrect')
    
}
if(email === '' || email === null ) {
    errors.push('email is required')
    email_input.parentElement.classList.add('incorrect')
    
}
if(password === '' || password === null ) {
    errors.push('password is required')
    password_input.parentElement.classList.add('incorrect')
    
}
if(repeatpassword === '' || repeatpassword === null ) {
    errors.push('repeatpassword is required')
    repeat_password_input.parentElement.classList.add('incorrect')
    
}
if(password.length <8 ){
    errors.push('Password must have at least 8 charecters')
    password_input.parentElement.classList.add('incorrect')
}
if(password !== repeatpassword){
    errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')

}
return errors;
}




function getLoginFormErrors(email,password){
    let errors=[];

    if(email === '' || email === null ) {
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
        
    }
    if(password === '' || password === null ) {
        errors.push('password is required')
        password_input.parentElement.classList.add('incorrect')
        
    }

    return errors;

}



const allinputs = [firstname_input, lastname_input,email_input,password_input,repeat_password_input].filter(input => input != null)
allinputs.forEach(input =>{
    input.addEventListener('input',() =>{
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText= ''
        }
    })
})
