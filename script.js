var userEmail = "";
function onSubmitHandler() {
   //id validation
   var userId = document.getElementById("userid").value;
  for (let index = 0; index < userId.length; index++) {
  if(userId.slice(index,index + 1) == ""|| userId.length > 12 || userId.length < 5 )
 {
    exceptionHandler = document.getElementById("USER");
    exceptionHandler.innerHTML = "<li>user id should not contain any space</li><li>id is between 5 and 12</li>";
     exceptionHandler = null;
     break;
   }
  }
  var userId2 = document.getElementById("userid").value;
for (let index = 0; index < userId2.length; index++) {
  if(userId2.slice(index,index + 1) == " ")
  {
    exceptionHandler = document.getElementById("USER");
     exceptionHandler.innerHTML = "<li>user id should not contain any space</li>";
     exceptionHandler = null;
  }
}
  // password validation
  var userpass = document.getElementById("Pass").value;
    for (let index = 0; index < userpass.length; index++) {
      if(userpass.slice(index,index + 1) == ""|| userpass.length > 12 || userpass.length < 5 )
      {
          exceptionHandler = document.getElementById("PASS");
          exceptionHandler.innerHTML = "<li>user password should not contain any space</li><li>password is between 5 and 12 </li>";
           exceptionHandler = null;
           break;
    }
  }
   
    var userpass2 = document.getElementById("Pass").value;
  for (let index = 0; index < userpass2.length; index++) {
  if(userpass2.slice(index,index + 1) == " ")
  {
   exceptionHandler = document.getElementById("PASS");
     exceptionHandler.innerHTML = "<li>user password should not contain any space</li>";
     exceptionHandler = null;
 }
}

   // name validation
   var userName = "";
   var userName = document.getElementById("username").value;
   for (let index = 0; index < userName.length; index++) {
    if(userName.slice(index,index + 1) != 1)
     {
        exceptionHandler = document.getElementById("NAME");
        exceptionHandler.innerHTML = "<li>required and alphabetes only </li>";
        exceptionHandler = null;
        break;
     }
    }

    //address validation
    var userAddress = document.getElementById("address").value;
    for (let index = 0; index < userAddress.length; index++) {
      if(userAddress.slice(index,index + 1) != 1)
      {
          exceptionHandler = document.getElementById("ADDRESS");
          exceptionHandler.innerHTML = "<li> address is required </li>";
           exceptionHandler = null;
           break;
    
    }
  }
    //country validation
    var userCountry = document.getElementById("country").value;
    for (let index = 0; index < userCountry.length; index++) {
      if(userCountry.slice(index,index + 1) != "")
      {
           exceptionHandler = document.getElementById("COUNTRY");
           exceptionHandler.innerHTML = "<li> country is required </li>";
           exceptionHandler = null;
          break;
       }
    }

    ///zip code validation
     var userCode = document.getElementById("zcode").value;
    for (let index = 0; index < userCode.length; index++) {
      if(userCode.slice(index,index + 1) != "")
      {
          exceptionHandler = document.getElementById("ZCODE");
          exceptionHandler.innerHTML = "<li> code is required </li>";
           exceptionHandler = null;
           break;
    
    }
    }
    //email validation
    var email = document.getElementById("email").value;
    var flag = true
    var output = ""
    for (let index = 0; index < email.length; index++) {

     if (email.slice(index, index + 1) === "@") {
         flag = false;
     }
    }
    if (flag) {
    
      output = output + "<p>*please add valid email<p>"        
    
    }
    document.getElementById("EMAIL").innerHTML = output;
    
    
    
    //gender validation
    var userGender = document.getElementById("i-2").value;
    for (let index = 0; index < userGender.length; index++) {
      if(userGender.slice(index,index + 1) != "")
      {
          exceptionHandler = document.getElementById("GENDER");
          exceptionHandler.innerHTML = "<li> it is required </li>";
           exceptionHandler = null;
           break;
    
    }
    }
    //languge validation
    var userlanguage = document.getElementById("i-3").value;
    for (let index = 0; index < userlanguage.length; index++) {
      if(userlanguage.slice(index,index + 1) != "")
      {
          exceptionHandler = document.getElementById("LANG");
          exceptionHandler.innerHTML = "<li> required </li>";
           exceptionHandler = null;
           break;
      }
    }
    //about validation
    var userAbout = document.getElementById("About").value;
    for (let index = 0; index < userAbout.length; index++) {
      if(userAbout.slice(index,index + 1) != "" )
      {
          exceptionHandler = document.getElementById("ABOUT");
          exceptionHandler.innerHTML = "<li> optional</li>";
           exceptionHandler = null;
           break;
    
    }
  }
}
  
  
  
