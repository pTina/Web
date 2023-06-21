// 2022-05-10
// [객체를 문자열로 변환하기]

// 애플리케이션 작성 과정에서
// 객체를 문자여롤 변환해야 하는 경우가 많다.

// JSON.stringify로 문자열로 변환해도 되지만
// => 객체를 다시 객체화하기 위해서 임시 저장하기 위한 객체 형태로 문자열 변환이기 때문에
//     지금 하려는 것과는 약간 다르다.

// 객체를 전혀 다른 형태의 문자열로 변환하는 과정을 다룰 것임


// 문자열 포맷: id,item,price,discount
const cartItem = [
    {id: 1, item: '핸드밀', price: 40000, discount: 0,},
    {id: 2, item: 'A4용지', price: 4000, discount: 0,},
    {id: 3, item: '수영복', price: 120000, discount: 0,},
    {id: 4, item: '색연필72색', price: 150000, discount: 0,},
];

const cartItemsArray = [];


// (1) 정통적인 반복문을 이용하기
// 반복문 안에 반복문이 들어가는 패턴
for(const item of cartItems){
    const row = [];

    // entries
    // 객체 안에 key, value짝으로 되어 있는 배열(ex. ['id', 1])을 만들고
    // 그 배열을 하나씩 리턴한다.
    // 구조분해 할당을 이용하여 key는 필요 없기 때문에 value만 가지고 올 수 있도록 함
    for(const [, value] of Object.entries(item)){
        row.push(value);
    }

    cartItemsArray.push(row.join());
}

console.log(cartItemsArray.join('==='));

// (2) array가 제공하는 함수를 이용하기(배열연산 이용하기)
// map() => 기본적으로 데이터를 변환시키는 배열 메소드

// object에서 value만 추출해냄
const extractValueInObject = obj => Object
    .entries(obj)
    .map(([, value]) => String(value));


const cartItemString = cartItems
    .map(extractValueInObject)
    .join('===');

console.log(cartItemString);
// => 매우 간단하게 수행되게 할 수 있다.