var arrArea = ['서울', '부산', '제주'];
var arrColor = ['242, 216, 225','191, 214, 217','242, 229, 160'];

var tab1 = [
        'seoul_1.jpg',
        'seoul_2.jpg',
        'seoul_3.jpg',
        'seoul_4.jpg',
        'seoul_5.jpg',
    ];

var tab2 = [
        'busan_1.jpg',
        'busan_2.jpg',
        'busan_3.jpg',
        'busan_4.jpg',
        'busan_5.jpg',
    ];

var tab3 = [
        'jeju_1.jpg',
        'jeju_2.jpg',
        'jeju_3.jpg',
        'jeju_4.jpg',
        'jeju_5.jpg',
    ];

var url = "inc/images/";


//window.onload = function() {  
//    setPage(area);
//    
//    
//}

$(window).on('load', function () {
    setPage(arrArea, arrColor);

    setObj(tab1, $('.page1'));
    setObj(tab2, $('.page2'));
    setObj(tab3, $('.page3'));

    $('.page').eq(0).show();
    $('.setContent li').eq(0).addClass('on');

    //    $('#wrap').css({
    //        'width':$(window).width(),
    //        'height': $(window).height()
    //    })
    $('.setContent li').on('click', function () {
        var idx = $(this).index();
        $('.page').hide();
        $('.page').eq(idx).show();

        $('.setContent li').removeClass('on');
        $(this).addClass('on');

    })
});


function setPage(array1, array2) {
    var num1 = array1.length;
    var num2 = array2.length;
    var total = $('.setContent li').length;

    if (num1 != total || num2 != total) {
        console.log('배열의 개수와 탭의 개수가 일치하지 않아요');
        console.log('num1: '+num1+' num2: '+num2+' total: '+total);
    } else {
        $('.setContent li').each(function (index, item) {
            $(this).append(array1[index]);

            $(this).css({
                'background-color': 'rgb('+array2[index]+')'
            })
        })
        
        $('.page').each(function(index, item){
            $(this).css({
                'background-color':'rgba('+array2[index]+',0.5)'
            })
        })
    }
}

function setObj(array, wrap) {
    var num = array.length;
    var html = "";

    for (i = 0; i < num; i++) {
        html += '<div class="obj obj' + (i + 1) + '"></div>';
    }

    wrap.find('.objWrap').append(html);

    wrap.find('.obj').each(function (index, item) {
        $(this).css({
            'background-image': 'url(' + url + array[index] + ')',
            'background-repeat': 'no-repeat'
        })
    })

}
