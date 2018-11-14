(function(){
    var currentstep = ""
    
        function erNyttStepp(){
            let step = document.querySelector(["iframe"]).contentWindow.document.querySelector('[class="klp-summary-currentstep"]').innerText
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
        return document.querySelector("iframe").contentDocument.querySelectorAll("button");
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
        erNyttStepp();
        eventpaaknappan()
         } 
     catch (error) {
        utag.DB("Error UID 152 " + "(" + error.name + ": " + error.message + ")"); 
        }
    })(window)