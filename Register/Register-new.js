let continues = document.getElementById("continue")
    continues.addEventListener("click",getData);
    var emailBag = [];
    var emailKey = [];
    function email(string) {
        var flag = true;
        var countof =0;
       if(string.indexOf('@') == -1) {
           flag = false;
       }
       if(string.indexOf('@') == 0) {
           flag = false;
       }
       if(string.indexOf('.') == 0) {
        flag = false;
        }
       var a = string.indexOf('.');
       if(string[a+1] =='.'){
         flag = false;
       }
       var b = string.indexOf('@');
       if(string[b+1] =='.'){
         flag = false;
       }
       for(var i =0; i<string.length; i++){
         if(string[i] == '(' || string[i] ==")"){
           flag = false;
         }
       }
       for(var i =0; i<string.length; i++){
           if(string[i] =="@"){
               countof++
           }
           if(countof >1){
               flag = false;
           }
       }
       var one = string[string.length-3]
       var two = string[string.length-2]
       var three = string[string.length-1]
       var c = one+two+three
       
       if(c !='com' && c !='net' && c !='org'){
         flag = false;
       }
        if(flag == true) {
          return false;
        }else{
          return true;
        }
    }
   
     

    function getData(){
        
        let checker = localStorage.getItem("userID")
        checker = JSON.parse(checker)
        for(key in checker){
            emailKey.push(checker[key].userName)
        }

        let inputs ={
            userName : document.getElementById("email").value,
            userPassword : document.getElementById("password").value,
            First_name:document.getElementById("firstName").value,
            Last_name:document.getElementById("lastName").value,
        }
        var validFName =inputs.First_name.trim()
        var validLName =inputs.Last_name.trim()
        var validEmail = inputs.userName.trim()
        var validPassword =inputs.userPassword.trim()
        if (validFName ==""){
          document.getElementById("signedup").innerText=null;
            document.getElementById("signedup").innerText=("Please enter your first name!")
            document.getElementById("signedup").style.color = "red"
        }else if (validLName ==""){
          document.getElementById("signedup").innerText=null;
            document.getElementById("signedup").innerText=("Please enter your last name!")
            document.getElementById("signedup").style.color = "red"
        }
        else if(email(validEmail)){
          document.getElementById("signedup").innerText=null;
            document.getElementById("signedup").innerText=("Please enter a valid email")
            document.getElementById("signedup").style.color = "red"
        }else if (validPassword ==""){
          document.getElementById("signedup").innerText=null;
            document.getElementById("signedup").innerText=("Please enter a valid password!")
            document.getElementById("signedup").style.color = "red"
        }
        else if(emailKey.indexOf(validEmail) != -1 ){
          document.getElementById("signedup").innerText=null;
            document.getElementById("signedup").innerText="Id exists ! Redirecting to login page"
          document.getElementById("signedup").style.color = "red"
          document.getElementById("signedup").style.textAlign = "center"
          document.getElementById("signedup").style.paddingBottom = "10px"
          function redirect() {
            window.location.href ="../Login/signin.html"
          }
          setTimeout(redirect,2000)
          
        }
        else {
            emailBag.push(inputs);
        localStorage.setItem("userID",JSON.stringify(emailBag));
        document.getElementById("signedup").innerText=null;
        document.getElementById("signedup").innerText="Congratulations! Account Created"
        document.getElementById("signedup").style.color = "green"
        document.getElementById("signedup").style.textAlign = "center"
        document.getElementById("signedup").style.paddingBottom = "10px"
        }
    }
    
    function pop() {
        alert("You need to login first")
    }