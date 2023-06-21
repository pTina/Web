$(function () {

var top = $('.wrap:nth-of-type(2) .dropArea .dropItem:nth-of-type(3)').offset().top;
var right = $('.wrap:nth-of-type(2) .dropArea .dropItem:nth-of-type(3)').offset().right;

// 드래그 할 수 있는 객체가 됨
$('.wrap .dragArea .dragItem').draggable({
    cursor: 'pointer',
    helper: 'clone',
    revert: 'false',

    start: function (e, obj) {
        // 변수 isRec <= 드래그된 item으로 지정
        isRec = $(this);
    },
    stop: function (e, obj) {

    }
});



// 1. 같은 위치에 있는 요소만 드래그 드랍 가능
// 드롭 가능한 곳
$('.wrap:nth-of-type(1) .dropArea .dropItem').droppable({
    // 드롭 가능한 객체
    accept: $('.wrap:nth-of-type(1) .dragArea .dragItem'),

    // 드롭됐을 때
    drop: function (e, obj) {
        // 같은 위치에 있는 것만 드롭됨
        if (isRec.index() == $(this).index()) {
            $(this).addClass('dragItem');
            $(this).html(isRec.text());
            isRec.draggable({
                revert: false
            });
        } else {
            // 같은 위치가 아닌 것은 제자리도 돌아감
            isRec.draggable({
                revert: true
            });
        }
    }
})


// 2. 드래그 아이템 규칙적으로 쌓이기(최대 4개까지만)
var count = 0;
var i = 0;
var a = 0;
var sum = 0;
var dropObj = '<div class="dropObj"></div>';
$('.wrap:nth-of-type(2) .dropArea .dropItem').droppable({

    accept: $('.wrap:nth-of-type(2) .dragArea .dragItem'),
    drop: function (e, obj) {
        var idx = $(this).index();


        if (idx == 0) { // 1번 드롭영역
            if (count < 4) {
                $(this).find('.dropObj').eq(count).show();
                $(this).find('.dropObj').eq(count).html(isRec.text());
                count += 1;
                isRec.draggable({
                    revert: false
                });
            } else {
                isRec.draggable({
                    revert: true
                });
            }

        } else if (idx == 1) { //2번 드롭구역
            i += 1;
            if (i <= 4) {
                $(this).append('<div class="dropObj"></div>');

                $(this).find('.dropObj').eq(i - 1).addClass('obj' + i);
                isRec.draggable({
                    revert: false
                });
            } else {
                isRec.draggable({
                    revert: true
                });
            }

        } else if (idx == 2) { // 3번 드롭구역
            a += 1;
            if (a <= 4) {
                $(this).append('<div class="dropObj"></div>');
                $(this).find('.dropObj').eq(a - 1).addClass('obj' + a);
                isRec.draggable({
                    revert: false
                });
            } else {
                isRec.draggable({
                    revert: true
                });
            }

            // 3번 드롭구역의 dropObj 드래그 가능하도록 동적으로 생성된 요소에 이벤트 바인딩
            $('.wrap:nth-of-type(2) .dropArea .dropItem:nth-of-type(3) .dropObj').draggable({
                cursor: 'pointer',
                containment: 'parent' // 드래그 영역을 부모로 제한함

            });

        }

    }
})

// 1번 다시하기
$('.wrap:nth-of-type(1) .rebtn').click(function () {
    var dragItem = $(this).parent().find('.dropArea .dropItem');
    dragItem.removeClass('dragItem');
    dragItem.html('');
})

//2번 다시하기
$('.wrap:nth-of-type(2) .rebtn').click(function () {
    var dropItem = $(this).parent().find('.dropArea .dropItem');
    count = 0;
    i = 0;

    //1번 드롭영역
    dropItem.eq(0).find('.dropObj').hide();
    dropItem.eq(0).find('.dropObj').html('');

    //2번 드롭영역
    dropItem.eq(1).find('.dropObj').remove();

    //3번 드롭영역
    dropItem.eq(2).find('.dropObj').remove();

})

})

$(window).on('load', function () {
$('.dropObj').hide();

})
