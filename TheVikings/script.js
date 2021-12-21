const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');
});

//SCROLL REVEAL

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 200
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 200
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 500
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 500
});

function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  
  
  var text;5
  if(name.length < 4){
    swal("Error", "Please Enter valid Name", "error");
    return false;
  }
  if(isNaN(phone) || phone.length < 8 || phone.length > 12){
    swal("Error", "Please Enter valid Phone Number", "error");
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    swal("Error", "Please Enter valid Email", "error");
    return false;
  }
  if(message.length <= 30){
    swal("Error", "Please Enter More Than 30 Characters", "error");
    return false;
  }
  else
  {
    
    swal("Success", "Form Submitted Successfuly", "success");
    return false;

  }
}