$(document).ready(function(){
    
    $('.nav-link ').click(function(){
        
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        
    });
    
});