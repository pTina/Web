// 2022-04-18

// 일급함수
// 프로그래밍 언어에서 함수라고 하는 코드의 묶음을 일반적인 값처럼 취급하는 개념
// => 일반적인 값처럼 변수에 넣을 수 있다.
// 단순해 보일 수 있지만 다양한 쓰임이 있다.
// 변수, 인자, 리턴값, ... 

// 1. 인자로 함수가 들어오는 경우
// 인자로 넘겨받은 함수가 언제 호출되는가? 누가 호출하는가?
// => makeLI가 호출하고 있음
// 어떤 함수를 넘겨주는 것은 누가 결정하나?
// => makeLI 바깥쪽에서 결정

// 역할이 정확히 나눠짐
// 다양한 쓰임으로 사용할 수 있는 장점 발현

function ul(child:string): string{
    return `<ul>${child}</ul>`;
}

function ol(child:string): string{
    return `<ol>${child}</ol>`;
}

function makeLI(
    container: (child: string) => string,
    contents: string[]
): string{
    const liList = [];

    for(const content of contents){
        liList.push(`<li>${content}</li>`);
    }

    return container(liList.join(''));
}

// 함수 자체를 넘겨주고 있음 호출하는 것이 아니다!
const htmlUL = makeLI(ul, ['월','화','수','목','금','토','일']);
const htmlOL = makeLI(ol, ['봄', '여름', '가을', '겨울']);

console.log(htmlUL);
console.log(htmlOL);


