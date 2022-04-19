var testo = document.getElementById("testo");

var tocchi = 0;

testo.addEventListener("click", ()=>{
    tocchi += 1;
    if(tocchi == 1)
    {
        testo.innerText="AUGURI!";
    }
    if(tocchi == 2)
    {
        testo.style.fontSize="15px";
        testo.innerHTML="oggi compi 6570 giorni di vita!<br>Io ti conosco da 173 giorni (li ho contati)<br>che sono il 2,6% (ho contato pure questo)<br><br>Qual è il punto???";
    }
    if(tocchi == 3)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="Nessun punto";
    }
    if(tocchi == 4)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="SCHERZO!!!";
    }
    if(tocchi == 5)
    {
        testo.style.fontSize="35px";
        testo.innerHTML+="<br>sono un prankster";
    }
    if(tocchi == 6)
    {
        testo.style.fontSize="15px";
        testo.innerHTML="Il punto è: <br>anche se ti conosco dal 2.6% della tua vita<br>voglio fare un piccolo elenco dei motivi<br>per cui sei la persona più fantastica del mondo";
    }
    if(tocchi == 7)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="MOTIVO 1:<br>mi fai ridere davvero molto<br><br>";
        testo.innerHTML+="<img src='./R.jpg' width='200px'>"
    }
    if(tocchi == 8)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="MOTIVO 2:<br>sei tipo bellissima<br><br>";
        testo.innerHTML+="<img src='./nic.jpg' width='200px'>"
    }
    if(tocchi == 9)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="MOTIVO 3:<br>lui.<br><br>";
        testo.innerHTML+="<img src='./simoffede.png' width='200px'>"
    }
    if(tocchi == 10)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="MOTIVO 4:<br>mi aiuti e mi tieni sempre compagnia<br><br>";
        testo.innerHTML+="<img src='./i.jpg' width='200px'>"
    }
    if(tocchi == 11)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="MOTIVO 5:<br>da oggi mi puoi comprare da bere!<br><br>";
        testo.innerHTML+="<img src='./io.jpg' width='200px'>"
    }
    if(tocchi == 12)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="MOTIVO 6:<br>ti voglio tanto bene<br><br>";
        testo.innerHTML+="<img src='./lovv.jpg' width='200px'>"
    }
    if(tocchi == 13)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="MOTIVO 7:<br>slide muta e patriarcale<br><br>";
        testo.innerHTML+="<img src='./ciliegia.jpg' width='200px'>"
        testo.innerHTML+="<img src='./pesca.jpg' width='200px'>"
    }
    if(tocchi == 14)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="MOTIVO 8:<br>mi hai fatto conoscere tanti memini<br><br>";
        testo.innerHTML+="<img src='./borra.jpg' width='200px'>"
    }
    if(tocchi == 15)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="Potrei andare avanti per molto<br>ma sarei ripetitivo";
    }
    if(tocchi == 16)
    {
        testo.style.fontSize="35px";
        testo.innerHTML="Auguri BB<br>ily";
    }
});
