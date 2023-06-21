// 2022-04-18
// 일급함수
// 2. 반환 값으로의 함수
// 반환되는 함수를 변수에 넣을 수 있다는 엄청난 장점이 생김
// 코드 자체로 표현력을 극대화 시킴
// => "함수를 합성한다, 함수를 만든다"고 하는 테크닉으로 부르기도 한다.


function salePrice(discountRate, price){
    return price - (price*discountRate * 0.01);
}

console.log('여름 세일 - '+ salePrice(30, 567000));
console.log('겨울 세일 - '+ salePrice(10, 567000));

function discountPrice(discountRate){
    return function(price){
        return price - (price * (discountRate*0.01));
    }
}

// discountPrice 안쪽의 함수를 호출시키기 위해 함수를 한 번더 호출해주어야 함
console.log('여름 세일 -' + discountPrice(30)(567000));
console.log('겨울 세일 -' + discountPrice(10)(567000));

// 함수 자체가 값으로 취급 => 변수에 담을 수 있음
// discountPrice함수가 리턴하는 함수를 즉시 호출하지 않고
// 변수에 담음
let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

// 담은 변수를 사용해서 호출함
console.log(`여름 세일 - ${summerPrice(567000)}`);
console.log(`여름 세일 - ${winterPrice(567000)}`);