waitForElements = window.setInterval(function(){
    if(document.readyState==="complete"){
    try{
        var ubemannet = "øyeblikket ubemannet"
        var chatVindutekst = document.querySelector('[class="vngage-title"]').textContent
        var chatKnapp = document.querySelector('[class="vngage-tab"]')
        
        if(chatVindutekst.includes(ubemannet)) {
            bemanning = "Ubemannet"
            }
        else {
            bemanning = "Bemannet"
        }
        chatKnapp.addEventListener("click",function(){
            utag.link({
            event_category: "Chat",
            event_action: "Click",
            event_label: bemanning,
            event_value: 0,
            })},            
        {once: true}
        )
    }
    catch(error){
        utag.DB("Error UID 154 ("+ error.name+ ":" + error.message +")")

    }
    clearInterval(waitForElements);
}
        },500);