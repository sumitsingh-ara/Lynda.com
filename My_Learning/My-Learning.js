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
    title: "REACT:BUILD PROGRESSIVE WEB APPS",
    name: "Create and design your own first website ",
    by: "By:shekhar",
    date: "09th may 2018",
    video: "C:/Users/Sumit/Desktop/VideosLocal/react.mp4",
    link: "https://www.tutorialspoint.com/react_native/react_native_overview.htm",
    time: 4500,
    price: 5999,
  },
  {
    title: "DATA STRUUCTURE AND ALGORITHM",
    name: "Be a pro in data structures and algorithms",
    by: "By:Abdul Bari",
    date: "09th october 2020",
    video: "C:/Users/Sumit/Desktop/VideosLocal/dsa.mp4",
    link: "https://www.geeksforgeeks.org/data-structures/",
    time: 8000,
    price: 10000,
  },
  {
    title: "DOCKER FOR DEVELOPERS",
    name: "Docker for develpers ",
    by: "By:Peter Dakota ",
    date: "28th February 2020",
    video: "C:/Users/Sumit/Desktop/VideosLocal/docker.mp4",
    link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
    time: 3000,
    price: 9550,
  },
    ]
    
    localStorage.setItem("myCourse", JSON.stringify(products))

    var myCourses = localStorage.getItem("myCourse")
    myCourses = JSON.parse(myCourses);
        
    function showProducts() {
        console.log(myCourses.length)
        let showProgress = document.getElementById("onProgresssu")
        showProgress.textContent = "In Progress-"+(myCourses.length);

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
        window.location.href = "../Business_Content/businessContent.html";
    }

    function linkedinHome(){
        window.location.href ="../Home/home.html";
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
                window.location.href ="../Pro_Membership/proMembership.html"
            }
        }
        


        //Saved Section Showing Data
        let productsSaved = [
        {
    title: "LEARNING DJANGO",
    name: "Django framework for intermidiate",
    by: "By:Paul Johnson",
    date: "19th March 2017",
    video: "C:/Users/Sumit/Desktop/VideosLocal/django.mp4",
    link: "https://docs.djangoproject.com/en/3.2/",
    time: 3000,
    price: 3999,
  },
  {
    title: "MEDIA QUERIES",
    name: "Create responsive pages using css media queries",
    by: "By:Ashish Mehra",
    date: "04th june 2019",
    video: "C:/Users/Sumit/Desktop/VideosLocal/mediaquery.mp4",
    link: "https://docs.djangoproject.com/en/3.2/",
    time: 300,
    price: 399,
  },
  {
    title: "ASYNC AND AWAITS",
    name: "Learn promies be expert in async and awaits ",
    by: "By:Shivani Chaudhari",
    date: "01th January 2018",
    video: "C:/Users/Sumit/Desktop/VideosLocal/async.mp4",
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",
    time: 350,
    price: 490,
  },
  {
    title: "LEARN FIGMA",
    name: "Create and design your own first website ",
    by: "By:Tejasvi Singh",
    date: "09th april 2013",
    video: "C:/Users/Sumit/Desktop/VideosLocal/figma.mp4",
    link: "https://mockitt.wondershare.com/figma/figma-tutorial.html",
    time: 600,
    price: 999,
  },
  {
    title: "REACT:BUILD PROGRESSIVE WEB APPS",
    name: "Create and design your own first website ",
    by: "By:shekhar",
    date: "09th may 2018",
    video: "C:/Users/Sumit/Desktop/VideosLocal/react.mp4",
    link: "https://www.tutorialspoint.com/react_native/react_native_overview.htm",
    time: 4500,
    price: 5999,
  },
  {
    title: "DATA STRUUCTURE AND ALGORITHM",
    name: "Be a pro in data structures and algorithms",
    by: "By:Abdul Bari",
    date: "09th october 2020",
    video: "C:/Users/Sumit/Desktop/VideosLocal/dsa.mp4",
    link: "https://www.geeksforgeeks.org/data-structures/",
    time: 8000,
    price: 10000,
  },
  {
    title: "DOCKER FOR DEVELOPERS",
    name: "Docker for develpers ",
    by: "By:Peter Dakota ",
    date: "28th February 2020",
    video: "C:/Users/Sumit/Desktop/VideosLocal/docker.mp4",
    link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
    time: 3000,
    price: 9550,
  },
  {
    title: "APTITUDE AND  REASONING ",
    name: "Learn aptitude and reasoning to crack the GATE ",
    by: "By:Swastika Mukharjee",
    date: "09th may 2018",
    video: "C:/Users/Sumit/Desktop/VideosLocal/aptitude.mp4",
    link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
    time: 780,
    price: 450,
  },
    ]
    localStorage.setItem("myCourseSaved", JSON.stringify(productsSaved))

    var myCoursesSaved = localStorage.getItem("myCourseSaved")
    myCoursesSaved = JSON.parse(myCoursesSaved);

    function showProductsSaved() {
        let newAppend = document.getElementById("video-box-su")
                newAppend.innerHTML = null;
                let showProgress = document.getElementById("savedShow")
        showProgress.textContent = "Saved-"+(myCoursesSaved.length);
        myCoursesSaved.forEach(function (product) {
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