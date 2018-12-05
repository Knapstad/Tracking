

function checkState(interval){
let style_medlem = document.querySelector('[src="/medlemsfordeler/medlemsjekk-hvit"]').contentWindow.document.querySelector('[id="isMember"]').style.display;
let style_ikkemedlem = document.querySelector('[src="/medlemsfordeler/medlemsjekk-hvit"]').contentWindow.document.querySelector('[id="isNotMember"]').style.display;

if(style_medlem !== "none"){
            utag.link({
            success: "medlemssjekk-medlem",
            event_category: "Medlem",
            event_action: "Click",
            event_label: "Medlem",
            event_value: "1",
            relationship: "medlem",
          });
        clearInterval(medlemsjekk)
    };
if(style_ikkemedlem !== "none"){
    
        utag.link({
            success: "medlemssjekk-ikkemedlem",
            event_category: "Medlem",
            event_action: "Click",
            event_label: "Ikkemedlem",
            event_value: "1",
            relationship: "ikkemedlem",
            });
        clearInterval(medlemsjekk);
    }
}
waitDom=  setInterval(function(){
   if (document.readyState == "complete"){
    medlemsjekk = setInterval(checkState, 500)
    clearInterval(waitDom)}
   } 
, 500)

