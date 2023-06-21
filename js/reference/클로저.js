// 2022-05-01
// [클로저]
// 특수한 공간 안에 바깥쪽에 있던 변수를 가둬놓듯이
// 가둬놓을 수 있는 공간
// 클로저는 코드 상에서 접근할 수 없다.
// 클로저 안의 변수를 접근할 수 있는 유일한 방법은
// 클로저를 만든 함수 안의 코드이다.
//      런타임 상황에서는 바꿀 수 없음. 그래서 완벽히 보호되는 공간이다.

let saveNumber = 1;


function increament(){
    return saveNumber++;
}

console.log(increament());
console.log(increament());

// 외부에서 해당 변수를 바꿀 수 있음
// => 보호할 수 있는 없는 대상
// => saveNumber 변수는 현재 어디에서나 접근 가능한 상태이기 때문
saveNumber=200;

console.log(increament());

// 1이 증가하지 않는 형태
function increament(){
    let saveNumber = 1;
    return saveNumber++;
}

console.log(increament());

// 함수로 반환하면 1이 증가하는 형태로 바뀜
function increament(){
    let saveNumber = 1;

    return function(){ 
        // increament가 호출될 때 
        // saveNumber는 로컬 영역에서 찾는 것이 아니라
        // 요기 안에 있는 클로저 공간에서 찾아 저장된 값을 유지하면서
        // 반환하게 된다.
        return saveNumber++;
    }
}

// 함수는 값이 아니므로 호출을 해주어야 함
const inc = increament();

console.log(inc()); //1
console.log(inc()); //2
console.log(inc()); //3

// 클로저: 함수 안쪽에서 함수가 만들어질 때
// 함수 안쪽에 있는 코드 중에 
// 바깥 함수에 있는 변수에 접근하게 되면 
// 접근한 변수를 클로저 공간에 저장을 해둔다.
// 안쪽 함수가 만들어지면서 옮겨졌던 클로저 공간에
// 해당 변수는 유지될 수 있다.

// 어디에 쓸까?
// -특정 값을 보호하면서 계속 사용할 수 있다.
// -특정 값을 보호했기 때문에 바깥쪽에서 접근할 수 없게 되었다.
// => 보호되어야 하는 값이 필요하다면 클로저 공간에 넣는 것들을 많이 사용된다.

// 타입스크립트에서의 클로저
// class MyObj{
//     private saveNumber: number;
// }
