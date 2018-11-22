(function() {
  waitForElements = window.setInterval(function(){
    if(document.readyState==="complete"){

        dittliv = window.setInterval(function() {
          if (document.querySelector('[src="2.7857"]') === null) {
            window.clearInterval(dittliv);
          }
      
          try {
            var current_style = document.querySelector('[src="2.7857"]').contentWindow.document.querySelector('[id="nyhetsbrevSuccess"]').style.display;
            if (current_style != "none") {
              window.clearInterval(dittliv);
              utag.link({
                success: "medlemssjekk-medlem-nyhetsbrev",
          event_category: "SignUp",
                event_action: "Click",
                event_label: "Nyhetsbrev",
                event_value: "1",
                });
        utag.link({
          success: "paamelding-dittlivsreise",
          event_category: "SignUp",
                event_action: "Click",
                event_label: "Dittlvsreise",
                event_value: "1",
          adf_page_name: "klp.no|medlemsfordeler|ditt-livs-reise|delta_knapp_kvittering",
          adf_divider : "|",
        });
      
            }
          } catch (error) {
            utag.DB("Error UID 138 " + "(" + error.name + ": " + error.message + ")");
          }
        }, 500);
        
      clearIntervall(waitForElements);}}
    ,500);
    
      })(window);