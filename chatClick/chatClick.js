(function(){
    try{
        let ubemannet = "øyeblikket ubemannet"
        let chatVindutekst = document.querySelector('[class="vngage-title"]').textContent
        let chatKnapp = document.querySelector('[class="vngage-tab"]')
        
        if(chatVindutekst.includes(ubemannet)) {
            bemanning = "ubemannet"
            }
        else {
            bemanning = "bemannet"
        }
        chatKnapp.addEventListener("click",function(){
            utag.link({
            event_category: "chat",
            event_action: "click",
            event_label: bemanning,
            event_value: 0,
            })},            
        {once: true}
        )
    }
    catch{
        console.log("woops her haru bomma")

    }
}
    )(window)