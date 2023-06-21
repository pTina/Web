// 2022-04-20
// 배열 -(1)

// 하나의 변수에 여러 개의 값을 담을 수 있는 구조 2가지 제공
// 1. 객체
//      값에 이름이 있음
//      이름으로 값에 접근함
//      이름이 있는 데이터 유형
// 2. 배열
//      값들에 이름이 없음
//      여러 개의 값이 묶여만 있음
//      위치값으로 값에 접근함
//      이름이 없고 위치 값을 갖고 있는 데이터 유형

// -배열 만드는 방법
// 배열을 만드는 순간 데이터를 기술하는 방법
// 위치는 0부터 시작
const day = ['월', '화', '수', '목', '금', '토', '일'];

// 만들 때 빈 배열로 만들어 놓고 이후에 추가하는 방법
const books = [];

// 원소 추가

// 원시적인 방법 - 지정한 위치에 대입문 활용
// => 위치 값에 데이터가 있는지 없는지 사용하는 쪽에서 알고 있어야 함
books[0] = 'ddd';
books[1] = 'bbb';

// push()
// 배열이 갖고 있는 데이터 맨 마지막에 새로운 데이터 추가
books.push('가나다라');
books.push('마바사아');

console.log(books);
// .length => 배열에 몇 개의 데이터가 들어있는지 반환
console.log(books.length);
// 배열의 위치는 0부터 시작하므로 array.index => array.length-1

// 데이터 꺼내기
// .pop() => 배열의 가장 마지막에 있는 데이터를 꺼냄
//           꺼내왔기 때문에 해당 데이터는 사라짐
books.pop();
books.pop();

// .slice(startIndex, endIndex)
// startIndex 값부터 endIndex를 포함하지 않고 그 앞에 원소까지만 꺼냄
// 원래 배열은 수정하지 않는다.
const oneBooks = books.slice(1,2);

// .splice(start, end)
// start 인덱스 값부터 end 인덱스 값까지 추출함
// 세번째 부터 넘겨진 인자부터는 end 인덱스 값 이후에 추가됨
// 꺼냄 + 꺼내온 자리에 새로운 데이터 추가
const twoBooks = books.splice(1,2,'dd', 'bb');

// .shift()
// 배열의 맨 앞부터 빼오는 것
// 원본 배열을 수정함
books.shift();

// .unshift()
// 배열을 오른쪽으로 민다.
// 배열 맨 앞에 추가
books.unshift('ccc');

// join()
// 배열 원소 안에 있는 모든 데이터를 하나의 문자열로 합침
// 인자 값을 받을 수 있는데 디폴트: , (콤마)
// => 요소와 요소 사이에 구분자 역할을 하는 문자열
// => 인자 값 없으면 구분자 없이 붙음
const allBooks = books.join();

// split() 스플릿
// 구분자로 구분되어 있는 하나의 문자열 => 배열로 변경함
// 인자로 구분자를 받음
// 구분자를 기준으로 원소를 나눈 배열로 만들어줌
const newBooks = books.split(',');

// -배열합치기
// merge, concatenate(컨켄트네이트)

// concat() 컨켄트 메소드 사용
// 합치고 싶은 배열을 인자로 받음
// oneBooks를 앞에 두고 twoBooks가 뒤에 합쳐짐
const nextBooks = oneBooks.concat(twoBooks);

// 배열이 제공하는 메소드는 동작 자체가 암묵적이라 표현력 자체가 높지는 않음
// => 전개연산자 사용
// 전개 연산자는 배열, 객체 모두 지원
// 배열 요소에 있는 원소들을 모두 풀어헤침
// 배열은 새로운 배열에다가만 풀어헤칠 수 있음
// 객체는 객체에 풀어헤칠 수 있음
const nextBooksList = [...oneBooks, ...twoBooks];
// 또는 const nextBooksList = [...oneBooks, twoBooks];