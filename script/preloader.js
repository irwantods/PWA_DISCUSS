document.addEventListener("DOMContentLoaded", function() {
    function removePreload() {
        $('.preloader-background').delay(1700).fadeOut('slow');

        $('.preloader-wrapper')
            .delay(1700)
            .fadeOut();
    }
    removePreload()
});