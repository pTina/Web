// 2022-04-18
// [비동기함수]

// 자바스크립트 코드에서는 코드를 딜레이 시킬 수 있는 방법이 없음
// 타이머를 이용하여 callback 함수를 제공한 다음
// 특정 시간 이후에 그 callback 함수가 호출되는 패턴의 코드를 작성해야 함.
// 동기적으로 쓸 수 없다고 하는 코드를
// 비동기 함수를 이용해서 작성해보자!

function delay(ms: number): Promise<string>{
    // 즉시 Promise 객체를 리턴하고
    // 비동기 코드가 작성될 함수를 넘겨줌
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            // 랜덤하게 resolve 또는 reject를 호출함(짝수거나 홀수 확률 50%)
            if(Math.floor(Math.random() * 10) % 2 === 0){
                resolve('success');
            }else{
                reject('failure');
            }
        }, ms);
    })
}

// 기존에 전형적인 promise 패턴으로 사용한 것.
// then 메소드에 callback 함수를 제공함으로써
// 내가 원하는 코드를 성공 이후에 실행시킬 수 있다.
// 실패하면?
// cath 메소드에 실패했을 때의 코드를 작성하게 된다.

// 전형적인 promise 패턴의 코드이지만
// then, catch의 callback 함수를 제공해야 한다.
// => 비동기 프로그래밍 코드
delay(3000)
    .then((result: string)=>{
        console.log(`done promise! ${result}`);
    })
    .catch((error: string) => {
        console.error(`fail promise! ${error}`);
    });

// 우리가 하고 싶은건? 일반적인 동기 코드 처럼 비동기 코드를 쓰고 싶음
// 비동기 함수는 함수의 시그니처 앞에 async 지시어 붙여주면 됨!
// 실제로 동작하는 것은 비동기로 작동하고
// 코드적으로만 동기적으로 작동하는 것처럼 보여주게 만든다.
async function main() {
    try{
        console.log('start job');
        // then을 사용하지 않음
        // await 지시어 사용
        // delay가 마치 리턴하는 것처럼 대입문이 씌여져 있음
        const result = await delay(3000);
        // 비동기 끝났어~ delay가 리턴한 것 같은 result의 값을 찍음
        console.log(`done async! ${result}`);

    }catch(e){
        // reject는 cath문(예외문)에 걸린다.
        // 항상 await를 try-catch로 감싸 안아서
        // 에러는 catch문으로 처리해주면 된다.
        console.error(`fail async! ${e}`);
    }
}

// 어떻게 쓰는지 정리
// 내가 원하는 함수에 async를 붙이고
// promise 객체를 반환하는 함수 앞에 await 오퍼레이터를 붙여주기만 하면
// promise를 반환하는 작업
// resolve 함수가 호출되면 데이터가 리턴돼서 넘어오는 것처럼
// 코드를 기술할 수 있게 된다.

// promise의 이해를 충분히 해야합니다!!