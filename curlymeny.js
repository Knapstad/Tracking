function curly(){
    let meny = document.querySelectorAll(".klp-toc__listitem");
    for(i=0; i< meny.length; i++){
        let label = meny[i].textContent;    
        meny[i].addEventListener("click",
        function(){utag.link({
            event_category: "Curly",
            event_action: "Click",
            event_label: label,
            event_value: 0,
            });
                  });
    }
    }