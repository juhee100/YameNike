//new WOW().init();

$(function () {
    $(".notice-btn").click(function () {
        $("#screen, #notice").fadeOut();
    });

    $(".main-menu").mouseover(function () {
        console.log("mouse over");
		$(this).children(".sub-menu").show();
	});
    $(".main-menu").mouseleave(function () {
        console.log("mouse out");
		$(this).children(".sub-menu").hide();
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

    $(".slide-new").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 3,
        mouseWheel: true,
        speed: 500
    });
});