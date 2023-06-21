// 2022-04-25

type Book = {
    title: string;
    copyright?: string;
    author?: string;
}

const books: string[] = [
    "헨리 6세",
    "리처드 3세",
    "실수 연발",
    "말괄양이 길들이기",
    "헨리 8세"
];

// 문자열로 된 배열 데이터 -> 객체화 하는 연산 수행

// 1. 순회 - 식을 이용한 방법 ( 배열이 제공하는 함수 이용 )
// 배열의 첫 번째부터 맨 마지막까지 한 번씩만 읽어서 무언가를 하는 것
// 가장 기본적인 방법 - 반복문 for, for of, for in, ...
// => 문을 이용한 반복

// forEach 메소드
// 인자로 함수를 받음
// 그 함수한테 마치 for of문이 했던 것처럼
// 배열이 갖고 있는 원소 하나씩 그 함수한테 전달함
// 한 번씩 전달해주게 되므로 자연스럽게 순회가 된다.
// 결국 그 함수는 배열이 직접 전달된 원소를 가지고 뭔가를 하면 됨

// forEach가 인자로 넘겨주는 값은 항상 같음(3개)
// 1: 원소 데이터 그 자체
// 2: index값
// 3: 배열 원본 자체
// books.forEach((book: string, idx: number, books: string[]) => {
//     console.log(book, idx);
// })

books.forEach((book: string, idx: number) => {
    // 함수가 값으로써 전달되기 때문에 식이 됨
    // 함수 호출은 반환 값으로 값이 넘어오기 때문에
    // 함수 호출도 식이라고 부른다.
    console.log(book, idx);
})

// 변수가 없다.(index값에 접근하기 위한 변수 등이 필요 없음)
// => 훨씬 안정적인 코드 구조
//      (변수가 없어서 버그가 있을 게 없음)

// 단점: for문을 이용해서 반복하는 것보다 성능이 떨어짐
//      브라우저가 최적화 되어 큰 차이가 없어보이지만
//      배열에 데이터가 수십만개 있는 상황이라면
//      for문이 훨씬 더 빠름
//      몇 천건 정도 일 때는 차이가 나지 않음

// 어느 정도 크기의 배열 데이터를 다루느냐에 따라 어떤걸 쓸 것인지 결정하면 된다.

// 2-1. map
// 원본 배열에서 데이터를 입력 받아 함수가 리턴한 데이터로 새로운 배열을 만들어서 반환하는 함수
// 인자로 함수를 받음
// map 함수가 전달 주는 데이터도 배열을 순회하며 원소를 하나하나 던져줌
// 1. 원소, 2: index, 3: 원본 배열
// 전달된 함수가 리턴한 값을 모아서 하나의 함수로 만든 다음에 순회가 끝나면 반환해줌
const bookObjects: Book[] = books.map((book: string) => {
    return {
        title: book,
        author: undefined
    };
})
// 입력으로 받은 데이터를 함수를 통해 변경한 다음
// 변경된 모양으로 새로운 배열을 만듬

// 배열 안에 있는 데이터를 다른 형태로 변환하는 용도로 많이 사용됨

// 2-2. map & map (메소드 체이닝)
// 연결하는 이유? 중간 과정의 배열은 필요가 없기 때문에
const ShakespearOneBooks: Book[] = books
    // 애로우 함수: 첫 번째 데이터를 그대로 리턴하는 경우 리턴문을 생략할 수 있음
    // => 괄호()로 값을 리턴하도록 함
    .map((book: string) => ({
        title: book
    }))
    .map((book: Book) => ({
        ...book,
        author: "William Shakespeare"
    }));

console.log(ShakespearOneBooks);

const booktitleToBookObject = (book: string) => ({ title: book});
// 첫 번째 함수의 반환값: 함수
// 두 번째 함수의 반환값: 객체
// => "커링"
const makeAuthor = (name: string) => (book: Book) => ({
    ...book,
    author: name
});

const shakespeareTwoBooks: Book[] = books
    .map(booktitleToBookObject)
    .map(makeAuthor("William Shapkespaere"));

