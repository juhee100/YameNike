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

    $(".main-menu").mouseover(function () {
        console.log("mouse over");
        $(this).children(".sub-menu").slideDown();
	});
    $(".main-menu").mouseleave(function () {
        console.log("mouse out");
        $(this).children(".sub-menu").slideUp();
	});

	$(".click-modal").click(function(){
        var image = $(this).data("image");
        var name = $(this).find("img").attr("alt");
        $("#title").text(name);
		$("#modal-photo").attr("src", image);
		$("#screen, #modal").fadeIn();
	});

	$("#close").click(function(){
        $("#screen, #modal").fadeOut();
    });

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        speed: 4000,
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
});