// 2022-04-27
// 인스턴스
// : 클래스라고 하는 설계도가 구체적으로 현실화된 객체
// 만드는 방법
// : 1. 함수, 2. 클래스

// 1. 함수를 이용한 인스턴스 만들기
// 암묵적인 메카니즘이 많이 숨어있음

// 함수인데 왜 대문자로 시작하는 표기법을 사용하였는가?
// 함수인 경우 new 연산자를 강제할 수 없다.
// new 연산자 없이 함수호출을 해도 상관 없음
// => 인스턴스를 만드는 메카니즘을 작동시킨 것이 아닌 그냥 함수를 호출한 것이므로
// => this 객체가 없음
//      그래서 this는 전역객체인 window를 지시하게 되고
//      this가 실행 컨텍스트 메카니즘으로 작동하게됨
//      소유자가 없으므로 this가 객체에 전역 객체에 연결되어 엉뚱한 동작을 하게 된다.
// 인스턴스 객체가 만들어져야 하는데 호출을 잘못한 경우임
// => 언어적인 차원에서 막을 수 있는 방법이 없어서
//      개발자들 끼리의 만든 암묵적 컨벤션
//      함수가 대문자로 시작한다면 new 연산자를 사용해주세요. 라는 의미
function CartV1(){
    this.cart = [];
    this.currendtId = 0;
}

// prototype 속성으로 접근하여 getNameId 추가
// prototype => 인스턴스 객체에 등장하게 될 메소드
CartV1.prototype.getNameId = function(){
    this.currendtId++;
    return this.currendtId;
};

// 객체에 동적 바인딩을 이용해 createItem 추가
// 인스턴스 객체에 드러나지 않는다.
CartV1.createItem = function(name, price){
    return{
        name, price
    };
};

// prototype을 사용하는거 자체가 번잡스럽고 불편함
// => 불안정한 문법
CartV1.prototype.addItem = function(item){
    this.cart.push({
        ...item,
        id: this.getNameId(),
    });
};

CartV1.prototype.clearCart = function(item){
    this.cart=[];
    this.currendtId = 0;
}

// new 연산자를 함수 앞에 쓰게되면 암묵적인 메카니즘이 작동함
// 빈 객체 하나를 만듬 -> CartV1 함수를 호출하면서
// CartV1에게 그 빈 객체를 전달함
// 암묵적으로 만든 객체이므로 CartV1 함수 내에서 그 객체를 사용하려면
// 특별한 지시어가 필요함 => this 키워드
// 여기서 this는 실행 컨텍스트가 아닌
// 인스턴스 객체라고 부르는 그 객체를 지시하게 된다.

// 인스턴스 객체를 만들고 함수가 종료되면
// 명시적으로 리턴을 사용하지 않아도 자동으로 this 객체를 리턴하게 되어 있음

// this객체에 CartV1 프로토타입 속성을
// 해당 this 객체에 __prototype__에 할당함
const shoppingCartV1 = new CartV1();

// 코드의 가독성, 표현력 관점 => 별로 좋지 않은 문법 메카니즘
shoppingCartV1.addItem(CartV1.createItem('수박', 8800));
shoppingCartV1.addItem(CartV1.createItem('사과', 12000));
shoppingCartV1.addItem(CartV1.createItem('두부', 2000));

console.log(shoppingCartV1.cart);

// 2. 클래스를 이용하여 인스턴스 만들기
// 함수의 경우 바깥으로 분리되어 클래스 전체를 조망하기 힘들다.
// 클래스는 하나로 좀 더 편리하게 사용할 수 있도록 묶어 놓을 수 있다.

// 클래스 내부의 함수들은 CartV2의 내부적인 프로토타입 체인에 다 걸리게 되어 있음
// 문법적으로 선명하게 드러내는 형식으로 추가됨
class CartV2{
    // static 정적메소드 => 이것을 통해 좀 더 표현력이 높아짐
    // 인스턴스 객체에 드러나지 않고 클래스 자체에 붙어있는 속성 또는 메소드
    static createItem = (name, price) =>({
        name, price
    });

    cart;
    currentId;

    constructor(){
        this.currentId = 0;
        this.cart = [];
    }

    getNameId = () =>{
        rthis.currendtId++;
        return this.currentId;
    }
    
    addItem = item =>{
        this.cart.push({
            ...item,
            id: this.getNameId(),
        });
    }

    clearCart = () => {
        this.currentId = 0;
        this.cart = [];
    }
}

const shoppingCartV2 = new CartV2();

shoppingCartV2.addItem(CartV1.createItem('수박', 8800));
shoppingCartV2.addItem(CartV1.createItem('사과', 12000));
shoppingCartV2.addItem(CartV1.createItem('두부', 2000));

console.log(shoppingCartV2.cart);

