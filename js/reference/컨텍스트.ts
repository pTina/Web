// 2022-04-28
// [컨텍스트]
// 1. execution
// 실행 컨텍스트, 기본 컨텍스트
// 실행 한다의 의미
// => 실제로 어떤 객체의 메소드에 접근한다.
// => 호출한다.

// this의 컨텍스트: 소유자
// => 실행하는 순간 결정된다.

// 2. lexical : 

const person = {
    name: 'gaeun',
    age: 20,
    getAge(){
        return this.age;
    }
};

person.age;
person.getAge(); // 20

// person 객체의 getAge 함수를 age에 넣음
const age = person.getAge;
// 호출하는 시점에서 맥락 랑 소유자를 확인할 수 없음
// 소유자가 벗겨짐
// this가 누군지 몰라서 연결이 되지 않음
age();  // undefined

// 2022-04-29
// 컨텍스트 객체 지정하기
// .call(), .apply();

// 컨텍스트 객체가 person이라고 지정함
age.call(person);

class Person{
    name: string;
    age: number;

    constructor(name:string, age: number){
        this.name = name;
        this.age = age;

        // 클래스를 만들 때 컨텍스트를 고정시켜주는 방법
        // => bind()
        // 현재 this로 고정함
        // this가 언제 어디서 호출돼도, 소유자가 확인 되지 않아도
        // 언제나 현재 this로 고정시켜주는 역할을 한다.
        this.getAge = this.getAge.bind(this);
    }

    getAge(){
        return this.age;
    }

    // - lecxical 컨텍스트
    // 여기서 this는 해당 속성을 만들게 될 때
    // 인스턴스의 객체가 됨!
    // 처음 만들어질 때 이미 고정되는 상황이라 밖에서 사용해도 제대로 값을 가져올 수 있음
    // this가 다른 객체로 연결시키는 것을 바꿀 수 없다.
    // (바꿀 수 있다면 다양한 테크닉을 개발할 수 있는 패턴들이 있음)
    // => 고급 기능을 쓰지 않을거라고 한다면 신경이 덜 쓰일 수 있음
    getName = () => this.name;
}

const p1 = new Person('Park gaeun', 20);
p1.getAge();

const myAge = p1.getAge;

// this가 확인이 되지 않아 undefined
// 위에서 bind로 this를 지정해주었다면 제대로 리턴값이 나옴
myAge();
myAge.call(p1); // => 매번 호출하게 컨텍스트를 지정해야 함

// lexical 컨텍스트
// 어휘 맥락 컨텍스트
// 코드로 보았을 때 this가 얘구나라고 알 수 있는 어휘적으로 확인되는 this로 고정되는 컨텍스트
// 어휘적으로 확왼되는 thi로 고정되는 컨텍스트
// 어휘적으로 고정시키는 것이르모 특별한 문법이 필요함 => 애로우함수
// 애로우 함수를 만들면 그 순간에 어휘적 공간에서의 this가 연결됨

p1.getName();

const x = p1.getName;
x();

