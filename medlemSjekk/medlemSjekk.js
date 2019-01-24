(function() {
  waitForElements = window.setInterval(function(){
   if(document.readyState==="complete"){
     clearInterval(waitForElements);
     medlemsjekk = window.setInterval(function() {
 if (document.querySelector('[src="/medlemsfordeler/medlemsjekk-hvit"]') === null) {
     utag.DB("Error UID 80: medlemsjekk-iframe not pressent")
     window.clearInterval(medlemsjekk);
 }

 try {
   let current_style_medlem = document.querySelector('[src="/medlemsfordeler/medlemsjekk-hvit"]').contentWindow.document.querySelector('[id="isMember"]').style.display;
   let current_style_ikkemedlem = document.querySelector('[src="/medlemsfordeler/medlemsjekk-hvit"]').contentWindow.document.querySelector('[id="isNotMember"]').style.display;
   if (current_style_medlem != "none") {
     window.clearInterval(medlemsjekk);
     utag.link({
       success: "medlemssjekk-medlem",
       event_category: "Medlem",
       event_action: "Click",
       event_label: "Medlem",
       event_value: "1",
       relationship: "medlem"
     });
   }

   if (current_style_ikkemedlem != "none") {
     window.clearInterval(medlemsjekk);
     utag.link({
       success: "medlemssjekk-ikkemedlem",
       event_category: "Medlem",
       event_action: "Click",
       event_label: "Ikkemedlem",
       event_value: "1",
       relationship: "ikkemedlem"
     });
   }
 } catch (error) {
   utag.DB("Error UID 80 " + "(" + error.name + ": " + error.message + ")");
 }
}, 500);
   }
      
  },500);
})(window);