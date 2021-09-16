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
var count = 0;
  var counter =0;
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
                counter++;
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
                document.getElementById("trial").innerHTML ="Trial left "+ hr+" : "+mins+" : "+store ;
                }
                hoursLeft -= 1;
                }, 1000);
            }
            }
            else if(counter >0) {
                window.location.href ="../Pro_Membership/proMembership.html"
            }
        }
        
        var addedItems = localStorage.getItem("courseData")
        addedItems = JSON.parse(addedItems);
        
        function show(){

            addedItems.forEach(function(item){
                let name = document.getElementById("courseName")
                name.textContent = item.name
                let beginnerDiv =document.createElement("div");
                beginnerDiv.setAttribute("class","beginner")
                let level = document.createElement("p");
                level.textContent ="Beginner"+""
                let duration = document.createElement("p");
                duration.setAttribute("class","low-size")
                let a = item.time;
                let hr =0;
                while(a >=60){
                    a-=60;
                    hr++;
                }
                duration.textContent= hr+" hr "+a+" minutes ";
                let release = document.createElement("p");
                release.setAttribute("class","low-size");
                release.textContent=`Released: ${item.date}`;
                beginnerDiv.append(level,duration,release);
                document.getElementById("courseDetails").append(beginnerDiv)

                function random(number) {
                    return Math.round(Math.random()*200)
                }
                function random2(number) {
                    return Math.round(Math.random()*1000)
                }
                let b = random(50)
                let b2 = random2(100)
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                p1.textContent=`${b} members like this course`;
                p1.style.color="gray"
                p2.textContent =`${b2} learners`;
                let randomMem = document.getElementById("randomData");
                randomMem.append(p1,p2)
            })
        }
        show();

        function payment() {
            window.location.href="../Payment/payment.html";
        }
        function wid(){
            var a =document.querySelector("course-desc");
            a.style.color="green"
        }
        function linkedinHome(){
        window.location.href ="../Home/home.html";
    }
    function topLists(){
        window.location.href ="../Business_Content/businessContent.html"
    }