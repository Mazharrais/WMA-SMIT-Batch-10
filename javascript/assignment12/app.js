function registerForm(){

 event.preventDefault();   
var name =document.getElementById('name')
var email =document.getElementById('email')
var phnoeNumber =document.getElementById('phoneNumber')
var password =document.getElementById('password')
var confirmedPassword =document.getElementById('confirmedPassword')

if(name.value===""){
    Swal.fire({
        icon: 'error',
        title: 'name should not be empty...',
        text: 'Something went wrong!',
        
      })
}
else if(email.value===""){
    Swal.fire({
        icon: 'error',
        title: 'email should not be empty',
        text: 'Something went wrong!',
     
      })
}
   else if (phnoeNumber.value === ""){
    Swal.fire({
        icon: 'error',
        title: 'Phone Number should not be empty',
        text: 'Something went wrong!',
       
      })
   }
   else if (password.value === ""){
    Swal.fire({
        icon: 'error',
        title: 'Password should not be empty',
        text: 'Something went wrong!',
       
      })
   }
   else if (confirmedPassword.value !== password.value){
    Swal.fire({
        icon: 'error',
        title: 'confirmed Password should  be same',
        text: 'Something went wrong!',
       
      })
   }
else{
    Swal.fire({
        
        icon: 'success',
        title: `${name.value} Registered Successfully`,
        showConfirmButton: false,
        timer: 1500
      })
   
var userData = {
    name: name.value,
    email: email.value,
    phoneNumber: phnoeNumber.value,
    password: password.value,
    confirmedPassword: confirmedPassword.value
}

localStorage.setItem("userData", JSON.stringify(userData));

    setTimeout(()=>{
   window.location.href = "./dashboard.html"
    },2000)
    }




// var userData = {
//     name: name.value,
//     email: email.value,
//     phnoeNumber: phnoeNumber.value,
//     password: password.value,
//     confirmedPassword: confirmedPassword.value
// }

// localStorage.setItem("userData", JSON.stringify(userData));
// var getUserData = JSON.parse(localStorage.getItem("userData"));
// console.log(getUserData);


}



function getData(){
    var getUserData = document.querySelector('#getData');
    var getUserData1= JSON.parse(localStorage.getItem("userData"));
//   console.log(getUserData1);
    getUserData.innerHTML = `
    <ul>
    <li> Name :  ${getUserData1.name}</li>
    <li> Email : ${getUserData1.email} </li>
    <li> phoneNumber : ${getUserData1.phoneNumber} </li>
    </ul>
    `
}
getData()

function redirection(){
    window.location.href = "./index.html"
}

function logOut(){
   setTimeout(redirection, 2000)
}


function login(){
   event.preventDefault(); 
var email =document.getElementById('email')
var password =document.getElementById('password')
var loginData= JSON.parse(localStorage.getItem("userData"));

if(!loginData){
    Swal.fire({
        icon: 'error',
        title: 'user not found',
      })

      setTimeout(()=>{
        window.location.href = "./index.html"
         },2000)

}


if(loginData !== email.value){
    Swal.fire({
        icon: 'error',
        title: 'invalid email',
      })
}
else if(loginData !== password.value){
    Swal.fire({
        icon: 'error',
        title: 'invalid password',
      })
}
  else{
    Swal.fire({
        
        icon: 'success',
        title: `${loginData.name} Successfully Login`,
        showConfirmButton: false,
        timer: 1500
      })
      
    setTimeout(()=>{
        window.location.href = "./dashboard.html"
         },2000)
  }
}