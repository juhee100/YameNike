$(function () {
    $(".notice-btn").click(function () {
        $("#screen, #notice").fadeOut();
    });

    $("#click-login").click(function () {
        console.log("gogogogo");
        $("#screen, #login-popup").fadeIn();
    });
    $(".btn-primary, .login-close").click(function () {
        $("#screen, #login-popup").fadeOut();
    });

	$(".click-modal").click(function(){
        var src = $(this).data("image");
        var name = $(this).find("img").attr("alt");
        var image = new Image();
        image.src = src;
        image.onload = function () {
            $("#title").text(name);
            $("#modal-photo").attr("src", src);
            $("#screen, #modal").fadeIn();
        };
	});

	$("#close").click(function(){
        $("#screen, #modal").fadeOut();
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        margin: 10,
        nav: true,
        mouseWheel: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
});