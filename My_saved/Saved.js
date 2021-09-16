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

  let products = [
        {
            title: "JAVA SCRIPT",
            name: "Learning the Java Script Promises",
            by: "By: Swanand",
            date: "19th August 2021",
            video: "C:/Users/Sumit/Desktop/VideosLocal/Promises.mp4",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
            time: 30,
        },
        {
            title: "GIT",
            name: "Learning Git Branching",
            by: "By: Nrupul Dev",
            date: "24th August 2021",
            video: "C:/Users/Sumit/Desktop/VideosLocal/Zoom_0_3.mp4",
            link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
            time: 29,
        },
        {
            title: "JAVA SCRIPT",
            name: "Learning How JS Works",
            by: "By: Swanand",
            date: "16th August 2021",
            video: "C:/Users/Sumit/Desktop/VideosLocal/Zoom_0_4.mp4",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            time: 124,
        },
        {
            title: "JAVA SCRIPT",
            name: "Learning the Concepts of DOM",
            by: "By: Swanand",
            date: "17th August 2021",
            video: "C:/Users/Sumit/Desktop/VideosLocal/Zoom_0_2.mp4",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
            time: 91,
        },
        {
            title: "JAVA SCRIPT",
            name: "Project on DOM E-cart",
            by: "By: Swanand",
            date: "21st August 2021",
            video: "C:/Users/Sumit/Desktop/VideosLocal/Zoom_0.mp4",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
            time: 93,
        },
        {
            title: "JAVA SCRIPT",
            name: "Project on DOM Movie-Website",
            by: "By: Sumit Web_11_237",
            date: "19th August 2021",
            video: "C:/Users/Sumit/Desktop/VideosLocal/Untitled.mp4",
            link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",
            time: 3,
        },
    ]
    localStorage.setItem("myCourse", JSON.stringify(products))

    var myCourses = localStorage.getItem("myCourse")
    myCourses = JSON.parse(myCourses);

    function showProducts() {

        myCourses.forEach(function (product) {
            let appender = document.createElement("div");
            appender.setAttribute("class", "appender");


            let videoDiv = document.createElement("div");
            videoDiv.setAttribute("class", "video-play-su")
            let vids = document.createElement("VIDEO");
            vids.src = product.video
            vids.setAttribute("width", "100%");
            vids.setAttribute("height", "150");
            vids.setAttribute("controls", "controls");
            vids.setAttribute("id", "videoPlayerNew");
            videoDiv.appendChild(vids)
            //progress bar

            let bigDuration = document.createElement("div")
            bigDuration.setAttribute("class", "flex-su")

            let share = document.createElement("button");
            share.textContent = "Share"
            share.setAttribute("class", "sharebtn-su")

            let durations = document.createElement("div");
            let durations2 = document.createElement("div");
            durations2.setAttribute("class", "flex-hour-su")
            durations.setAttribute("class", "durationBox-su")
            let progress = document.createElement("PROGRESS")
            function random(number) {
                return Math.floor(Math.random() * number)
            }
            var generator = random(product.time)
            progress.setAttribute("value", generator);

            var a = generator;
            var b = product.time - generator;
            var count = 0;
            while (b >= 60) {
                b = b - 60;
                count++
            }
            var hours = document.createElement("p");
            hours.innerHTML = count;
            var minute = document.createElement("p")
            minute.textContent = b;
            console.log("Count", count)
            console.log(b)


            progress.setAttribute("max", product.time);
            durations.append(progress)
            durations2.append(hours, "-hours &-", minute, "-minutes left")
            bigDuration.append(durations, durations2, share)
            //console.log(random(product.time/2))
            //console.log(document.getElementById("videoPlayerNew").duration)


            //vidcontent
            let videoContent = document.createElement("div");
            videoContent.setAttribute("id", "vid-content-su");


            let title = document.createElement("p");
            title.textContent = product.title;
            title.setAttribute("class", "title-su")

            let name = document.createElement("a");
            let link = document.createTextNode(product.name)
            name.appendChild(link)

            name.href = product.link;
            name.setAttribute("class", "name-su")


            let dateDiv = document.createElement("div");
            dateDiv.setAttribute("class", "dateBox-su")
            let by = document.createElement("p");
            by.textContent = product.by;

            let date = document.createElement("p");
            date.setAttribute("class", "left-sus")
            date.textContent = product.date;

            dateDiv.append(by, date);
            videoContent.append(title, name, dateDiv, bigDuration)

            appender.append(videoDiv, videoContent)



            document.getElementById('video-box-su').appendChild(appender);
        })

    }
    showProducts()

    function topLists(){
        window.location.href ="../Business_Content/businessContent.html";
    }

    function linkedinHome(){
        window.location.href ="../Home/home.html";
    }

        var count =0;

        function startTimer(){

            var timeleft = 3;
            var hoursLeft = 5;
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
                document.getElementById("trial").innerHTML = hr+" : "+mins+": "+store ;
                }
                hoursLeft -= 1;
                }, 1000);
            }
            }
            else{
                window.location.href ="../Pro_Membership/proMembership.html"
            }
        }