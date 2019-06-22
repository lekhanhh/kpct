$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
    $(".dropdown-toggle").click(function (e) {
        e.preventDefault();
        var href = $(this).attr("href");
        window.open(href);
        return false;
        }
    );
});
