
    var currentstep = ""

    function erLastet(){
        {return document.readyState === "complete"}
    }
    
    function erNyttStepp(){
        let step = document.querySelector('[class="klp-summary-currentstep"]').innerText
        if (currentstep != step){
            
            utag.view({
                        "scenarioName" : "Finansieringsbevis",
                        "scenarioStep" : step
                                                });
                        
           currentstep = step;
        }
        
        else 
        {
    }
    }
   
      

    function finnknappan(){
    return document.querySelectorAll("button");
    }
    
    function eventpaaknappan(){
        
        finnknappan().forEach(knapp => { knapp.addEventListener(
                                        "click", function(){
                                            setTimeout(eventpaaknappan,50);
                                            setTimeout(erNyttStepp,100);

                                            }
                                                )
                                                }
                                                    ) 

    }
    try{
    poll = setInterval(function()
                      {if(erLastet()){
                        erNyttStepp();
                        eventpaaknappan();
                        clearInterval(poll)
                      }},500)
    
     } 
 catch (error) {
    utag.DB("Error UID 152 " + "(" + error.name + ": " + error.message + ")"); 
    }






