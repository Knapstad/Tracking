waitDom151 = setInterval(function(){
  if(document.readyState==="complete" && document.querySelector('[src="/forsikring/personforsikringer/forsikringsveileder/forsikringsveileder-plugin"]').contentWindow.document.readyState == "complete"){
  setTimeout(function(){
  try {
      document.readyState==="complete" && document.querySelector('[src="/forsikring/personforsikringer/forsikringsveileder/forsikringsveileder-plugin"]').contentWindow.document.readyState == "complete";
      document.querySelector('[src="/forsikring/personforsikringer/forsikringsveileder/forsikringsveileder-plugin"]').contentWindow.document.querySelector('button').addEventListener("click", 
      ()=>{utag.link({
        success: "beregnpersonforsikrig",
        event_category: "Forsikring",
        event_action: "Click",
        event_label: "beregnpersonforsikrig",
        event_value: "1",
      })}
    )}
      
   catch (error) {
    utag.DB("Error UID 151 " + "(" + error.name + ": " + error.message + ")");
    
  }},500)
  ;clearInterval(waitDom151)}},500)