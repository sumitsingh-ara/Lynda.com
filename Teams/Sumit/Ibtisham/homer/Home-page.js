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


  
  var count =0;
        var counter =0;
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
                window.location.href ="Subscription.html"
            }
        }


        //Caraousel Running;
        let productsPicks = [
          {
            title: "PYTHON",
            name: "Python object oriented programming for beginers",
            by: "By:Kethrin",
            date: "19th September 2020",
            video: "C:/Users/Sumit/Desktop/VideosLocal/python.mp4",
            link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
            time: 500,
            price: 1500,
          },
          {
            title: "MS EXCEL",
            name: "MS excel for beginer to advance",
            by: "By:shekher",
            date: "19th August 2021",
            video: "C:/Users/Sumit/Desktop/VideosLocal/mspivot.mp4",
            link: "https://www.javatpoint.com/excel-tutorial",
            time: 4000,
            price: 400,
          },
          {
            title: "SQL ",
            name: "Be an expert in sql learn advance sql in depth",
            by: "By:Saroj yadav",
            date: "03th july 2021",
            video: "C:/Users/Sumit/Desktop/VideosLocal/sql.mp4",
            link: "https://www.simplilearn.com/tutorials/sql-tutorial/sql-advanced",
            time: 10000,
            price: 6000,
          },
          {
            title: "DJANGO",
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
            title: "FIGMA",
            name: "Create and design your own first website ",
            by: "By:Tejasvi Singh",
            date: "09th april 2013",
            video: "C:/Users/Sumit/Desktop/VideosLocal/figma.mp4",
            link: "https://mockitt.wondershare.com/figma/figma-tutorial.html",
            time: 600,
            price: 999,
          },
          {
            title: "REACT",
            name: "Create and design your own first website ",
            by: "By:shekhar",
            date: "09th may 2018",
            video: "C:/Users/Sumit/Desktop/VideosLocal/react.mp4",
            link: "https://www.tutorialspoint.com/react_native/react_native_overview.htm",
            time: 4500,
            price: 5999,
          },
          {
            title: "DSA",
            name: "Be a pro in data structures and algorithms",
            by: "By:Abdul Bari",
            date: "09th october 2020",
            video: "C:/Users/Sumit/Desktop/VideosLocal/dsa.mp4",
            link: "https://www.geeksforgeeks.org/data-structures/",
            time: 8000,
            price: 10000,
          },
          {
            title: "DOCKER ",
            name: "Docker for develpers ",
            by: "By:Peter Dakota ",
            date: "28th February 2020",
            video: "C:/Users/Sumit/Desktop/VideosLocal/docker.mp4",
            link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
            time: 3000,
            price: 9550,
          },
          {
            title: "APTITUDE  ",
            name: "Learn aptitude and reasoning to crack the GATE ",
            by: "By:Swastika Mukharjee",
            date: "09th may 2018",
            video: "C:/Users/Sumit/Desktop/VideosLocal/aptitude.mp4",
            link: "https://developer.mozilla.org/en-US/docs/Mozilla/QA/Running_automated_tests/Docker",
            time: 780,
            price: 450,
          },
          {
            title: "HTML AND CSS ",
            name: "create atractive ui by using html and css ",
            by: "By:Viraat sharma",
            date: "21th Februay 2014",
            video: "C:/Users/Sumit/Desktop/VideosLocal/html.mp4",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            time: 788,
            price: 900,
          },
        ];
        
            localStorage.setItem("myCoursePicks", JSON.stringify(productsPicks))
        
            var showPicks = localStorage.getItem("myCoursePicks")
            showPicks = JSON.parse(showPicks);
        
            function showProducts(){
              var courseBag = [];
                  showPicks.forEach(function(product,n){
        
                    let parent = document.createElement("div");   
                    parent.setAttribute("id", "parent")
                    parent.setAttribute("class","dummy")
                    parent.onmouseenter= function() {
                        document.getElementById(`contents${n}`).style.height="180px";
                        document.getElementById(`videos${n}`).style.height="160px";
                        
                    }
                    parent.onmouseout= function() {
                        document.getElementById(`contents${n}`).style.height="32px";
                        document.getElementById(`videos${n}`).style.height="155px";
                    }
                    let videoBox = document.createElement("div");
                    videoBox.setAttribute("class","videoBoxes")
                    videoBox.addEventListener("click",getData)
                    var courseKey=[];
                    function getData() {
                      let checker = localStorage.getItem("courseData");
                        checker = JSON.parse(checker)
                        for(key in checker){
                            courseKey.push(checker[key].name)
                        }
        
                        let inputs ={
                            name : product.name,
                            price :product.price,
                            video:product.video,
                            date:product.date,
                            time:product.time,
                            by:product.by,
                            title:product.title,
                        }
                        if(courseKey.indexOf(product.name) != -1){
                            alert("This course is already added");
                        }
                        else {
                            courseBag.push(inputs);
                            localStorage.setItem("courseData",JSON.stringify(courseBag));
                            window.location.href ="addToCArt.html"
                        }
                    }
                    let vide = document.createElement("VIDEO")
                        vide.setAttribute("id", `videos${n}`)
                        vide.setAttribute("width", "100%");
                        vide.setAttribute("height", "155px");
                        vide.setAttribute("controls", "controls");
                        vide.src=product.video;
                    videoBox.appendChild(vide)
                    let content = document.createElement("div");
                    content.setAttribute("id",`contents${n}`)
                    let title = document.createElement("p");
                        title.textContent =product.title;
                        let name = document.createElement("p");
                        name.textContent =`Name: ${product.name}`;
                        let by = document.createElement("p");
                        by.textContent =product.by;
                        let date = document.createElement("p");
                        date.textContent =`Released on:${product.date}`;
                    content.append(title,name,by,date);
                    
                  
                    parent.append(videoBox,content);
                    document.getElementById("containerPOP").append(parent);
                    //slider button adding funconalities
                    var dum = document.getElementsByClassName("dummy");
                    let sliderbtn1 = document.getElementById("slbtn1");
                      let sliderbtn2 = document.getElementById("slbtn2");
                        //function for moving upwards
                        var l = 0;
                        sliderbtn2.onclick = function() {
                              l++;
                          for (var i of dum) {
                            if (l == 0) {
                              i.style.left = "0px";
                            }
                            if (l == 1) {
                              i.style.left = "-740px";
                            }
                            if (l == 2) {
                              i.style.left = "-1480px";
                            }
                            if (l == 3) {
                              i.style.left = "-2220px";
                            }
                          }
                        };
                      //function for moving downwards
                      sliderbtn1.onclick = function() {
                              l--;
                          for (var i of dum) {
                            if (l == 0) {
                              i.style.left = "0px";
                            }
                            if (l == 1) {
                              i.style.left = "-740px";
                            }
                            if (l == 2) {
                              i.style.left = "-1480px";
                            }
                            if (l == 3) {
                              i.style.left = "-2220px";
                            }
                          }
                        };
                })
            }
            showProducts()



    function linkedinHome(){
        window.location.href ="Home.html";
    }
    function topLists(){
      window.location.href ="Business-Content.html";
    }

    function nameDisplay() {
      var fetchingName = localStorage.getItem("userID");
      fetchingName = JSON.parse(fetchingName);
      //console.log(fetchingName);
      var show = localStorage.getItem("Name")
          //console.log(show);
      
      fetchingName.forEach(function(prod){
          if(prod.userName == show){
            document.getElementById("nameDisplay").textContent =prod.First_name;
            document.getElementById("nameDisplay2").textContent =prod.First_name;
              console.log(prod.First_name)
          }
      })
    }
    nameDisplay()