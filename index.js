$(document).on("scroll", function () {
    $("h3").css("opacity", 1 - $(window).scrollTop() / 250)
    $("h1").css("opacity", 1 - $(window).scrollTop() / 250)
})