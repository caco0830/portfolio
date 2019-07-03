function displayMenu() {
    $('.nav').on('click', '.mobile-menu', function (event) {
        $(".nav-links").toggleClass("no-display");
        $(".nav-links").toggleClass("links-flex");
        $("main").toggleClass("margin80");
        $(hideMenu);
    });
}

function hideMenu(){
    $('.nav').on('click', '.nav-links', function (event) {
        console.log('clicked');
        $(".nav-links").addClass("no-display");
    });
}

$(displayMenu);