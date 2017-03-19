var signUp = document.getElementById('popup')



// Create a function that reveals hidden div when ran
function mySignUp(){
   signUp.style.display = 'block';
}
//Create a function that runs mySignup function after two seconds
function onLoad(){
   var timer = window.setTimeout(mySignUp, 2000);
   console.log('this is working')
}

signUp.addEventListener('click', function(){
  signUp.style.display = 'none';
})
//Run function
onLoad();
