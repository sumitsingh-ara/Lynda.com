let productsPicks2 = [
  {
    title: "CYBER SECURITY",
    name: "Programming in Cyber Security",
    by: "By: Grant Collins",
    date: "1st July 2021",
    video: "../VideosLocal/cyber.mp4",
    link: "https://flatironschool.com/blog/best-programming-languages-cyber-security",
    time: 56000,
    price: 2999,
  },

  {
    title: "C++",
    name: "Arrays of String in C++",
    by: "By: Sourabh Shukla",
    date: "18th february 2021",
    video: "../VideosLocal/string.mp4",
    link: "https://www.geeksforgeeks.org/array-strings-c-3-different-ways-create/",
    time: 5500,
    price: 3999,
  },

  {
    title: "CLOUD COMPUTING",
    name: "How to avoid vendo lock in",
    by: "By: Noha Ezzat",
    date: "29th april 2021",
    video: "../VideosLocal/cloud.mp4",
    link: "https://searchconvergedinfrastructure.techtarget.com/definition/vendor-lock-in",
    time: 4000,
    price: 5499,
  },
  {
    title: "API",
    name: "Introduction to API",
    by: "By: Hitesh Choudhary",
    date: "19th November 2020",
    video: "../VideosLocal/api.mp4",
    link: "https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces",
    time: 3000,
    price: 4500,
  },
  {
    title: "C#",
    name: "Throw and Throw ex in C#",
    by: "By: Ravi Jayapu",
    date: "7th july 2020",
    video: "../VideosLocal/throw.mp4",
    link: "https://www.c-sharpcorner.com/blogs/difference-between-throw-and-throw-ex-in-c-sharp1#:~:text=throw%20%3A%20If%20we%20use%20%22throw,at%20the%20re%2Dthrow%20point.",
    time: 7500,
    price: 8799,
  },

  {
    title: "HTML CSS ",
    name: "Selectors in CSS",
    by: "By: Mike Dane",
    date: "20th july 2021",
    video: "../VideosLocal/html.mp4",
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors",
    time: 6700,
    price: 3999,
  },

  {
    title: "NODE JS",
    name: "Key concepts in node JS",
    by: "By: Jelvix",
    date: "27th september 2020",
    video: "../VideosLocal/dsa.mp4",
    link: "https://webapplog.com/node-js-fundamentals-a-concise-overview-of-the-main-concepts/",
    time: 6600,
    price: 2400,
  },

  {
    title: "BOOTSTRAP",
    name: "Comparision between bootstrap and material ui",
    by: "By: Sunny Singh",
    date: "8th april 2020",
    video: "../VideosLocal/mediaquery.mp4",
    link: "https://uxplanet.org/material-ui-vs-bootstrap-a-detailed-comparison-8fc9151db5ed",
    time: 5000,
    price: 8599,
  },

  {
    title: "ASYNCHRONOUS",
    name: "Asynchronous and Synchronous in javascript Programming",
    by: "By: James Q Quick",
    date: "15th December 2020",
    video: "../VideosLocal/sql.mp4",
    link: "https://rowanmanning.com/posts/javascript-for-beginners-async/",
    time: 7600,
    price: 4899,
  },

  {
    title: "REACT JS",
    name: "Typography:react and material UI",
    by: "By: Jason Rivera",
    date: "3 january 2021",
    video: "../VideosLocal/react.mp4",
    link: "https://material-ui.com/api/typography/",
    time: 1048000,
    price: 18999,
  },

  {
    title: "EXPRESS ",
    name: "Node and Express js",
    by: "By: Jitendar Kumar",
    date: "10th september 2020",
    video: "../VideosLocal/cloud.mp4",
    link: "https://expressjs.com/",
    time: 8900,
    price: 6588,
  },

  {
    title: "OOPS JAVA",
    name: "Recursion in Java",
    by: "By: Alaxe Lee",
    date: "24th may 2021 ",
    video: "../VideosLocal/django.mp4",
    link: "https://www.programiz.com/java-programming/recursion",
    time: 9400,
    price: 6799,
  },
];
localStorage.setItem("myCoursePicks2", JSON.stringify(productsPicks2));

var showPicks2 = localStorage.getItem("myCoursePicks2");
showPicks2 = JSON.parse(showPicks2);

function showProducts2() {
  var courseBag = [];
  showPicks2.forEach(function (product, n) {
    let parent2 = document.createElement("div");
    parent2.setAttribute("id", "parent2");
    parent2.setAttribute("class", "dummy2");
    parent2.onmouseenter = function () {
      document.getElementById(`contents2${n}`).style.height = "180px";
      document.getElementById(`videos2${n}`).style.height = "160px";
    };
    parent2.onmouseout = function () {
      document.getElementById(`contents2${n}`).style.height = "32px";
      document.getElementById(`videos2${n}`).style.height = "155px";
    };
    let videoBox2 = document.createElement("div");
    videoBox2.setAttribute("class", "videoBoxes2");
    videoBox2.addEventListener("click", getData);
    var courseKey= [];
    function getData() {
      let checker2 = localStorage.getItem("courseData");
      checker2 = JSON.parse(checker2);
      for (key in checker2) {
        courseKey.push(checker2[key].name);
      }

      let inputs = {
        name: product.name,
        price: product.price,
        video: product.video,
        date: product.date,
        time: product.time,
        by: product.by,
        title: product.title,
      };
      if (courseKey.indexOf(product.name) != -1) {
        alert("This course is already added");
      } else {
        courseBag.push(inputs);
        localStorage.setItem("courseData", JSON.stringify(courseBag));
        window.location.href = "../Add_Cart/addToCart.html";
      }
    }
    let vide2 = document.createElement("VIDEO");
    vide2.setAttribute("id", `videos2${n}`);
    vide2.setAttribute("width", "100%");
    vide2.setAttribute("height", "155px");
    var a = localStorage.getItem("player")
    a = JSON.parse(a);
    if(a >0){
      vide2.setAttribute("controls", "controls");
    }
    vide2.src = product.video;
    videoBox2.appendChild(vide2);
    let content2 = document.createElement("div");
    content2.setAttribute("id", `contents2${n}`);
    let title2 = document.createElement("p");
    title2.textContent = product.title;
    let name2 = document.createElement("p");
    name2.textContent = `Name: ${product.name}`;
    let by2 = document.createElement("p");
    by2.textContent = product.by;
    let date2 = document.createElement("p");
    date2.textContent = `Released on:${product.date}`;
    content2.append(title2, name2, by2, date2);

    parent2.append(videoBox2, content2);
    document.getElementById("containerPOP2").append(parent2);
    //slider button adding funconalities
    var dum2 = document.getElementsByClassName("dummy2");
    let sliderbtn1 = document.getElementById("slbtns5");
    let sliderbtn2 = document.getElementById("slbtns6");
    //function for moving upwards
    var l = 0;
    sliderbtn2.onclick = function () {
      l++;
      for (var i of dum2) {
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
        }if(l>=4){
          i.style.left = "0px"
          l=0;
        }
      }
    };
    //function for moving downwards
    sliderbtn1.onclick = function () {
      l--;
      for (var i of dum2) {
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
  });
}
showProducts2();
