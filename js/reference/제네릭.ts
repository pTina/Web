// 2022-05-01
// [제네릭]

// 타입스크립트에서의 고급 기능
// 타입을 작성할 때 이 타입을 어떻게 작성해야할지 어려울 때
// 사용할 수 있는 기능
// 고급언어에서 모두 제공되는 기능

type User = {
    id: number;
    name: string;
}

type Address ={
    zipcode: number;
    address: string;
}

// 입력값을 받아서 그대로 반환하는 함수
// => 잘못 넣으면 잘못된 당연히 나오는 것도 잘못 나옴
// 코드상으로 User 타입 들어 갔으면 나올 때도 User 타입으로 나오고
// User 타입이 규정하지 않은 속성이 들어갔으면 타입에서 걸러줬으면 좋겠어
// => any 타입으로는 할 수 없음
// => 제네릭 이용하면 된다.
function pipeOne(value: any): any{
    // any라고 하는 것을 타입스크립트가 체크하여 타입을 추론함
    return value;
}

// 타입을 지정해준다. <T> => 아직 확정되지 않았다는 의미 (다른걸로 써도 무방하나 관습적으로 T를 많이 쓴다.)
// T가 확정되면 인자 값도 T, 리턴하는 값도 T
function pipeTwo<T>(value: T): T{
    return value;
}

// 일반 값을 가지고 사용할 때는 제네릭을 사용하는 것의 차이가 거의 없음
// => 객체를 사용할 때 차이를 명확하게 알 수 있음
let p1 = pipeOne(10);
let p2 = pipeTwo('10');
let p3 = pipeTwo(true);

// 인자 앞에 T 유형을 선언하고
// T로 들오면 인자도 T, 반환 값도 T이다.
// => pipeTwo와 동일함
const pipeObjectOne = <T>(obj: T): T =>{
    return obj;
}

// 명시적으로 T를 지정하지 않은 경우 그대로 출력
let po1 = pipeObjectOne({id: 1, name: '박', zipcode: 50213});

// 명시적으로 T를 User라고 지정한 경우
// 함수를 호출하면서 타입을 명시한다.
// User타입을 사용할 것임을 확정함
// => 인자로 넘어온 객체를 User 타입을 기준으로 검사함
//      타입과 맞지 않으면 알려줌
// 타입을 호출하는 순간에 확정하고
// 확정함으로써 그 뒤로 확정되는 타이핑의 범위를 확대하여 
// 타입스크립트의 장점을 누릴 수 있는 스펙이다.
let po2 = pipeObjectOne<User>({id: 1, name: '박', zipcode: 50213});

// 클래스에서도 사용할 수 있다.
// State 클래스
// => 상태를 하나 만들고 그 상태를 반환하는 메소드를 제공하는 클래스
// pipeObjectOne과 매우 비슷한 유형의 클래스

// S, Config => 해당 2개의 제네릭은 실제로 타입이 확정되면
// 어디에 사용하는가? => 클래스 곳곳에서 하용할 수 있다.
class State<S, Config=[]>{
    private _state: S;
    config: Config;

    constructor(state: S, Config: Config){
        this._state = state;
        this.config = this.config;
    }

    // getState도 리턴값이 S
    getState(): S{
        return this._state;
    }
}

// 첫 번째 인자 S는 Address 객체라고 명시함
// 두 번째 인자 Config는 그냥 객체 타입을 명시함
let s1 = new State<Address, {active: boolean}> ({
    zipcode: 50213,
    address: '서울시',
},{
    active: true
});

// 사용할 때도 getState가 입력으로 들어간 객체의 타입을
// 타입스크립트가 검사해주었으면 좋겠다. => 이럴 때 제네릭을 사용할 수 있다.

// s1Data는 바로 Address 타입이 됨
// 타입스크립트가 추론을 해줌
const s1Data = s1.getState();

// 타입이 확정되었으므로 타입을 추론하여 자동완성을 해줌
console.log(s1Data.zipcode, s1Data.address, s1.config.active);

// 입력값으로 객체를 주고 그 객체에서 객체가 가지고 있는
// 키 중에 하나의 값을 반환하는 함수를 만든다.

// 제네릭 Type
// Key는 앞에서 확정된 Type의 객체에서 key를 하나씩 뽑아 Key로 확장시킴
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key){
    return obj[key];
}

let x = {a:1, b:2, c:3, d:4};

// 첫번째 인자로 객체를 주고 해당 객체의 a라는 이름의 key의 value를 리턴해라.
getProperty(x, "a");
// x에는 m 키 없음을 알려줌
getProperty(x, "m");

// 인터페이스에서의 제네릭
interface KeyPair<T, U>{
    key: T;
    value: U;
}

// kv1는 KeyPair라는 인터페이스를 사용하는 변수이고,
// 제네릭으로 T, U의 타입을 number와 string으로 확정시킴
let kv1: KeyPair<number, string> = {key: 1, value: 'Park'};
let kv2: KeyPair<number, number> = {key: 2, value: 1234};

