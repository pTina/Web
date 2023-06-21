// 2022-04-26
// [클래스]
// 하나의 객체를 만드는 가장 정교한 방법

// static: 정적
// 클래스는 아직 실제 객체로 형상화 되지 않은 상태
// 인스턴스 객체에 포함되지 않는 정적으로 연결되어 있는 속성
// 왜? 
// 인스턴스 객체마다 데이터 또는 메소드를 넣을 필요가 없는 경우
// 인스턴스들끼리 관계가 없이 단순히 특정 클래스가 포함하고 있는 데이터나 메소드인 경우
// 효과적으로 사용할 수 있다.

// readonly
// 인스턴스 객체가 만들어진 이후에 객체 외부에서 바꿀 수 없는 속성


// 추상클래스
// 해당 클래스를 상속받은 하위(자식) 클래스한테
// 반드시 실체적인 코드를 구현하라고 지시하는 역할
// 추상 클래스의 추상 메소드가 있는 경우
// 자식 클래스는 부모 클래스를 상속 받으면서 해당하는 메소드를 실체화된 코드로 구현해야 한다.
// 이 일은 받드시 하라고 지시하는 것과 같은 역할을 함

// Shape 클래스
// => 일반적인 도형이 갖고 있을만한 속성과 기능을 가지고 있음
// => 해당 클래스를 상속받아 구체적인 도형 클래스를 디자인하기 위한 기본 베이스로 제공되기 위해 만들어진 클래스
abstract class Shape{
    // 인스턴스 메소드가 해당 값을 굳이 가질 필요 없이
    // 정확하게 Shape 클래스의 속성 값으로 제공되는 거라고 하는 의미를 갖게 되므로
    // 선명한 의미를 코드로 표현할 수 있음
    //  => Shape.MIN_BORDER_WIDTH, Shape.MAX_BORDER_WIDTH
    public static MIN_BORDER_WIDTH = 0;
    public static MAX_BORDER_WIDTH = 30;

    public readonly name: string = 'Shape';
    protected _borderWidth: number;
    private action!: string;

    constructor(borderWidth: number = 0){
        this._borderWidth = borderWidth;
    }

    // 내용이 없는 스펙만 정의되어 있음
    // abstract: 추상 메소드
    // 추상 클래스인 경우 사용할 수 있는 기능
    abstract area:() => number;

    set borderWidth(width: number){
        if(width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH){
            this._borderWidth = width;
        }else{
            throw new Error('borderWidth 허용 범위를 벗어난 동작을 시도했습니다.');
        }
    }

    get borderWidth(): number{
        return this._borderWidth;
    }
}

// extends 키워드를 이용하여 Shape 클래스를 상속 받음
// Shape에 있는 모든 것을 상속 받을 수 있음
// 추가적으로 자신만의 속성, 메소드를 추가할 수 있다.
// 실제 부모인 슈퍼 클래스에 있는 속성도 자식 클래스에 있는 경우가 있다.
// 여기서는 name, area
// 상속 관계에 있어서 내부적으로 동작하는 매커니즘
// => 프로토타입 메커니즘
//      => 객체에서 속성이나 메소드를 점근하게 될 때
//          객체가 가지고 있는 요소에서 먼저 찾고
//          발견되지 않으면 프로토타입 체이닝에 있는 상위 객체로 타고 올라가 찾음
//          있으면 그것을 사용 없으면 최종적으로 undefined가 되는 메커니즘
// 인턴스로 객체가 만들어졌을 때 radius라고 하는 getter에 접근한다 하면
// Circle에서 먼저 찾아서 있으면 해당 코드를 실행함
// 상위의 name과 area를 사용하지 않고 Circle에 있는 것을 쓰겠다는 것임

// 재정의(오버라이드): 부모로부터 물려 받았지만 내가 다르게 바꿀거야
// 바꿀것지 상속 받은거 그대로 사용할 것인지 클래스를 만들 때 결정하게 된다.

// 내부 속성을 보호하기 위한 방법
// 1. private 
//      인스턴스 바깥쪽에서 아예 보이지 않음
//      getter, setter로 읽고 쓸 수 있게 만들 수 있음
// 2. readonly
//      읽기 전용 속성으로 만듬
// => 적절하게 선택하여 사용하면 됨
class Circle extends Shape{
    private _radius: number;
    public name: string = 'Circle';

    constructor(radius: number){
        // 생성자를 만들 때 부모클래스가 있을 때 반드시
        // 부모를 뜻하는 super() 메소드를 호출해 주어야 한다.
        // => 그래야 부모의 생성자가 작동함
        // (문법적으로 반드시 있어야 한다.)
        super();
        this._radius = radius;
    }
    // 반지름이 바뀌지 않도록 getter만 제공하고 있음
    get radius(){
        return this._radius;
    }

