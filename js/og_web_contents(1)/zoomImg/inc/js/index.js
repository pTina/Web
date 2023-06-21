//
//window.onload = function() {  
//    
//}

//$(window).on('load', function () {
//
//});


var scale

$(window).on('load', function () {
    scale = Number($('.zoom img').css('transform').split(',')[3]);
    
    $('.btn').on('click', function(){
        if($(this).attr('class').indexOf('plus')>-1){
            if(scale < 2){
                $('.zoom img').css('transform','scale('+ (scale+(0.2))+')');
            }
            
        }else if($(this).attr('class').indexOf('minus')>-1){
            if(scale > 0.2){
                $('.zoom img').css('transform','scale('+ (scale-(0.2))+')');
            }
        }
        
        scale = Number($('.zoom img').css('transform').split(',')[3]);
        $('.scale').html(scale*100+'%');
        
    })

});
