//2022-05-03
// [promise]
// 비동기적 상황이 많으면 코드가 복잡해지는데
// 이때문에 생겨난 것이 promise

// Promise라고 하는 함수로써 작동하게됨
// 인스턴스 객체를 만들어야 한다.
// 함수를 제공해 주어야 한다.

const p = new Promise((resolve, reject) => {
    // Promise에게 넘긴 함수는 누가 호출하는가?
    // Promise 안쪽에서 Promise가 호출한다.
    // 호출을 하면서 2개의 인자를 준다.(두 개 모두 함수)
    // 1. resolve, 2. reject 
    setTimeout(()=>{
        // reject('실패');
        resolve('OK');
    }, 2000);

    // 성공하면 호출
    // 성공의 수신은 누가 받나? 
    // => Promise가 가지고 있는 then 메소드의 인자로 함수를 받는다.
    // resolve('OK');
    // 실패하면 호출
    // 실패의 수신은 catch 메소드가 받는다.
    // reject('실패');

})

// 어떤 장점이 있나?
// then을 계속 연결할 수 있다.
// p.then(function(ok){
//     console.log(ok);
// }).catch(function(error){
//     console.log(error);
// })
// 여러 개의 비동기 상황을 순차적으로 엮을 때
// 혹은 여러 개가 복잡하게 얽혀 있거나 하는 경우
// 훨씬 더 단순하게 풀어낼 수 있는 메카니즘을 제공한다.
p.then(function(ok){
    console.log('첫번째 성공'); // 첫번째 성공
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('두번째 성공')
        }, 3000);
    })
})
.then(function(ok){
    console.log(ok); // 두번째 성공
})
.catch(function(error){
    console.log(error);
})

// 굉장히 복잡한 비동기 처리 코드들도 아주 단순한 형태로 기술할 수 있기 때문에
// 유지보수를 깔끔하게 할 수 있는 코드를 생산할 수 있다.

