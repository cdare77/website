(function($) {
    var $window = $(window),
        $content = $('.content');

    function resize() {
        if ($window.width() < 991) {
            $content.removeClass('col-5');
            $content.removeClass('col-sm-4');
            $content.addClass('col-12');
            $content.addClass('col-sm-12');
        }
        else {
            $content.removeClass('col-12');
            $content.removeClass('col-sm-12');
            $content.addClass('col-5');
            $content.addClass('col-sm-4');
        }
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);
