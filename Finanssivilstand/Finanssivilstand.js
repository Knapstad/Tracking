window.onbeforeunload = sendSivilstatus;
  function sendSivilstatus()
  {
    utag.link({
        "sivilstatus" : document.querySelector("[label='Sivilstatus']").value})
  }



var nesteKnapp = document.querySelectorAll("button")[1]
nesteKnapp.addEventListener("click", function(){
    utag.link({
    "sivilstatus" : document.querySelector("[label='Sivilstatus']").value});
     function confirmExit() {}})


