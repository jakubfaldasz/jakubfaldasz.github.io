var hamburger = $("#toggle-btn");
hamburger.on("click", () => {
    $(".collapse").slideToggle(500);
});

$(window).on("orientationchange load resize", function () {
    var width = $(document).width();
    if (width > 768) {
        $(".collapse").addClass("showMenu");
    }
    if (width <= 768) {
        $(".collapse").removeClass("showMenu");
    }
})

$(document).scroll(() => {
    var nav = $("#navbar");
    var aboutWasntSeen = true;
    nav.toggleClass("navbarOnScroll", $(this).scrollTop() > nav.height());
    if(aboutWasntSeen) {
        $(".aboutContent img").fadeIn(1000);
        $(".description").fadeIn(1000);
    }
});

