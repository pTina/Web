// 22-04-17

/*
[속성과 메소드]
객체 안에 들어가 있는 2가지 종류의 데이터
속성: 실제 순수한 데이터
메소드: 내용물이 함수인 것, 코드의 묶음인 함수가 들어가 있는 속성

*/

const obj = {
    name: 'gaeun',
    age: 20,

    getFamilyName: function(){
        return 'park';
    },
    getBloodType(){
        return 'AB';
    },
    getLastNAme: () => 'park',
};

obj.name;
obj.age;
obj.getFamilyName();
obj.getBloodType();


// 메소드를 기술하는 2가지 방법
// 1. function()을 생략하는 축약형
// 2. 화살표 함수

obj.age = 200;
obj.age = -500;

// 문제가 있는 값을 세팅하는 것을 막고 싶을 때
// 객체 내부적으로는 실제 함수인데
// 객체 외부에서는 속성처럼 보이게 하는 것 => setter, getter

// 객체를 만드는 또 다른 방법
// => 클래스를 만들어서 그 클래스의 인스턴스 객체를 만드는 방법

class Person{
    _bloodType: string;
    constructor(bloodtype : string){
        this._bloodType = bloodtype;
    }

    set bloodType(btype: string){
        // 방어 코드
        // 데이터가 아닌 코드!
        // 객체 바깥쪽에서는 데이터처러 보이게 하는 스펙 => getter, setter
        // 객체 내부에서는 함수이므로 함수로 작성한다.
        if(btype === 'A' || btype === 'B' || btype === 'O' || btype === 'AB'){
            this._bloodType = btype;
        }
    }

    get bloodType(){
        return `${this._bloodType} 형`;
    }
}

const p1 = new Person('AB');
p1.bloodType;
p1.bloodType = 'C';

// getter, setter는 일반 객체에서 만들 수 없다.
// 클래스로 만들어진 인스턴스 객체에서 만들 수 있는 스펙 중 하나.

// [객체 구성]
// 추가하거나 삭제하는 기능

// 자바스크립트의 동적 바인딩 기능을 이용해서 자동으로 추가됨
// obj.bloodType = 'A';
// 삭제 => delete obj.bloodType;
/*
속성에 따라 객체 속성을 삭제되지 않게 하고 싶을때는 어떻게 할까?
1. 타이핑
    반드시 있어야 하는 것이라는 것을 명시적으로 타이핑(==> 타입 명시)
    delete 연산자를 사용할 수 없게 된다.
    옵셔널이라는 표시를 해주면 지우기 가능

*/

type MyObject = {
    name?: string;
    readonly age: number;   
    getFamilyName: () => string;
    getBloodType: () => string;
    getLastNAme: () => string;
}

const myobj: MyObject = {
    name: 'park',
    age: 20,
    getFamilyName: function(){
        return 'park';
    },
    getBloodType(){
        return 'AB';
    },
    getLastNAme: () => 'park'
}

delete myobj.name; // 옵셔널 속성이므로 지우기 가능
delete myobj.age; // 옵셔널 속성이 아니기 때문에 불가함

// 자바스크립트에서는?
// 객체를 만드는 방법 => 1. 객체 리터럴, 2. 클래스의 인스턴스 객체, 3. create
// 복잡하기 때문에 잘 쓰이진 않는다.
// 이 방법을 통해 일부 제약을 줄 수 있다.
/*
create => Object 최상위 객체가 제공하는 메소드


create의 첫 번째 인자: 부모 객체로써 작동되게 될 객체
두 번째 인자: 객체의 정보(구성 정보가 어떻게 되어 있느냐하는 정보를 객체로 표현해서 넘겨준다.)

const myObj = Object.create(null, {
    name:{ value: 'gaeun', writable: true, configurable: false}
});

writable => true: 바깥에서 다른 값으로 바꿀 수 있다.
         => false: 바깥에서 다른 값으로 바꿀 수 없다.(readonly)

configurable => true: 속성을 지울 수 있음(디폴트)
             => false: 속성을 지울 수 없음

myObj.name = '하하하하'

*/

















/**/
/**/
/**/
/**/