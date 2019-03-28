//Beginning of SIGN UP FORM
let signUpButton = document.getElementsById("signUpButton");

function clicked() {
    signUpButton.window.open('signup.html')
//       newlink = document.createElement('a');
// newlink.innerHTML = 'Sign Up';
// newlink.setAttribute('clicked', 'Sign UP');
// newlink.setAttribute('href', 'http://127.0.0.1:5500/js/signup.html');
// document.body.appendChild(newlink);
}
      
//Ending of SIGN UP FORM
      

//Beginning of LOGIN form

function clicked1() {
 var user = document.getElementById ('username');
 var pass = document.getElementById ('password');

 var coruser ="test";
 var corpass ="123";


 if (user.value == coruser  && pass.value == corpass ) {
       alert ("You are logged in as " + user.value);
       window.open("#");
 } else {
       alert("Incorrect username or password!");


}
}

//END of LOGIN form



