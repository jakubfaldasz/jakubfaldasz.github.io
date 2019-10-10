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
});

$(document).scroll(() => {
    var nav = $("#navbar");
    nav.toggleClass("navbarOnScroll", $(this).scrollTop() > nav.height());
});

new Waypoint({
    element: document.querySelector("#about"),
    handler: function() {
        var img = $("#faceImage img");
        var desc = $(".description");
        
        img.animate({left: '0'}, 1000); 
        desc.animate({left: '0'}, 1000);
        console.log("bounce");
    },
    offset: 700
});

new Waypoint({
    element: document.querySelector("#skills"),
    handler: function () {
        var level;
        $(".progressBar span").each(function () {
            level = $(this).text();
            $(this).css("width", level);
        });
    },
    offset: 800
});