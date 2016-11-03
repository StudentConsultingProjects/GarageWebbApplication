$(document).ready(function () {

    $(document).on("click", ".toggleScroll", function (e) {
        var el = $(this).data("target");
        
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).addClass("active");

        $('html, body').animate({
            scrollTop: ($(el).offset().top) - ($(".navbar").eq(0).height()) 
        }, 400);
        
    });

    setTimeout(function () {
        var amount = 35;
        $(".hello-message").css({top: (amount + 10 +"%") });
        $(".hello-message").animate({
            opacity: 1,
            top: (amount + "%")
        }, 1000);
    }, 600);
});