
(function (global) {
    app = global.app = global.app || {};
    
    document.addEventListener('deviceready', function () {  
      navigator.splashscreen.hide();
    }, false);
    
    app = new kendo.mobile.Application(document.body, {skin: 'flat',initial: 'main-page'});
    
})(window);