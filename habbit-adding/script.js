
$(".checkbox-dropdown").click(function () {
   
    $(this).toggleClass("is-active");
});

$(".checkbox-dropdown ul").click(function(e) {
    
    e.stopPropagation();
});

