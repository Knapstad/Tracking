function klikkbrytercontainer(){
    setTimeout(function(){
            utag.link({
            event_category: "BilAssistent",
            event_action: "Click",
            event_label: document.querySelector(".active").textContent,
            event_value: 0,
            })},50)}

function klikksporsmaal(el) {
    
    utag.link({
        event_category: "BilAssistent",
        event_action: el.childNodes[1].textContent,
        event_label: el.innerText.trim(),
        event_value: 0,});
}


waitForElements = window.setInterval(function(){
    if(document.readyState==="complete"){

    try{
        brytercontainer = document.querySelector('[id="klp-switch-111"]');
    
    
    
        accordionelements = document.querySelectorAll(".klp-accordion__header");
        
        }
    catch(error){
        utag.DB("Error UID 153 " + "(" + error.name + ": " + error.message + ")");
    }
    
    
    try{
    brytercontainer.addEventListener("click", klikkbrytercontainer);
    }
    catch (error){
        utag.DB("Error UID 153 - brytercontainer " + "(" + error.name + ": " + error.message + ")");
        
    }
    try{
    accordionelements.forEach(el => {el.addEventListener("click", function(){klikksporsmaal(el)})});
    }catch(error){
        utag.DB("Error UID 153 - Accordionelemet (" + error.name + ": " + error.message + ")");
    }
    clearInterval(waitForElements);
}
        },500);

