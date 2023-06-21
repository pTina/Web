// 2022-04-20

// 프로그래밍 도구로서의 객체

// 어떤 대상을 객체화하여 그 대상을 표현하는 경우가 많다.
// => 어떤 대상이 데이터, 행위, 요소 갖는 경우
// => 어떻게 객체를 통해 프로그래밍 할 수 있는지

function calCircleArea(radius){
    return radius * radius * Math.PI;
}

function calRectArea(width, height){
    return width * height;
}

// [TS]
// 객체 내의 속성을 외부로 드러내지 않기 위해
// private 혹은 protected 속성 제어자 이용하여 외부로부터 데이터를 보호할 수 있다.
// [JS]
// 객체 내의 속성을 보호하기 위해서는 클로저와 같은 테크닉을 사용할 수 밖에 없었는데
// private 속성을 표현할 수 있는 문법이 추가됨
// => #
//    클래스 내에 private한 속성임을 의미함
//    바깥에서 접근할 수 없게 됨
// 객체 내부에서만 통요되고 외부로부터 완전히 보호되는 private 속성을 지원하게 됨
// (브라우저 호환성에 따라 다름)
class Circle{
    #radius;

    constructor(radius){
        this.radius = radius;
    }

    get radius(){
        return this.#radius;
    }

    area = () => this.#radius * this.#radius * Math.PI;

}

class Rect{
    #width;
    #height;

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get width(){
        return this.#width;
    }

    get height(){
        return this.#height;
    }

    area = () => this.#width * this.#height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

// 사용하는 입장에서 면적을 어떻게 구하는지 전혀 관심 없음
// 객체가 스스로 면적을 구하는 동작이 없다면?
//      순수하게 데이터만 가지고 있는 상황이라면?
//      따로 함수를 만들어서 구함. -> calCircleArea, calRectArea
console.log(circle.area());
console.log(rect.area());

// 사용하는 입장에서 어떤 도형이고 어떤 데이터를 갖고 있으므로
// 면적을 구하려면 어떤 함수에게 해당 객체의 어떤 데이터를 넘겨주어야 하는지
// 다 알고 있어야 한다.
// => 많은 정보를 알고 있어야 한다.
console.log(calCircleArea(circle.radius));
console.log(calRectArea(rect.width, rect.height));

// 객체가 스스로 행위까지 포함하고 있다면??
// 사용하는 쪽에서 매우 편해짐
// => 어떤 대상을 모델링하는 객체가 대상과 관련된
//  데이터, 행위, 모든 것을 가지고 있고
//  외부로부터 즉, 사용하는 쪽에 공급해 준다고 하면
//  전체적으로 애플리케이션을 구성하는 코드 자체가 훨씬 더 단순해지고
//  개발도 맥락을 나눠서 개발할 수 있음
//      ex. 사용하는 쪾의 개발, 만드는 쪽의 개발, 대상을 모델링하고 설계하는 쪽의 개발, 대상을 사용해서 무언가를 이루는 개발
//  => 효과적인 개발로 이어질 수 있다, 안정적인 구조 형성 가능