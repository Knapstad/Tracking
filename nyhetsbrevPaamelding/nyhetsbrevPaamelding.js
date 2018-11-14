(function() {
    nyhetsbrev = window.setInterval(function() {
      if (document.querySelector('[src="/2.7391"]') == null) {
        window.clearInterval(nyhetsbrev);
      }
  
      try {
        var current_style = document.querySelector('[src="/2.7391"]').contentWindow.document.querySelector('[id="nyhetsbrevSuccess"]').style.display;
        if (current_style != "none") {
          window.clearInterval(nyhetsbrev);
          utag.link({
            success: "medlemssjekk-medlem-nyhetsbrev",
            event_category: "SignUp",
            event_action: "Click",
            event_label: "Nyhetsbrev",
            event_value: "1",
          });
  
        }
      } catch (error) {
        utag.DB("Error UID 79 " + "(" + error.name + ": " + error.message + ")");
      }
    }, 500);
  })(window);