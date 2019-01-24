


try {
    document.querySelector('[src="/forsikring/2.7439"]').contentWindow.document.querySelector('[id="bilfor_submit"]').onclick = function() {
      utag.link({
        success: "hurtigpris",
        event_category: "Forsikring",
        event_action: "Click",
        event_label: "hurtigpris",
        event_value: "1",
      });
    };
    document.querySelector('[src="/forsikring/2.7439"]').contentWindow.document.querySelector('[id="bilfor_submit_mobile"]').onclick = function() {
      utag.link({
        success: "hurtigpris_mobil",
        event_category: "Forsikring",
        event_action: "Click",
        event_label: "hurtigpris_mobil",
        event_value: "1",
      });
    };
  } catch (error) {
    utag.DB("Error UID 100 " + "(" + error.name + ": " + error.message + ")");
  }