// 텍스트입력 false로 초기화
var input = false;

// 타이머 시간
var timerCount = 20;

// 전체 문제 수, 랜덤숫자, 문제번호, 초성개수
var total;
var num, cur, items;  

var rand_quiz=[];   // 랜덤으로 저장되는 문제 리스트
var non_index=[]    // 새로운 문제 리스트에 따른 입력 비활성화 index
var quiz_ans = [];  // 문제 정답

// 푼 문제
var solve_quiz={    
    idx:[],
    result:[]
};  

var pageCon;

$(window).on('load', function () {
		// 랜덤문제생성
    makeQuiz();
    
    // total만큼 페이지 생성
    pageCon = new pageContents(total, $('.contents'));
    pageCon.init();
    
    // 문제 세팅하기
    setQuiz(0);
    
    // 타이머 생성
    setTime(timerCount, $('.timeWrap'));
    
});

// next, prev, dot 클릭
$(document).on('click', '.nav_btn', function(){
    var btn = $(this).attr('class');
    var idx = checkPage();
    
    input = false;
    
    if($('.objWrap .obj').length != 0){
        $('.objWrap .obj').remove();
    }
    
    // 문제 세팅하기
    setQuiz(idx);
    
    $('.btnCheck').removeClass('on');
    
    // 풀었던 문제인지 확인
    checkSolvedQuiz();
})

// 텍스트 입력완료
$(document).on('keyup', '.textarea', function(){
    $(this).val($(this).val().substring(0,1));
    var value  = $(this).val();
    var inputText = '';
    var idx = checkPage();  // 현재 페이지 체크
    
    // 텍스트가 입력된 경우
    if(value.length != 0){
        input = true;
        
    }else{  // 텍스트가 입력되지 않은 경우
        input = false;
    }
    
    // 텍스트가 입력된 경우
    if(input){
        // 입력된 텍스트 문자열로 만들기
        $('.obj .textarea').each(function(){
            inputText += $(this).val();
        })
        
        // 입력된 텍스트와 해당 퀴즈의 정답과 같으면
        // 자동으로 정답처리
        if(inputText == quiz_ans[idx]){
            $(this).blur();
            $('.obj .textarea').attr('disabled',true);
            $('.obj').addClass('onCorrect');
            $('.btnCheck').addClass('on');
            
            // 푼 문제 리스트에 문제 index 추가
            solve_quiz.idx[idx] = true;
            solve_quiz.result[idx] = 'onCorrect';
        }
        
        // 모든 문제 풀었는지 체크
        checkSolveAll();
    }
})

// 포커스 
$(document).on('focus', '.textarea', function(){
		if(knKeyCode != 13){
      if(!input){
          $(this).val('');
      }
    }
    
})

// 포커스아웃
$(document).on('focusout', '.textarea', function(){
    var idx = $(this).parent().index();
    var value = $(this).val();
    
    if(!input){
        $(this).val(quiz[idx]);
    }
})


