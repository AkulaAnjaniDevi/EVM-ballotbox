var picd=document.getElementById("displaypic");
var right=document.getElementById("subdiv2");
var first=document.getElementById("div1");
var pob=document.getElementById("power")

function image() {
    console.log("clicked")

    document.getElementById("but0").style.visibility="hidden";
    document.getElementById("but1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    picd.setAttribute("src","congress.png");
    picd.style.display="inline";
    congressv=1;
}
function image1() {
    console.log("clicked")

    document.getElementById("but0").style.visibility="visible";
    document.getElementById("but1").style.visibility="hidden";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    picd.setAttribute("src","BJP.jpg");
    picd.style.display="inline";
    bjpv=1;}
function image2() {
    console.log("clicked")
        document.getElementById("but0").style.visibility="visible";
            document.getElementById("but1").style.visibility="visible";
            document.getElementById("but2").style.visibility="hidden";
            document.getElementById("but3").style.visibility="visible";
            document.getElementById("but4").style.visibility="visible";
            document.getElementById("but5").style.visibility="visible";
            document.getElementById("but6").style.visibility="visible";
            document.getElementById("but7").style.visibility="visible";
            picd.setAttribute("src","tdp.jpeg");
            picd.style.display="inline";
            tdpv=1;
        }
        function image3() {
            console.log("clicked")
        
            document.getElementById("but0").style.visibility="visible";
            document.getElementById("but1").style.visibility="visible";
            document.getElementById("but2").style.visibility="visible";
            document.getElementById("but3").style.visibility="hidden";
            document.getElementById("but4").style.visibility="visible";
            document.getElementById("but5").style.visibility="visible";
            document.getElementById("but6").style.visibility="visible";
            document.getElementById("but7").style.visibility="visible";
            picd.setAttribute("src","ysrcon.jpeg");
            picd.style.display="inline";
          ysrv=1;}
function image4() {
                console.log("clicked")
            
                document.getElementById("but0").style.visibility="visible";
                document.getElementById("but1").style.visibility="visible";
                document.getElementById("but2").style.visibility="visible";
                document.getElementById("but3").style.visibility="visible";
                document.getElementById("but4").style.visibility="hidden";
                document.getElementById("but5").style.visibility="visible";
                document.getElementById("but6").style.visibility="visible";
                document.getElementById("but7").style.visibility="visible";
                picd.setAttribute("src","loks.png");
                picd.style.display="inline";
                loksathav=1;

            }
function image5() {
        console.log("clicked")
                
        document.getElementById("but0").style.visibility="visible";
        document.getElementById("but1").style.visibility="visible";
         document.getElementById("but2").style.visibility="visible";
        document.getElementById("but3").style.visibility="visible";
            document.getElementById("but4").style.visibility="visible";
             document.getElementById("but5").style.visibility="hidden";
            document.getElementById("but6").style.visibility="visible";
            document.getElementById("but7").style.visibility="visible";
     picd.setAttribute("src","cpm.png");
            picd.style.display="inline";
        cpmv=1;}
function image6() {
    console.log("clicked")
    document.getElementById("but0").style.visibility="visible";
    document.getElementById("but1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="hidden";
    document.getElementById("but7").style.visibility="visible";
    picd.setAttribute("src","trs.jpeg");
    picd.style.display="inline";
    trsv=1;}
function image7() {
    console.log("clicked")
    document.getElementById("but0").style.visibility="visible";
    document.getElementById("but1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="hidden";
    picd.setAttribute("src","prp.png");
    picd.style.display="inline";
    prpv=1;}

    var congressv = 0, bjpv = 0, tdpv = 0, ysrv = 0, loksathav = 0, cpmv = 0, trsv = 0, prpv = 0;

    // Vote count tracking
    var tcongressv = 0, tbjpv = 0, ttdpv = 0, tysrv = 0, tloksathav = 0, tcpmv = 0, ttrsv = 0, tprpv = 0;
    
    function select() {
        if (congressv === 1) {
            tcongressv++; 
            congressv = 0; // Reset selection
            document.getElementById("but0").style.visibility = "visible";
        } 
        if (bjpv === 1) {
            tbjpv++;
            bjpv = 0;
            document.getElementById("but1").style.visibility = "visible";
        } 
        if (tdpv === 1) {
            ttdpv++;
            tdpv = 0;
            document.getElementById("but2").style.visibility = "visible";
        } 
        if (ysrv === 1) {
            tysrv++;
            ysrv = 0;
            document.getElementById("but3").style.visibility = "visible";
        } 
        if (loksathav === 1) {
            tloksathav++;
            loksathav = 0;
            document.getElementById("but4").style.visibility = "visible";
        } 
        if (cpmv === 1) {
            tcpmv++;
            cpmv = 0;
            document.getElementById("but5").style.visibility = "visible";
        } 
        if (trsv === 1) {
            ttrsv++;
            trsv = 0;
            document.getElementById("but6").style.visibility = "visible";
        } 
        if (prpv === 1) {
            tprpv++;
            prpv = 0;
            document.getElementById("but7").style.visibility = "visible";
        }
    
        console.log("Vote submitted successfully!");
        console.log({ tcongressv, tbjpv, ttdpv, tysrv, tloksathav, tcpmv, ttrsv, tprpv });

        // countDisplay();
    }
function countDisplay() {

    if (typeof tcongressv === 'undefined') tcongressv = 0;
    if (typeof tbjpv === 'undefined') tbjpv = 0;
    if (typeof ttdpv === 'undefined') ttdpv = 0;
    if (typeof tysrv === 'undefined') tysrv = 0;
    if (typeof tloksathav === 'undefined') tloksathav = 0;
    if (typeof tcpmv === 'undefined') tcpmv = 0;
    if (typeof ttrsv === 'undefined') ttrsv = 0;
    if (typeof tprpv === 'undefined') tprpv = 0;


    document.getElementById("c1").textContent = ` : ${tcongressv} Votes`;
    document.getElementById("c2").textContent = ` : ${tbjpv} Votes`;
    document.getElementById("c3").textContent = ` : ${ttdpv} Votes`;
    document.getElementById("c4").textContent = ` : ${tysrv} Votes`;
    document.getElementById("c5").textContent = ` : ${tloksathav} Votes`;
    document.getElementById("c6").textContent = ` : ${tcpmv} Votes`;
    document.getElementById("c7").textContent = ` : ${ttrsv} Votes`;
    document.getElementById("c8").textContent = ` : ${tprpv} Votes`;

    console.log("Vote counts displayed:", { tcongressv, tbjpv, ttdpv, tysrv, tloksathav, tcpmv, ttrsv, tprpv });

 
    const div1 = document.getElementById("div1");
    const countpage = document.getElementById("countpage");

    if (div1) div1.style.display = "none";
    if (countpage) countpage.style.display = "block";
}




function reset(){
    tcongressv=0;
    tbjpv=0;
    ttdpv=0;
    tysrv=0; 
    tloksathav=0;
    tcpmv=0;
    ttrsv=0;
    tprpv=0;
    console.log("Resetted")
    countDisplay();
}


function unsubmit(){
    congressv=0;
    bjpv=0;
    tdpv=0;
    ysrv=0;
    loksathav=0;
    cpmv=0;
    trsv=0;
    prpv=0;
    document.getElementById("but0").style.visibility="visible";
    document.getElementById("but1").style.visibility="visible";
    document.getElementById("but2").style.visibility="visible";
    document.getElementById("but3").style.visibility="visible";
    document.getElementById("but4").style.visibility="visible";
    document.getElementById("but5").style.visibility="visible";
    document.getElementById("but6").style.visibility="visible";
    document.getElementById("but7").style.visibility="visible";
    console.log("Unsubmit")
    ballotdisplay()
                           
                           }
                           var isOn = false; // Track the state

                           function togglePower() {
                               if (isOn) {
                                   // Turn Off
                                   first.style.display = "none";
                                   countpage.style.display = "none";
                                   pob.style.backgroundColor = "red"; // Indicate off state
                                   console.log("Turned Off");
                               } else {
                                   // Turn On
                                   first.style.display = "block";
                                   right.style.display = "block";
                                   countpage.style.display = "none";
                                   pob.style.backgroundColor = "green"; // Indicate on state
                                   console.log("Turned On");
                               }
                               isOn = !isOn; // Toggle state
                           }
                        
function ballotdisplay(){
    document.getElementById("div1").style.display="block";
    document.getElementById("div2").style.display="block";
    document.getElementById("countpage").style.display="none";
}