(function($) {

    /**
      * Convert one front page link to AJAX pop-up
      */
    function linkPopupPage() {
        $(".overlayLink").prepOverlay({
            subtype: 'ajax',
            // part of Plone page going into pop-up dialog content area
            filter: '#content-core > *'
        });
    }

    $(document).ready(function() {
        linkPopupPage();
    });

})(jQuery);