// 버튼클릭
$(document).on('click', '.btn', function(){
    var btn = $(this).attr('class');
    var idx = checkPage();
    input = false;
    
    // 정답확인 
    if(btn.indexOf('btnCheck')>-1){ 
        if($(this).hasClass('on')){ // 정답확인 재클릭(현재는 작동하지 않는 기능)
            $('.textarea').each(function(index){
                $(this).val(rand_quiz[idx].split('')[index]);
                $(this).attr('disabled',false);
            })
            for(i in non_index[idx]){
                if(non_index[idx].split('')[i] != '0'){
                    $('.obj').eq(Number(non_index[idx].split('')[i])-1).find('.textarea').attr('disabled',true);
                }
            }
            
            $('.obj').removeClass('on');
            $(this).removeClass('on');
            
        }else{  // 정답확인
            // 정답확인 눌렸음, 클릭 비활성화 클래스 'on'추가
            $(this).addClass('on');
            
            // 정답 보여주기
            $('.textarea').each(function(index){
                $(this).val(quiz_ans[idx].split('')[index]);
                $(this).attr('disabled',true);
            })
            
            // 오답처리
            $('.obj').addClass('onWrong');
            
            // 해당 문제의 index를 solve_quiz에 추가하여 푼 문제로 처리함
            solve_quiz.idx[idx] = true;
            solve_quiz.result[idx] = 'onWrong';
            
            // 모든 문제 풀었는지 체크
            checkSolveAll()
        }
        
    }else if(btn.indexOf('btnNext')>-1){    // 다음문제 버튼
        // 마지막 페이지가 아닌 경우에만 클릭 가능하도록
        if(pageCon.currenPage<total-1){
            $('.navWrap .nav_next').trigger('click');
        }
        
    }else if(btn.indexOf('btnResult')>-1){  // 결과확인 버튼
        // 결과지 생성
        makeResult(total, $('.resultWrap'));
        
        $('.resultWrap .result').each(function(index){
            $(this).html((index+1)+' '+quiz_ans[index]+'<div class="ans"></div>');
            $(this).find('.ans').addClass(solve_quiz.result[index]);
        })
        
        // 딤드
        makeMask();
        
        // 결과지 보이기
        $('.resultWrap').show();
        
    }else if(btn.indexOf('btnReplay')>-1){  // 다시하기 버튼
        // 다시 랜덤 문제 생성
        makeQuiz();

        // 타이머 초기화 및 타이머 다시 시작
        clearInterval(timer1);
        setTime(timerCount, $('.timeWrap'));
        
        // 첫 번째 페이지로 돌아감
        $('.dotWrap .dot').eq(0).trigger('click');
        $('.btnResult').hide();

    }
})

// 결과지 닫기 클릭
$(document).on('click','.resultWrap .btnClose',function(){
    removeMask();
    $('.resultWrap').hide();
    
})

// enter키 눌렀을 때 페이지만 변경
// 대교 해브펀 script에서 일부 가져옴
$(document).on('keyup', function(e){
    e.preventDefault();
    e = e || window.event;
    
    var knKeyCode = (e.which) ? e.which : e.keyCode;
    
    if (knKeyCode === 13) {
        var idx = checkPage();
        
        if(idx != total){
            $('.btnNext').trigger('click');
        }
    }
    return false;
})

// 랜덤문제생성
function makeQuiz(){
    // 제공되는 문제
    // 문제, 정답, 입력 비활성화 index
    var array = {
        quiz:['탈ㅊ', 'ㄱ치', '제ㄱ', 'ㅇ놀이', 'ㅎㄱ'],
        ans:['탈출','김치','제기','윷놀이','한글'],
        non_focus:['1','2','1','23','0']
    }
    // 전체 문제 수
    total = array.quiz.length;
    // 랜덤하게 추출되는 quiz 번호
    var randQuiz = [];
    // 랜덤하게 추출되는 quiz 번호에 따른 정답
    var quizAns = [];
    // 랜덤하게 추출되는 quiz 번호에 따른 포커스 되지 않아야 하는 index값
    var nonIndex = [];
    
    // 랜덤으로 저장되는 문제 리스트 생성
    for(i=total; i>0; i--){
        // 1~total 사이의 랜덤 수 발생
        num = Math.random();
        cur = Math.floor(num*(i));
        
        randQuiz.push(array.quiz[cur]);
        quizAns.push(array.ans[cur]);
        nonIndex.push(array.non_focus[cur]);
        
        // 중복으로 뽑히면 안되기 때문에 뽑힌 인덱스의 값은 삭제
        array.quiz.splice(cur,1);
        array.ans.splice(cur,1);
        array.non_focus.splice(cur,1);
    }
    
    // 전역변수로 선언한 배열에 생성된 랜덤퀴즈의 값을 넣는다.
    rand_quiz = randQuiz;
    non_index = nonIndex;
    quiz_ans = quizAns;
    
    // 푼 문제 리스트 
    // total크기만큼 false로 초기화
    solve_quiz.idx.length = total;
    solve_quiz.result.length = total;
    
    solve_quiz.idx.fill(false);
    solve_quiz.result.fill(false);
    
}

