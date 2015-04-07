
(function (global) {
    app = global.app = global.app || {};
    
    document.addEventListener('deviceready', function () {  
      navigator.splashscreen.hide();
      if(navigator.geolocation)
      {
        //navigator.geolocation.getCurrentPosition(oncallback);
          
      }  
        
    }, false);
    var oncallback = function(position)
    {
        var latitude = position.coords.latitude,
            longitude = position.coords.longitude;
        
        var geocodingAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude;

        $.getJSON(geocodingAPI, function (json) {
            if (json.status === "OK") {
                var result = json.results[0];
                var city = "";
                var state = "";
                for (var i = 0, len = result.address_components.length; i < len; i++) {
                    var ac = result.address_components[i];
                    
                    if (ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.short_name;
                    if (ac.types.indexOf("administrative_area_level_2") >= 0) city = ac.short_name;
                }
                if (state !== '') {
                    
                    sessionStorage.setItem("state",state);
                    //alert("Hello to you out there in " + city + ", " + state + "!");
                }
                else
                {
                    sessionStorage.setItem("state",'');
                }
                
                if (city !== '') {
                    
                     sessionStorage.setItem("city",city);
                }
                else
                {
                    sessionStorage.setItem("city",'');
                }
                
            }

        });
    };
    
    
    
    
    app = new kendo.mobile.Application(document.body, {skin: 'flat',initial: 'main-page'});
    
})(window);