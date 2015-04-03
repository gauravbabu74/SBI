(function (global,$) {
    var HomeViewModel,
        app = global.app = global.app || {};

    HomeViewModel = kendo.data.ObservableObject.extend({
   
    navigateToEligibilityPage:function()
    {
        alert('gaurav');
        
         app.navigate("#appDrawer");
    }
        
        
        
    });
    
    app.HomeViewModel = {
        viewModel: new HomeViewModel()	
    };
})(window,jQuery);