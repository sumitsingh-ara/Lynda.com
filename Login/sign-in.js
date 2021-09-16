function pop(){
        alert("You need to login first")
    }
    let continues = document.getElementById("login-btn")
    continues.addEventListener("click", getIndex)
    var emailKey = [];
    var passwordKey = [];
    
    function getData() {
        let storedData = localStorage.getItem("userID")
        storedData = JSON.parse(storedData)
        check(storedData)
        function check(data) {
            for (key in data) {
                emailKey.push(data[key].userName);
                passwordKey.push(data[key].userPassword);
            }
        }
    }
    getData();
  //  console.log(emailKey); console.log(passwordKey)
    function getIndex() {
        var Name =[]
        var loginEmail = document.getElementById("email").value;
        var loginPassword = document.getElementById("password").value

        let emailCheck = (emailKey.indexOf(loginEmail))
        console.log(emailCheck)
        var passwordCheck = (passwordKey[emailCheck])
        console.log(passwordCheck)
        console.log(loginPassword);
        if (emailCheck == -1 ) {
            document.getElementById("wrongPassword").textContent ="You need to sign up first !"
            document.getElementById("wrongPassword").style.color = "red"
        } else if (emailCheck >=0) {
            if( passwordCheck != loginPassword ) {
                document.getElementById("wrongPassword").textContent ="Wrong Password !"
                document.getElementById("wrongPassword").style.color = "red"
            }  
        } 
        if(emailCheck >=0 && passwordCheck == loginPassword){
                localStorage.setItem("Name", loginEmail);
                function redirectToHomePage(){
                    window.location.href ="../Home/home.html";
                }
                redirectToHomePage()
            }
    }