    // 부모 속성을 재정의한 것 처럼 보이지만 그렇지 않아!
    // 실제 부모 속성에서 area는 스펙만 정의되어 있음
    // 추상 메소드를 실체 코드로 구현함
    area = () => this._radius * this._radius *Math.PI;
}

class Rect extends Shape{
    private _width: number;
    private _height: number;

    constructor(width: number, height: number){
        super();

        this._width = width;
        this._height = height;
    }

    get width(){
        return this._width;
    }

    get height(){
        return this.height;
    }

    area = () => this._width * this._height;
}

// 인스턴스 객체를 만듬
const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(rect.borderWidth);  // 0
console.log(rect.name); // Shape
console.log(circle.name);   // Circle

// 위에서 값을 제한하고 있기 때문에
// try-catch 문으로 묶지 않으면 에러처리 할 수 없음
try{
    // rect.borderWidth = 10;
    rect.borderWidth = 100;
}catch(e){
    // throw가 걸려서 멈춤
    // 요기서 오류처리를 하면 됨
    console.log(e);
}

// 클래스 사용하면
// 객체한테 정교한 동작들을 설계할 수 있음
// 클래스를 만들고
// 클래스들 중 공통 코드들이 있으면 상위 클래스를 만들어서
// 상속받아 조금 더 구체화된 하위 클래스로 만들어가는 과정
// => 이런 설계 방법을 이용해서 객체 지향을 조금씩 학습할 수 있음

// -참고
// VS code가 제공하는 아웃라인 기능 이용
// (소스코드를 분석하여 주요한 요소들을 시각적으로 표현한 기능)
// 내부 코드를 볼 순 없지만 전체적인 코드 구조를 살펴볼 수 있음
// 코드 분석하는 데 유용함

// [클래스를 위한 인터페이스]
// 클래스 자체를 설계하는 설계도 제한으로서의 인터페이스

// Container 객체 모양을 디자인하고 있는 걸 수도 있지만
// 클래스와 연관 지으면 클래스의 설계도를 제한하는 용도로 사용할 수 있다.
interface Container{
    tagName: string;
    className: string;
    children?: string;
    getTagName: () => string;
    getClassName: () => string;
}

// 어떤 객체를 만들 때 어떠한 인터페이스로 타입을 지정하면
// 지정된 인터페이스 안에 정의된 규격대로 객체를 만들게끔 제한을 함

// 클래스에서 사용하게 된다면?
// 클래스의 설계도로써 작동되게 만들기 위해 implements 키워드를 사용함
// MyContainer 클래스를 만들건데
// 설계도로써 Container 인터페이스를 사용할거야.
// => 인터페이스를 실제 구현하겠다는 의미임
// Container 규격에 맞게 만들어지는지 추적함
// 그렇지 않으면 가이드를 해 주는 기능을 제공한다.

// 어떨 때 유용할까?
// 특정한 모양의 클래스를 많이 구현해야 할 때
// 틀은 똑같고 내용물이 상이할 수 있는 클래스를 다량으로 구현하게 될 때
// 그 구현이 여러 개발자에 걸쳐서 개발을 해야 될 때
// 어떻게 만들어야 되는지 가이드가 필요한 경우
// 메뉴얼로 만드는 것이 아니라 인터페이스로 제공
// => 특별히 공부하지 않아도 타입스크립트가 지시하는 대로 구현 할 수 있음

// 인터페이스로 구현할 때 인터페이스가 다루는 범위가 있음
// => 그 클래스가 현실화된 인스턴스 객체의 모양만 다룸
// "퍼블릭한 요소들만 기술한다."
// => 즉, 인스턴스 객체를 가지고 다룰 수 있는 외부에서 public한 모양만 인터페이스로 취급한다.
// => private, protected 등의 속성 접근자를 지원하지 않는다
//      인터페이스는 외부에 이런 모양이라고 알려주는 역할이기 때문에 내부에서 사용하는 것은 알릴 필요가 없음
//      private한 영역은 인터페이스가 관심 없는 영역임
// private 요소들이 있다면 그냥 클래스에만 등장해서 사용하면 됨
class MyContainer implements Container{
    tagName: string;
    className: string;

    constructor(tagName: string, className: string){
        this.tagName = tagName;
        this.className = className;
    }

    getTagName = () => this.tagName;
    getClassName = () => this.className;
}

console.log('done');

// - 속성 접근자
// private: 클래스 안에서만 통용되는 것/ 상속받은 하위 클래스, 혹은 부모 클래스에서도 접근할 수 없음
// public: 인스턴스 객체를 이용해서 사용할 수 있는 것
// protected: 외부에는 공개되지 않지만, 내부에서는 확장된 클래스에서는 접근할 수 있는 요소

// private, protected
// 공통점: 외부로부터 공개되지 않는다.
// 차이점: private은 클래스 안에서만 동작가능, protected는 확장된 클래스에서도 접근할 수 있다.

// ! => 값을 세팅하지 않아도 된다는 의미

// OOP와 관련된 프로그래밍 학습하기

