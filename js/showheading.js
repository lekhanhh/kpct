$(document).ready(function(){
    $(".thumbnail").hover(            
        function() {
        	// document.getElementById("show").style.display = "block";
        	$('.cover', this).not('.in .cover').stop(true,true).slideToggle("fast");
            $(this).toggleClass('open');  
            } 
    );
});