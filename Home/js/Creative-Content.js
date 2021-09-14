 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      let contents_head = document.getElementsByClassName("dropdown-content");
      
      for ( let i = 0; i < contents_head.length; i++) {
        let showLists = contents_head[i];
        if (showLists.classList.contains("show")) {
          showLists.classList.remove("show");
        }
      }
    }
  };

  function topLists(){
        window.location.href = 'businessContent.html';
    }

    function linkedinHome(){
        window.location.href ="home.html";
    }
    
    var count =0;

function startTimer(){

    var timeleft = 3;
    var hoursLeft = 2592000;
    
    if(count == 0){
        if(count ==0){
        var downloadTimer = setInterval(function set() {
        if(timeleft <= 0){
            clearInterval(downloadTimer);
        alert("Congratulations Trial Activated! You can enjoy 30 days of trial period!");
        showTrial();
        count++;
        } else {
           
        document.getElementById("trial").innerHTML = "Please wait " +timeleft +" seconds remaining";
        }
        timeleft -= 1;
        }, 1000);
    }
    
    function showTrial() {
        var showTimer = setInterval(function show() {
        if(hoursLeft <= 0){
        clearInterval(showTimer);
        alert("Trial Ended")
            
        document.getElementById('trial').innerHTML ="Buy Pro Membership"
        count++;
        } else {
            let mins =0;
            var store = hoursLeft;
            while(store >= 60){
                store=store-60;
                mins++
            }
            let hr=0;
            while (mins >= 60){
                mins = mins -60;
                hr++
            }
            if(mins < 10){
                mins = "0"+mins
            }
            if(hr < 10){
                hr = "0"+hr
            }
            if(store < 10){
                store = "0"+store
            }
        document.getElementById("trial").innerHTML ="Trial left "+ hr+" : "+mins+": "+store ;
        }
        hoursLeft -= 1;
        }, 1000);
    }
    }
    else{
        window.location.href ="proMembership.html"
    }
}