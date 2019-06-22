$(function (){
    var displayList = false;

    $("#togleNavBtn").click(function() {
        displayList = !displayList;
        if(displayList){
            $('#cbp-list').css('display', 'block');    
        }else{
            $('#cbp-list').css('display', 'none');    
        }
    });
    
});