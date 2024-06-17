var form = document.getElementsByTagName("form")[0];
var email = document.getElementById("mail");
var nome = document.getElementById("name");
var error = document.querySelector(".error");

email.addEventListener(
  "input",
  function (event) {
    
    if (email.validity.valid) {
      
      error.innerHTML = ""; 
      error.className = "error"; 
    }
  },
  false,
);
form.addEventListener(
  "submit",
  function (event) {
    
    if (!email.validity.valid) {
      
      error.innerHTML = "Digite um E-mail válido!";
      error.className = "error active";
      
      event.preventDefault();
    }
  },
  false,
);

nome.addEventListener(
    "input",
    function (event) {
      
      if (nome.validity.valid) {
        
        error.innerHTML = ""; 
        error.className = "error"; 
      }
    },
    false,
  );
  form.addEventListener(
    "submit",
    function (event) {
      
      if (!nome.validity.valid) {
        
        error.innerHTML = "Digite seu nome";
        error.className = "error active";
        
        event.preventDefault();
      }
    },
    false,
  );
