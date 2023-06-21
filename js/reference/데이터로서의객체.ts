// 2022-04-19
// 데이터로서의 객체

// ? => 선택 사항 속성(있을 수도 있고, 없을 수도 있음)
// 
type Box = {
    width: number;
    height: number;
    borderRadius:number;
    backgroundColor: string;
    borderWidth?: number;
    // computed property
    // 계산된 속성
    // 속성명을 값으로 취급해서 기술할 수 있는 표기법
    ['className']?: string;
}

// 1. 객체 생성 표기법 - 객체 리터럴
// 코드로서 객체를 만들 수 있는 방법
let box: Box = {
    width: 200,
    height: 200,
    borderRadius: 15,
    backgroundColor: 'yellow'
};

// 2. 함수를 이용해서 만드는 방법
// key, value 형태로 객체 리터럴 만들게 될 때 
// value가 데이터로 드러나는 것이 아니라 변수에 들어가는 경우
// + 변수명이 실제로 속성명과 똑같은 경우
// => 이름만 주어 축약형으로 표현할 수 있다.
function makeBox(
    width: number,
    height: number,
    borderRadius: number,
    backgroundColor: string
): Box{
    // 인자로 받은 값을 그대로 하나의 객체로 만들어서 리턴하고 있음
    // 객체 리터럴로 만든 객체
    // 객체 리터럴로 만드는거랑 똑같은거 아니야?
    // 데이터로서의 객체의 차이는 100% 완전히 똑같음

    // 차이점
    // 코드의 구성 차이
    // 데이터가 바깥에 있고, 객체의 유형은 안에 있음
    // 객체의 틀과 데이터를 분리한 형태
    // => 데이터를 500개 만들어야 한다면?
    //      구성정보를 담고있는 객체는 1개
    //      호출하는 코드만 500개 등장하면 된다.
    //      변경이 용이한 구조다.
    // => 구성정보와 데이터가 같이 있는 객체 리터럴 방식은
    //      속성명이 하나 바뀌면 500개의 코드를 모두 바꾸어야 함 

    // 객체는 틀을 가지고 있음
    // 이것을 구성, 객체의 모델, 스킴, 타입 등으로 불림
    // 그 틀에 맞춰서 데이터가 들어가는 구조
    return{
        width,
        height,
        borderRadius,
        backgroundColor
    }
}

makeBox(100, 100, 0, 'blue');

// 3. 클래스를 이용한 객체 만드는 방법
// 클래스도 기본적으로 함수 기반
// 클래스도 기본적으로 인스턴스 객체를 만드는 문법 구성 요소임

// 함수를 이용해 객체를 만든것과 모양은 똑같음
class Shape implements Box{
    width: number;
    height: number;
    borderRadius: number;
    backgroundColor: string;

    constructor(
        width: number,
        heigth: number,
        borderRadius: number,
        backgroundColor: string
    ){
        // 인스턴스 객체: 구성 정보를 현실화한 객체라는 의미임
        this.width = width;
        this.height = heigth;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor
    }
}


const boxShape = new Shape(10, 30, 0, 'red');
// 클래스가 리턴한 인스턴스 객체는 어떤 클래스로 만든 객체인가를 확인할 수 있다.
// instanceof 연산자 사용
// boxShape 객체가 Shape 클래스의 인스턴스냐?
// 인스턴스 객체는 명확하게 어떤 클래스가 만들어놓은 것이냐를 확인할 수 잇다.
// 규격을 확인해야 한다면? 간단하게 확인할 수 있는 장점을 가지고 있다.
boxShape instanceof Shape ? console.log('yes') : console.log('no');

// 참고
// 자바스크립트는 줄바꿈, 공백 문자 모두 무시함
// 아무리 많은 줄바꿈, 공백 있어도 코드를 실행하는데 아무런 문제가 없음

// [객체 변형하는 방법]
// 1. 값을 접근하고 쓰는 것
// key에 접근하는 방법
// (1) 코드로 접근하기
box.borderWidth = 10;
// (2) 값으로써 접근하기
// value라는 특징 때문에 식별자의 규칙을 따르지 않는 형태도 존재가 가능하다.는 차이점이 있다.
box['className'] = 'box rounded';
// => 문법적인 형태만 다를 뿐 완전히 똑같음

// JS: 추가하고 싶을 땐 추가하고 싶은 속성명을 주면됨
// box.color = 'blue'; => 객체의 동적 바인딩
// TS: 바로 할 순 없음 왜냐? 타입이 만들어져 있어야 하므로 
// 타입에 속성명을 옵셔널로 정의해주어야 한다.
// type Box = {
//     width: number;
//     height: number;
//     borderRadius:number;
//     backgroundColor: string;
//     borderWidth?: number;
//     color?: string
//     ['className']?: string;
// }


// 2. 삭제하고싶을 땐? delete 연산자 사용
delete box.borderWidth;
// 옵셔널 속성이 아니면 TS는 지울 수 없음
// => 타이핑을 해두면 안전한 객체 형태를 꾸준히 유지할 수 있는 것을 알 수 있음

// 3. 합치는 방법
// 객체는 아무리 옮겨 다녀도 참조 타입이므로 절대 원본이 바뀌지 않음
const box1 = box;
// 근데 원본이 바뀌어야 하는 경우엔?
//      값을 변수에 넣을 때 복사되게 하고 싶을 때 
//          이전 객체와 연결을 끊고싶다.
//          새로운 객체로 만들고싶다.
// (1) assign 메소드 사용
//      첫 번째 인자로 준 객체에 두 번째, 세 번째, 네 번째 가변 인자를 받는다.
//      첫 번째 인자한테 그 뒤에 넘어온 애들을 순서대로 덮어쓰기 한다.
//      최종적으로 주어진 객체 모두를 하나의 첫 번째 객체 안에다가 모두 결합시킨 다음
//      그 결합된 객체를 리턴한다.
// => 어떤 객체에 다른 객체 속성을 추가하고 싶다?
//          그 객체를 첫 번째 인자로 두고, 추가하고 싶은 객체를 그 뒤에 나열
// => 새로운 객체를 만들고 싶다.
//          빈 객체를 첫 번째 인자로 두고, 추가할 객체를 두 번째 인자로 둔다.
//          두 번째 인자로 넘긴 객체의 속성을 첫 번째 빈 객체에 추가하게 됨
//          => 복사가된 객체가 된 것과 같은 효과를 얻을 수 있다.
const box2 = Object.assign({}, box);

// (2) 전개 연산자 이용
// 전개 연산자를 이용해 새로운 객체를 만들고
// 거기다 기존 객체를 모두다 풀어헤쳐 전개시킨 다음
// 재구성하여 새로운 객체에 넣는다.
// assign과 똑같음 근데 연산자를 이용하는 방법을 많이 쓴다.
// 새로운 속성을 추가하고 싶으면 객체 리터럴 처럼 추가해서 사용할 수 있다.
// 가장 많이 쓰이는 방법이다.
const box4 = {...box, borderRadius:10 };

// (3) 복사하고 싶은 객체를 문자열로 바꾸고 그 문자열을 다시 객체로 바꾼다.
// 가장 원시적이고 확실한 방법
// 원본 객체와 연결이 완전히 끊김!
const box3 = JSON.parse(JSON.stringify(box));







