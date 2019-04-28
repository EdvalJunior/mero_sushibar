
$('button.accordion').click(function () {
    $(this).parent().find('div.accordion').slideToggle("slow");
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
        el.text(el.data("text-original"));
        el.addClass("active");
    } else {
        el.data("text-original", el.text());
        el.text(el.data("text-swap"));
        el.removeClass("active");
    }
});