function checkStatejulekonk(){
    let style = document.querySelector('[src="2.7917"]').contentWindow.document.querySelector('[id="nyhetsbrevSuccess"]').style.display;
    
    if(style !== "none"){
            
                utag.link({
                success: "medlemssjekk-medlem-nyhetsbrev",
                event_category: "Signup",
                event_action: "Click",
                event_label: "Nyhetsbrev",
                event_value: "1",
                relationship: "medlem",
              });
              utag.link({
                success: "julekarameller",
                event_category: "Signup",
                event_action: "Click",
                event_label: "julekarameller",
                event_value: "1",
                
              });
            clearInterval(nyhetsbrev);
        }
    
    }
    waitDom160 =  setInterval(function(){
       if (document.readyState == "complete"){
        nyhetsbrev = setInterval(checkStatejulekonk, 500);
        clearInterval(waitDom160)}
       } 
    , 500);
    
    
    