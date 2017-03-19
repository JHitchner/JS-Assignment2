// **PROBLEM #1**************************************************

// var btn_right = document.getElementById('button_right')
// var msg1 = document.getElementById('msg1')
// var btn_left = document.getElementById('button_left')
// var msg2 = document.getElementById('msg2')
//
// btn_right.addEventListener('click', function(){
//     msg1.style.display = 'block';
//     msg2.style.display = 'none';
// })
//
// btn_left.addEventListener('click', function(){
//    msg2.style.display ='block';
//    msg1.style.display = 'none';
// })

// ***************************************************************

// **PROBLEM #2***************************************************

// var hover_reply = document.getElementById('hovering')
//
// hover_reply.addEventListener("mouseenter", function (){
//   alert("I said don't hover over me!")
// })

// Note** When dev tools is open the element requires a click to pop up.
// When viewed with dev tools closed the alert pops up on hover.

// ***************************************************************

// **PROBLEM #3***************************************************

// // Variable Assignment
// var press = document.getElementById('key_press')
//
// // Applying Listener to document with a function that changes H1 text on
// // keypress with key. Console logged to ensure key is being read when pressed.
//
// document.addEventListener("keypress", function(key_pressed){
//    press.innerHTML = key_pressed.key
//    console.log("key is pressed")
// })

// **************************************************************

//**PROBLEM #4***************************************************

// var confirm = document.getElementById('confirmation')
// var user_name = document.getElementById('name')
// var form_sub = document.getElementById('form')
// var pwd_val = document.getElementById('password')
//
// // Applying an event listener activated on form submit. Function runs
// // If/Else statment to validate user input.
//
// form_sub.addEventListener("submit", function(event){
//
//    if (user_name.value.length < 14 && pwd_val.value == 12345678) {
//       confirm.innerHTML = 'Username and Password Accepted'
//       //  console.log('valid')
//   } else {
//       confirm.innerHTML = 'Please enter a valid username/password'
//       //console.log('not valid')
//   }
// Prevents form being sent
//     event.preventDefault();
// })
//******************************************************************
