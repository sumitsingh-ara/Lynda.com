let productsPicks3 = [
  {
    title: "JAVA PROGRAMMING",
    name: "Advanced Java Programming",
    by: "By: Bethan Palmer",
    date: "11th january 2021",
    video: "../VideosLocal/string.mp4",
    link: "https://www.javatpoint.com/java-tutorial",
    time: 2000,
    price: 7900,
  },
  {
    title: "FLUTTER",
    name: "Static Method and variable",
    by: " By: Andera Bizzoto",
    date: "16 september 2020",
    video: "../VideosLocal/figma.mp4",
    link: "https://flutter-examples.com/dart-create-call-static-variables-static-methods/",
    time: 4500,
    price: 8999,
  },

  {
    title: "MEAN STACK",
    name: "Learn how to connect to mongodb server",
    by: "By: Sowmitha V",
    date: "23rd may 2021",
    video: "../VideosLocal/dsa.mp4",
    link: "https://www.javatpoint.com/setup-mongodb-in-mean-stack",
    time: 7500,
    price: 3999,
  },

  {
    title: "DBMS",
    name: "Fundamentals of Database system",
    by: "By: Devis",
    date: "24th August 2020",
    video: "../VideosLocal/throw.mp4",
    link: "https://www.dbta.com/Columns/DBA-Corner/Database-Fundamentals-68239.aspx",
    time: 68000,
    price: 499,
  },

  {
    title: "BIG DATA",
    name: "introduction and types of Big Data",
    by: "By: Abhinav Rai",
    date: "5 april 2021",
    video: "../VideosLocal/cyber.mp4",
    link: "https://www.upgrad.com/blog/what-is-big-data-types-characteristics-benefits-and-examples/",
    time: 32000,
    price: 1299,
  },

  {
    title: "COMPUTER NETWORKS",
    name: "Explanation of Routers",
    by: "By: Jayaram Boga",
    date: "12 december 2020",
    video: "../VideosLocal/mspivot.mp4",
    link: "https://www.nfon.com/en/service/knowledge-base/knowledge-base-detail/router",
    time: 6037,
    price: 599,
  },

  {
    title: "ADVANCE JS",
    name: "Promises in javascript",
    by: "By: Dave Gray",
    date: "8 june 2020",
    video: "../VideosLocal/api.mp4",
    link: "https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/",
    time: 6500,
    price: 7499,
  },

  {
    title: "DSA",
    name: "Linked List in Data structure",
    by: "By: Imtiaz Ahmed",
    date: "30 March 2021",
    video: "../VideosLocal/docker.mp4",
    link: "https://www.programiz.com/dsa/linked-list",
    time: 7000,
    price: 4599,
  },

  {
    title: "OPERATING SYSTEM",
    name: "Computer Basics: Understing of Operating System",
    by: "By: David Calle",
    date: "19 February",
    video: "../VideosLocal/async.mp4",
    link: "https://edu.gcfglobal.org/en/computerbasics/understanding-operating-systems/1/",
    time: 1000,
    price: 899,
  },

  {
    title: "C LANGUAGE",
    name: "Statements in C",
    by: "By: Sourabh shukla",
    date: "17 october 2020",
    video: "../VideosLocal/aptitude.mp4",
    link: "https://www.cs.yale.edu/homes/aspnes/pinewiki/C(2f)Statements.html",
    time: 3000,
    price: 4899,
  },
];
localStorage.setItem("myCoursePicks3", JSON.stringify(productsPicks3));

var showPicks3 = localStorage.getItem("myCoursePicks3");
showPicks3 = JSON.parse(showPicks3);

function showProducts3() {
  var courseBag = [];
  showPicks3.forEach(function (product, n) {
    let parent3 = document.createElement("div");
    parent3.setAttribute("id", "parent3");
    parent3.setAttribute("class", "dummy3");
    parent3.onmouseenter = function () {
      document.getElementById(`contents3${n}`).style.height = "180px";
      document.getElementById(`videos3${n}`).style.height = "160px";
    };
    parent3.onmouseout = function () {
      document.getElementById(`contents3${n}`).style.height = "32px";
      document.getElementById(`videos3${n}`).style.height = "155px";
    };
    let videoBox3 = document.createElement("div");
    videoBox3.setAttribute("class", "videoBoxes3");
    videoBox3.addEventListener("click", getData);
    var courseKey = [];
    function getData() {
      let checker3 = localStorage.getItem("courseData");
      checker3 = JSON.parse(checker3);
      for (key in checker3) {
        courseKey.push(checker3[key].name);
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
    let vide3 = document.createElement("VIDEO");
    vide3.setAttribute("id", `videos3${n}`);
    vide3.setAttribute("width", "100%");
    vide3.setAttribute("height", "155px");
    var a = localStorage.getItem("player")
    a = JSON.parse(a);
    if(a >0){
      vide3.setAttribute("controls", "controls");
    }
    vide3.src = product.video;
    videoBox3.appendChild(vide3);
    let content3 = document.createElement("div");
    content3.setAttribute("id", `contents3${n}`);
    let title3 = document.createElement("p");
    title3.textContent = product.title;
    let name3 = document.createElement("p");
    name3.textContent = `Name: ${product.name}`;
    let by3 = document.createElement("p");
    by3.textContent = product.by;
    let date3 = document.createElement("p");
    date3.textContent = `Released on:${product.date}`;
    content3.append(title3, name3, by3, date3);

    parent3.append(videoBox3, content3);
    document.getElementById("containerPOP3").append(parent3);
    //slider button adding funconalities
    var dum3 = document.getElementsByClassName("dummy3");
    let sliderbtn1 = document.getElementById("slbtns7");
    let sliderbtn2 = document.getElementById("slbtns8");
    //function for moving upwards
    var l = 0;
    sliderbtn2.onclick = function () {
      l++;
      for (var i of dum3) {
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
      for (var i of dum3) {
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
showProducts3();
