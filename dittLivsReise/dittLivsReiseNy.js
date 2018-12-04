function ready(fn) {
    if (document.readyState === "complete"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

function isPressent(el) {
    return document.querySelector(el) !== null
}

function sendUtagLink(data) {
    utag.link(
        data
    )
}



function main() {
    if (isPressent('[src="2.7857"]')) {
        dittliv = window.setInterval(
            function(){
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
            }}, 500)}};
        
    }

    *\\
    dittliv = window.setInterval(
    
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
      *\\