console.log(shakespeareTwoBooks);
// => map 함수에 전달된 함수를 바깥쪽으로 뽑아냄
//  title로 변환하는 또 다른 map 연산이 있다면
//  재활용 할 수 있음
// 다른 작가의 책을 기술할 때도 넘겨주는 값만 변경하면 되기 때문에
// 코드의 가독성, 표현력, 재활용성이 높아짐

// 3. 필터링 - filter 메소드
// 인자로 함수를 받는다.
// 그 함수한테 데이터를 순회하면서 하나씩 넘겨주고 그 함수가 리턴한 값이 참인 데이터만 모아서 배열로 반환함
// 입력으로 들어간 값과 출력으로 나온 값의 갯수가 다를 수 있다.
const henry: Book[] = shakespeareTwoBooks.filter((book: Book) =>{
    // '헨리' 문자열이 포함되어 있냐?
    // true: 그 값 반환, 그렇지 않으면 false 반환
    book.title.includes('헨리')
});

console.log(henry);
// 단순하지만 꽤 유용하게 많이 쓰임
// map과 filter 연결해서 많이 쓴다.

// 4. 누적함수 reduce

const someNumbers: number[] = [10, 5, 3, 14, 56];

// reduce는 인자로 함수를 받는다.
// 항상 인자가 2개씩 넘어온다.
// 주어진 함수가 리턴한 값을 모아서 최종적으로 리턴한 값을 리턴한다.
// 두번째 인자값(0)은 a의 초기값으로 넘겨줌
// b에는 첫 배열의 첫 번째 값을 넘겨줌 => 10
// 0 + 10 = 10
// 다음번 순회할 때 10을 a에게 넘겨주고, 배열의 두 번째 값인 5가 b에 들어감
// 10 + 5 = 15;
// 이러한 과정을 배열이 끝날 때까지 반복
// => 베열에 있는 모든 값의 합을 구할 수 있음
const sumNumbers = someNumbers.reduce((a:number, b:number) => a+b ,0);
console.log(sumNumbers);

// - 응용
// 여러개의 객체를 하나의 객체로 합치기
type SomeObject = {
    [key: string]:  string | number;
}

const someObjects: SomeObject[] = [
    { border: "none"},
    { fontSize: 24},
    { className: "box sm-bix"}
];

const someObject: SomeObject = someObjects.reduce(
    // a를 펼쳐서 객체 안에 넣고, b를 펼쳐서 객체 안에 넣고
    (a:SomeObject, b: SomeObject) => ({ ...a, ...b}),
    {}
);

console.log(someObject); // 하나의 객체로 만들어진 결과를 확인할 수 있음
// 숫자, 객체 등을 모두 합산 가능
// reduce는 동작하게끔 돌아가는 구조만 제공하는 역할
 
// 5. 유사 배열
// 배열이지만 데이터를 여러 개 갖고 있고, 순서를 갖고 있고, 몇 개가 들어있는지 알 수 있는 형태
// 배열과 같은 형태를 가지고 있지만 배열이 갖고 있는 도구들은 메소드로서 갖고있지 않다.
// 가볍게 만드려고 만든 구조
function sumNumbers2() : number{
    // arguments: 가변 인자를 처리하는 배열
    // arguments를 순회하면서 합산하는 중
    // arguments는 진짜 배열이 아닌 유사 배열이기 때문에 단독으로
    // arguments.reduce() 하게 되면 동작하지 않는다.
    // 유사 배열을 가지고 베열 연산을 하고 싶을 때
    // 유사 배열을 배열로 바꾸어야 함
    // => Array.from(arguments)
    return Array.from(arguments).reduce((a:number, b:number) => a+b, 0);
}

console.log(sumNumbers2(10, 20, 30, 40, 50));

// sumNumbers2()와 똑같은 일을 하는 함수
// arguments를 사용하지 않고 
// 전개 파라미터를 사용한 것
// => 명확히 타입이 기술되었으므로 사용하는 쪽에서도 문제가 발생하지 않는다.
function sumNumbersForTypeScript(...args: number[]): number{
    return args.reduce((a:number, b:number) => a+b, 0);
}

console.log(sumNumbersForTypeScript(10, 20, 30, 40, 50));


