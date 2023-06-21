// 2022-4-19

// [생성기함수]
// generator

// 기본 메커니즘이 다른 함수와 다르다.
// 코드의 묶음, 인자를 받는다, 값을 반환한다.
// 값을 반환하지만 함수가 종료되지 않기도 하고 종료되기도 하는데
// 그 상태를 결정할 수 있다.
// => 기존 함수의 개념을 완전히 확대시켜 놓은 함수

// 클로저를 활용하여 함수를 반환하는 코드
function makeInfiniteEnergyGenerator() {
    // energy를 클로저 안에 가둠
    let energy = 0;
    // 인자로 booster를 받는데 디폴트값은 0
    return function(booster = 0){
        if(booster){
            energy += booster;
        }else{
            energy++;
        }

        return energy;
    };
}

const energy = makeInfiniteEnergyGenerator();

for(let i = 0; i<5; i++){
    console.log(energy()); // 1, 2, 3, 4, 5
}

console.log(energy(5)); // 10

// 제너레이터를 이용한 코드
// 리턴이 없음 => 영원히 리턴되지 않을 것 같다..
// => 실제로는 무한루프이지만 next를 호출하기 전까지 yield를 만나
// 멈춰있는 상태다!
// 그래서 무한루프 형태의 특수한 형태의 코드 패턴이 가능하다.
// 재개될 때 기존 함수 상태를 그대로 유지하고 있기 때문에
// energy 값을 클로저 공간에 가둬두는 테크닉을 쓸 필요가 없다.
// 왜냐? 함수가 종료가 안되니까~~
//      기존에 실행하고 있던 상태를 모두 보존하고 있기 때문에 가능함!
// done 속성?
// 제너레이터 안에서의 어떤 상황에 리턴문을 만날 때 true 값을 반환한다.
//      return을 만나면 함수를 종료하고 done속성을 true로 만든다.
//      => "끝났음"을 의미함
//      => 제너레이터인데~ 나 이제 더이상 실행할 코드 없어~ 리턴됨!
// 제너레이터를 무한 루프 성 제너레이터가 아니라면
// next를 하기 전에 마지막 반환된 값의 done이 true인지 false인지 확인하고
// true면 더이상 next를 호출하면 안됨
// false면 next 호출해도 된다~ 판단하며 코드를 작성하면 된다!

// 일반적으로 많이 사용되는 테크닉은 아니다.
// 리액트, 뷰 등의 프레임 워크 류의 기술을 학습하게 될 때는
// 제너레이터를 적극적으로 사용하는 도구를 만날거임

function* infiniteEnergyGenerator() {
    let energy = 1;

    while(true){
        // yield => 제너레이터를 멈추게 하는 키워드
        // 함수를 멈추고
        // energy를 호출자에게 넘겨줌(next()를 호출한 애한테 넘김)
        // next()의 반환값으로 energy값을 넘겨주는 것이지!
        // 마치 next가 리터한 것처럼
        // 값으로 넘겨주는 것이 아닌 객체로 넘김{value, done}
        // value 속성값에 energy값이 들어감
        // 그 후에 대입문 코드로 재개됨
        // booster값이 들어오고 난 후 다시 yiel를 만나므로
        // 다시 호출자에게 넘어감
        const booster = yield energy;

        if(booster){
            energy += booster;
        }else{
            energy++;
        }
    }
}

const energyGenerator = infiniteEnergyGenerator();

for(let i=0; i<5; i++){
    // 객체가 반환됨 {value, done}
    // 객체의 value값은 => 1, 2, 3, 4, 5
    console.log(energyGenerator.next());
}

// 10
// 인수로 넘긴 5는 yiel가 마치 리턴한 것처럼
// booster에 5가 들어감
// 그럼 그 밑의 코드를 실행 한다.
// 그 후 다시 yield를 만나 멈춰있는다.
// 다음 next가 호출될 때까지
console.log(energyGenerator.next(5));

// 제너레이터 함수에 대하여...
// 제너레이터 함수는 첫 번째 호출에서 자신을 실행시키지 않는다.
// 실행시키는데 필요한 도구를 갖고 있는 객체를 만들어서 넘겨준다.
// next 메소드: 제너레이터 함수 본체를 실행을 재개시킬 수 있는 함수
//              서스펜드 너낌
// next()를 호출하게 되면 그때 함수가 실행됨



