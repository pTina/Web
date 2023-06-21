// 2022-05-11
// 템플릿 리터럴
// 최종적으로 값으로 수렴된다면 어떤 수식이든 넣을 수 있다.
// 보통 일반 문자열을 간편하게 쓰는 경우에 많이 사용한다.
const userName = 'Kim mintae';
const bolder = text => `<b>${text}</b>`;

console.log(`HI~ ${userName}`);

console.log(`HI~ ${bolder(userName)}`);


function div(strings, ...fns){
    const flat = s => s.split('\n').join('');

    // 함수를 리턴하고 있음
    return function (props){
        // strings는 문자열인데 어떻게 strings[0] 이렇게 배열로 사용하는가?
        // 달러브레이스 기준으로 문자열이 배열로 쪼개지기 때문
        // 달러브레이스는 fns영역으로 들어가게 된다.
        return `<div style="${flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1])}"</div>`
    }
}

// 고급기능 - Tagged Template
// 템플릿 리터럴 앞에 붙는 것 div => 함수
// 그 뒤에 나오는 템플릿 리터럴은 어떻게 동작하는가?
// 문자열이 함수의 첫번째 인자로 전달된다.
// 템플릿 리터럴 안에 달러 브레이스의 개수만큼 뒤쪽 가변 인자로 전달된다.
// 리턴하는 값은 div함수가 리턴하는 값이 반환된다.
const Div = div`
    font-size: 20px;
    color: ${props => props.active ? 'white' : 'gray'};
    border: none;
`;
// => 스타일 안에 어떤 옵션을 바깥쪽에서 제엏하고 싶을 때 사용함

// 객체를 전달해서 다시 한 번 호출한다.
console.log(Div({ active: false }))

//-- 참고--
// a && b 
// => a,b 둘 다 참일 때만 true
// => a가 거짓인 경우 b는 검사하지 않음
// 많이 쓰이는 패턴이다.