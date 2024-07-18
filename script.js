
$(".open").on("click", function(){
    $(".overlay, .content").addClass("active")
})

$(".clos, .overlay").on("click", function(){
    $(".overlay, .content").removeClass("active")
})