// 모든 문제 풀었는지 체크
function checkSolveAll(){
    // 시간내에 모든 문제를 풀었다면
    if($.inArray(false, solve_quiz.idx)==-1){
        clearInterval(timer1);
        $('.btnResult').show();

    }else{
        $('.btnResult').hide();
    }
}

// 풀었던 문제인지 확인
function checkSolvedQuiz(){
    idx = checkPage();
    
    if(solve_quiz.idx[idx]){
        $('.btnCheck').addClass('on');
        $('.objWrap .obj').addClass(solve_quiz.result[idx]);

        $('.objWrap .obj').each(function(index){
            $(this).html(quiz_ans[idx].split('')[index]);
        })
    }
}

// 수학 common.js에서 가져옴
function removeMask() {
	$('.mask').remove();
}

// 수학 common.js에서 가져옴
function makeMask() {
	$('.contents').append('<div class="mask"></div>');
	$('.contents .mask').css({
		'width': '900px',
		'height': '556px',
		'background-color': 'rgba(0,0,0,0.5)'
	});
}

// 결과지 만들기
function makeResult(num, wrap){
    var html = '';
    if(wrap.find('.result').length == 0){
        for(i=0; i<num; i++){
            html += '<div class="result"></div>';
        }
        
        wrap.append(html);
        
        var html2 = '<div class="btnClose">X</div>';
        wrap.append(html2); 
    }
    
}

// 시간측정 
function setTime(num, wrap){
    if(wrap.find('div').length == 0){
        makeTimer(num, wrap);
    }
    
    wrap.find('.timebar').show();
    curTime = wrap.find('.curTime');
    
    curTime.html(num);
    time = Number(curTime.html());
    
    var count = 0;
    
    timer1 = setInterval(function(){
        count += 1
        curTime.html(time-count);
        wrap.find('.timebar').eq(time-count).hide();
        if(count>=num){
            clearInterval(timer1);
            idx = checkPage();
            
            console.log(solve_quiz.result);
            for(i=0; i<total; i++){
                if(solve_quiz.result[i] == false){
                    solve_quiz.result[i] = 'onWrong';
                }
                
                if(solve_quiz.idx[i] == false){
                    solve_quiz.idx[i] = true;
                } 
            }
            
            $('.btnResult').show();
            wrap.parent().find('.btnResult').trigger('click');
            
            // 푼 문제인지 확인
            // 지정시간 초과되었을 때 결과지가 나온 후 닫았을 때 해당 문제의 정오답 표시 위해
            checkSolvedQuiz();
            
        }
        
    },1000)
}


// 타이머 만들기
function makeTimer(num, wrap){
    var html = '';
    for(i=0; i<num; i++){
        html += '<div class="timebar"></div>';
    }
    
    wrap.append(html);
    
    var html2 = '<div class="curTime"></div>';
    wrap.append(html2);
    wrap.find('.curTime').html(num);
}

// 현재 페이지와 동일한 번호의 문제 보여주기
function setQuiz(idx){
    quiz = rand_quiz[idx].split('');
    items = quiz.length;
    
    makeObj(items, $('.objWrap'));
    
	$('.textarea').each(function(index){
        $(this).val(rand_quiz[idx].split('')[index]);
    })
    
    for(i in non_index[idx]){
        if(non_index[idx].split('')[i] != '0'){
            $('.obj').eq(Number(non_index[idx].split('')[i])-1).find('.textarea').attr('disabled',true);
        }
    }
}

