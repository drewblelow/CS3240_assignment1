$(".spoofed_image").click(function() {
    var _this = $(this);
    var current = _this.attr("src");
    var swap = _this.attr("data-swap");
    _this.attr('src', swap).attr("data-swap", current);
    $(".spoofed_image").width(200);
});
