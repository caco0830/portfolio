function displayMenu() {
    $('.nav').on('click', '.mobile-menu', function (event) {
        $(".nav-links").toggleClass("no-display");
        $(".nav-links").toggleClass("links-flex");
        $("main").toggleClass("margin80");
    });
}

function hideMenu(){
    $('.nav').on('click', '.nav-links', function (event) {
        $(".nav-links").toggleClass("no-display");
        $(".nav-links").toggleClass("links-flex");
        $("main").toggleClass("margin80");
        $('.nav-links').off();
    });
}

$(displayMenu);
$(hideMenu);