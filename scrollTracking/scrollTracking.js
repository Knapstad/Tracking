(function() {
    var scrolledPast75 = false;
    var scrolledPast50 = false;
    var scrolledPast25 = false;
    var scrolledTo100 = false;
    var baseline = false;
  
    var startscroll = Date.now();
  
    polls = window.setInterval(function() {
      try {
        var winmax = document.body.scrollHeight - window.innerHeight;
        scrolled = window.pageYOffset / winmax;
        if(baseline === false){
          baseline = true;
          utag.link({
              event_category: "Scroll Depth",
              event_action: "Scroll",
              event_label: "Baseline",
              event_value: 0,
              pixel_depth: 0
          });
        }
  
        if (scrolled > 0.97 && scrolledTo100 === false) {
          scrolledTo100 = true;
          scrolled100Time = Date.now();
          utag.link({
            event_category: "Scroll Depth",
            event_action: "Scroll",
            event_label: "100%",
            event_value: (0).toFixed(0),
            time_to_action: ((scrolled100Time - startscroll) / 100 / 60).toFixed(2),
            pixel_depth: (window.innerHeight).toFixed(0)
          });
        }
  
        if (scrolled > 0.75 && scrolledPast75 === false) {
          scrolledPast75 = true;
          scrolled75Time = Date.now();
          utag.link({
            event_category: "Scroll Depth",
            event_action: "Scroll",
            event_label: "75%",
            event_value: (0).toFixed(0),
            time_to_action: ((scrolled75Time - startscroll) / 100 / 60).toFixed(2),
            pixel_depth: (window.innerHeight).toFixed(0)
          });
        }
  
        if (scrolled > 0.50 && scrolledPast50 === false) {
          scrolledPast50 = true;
          scrolled50Time = Date.now();
          utag.link({
            event_category: "Scroll Depth",
            event_action: "Scroll",
            event_label: "50%",
            event_value: (0).toFixed(0),
            time_to_action: ((scrolled50Time - startscroll) / 100 / 60).toFixed(2),
            pixel_depth: (window.innerHeight).toFixed(0)
          });
        }
  
        if (scrolled > 0.25 && scrolledPast25 === false) {
          scrolledPast25 = true;
          scrolled25Time = Date.now();
          utag.link({
            event_category: "Scroll Depth",
            event_action: "Scroll",
            event_label: "25%",
            event_value: (0).toFixed(0),
            time_to_action: ((scrolled25Time - startscroll) / 100 / 60).toFixed(2),
            pixel_depth: (window.innerHeight).toFixed(0)
          });
        }
  
        if (scrolledPast75 === true && scrolledPast50 === true && scrolledPast25 === true && scrolledTo100 === true) {
          window.clearInterval(polls);
        }
      } catch (error) {
        utag.DB("Error UID 143 scroll " + "(" + error.name + ": " + error.message + ")");
      }
    }, 500);
  })(window);