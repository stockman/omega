(function($) {
    Drupal.behaviors.myBehavior = {
        attach: function(context, settings) {
            //code starts
            // for the user profiles
            $(".profiler").addClass("js").before('<div id="pmenu">⍜</div>');
            // can you make this wrap? .after('</div>');
            $("#pmenu").click(function() {
                $(".profiler").toggle();
            });
            $(window).resize(function() {
                if (window.innerWidth > 1768) {
                    $(".profiler").removeAttr("style");
                }
            });
            // for the about tab
            $(".abouter").addClass("js").before('<div id="imenu">ï</div>');
            $("#imenu").click(function() {
                $(".abouter").toggle();
            });
            $(window).resize(function() {
                if (window.innerWidth > 1768) {
                    $(".abouter").removeAttr("style");
                }
            });
            //code ends
        }
    };
})(jQuery);