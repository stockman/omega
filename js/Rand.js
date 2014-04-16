(function($) {
    Drupal.behaviors.myBehavior = {
        attach: function(context, settings) {
            //code starts
            $("#user-login-form").addClass("js").before('<div id="menuer">⍜</div>');
            $("#menuer").click(function() {
                $("#user-login-form").toggle();
            });
            $(window).resize(function() {
                if (window.innerWidth > 768) {
                    $("#user-login-form").removeAttr("style");
                }
            });
            //code ends
        }
    };
})(jQuery);