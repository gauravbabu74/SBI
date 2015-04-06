(function (global, $) {
    var HomeViewModel,
        app = global.app = global.app || {};

    HomeViewModel = kendo.data.ObservableObject.extend({
        
           yourCity:sessionStorage.getItem("city"),
           show:function() {
               $("body").removeClass("auth"); 
               $(".km-scroll-container").css("-webkit-transform", "");
               $(".disable").hide();
               $("#yourCity").val(sessionStorage.getItem("city")); 
               $('.css-rbox').click(function() {
                   var sel_value = $(this).val();
                   if (sel_value==='1') {
                       $('#net').show();
                       $('#debitcard').hide();
                   } else {
                       $('#debitcard').show();
                       $('#net').hide();
                   }
               });
               
                $("#datepicker").kendoDatePicker({
                format: "MM-dd-yyyy",
                animation: {
                    close: {
                        effects: "fadeOut zoom:out",
                        duration: 300
                    },
                    open: {
                        effects: "fadeIn zoom:in",
                        duration: 300
                    }
                }
                }).data("kendoDatePicker");
           },
           showAuthPage:function() {
               $("body").addClass("auth"); 
           },
           CouldGetPageShow:function() {
               var $range = $("#loan_range"), $result = $("#loan_result");
               var track = function (data) {
                   $result.html(data.from);
               };
               $range.ionRangeSlider({hide_min_max: true, hide_from_to: true, keyboard: true,onStart: track,onChange: track,onFinish: track,onUpdate: track,min: 50000,max: 300000,from: 50000,to: 300000,step: 50000, prefix: "$",});

               var $range2 = $("#year_range"), $result2 = $("#year_result");
               track = function (data) {
                   $result2.html(data.from);
               };
               $range2.ionRangeSlider({hide_min_max: true, hide_from_to: true, keyboard: true,onStart: track,onChange: track,onFinish: track,onUpdate: track,min: 1,max: 3,from: 1,to: 3,step: 1,prefix: "$",});
           },
           navigateToEligibilityPage:function() {  
               app.navigate("#appDrawer");
           },
           navigateToEligibilityPage:function() {
               app.navigate("#views/get-eligibility.html");
           },
           navigateToEligibility2Page:function() {
               app.navigate("#views/get-eligibility2.html");
           },
           navigateToCouldGetPage:function() {
               app.navigate("#views/could-get.html");
           },
           navigateToLoanOfferPage:function() {
               app.navigate("#views/loan-offer.html");
           },
           navigateToProvideBankStatementPage:function() {
               app.navigate("#views/provide-bank-statement.html");
           },
           navigateToProvideBankStatement2Page:function() {
               app.navigate("#views/provide-bank-statement2.html");     
           },
           navigateToProvideBankStatement3Page:function() {
               app.navigate("#views/provide-bank-statement3.html");     
           },
           navigateToCongratulationPage:function() {
               app.navigate("#views/congratulation.html");     
           },
           navigateTooanReferencePage:function() {
               app.navigate("#views/loan-reference.html");     
           },
           navigateToIndexPage:function() {
               app.navigate("#main-page");     
           }

       });
    
    app.HomeViewModel = {
        viewModel: new HomeViewModel()	
    };
})(window, jQuery);