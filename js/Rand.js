(function($) {
    Drupal.behaviors.myBehavior = {
        attach: function(context, settings) {
            //code starts
            // for the user profiles
            $("#block-user-login").addClass("js").before('<div id="pmenu">⍜</div>');
            // can you make this wrap? .after('</div>');
            $("#pmenu").click(function() {
                $("#block-user-login").toggle();
            });
            $(window).resize(function() {
                if (window.innerWidth > 1768) {
                    $("#block-user-login").removeAttr("style");
                }
            });
            // for the about tab
            $("#block-menu-menu-about").addClass("js").before('<div id="imenu">ï</div>');
            $("#imenu").click(function() {
                $("#block-menu-menu-about").toggle();
            });
            $(window).resize(function() {
                if (window.innerWidth > 1768) {
                    $("#block-menu-menu-about").removeAttr("style");
                }
            });
            //code ends
        }
    };
})(jQuery);