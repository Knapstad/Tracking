function checkStatenyhetsbrev(){
    let style = document.querySelector('[src="/2.7391"]').contentWindow.document.querySelector('[id="nyhetsbrevSuccess"]').style.display;
    
    if(style !== "none"){
            
                utag.link({
                success: "medlemssjekk-medlem-nyhetsbrev",
                event_category: "Signup",
                event_action: "Click",
                event_label: "Nyhetsbrev",
                event_value: "1",
                relationship: "medlem",
              });
            clearInterval(nyhetsbrev);
        }
    
    }
    waitDom159 =  setInterval(function(){
       if (document.readyState == "complete"){
        nyhetsbrev = setInterval(checkStatenyhetsbrev, 500);
        clearInterval(waitDom159)}
       } 
    , 500);
    
    
    