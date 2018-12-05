function killOnbeforeunload(){
  setTimeout(500);
  if(document.querySelector(".klp-summary-currentstep").textContent!=="1. Låntakere"){window.onbeforeunload=null}
}

function addNextButtonEvent(){
nesteKnapp = document.querySelectorAll("button")[1];
nesteKnapp.addEventListener("click", function(){sendSivilstatus(); killOnbeforeunload();});}


function sendSivilstatus()
  {
    if(document.querySelector(".klp-bg--alpha-darker")===null){
     sivilstatus = document.querySelector("[label='Sivilstatus']").value;
  }
  else
  {
    sivilstatus =document.querySelector(".klp-bg--alpha-darker").textContent+document.querySelector("[label='Sivilstatus']").value;
  }
    utag.link({
      
      "sivilstatus": sivilstatus,
      
    });
  }
 
try{
window.onbeforeunload = sendSivilstatus;
}
catch(error){
    utag.DB("Error UID 156 onbeforeunload ("+ error.name+ ":" + error.message +")");
    
}

try{
    waitForElement=  window.setInterval(function(){
        if(document.readyState=== "complete"){
            addNextButtonEvent();
            clearInterval(waitForElement)}}, 500);
}

catch(error){
    utag.DB("Error UID 156 onclick ("+ error.name+ ":" + error.message +")");
  }