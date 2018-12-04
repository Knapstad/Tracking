window.onbeforeunload = sendSivilstatus;
  function sendSivilstatus()
  {
    if(document.querySelector(".klp-bg--alpha-darker")===null){
    var sivilstatus = document.querySelector("[label='Sivilstatus']").value
  }
  else
  {
   var sivilstatus =document.querySelector(".klp-bg--alpha-darker").textContent+document.querySelector("[label='Sivilstatus']").value
  }
    utag.link({
      event_category: "Closewindow",
      event_action: sivilstatus,
      event_label: document.querySelector("[label='Sivilstatus']").value,
      event_value: 0,
    })
  }



var nesteKnapp = document.querySelectorAll("button")[1]
nesteKnapp.addEventListener("click", function(){sendSivilstatus(); killOnbeforeunload();})

function killOnbeforeunload(){
  setTimeout(50)
  if(document.querySelector(".klp-summary-currentstep").textContent!=="1. Låntakere"){window.onbeforeunload=null}
}



