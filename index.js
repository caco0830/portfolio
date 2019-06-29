function displayMenu() {
    $('.nav').on('click', '.mobile-menu', function (event) {
        console.log('Cllicked');
        $(".nav-links").toggleClass("no-display");
        $(".nav-links").toggleClass("links-flex");
        $("main").toggleClass("margin80");
    });
}

$(displayMenu);