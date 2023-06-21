// 2022-04-27
// [프로토타입]

const c1 = {
    name: 'C1',
    color: 'red',
}

const c2 = {
    name: 'C2',
    width: 300,
}

const c3 = {
    name: 'C3',
    height: 100,
}

console.log(c1);
console.log(c2);
console.log(c3);

// c1 객체에는 toString 메소드가 없는데 어떻게 호출되는 걸까?
// 프로토타입 체이닝 메카니즘때문에 가능한 것이다.
// toString은 가장 최상위 Object가 갖고 있는 메소드
console.log(c1.toString());

// 모든 객체는
// __proto__ 라고 하는 독특한 속성을 하나씩 갖고 있다.
// __proto__ : 어떤 객체를 가리키고 있음

// -프로토타입 체이닝 메카니즘
// __proto__ => 모든 오브젝트의 조상(가장 최상위)인 Object 객체를 가리키고 있음
// 해당 객체가 갖고 있는 메소드 중에 호출한 메소드가 있는지 찾아보고
// 없으면 해당 객체가 갖고 있는 __proto__가 가리키고 있는 객체에 있는지 찾아서
// 있으면 동작시키고 없으면 undefined

c1.__proto__=c2;
// c1에는 width 속성이 없지만
// __proto__에 c2를 연결해두었기 때문에
// c2의 width값을 찾아서 리턴한것
console.log(c1.width); // 300

c1.__proto__ = c3;
c3.__proto__ = c2;

// c1에 없으니 c3를 찾고 c3에 없으니 c2를 찾아서 c2에 있는 width를 출력함
console.log(c1.width); // 300

// 활용할 수 있는 곳 => 재활용
// 객체 하나하나는 자기가 가지고 있으면 좋을 데이터와 메소드만 가지고 있고,
// 공통적으로 사용될만한 것들은 상위 객체에 만들어 놓은 다음에
// 프로토타입을 연결만 시켜서 재활용 할 수 있는 메카니즘이다. 

// [함수의 prototype]
// new 연산자를 통해 함수의 인스턴스 객체 만들면
// 일반 객체 프로토타입을 코드로 연결시켜 놓은 걸
// 훨씬 더 단순하고 간편하게 객체의 상속 관계를 만들 수 있는 메카니즘을 제공한다.

// Foo 함수는 객체로 만들어져 있기 때문에 똑같이 __proto__속성이 존재한다.
// 일반 객체와 달리 prototype 이라는 풀 네임을 갖고 있는 속성도 있음
function Foo(name){
    this.name = name;
    // this.__proto__ = Foo.prototype;
}

Foo.prototype;
// => 기본적으로 객체임, 함수 자체를 가리키고 있음
Foo.prototype.lastName = 'park';
// => 함수 자체의 프로토타입이라는 속성에다가 lastName 속성을 추가함

// 인스턴스 Object인 f는 this 객체임
// 그래서 name속성이 나오는 것이 당연하다.
const f = new Foo('gaeun');
console.log(f.name);
// 함수 자체에 추가된 속성인데 인스턴스 객체의 속성으로 등장할 수 있는 이유는?
// => new는 인스턴스 객체를 만드는 것 뿐만아니라
// this.__proto__ = Foo.prototype 이렇게 연결시키게 됨
// 그래서 똑같은 메카니즘으로 속성을 찾을 때 찾을 수 있게됨
console.log(f.lastName);

