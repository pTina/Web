// 2022-05-02
// [동기와 비동기]

// 1. 동기 코드
// 앞에 코드와 다음 코드가 종속성을 갖게 됨
// 앞 뒤가 묶여있다.
// 앞에 코드가 완료되기 전에 그 다음 코드를 실행할 수 없는 상태
// => 순차적으로 실행 될 수밖에 없음
function double(x){
    return x*2;
}

const x = double(100);
const y = x;

// 2. 비동기 코드
// 앞에 코드가 확정되지 않아도 다음 코드를 실행할 수 있는 
// 동시에 실행될 수 있는 코드
// => 실행의 흐름을 막을 수 없음
// 자바스크립트는 정상적으로 비동기 코드를 만들어 낼 수 없다.
// 코드를 중간에 멈추게 할 수 없음

function clacValue(a, b){
    setTimeout(()=>{
        // return의 대상은 없어짐
        // r과 z는 이미 지나갔기 때문에 
        return a+b;
    }, 100)
}

// 이 코드의 실행의 흐름과 calcValue() 안쪽 코드의 실행 흐름이 맞지 않는다.
// 순차적으로 흘러가지 않기 때문에 
const r = clacValue(10, 20);
const z = r;

// 비동기코드와 순차코드를 엮어주려면? => "callback" 방법 밖에 없음
// 결과를 반환할 함수를 인자로써 넘겨주기
function clacValue2(a, b, cb){
    setTimeout(()=>{
        cb(a+b);
    }, 100)
}

const r2 = clacValue2(10, 20, (result) => {
    console.log(result); // 30
});

const z2 = r2;

