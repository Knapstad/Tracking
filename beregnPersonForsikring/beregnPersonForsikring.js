try {
  document.querySelector('[src="/forsikring/personforsikringer/forsikringsveileder/forsikringsveileder-plugin"]').contentWindow.document.querySelector('button').onclick = function() {
    utag.link({
      success: "beregnpersonforsikrig",
      event_category: "Forsikring",
      event_action: "Click",
      event_label: "beregnpersonforsikrig",
      event_value: "1",
    });
  };
    
} catch (error) {
  utag.DB("Error UID 151 " + "(" + error.name + ": " + error.message + ")");
}