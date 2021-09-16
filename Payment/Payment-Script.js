
    var items = localStorage.getItem("courseData")
    items = JSON.parse(items);
    
    function show(){

        items.forEach(function(product){
            let firstBox = document.createElement("div");
            firstBox.setAttribute("class","firstBox");
            let divBox = document.createElement("div");
                divBox.setAttribute("class","videoBox")
            let vids = document.createElement("VIDEO");
            vids.src = product.video
            vids.setAttribute("width", "100%");
            vids.setAttribute("height", "100%");
            vids.setAttribute("controls", "controls");
            vids.setAttribute("id", "videoPlayerNew");
            divBox.appendChild(vids)

            let contentBox = document.createElement("div");
                contentBox.setAttribute("class","contentBox");
            
            let name = document.createElement("p");
            name.textContent = product.name
            name.setAttribute("class","name-s")
            let by = document.createElement("p");
             by.textContent = product.by
             by.setAttribute("class","by-s")
            let title = document.createElement("p");
            title.textContent = product.title
            title.setAttribute("class","title-s")
            contentBox.append(name,by,title)
            let price = document.createElement("p");
            price.textContent = `Rs${product.price}`;
            let priceB = document.createElement("div");
            priceB.appendChild(price)
            priceB.setAttribute("class","priceB")

            let totalCalc = document.createElement("div");
                totalCalc.setAttribute("class","totalCalc")
            totalCalc.appendChild(priceB);
            firstBox.append(divBox,contentBox,totalCalc)
            
            let intro = document.createElement("div");
                intro.setAttribute("class","intro")
                intro.textContent="Included with your purchase:"

            let bigBoss = document.createElement("div");
            bigBoss.setAttribute("class","bigBoss")
                let lefter= document.createElement("div");
                lefter.setAttribute("class","lefter")
                

                let vidC = document.createElement("div");
                vidC.textContent="Videos";
                let cerC = document.createElement("div");
                cerC.textContent="Certificate of completion to add to your LinkedIn profile";
                let learnC = document.createElement("div");
                learnC.textContent="Learn anytime, anywhere through mobile apps and offline access";
                lefter.append(vidC,cerC,learnC);




                let righter = document.createElement("div");
                righter.setAttribute("class","righter")

                let accessC = document.createElement("div");
                accessC.textContent="Lifetime access*"

                let guranteeC = document.createElement("div");
                guranteeC.textContent = "30-day money-back guarantee";

                let covidC = document.createElement("div");
                covidC.textContent="Challange Based Learnning even in Covid-19"

                righter.append(accessC,guranteeC,covidC)


            bigBoss.append(lefter,righter)
            let showcaseDiv = document.createElement("div");
             showcaseDiv.setAttribute("class","showCase")
                showcaseDiv.append(intro,bigBoss)

                let genuine = document.createElement("div");
                    genuine.setAttribute("class","genuine")
                genuine.textContent ="*Courses will generally remain available for as long as you keep your LinkedIn account, unless otherwise specified during checkout. On rare occasions we may need to remove certain courses for legal or other reasons.";

            document.getElementById("checkout3").append(firstBox,showcaseDiv,genuine);
            let store = Math.floor((18 / 100) * product.price);
            console.log(store) ;
            let realPrice = store + product.price;
            let showTotals = document.getElementById("totalsDone")
                showTotals.textContent =`Rs ${store}`;
            let showTotalss = document.getElementById("totalsDoneS")
            showTotalss.textContent =`Rs ${realPrice}`
        })
    }
    show()


    function fName(){
        let fname = document.getElementById("firstName").value;
        fname= fname.trim();
        if(fname == ""){
            document.getElementById("firstname").textContent ="First name Required"
            document.getElementById("firstname").style.color="red"
        }
    }
    function lName(){
        let lname = document.getElementById("lastName").value;
        lname= lname.trim();
        if(lname == ""){
            document.getElementById("lastname").textContent ="Last name Required"
            document.getElementById("lastname").style.color="red"
        }
    }

    function cNum(){
        let cnum = document.getElementById("creditNum").value;
        cnum= cnum.trim();
        if(cnum == "" || cnum.length < 16){
            document.getElementById("creditnum").textContent ="Please enter a valid card number"
            document.getElementById("creditnum").style.color="red"
        }

        if(cnum != "" && cnum.length < 16){
            document.getElementById("creditnum").innerHTML=null;
            document.getElementById("creditnum").textContent ="Credit card should be of 16 numbers"
            document.getElementById("creditnum").style.color="red"
        }
       
        
    }

    function expDate(){
        let expdate = document.getElementById("expiryDate").value;
         expdate = expdate.trim();
         if(expdate == ""){
             document.getElementById("expirydate").textContent ="Invalid expiration date";
             document.getElementById("expirydate").style.color="red";
         }
    }
    function cvvNum(){
        let cvvnum = document.getElementById("cvvNumber").value;
         cvvnum = cvvnum.trim();
         if(cvvnum == ""){
             document.getElementById("cvvnumber").textContent ="Invalid Cvv password";
             document.getElementById("cvvnumber").style.color="red";
         }
         else if(cvvnum != "" && cvvnum.length !=3){
             document.getElementById("cvvnumber").textContent ="Cvv should be only of 3 numbers";
             document.getElementById("cvvnumber").style.color="red";
         }
    }
    function pCode(){
        let pcode = document.getElementById("postalCode").value;
         pcode = pcode.trim();
         if(pcode == ""){
             document.getElementById("postalcode").textContent ="Please enter a valid postal code";
             document.getElementById("postalcode").style.color="red";
         }
         else if(pcode != "" && pcode.length !=6){
             document.getElementById("postalcode").textContent ="Postal code should be of 6 numbers";
             document.getElementById("postalcode").style.color="red";
         }
    }

    function gstNum(){
        let gstnum = document.getElementById("gstNumber").value;
         gstnum = gstnum.trim();
         if(gstnum == ""){
             document.getElementById("gstnumber").textContent ="Please enter a valid gst number";
             document.getElementById("gstnumber").style.color="red";
         }
         else if(gstnum != "" && gstnum.length !=15){
             document.getElementById("gstnumber").textContent ="GST number should be of 15 characters";
             document.getElementById("gstnumber").style.color="red";
         }
        
    }

    function remove() {
        let fname = document.getElementById("firstName").value
        fname= fname.trim();
        if(fname != ""){
           document.getElementById("firstname").innerHTML =null;
        }
        let lname = document.getElementById("lastName").value;
        lname= lname.trim();
        if(lname != ""){
            document.getElementById("lastname").innerHTML =null;
        }

        let cnum = document.getElementById("creditNum").value;
        cnum= cnum.trim();
        if(cnum.length == 16){
            document.getElementById("creditnum").innerHTML =null;
        }
        let expdate = document.getElementById("expiryDate").value;
         expdate = expdate.trim();
         if(expdate != ""){
             document.getElementById("expirydate").innerHTML =null;
         }
         let cvvnum = document.getElementById("cvvNumber").value;
         cvvnum = cvvnum.trim();
         if(cvvnum != "" && cvvnum.length ==3){
             document.getElementById("cvvnumber").innerHTML =null;
         }

         let pcode = document.getElementById("postalCode").value;
         pcode = pcode.trim();
         if(pcode != "" && pcode.length ==6){
             document.getElementById("postalcode").innerHTML = null;
         }

         let gstnum = document.getElementById("gstNumber").value;
         gstnum = gstnum.trim();
         if(gstnum != "" &&gs){
             document.getElementById("gstnumber").innerHTML =null;
         }
        
    }
    
    
    function submitForm(e){
            e.preventDefault();
            console.log(e);
            var paymentDetails =[];
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var creditNumber = document.getElementById('creditNum').value;
            var expiryDate = document.getElementById('expiryDate').value;
            var cvvNumber = document.getElementById('cvvNumber').value;
            var country = document.getElementById('country').value;
            var postalCode = document.getElementById('postalCode').value;
            var gstNumber = document.getElementById("gstNumber").value;
           let obj={
               FirstName:firstName,
               LastName:lastName,
               creditDebitDetail:creditNumber,
               ExpiryDate:expiryDate,
               CVV:cvvNumber,
               Country:country,
               PostalCode:postalCode,
               GSTdetails:gstNumber,
           }
            paymentDetails.push(obj);
           localStorage.setItem('myCustomerDetails',JSON.stringify(paymentDetails));
           function alertCustomer(){
            alert("You can place order now")
           }
           setTimeout(alertCustomer,1000)
        }

        let newPayment = document.getElementById("paymentDone");;
         newPayment.addEventListener("click", paymentDone);

        function paymentDone(){

            function setTimer(){
                alert("Payment Successfull!");
                window.location.href ="../Home/home.html"
            }
            setTimeout(setTimer,3000)
        }

    
