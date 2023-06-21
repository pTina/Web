
// * : all로 모든 타입을 가져오게 되면
// 실제로 이름이 각각 드러나지 않기 때문에
// allTypes라는 별칭으로 감싸주고, 이것으로 사용한다.
// 객체를 사용하는 것처럼 사용 할 수 있다.
import * as allTypes from './인터페이스와타입별칭';

// interface로 만든 IUser에서 정의한
// 규격과 동일하게 만들어야 한다.
const IUser: allTypes.IUser = {
    id: 1,
    name: 'gaeun',
    email: 'gaeun2937@gamil.com',
    active: 'N'
}

// foo함수도 allTypes.fooFunc의 규격에 맞춰서 만들어야 함
const foo: allTypes.fooFunc = function(){
    return 'ddd';
}

// [key: string]: number
const isStyle: allTypes.IOnlyNumber = {
    width: 50,
    height: 50
};

// 함수 규격을 함수에 적용할 때는
// 함수 정의문이 아닌 함수 정의 표현 식을 사용한다. 
const getApi: allTypes.IGetApi = (url, search = '') => {
    return new Promise(resolve => resolve('OK'));
}

class Rect implements allTypes.IRect{
    // 인터페이스에서 id속성은 public으로 선언하라고 지시하고 있음
    // id를 private으로 사용하고 싶으면 인터페이스에서 제거해야 한다.
    // private id: number;
    id: number;
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.id = Math.random()*100000;
        this.x = x;
        this.y = y;
    }
}

// const rect1 = new Rect(10, 10);이걸 대신해주는 함수를 만든다고 하면

function createRect(cstor: allTypes.IRectConstructor){
    // 2. 여기서 클래스의 생성자를 호출하게 된다.
    // 여기서 필요하다.
    return new cstor(10, 10);
}

// 생성자를 호출하는 것은 IRectConstructor와 같은 인스턴스가 필요없다.
const rect1 = new Rect(10, 10);

// 여기서 1. Rect 클래슬 넘긴다.
const rect2 = createRect(Rect);