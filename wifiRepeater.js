function onInit() {
  var wifi = require("Wifi");

  var connect = function() {
    console.log('trying');
    wifi.connect("Shut Your Damn Dog Up", {password: "insertPassword!"}, function(err) {
      console.log(err);
      if(err){
        console.log(err);
        setTimeout(connect,3000);
      } else {
        wifi.getDetails(function(details) {
          console.log("connected!");
          console.log(details);
          wifi.disconnect();
          setTimeout(connect,3000);
        });
      }
    });
  };

  wifi.scan(function(ap) {
    console.log(ap);
    connect();
  });
}

save();