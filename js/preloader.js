$(document).ready(function () {
    var preLoader = $("#preloader");
    
    function removePreLoader() {
        preLoader.remove();
    }

    preLoader.delay(1500).fadeOut(1000, removePreLoader);
});