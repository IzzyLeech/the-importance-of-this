$("p").click(function(){
    $("p").slideToggle("slow")
})

$("button").mouseenter(function(){
    $(this).removeClass("makeRed").addClass("makeBlue")
})

$("button").mouseleave(function(){
    $(this).removeClass("makeBlue").addClass("makeRed")
})

$(document).ready(function() {
    $(".box").on("click", function() {
    	/**
    	 * When we click on an element that has
    	 * a 'box' class, this event will be fired.
    	 */
    	var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            $("." + className).css("background-color", "#000");
        } else {
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red")
        }
    });
});