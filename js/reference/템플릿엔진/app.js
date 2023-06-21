// handlebars의 더블 브레이스는 가장 간단한 형태의 replace라고 생각하면 됨
// 더블 브레이스 안에 #으로 시작되는 것 => 헬퍼
//      실제 handlebars 안에 있는 함수
//      #if => boolean 값만 들어갈 수 있다.
//      #each => 반복문과 동일, 인자로 받은 배열을 순회함
const source = `
<div class="entry">
    <h1>{{title}}</h1>
    {{#if hasList}}
    <ul>
        {{#each list}}
            <li>{{title}} - {{director}}</li>
        {{/each}}
    </ul>
    {{else}}
    <div class="jumbotron">
        등록된 영화 목록이 없습니다.
    </div>
    {{/if}}
</div>
`;

// compile메소드에 템플릿을 문자열로 인자를 넘김 => source
// compile메소드가 함수를 반환함
let template = Handlebars.compile(source);

let data = {
    title: '영화',
    list: [
        {title: '너의 이름은', director: '신카이 마코토', actors: ['카미키 류노스케', '카미시라이시 모네',]},
        {title: ' 패신저스', director: '모튼 틸덤', actors: ['제니퍼 로렌스', '크리스 프렛', '마이클 쉰']},
        {title: '사랑하기 때문에', director: '주지홍', actors: ['차태현', '김유정', '서현진', '박근형']},
        {title: '내 어깨 위 고양이, 밥', director: '로저 스포티스우드', actors: ['김하늘', '유인영']},
    ]
};

data.hasList = data.list.length > 0;

// compile 메소드가 반환함 함수 template는
// data(객체)를 인자로 받아서 
// 객체와 템플릿 문자열을 합성하여 더블 브레이스로 표식되어 있는 것을 활용하여
// 최종적인 html을 만들게 된다.
document.querySelector('#app').innerHTML = template(data);

// -템플릿 방식의 장점
// 데이터와 틀을 완전히 분리할 수 있다.
// 템플릿만 보고 빠르게 데이터가 어떤 식으로 구성되어
// 최종적으로 UI가 어떻게 만들어지는지 명확하게 알 수 있다.
// 데이터가 바깥으로 빠져있으므로 문자열과 뒤섞여 있지 않다.
// => 높은 가독성과 사용하는 데 훨씬 더 편리하다.

// 고급 handlebars를 사용하고 싶다면 
// if, each 같은 빌트인 헬퍼(handlebars가 기본으로 제공하고 포함하고 있는 헬퍼)를 직접 만들 수도 있다.
// => Custom Helpers