// 현재 페이지 번호 체크
function checkPage(){
    var currentPage;
    var total = $('.navWrap .dot').length;
    
    $('.navWrap .dot').each(function(index){
        if($(this).hasClass('on')){
            currentPage = index;
        }
    })
    
    if(currentPage == (total-1)){
        $('.btnNext').hide();
    }else{
        $('.btnNext').show();
    }
    
    return currentPage;
}

// 단어 카드 만들기
function makeObj(num, wrap){
    var html = '';
    var obj = '';
    var w_obj, h_obj;
    
    for(i=0; i<num; i++){
        html += '<div class="obj obj'+(i+1)+'"><input type="text" class="textarea"></div>';
    }
    
    wrap.append(html);
    obj = wrap.find('.obj');
    w_obj = Number(obj.css('width').split('px')[0]);
    h_obj = Number(obj.css('height').split('px')[0]);
    
    wrap.css({
        'width': (w_obj*num)+(50*(num-1)),
        'height': h_obj
    })
    
    obj.each(function(index){
        if(index>0){
            $(this).css({
                'left': (w_obj*index)+(50*index)
            })
        }
    })
    
}

// 페이징
var pageContents = function(num, wrap){
    var self = this;
    this.num = num;
    this.wrap = wrap;
    
    this.navWrap = '';
    this.nav_btn = '';
    this.dotWrap = '';
    
    this.dot= '';
    this.prev= '';
    this.next= '';
    this.currenPage = 0;
    
    this.init = function(){

        this.makeNavi();
        this.makeDot();
        this.styleNavi();
        
        this.pageMove(self.currenPage);
        
        self.prev.on('click', function(){
            self.prevClick($(this));
        })
        
        self.next.on('click', function(){
            self.nextClick($(this));
        })
        
        self.dot.on('click', function(){
            self.dotClick($(this));
        })

    }
    
    this.makeNavi = function(){
        var navWrap = '<div class="navWrap">'+
            '<div class="nav_btn nav_prev">&lt;</div>'+
            '<div class="nav_btn nav_next">&gt;</div>'+
            '<div class="dotWrap"></div>'+
            '</div>';
        
        this.wrap.append(navWrap);
        this.navWrap = this.wrap.find('.navWrap');
        this.dotWrap = this.wrap.find('.dotWrap');
        
        this.prev = this.navWrap.find('.nav_prev');
        this.next = this.navWrap.find('.nav_next');
        
    }
    
    this.makeDot = function(){
        var dot = '';
        
        for(i=0; i<this.num; i++){
            dot += '<div class="nav_btn dot"></div>';
        }
        
        this.dotWrap.append(dot);
        this.dot = this.dotWrap.find('.dot');
    }
    
    this.styleNavi = function(){
        var w_dot = Number(self.dot.css('width').split('px')[0]);
        var h_dot = Number(self.dot.css('height').split('px')[0]);
        
        self.dotWrap.css({
            'width': (w_dot*num)+(8*(num+1)),
            'height': (h_dot+16)
        })
        
        self.dot.each(function(index){
            $(this).css({
                'left': w_dot*(index)+(8*(index+1))
            })
        })
    }
    
    this.prevClick = function(el){
        if(self.currenPage > 0){
            self.currenPage -= 1;
        }
        this.pageMove(self.currenPage);
    }
    
    this.nextClick = function(el){
        if(self.currenPage < self.num){
            self.currenPage += 1;
        }
        this.pageMove(self.currenPage);
    }
    
    this.dotClick = function(el){
        self.currenPage = el.index();
        this.pageMove(self.currenPage);
    }
    
    this.pageMove = function(pageNum){
        if(pageNum == 0){
            self.prev.hide();
            self.next.show();
            
        }else if(pageNum == (this.num-1)){
            self.prev.show();
            self.next.hide();
            
        }else{
            self.prev.show();
            self.next.show();
        }
        
        self.dot.removeClass('on');
        self.dot.eq(pageNum).addClass('on');
    }
    
    
}



