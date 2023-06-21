// 2022-05-11
// 문자열을 형태가 다른 문자열로 변환하기
// 입력값으로 공백으로 구분된 단어가 오면
// 공백을 기준으로 낙타 표기법으로 변환하하는 예제

// (2) 배열 연산을 적극적으로 사용한 방법
const simpleCamel = (text, splitter = ' ') => text.split(splitter)  // 배열 연산을 사용하기 위해 배열로 만든다.
                        .map((word, wi)=> word.split('')   // 문자를 하나하나로 나눠서 배열로 다시 만듬
                            // wi >0: 첫 번째 단어는 스킵한다.
                            // ci === 0: 공백으로 분할된 맨 앞에 있는 위치라면
                            // 대문자로 바꾸고 그렇지 않으면 소문자로 바꾼다.
                            .map((c, ci) => wi >0 && ci === 0 ? c.toUpperCase() :c.toLowerCase())
                            .join(''))
                        .join('');


// (1) 변수와 반복문을 사용한 방법
function convertCamelName(name){
    let camelName = '';

    // 문자열의 길이만큼 순회
    for(let i =0, newSpace = false; i < name.length; i++){
        // 
        if(name[i] == ' '){
            newSpace = true;
            // continue: 더이상 처리하지 않고 반복문을 다음으로 넘어감
            continue;
        }

        if(newSpace){
            // toUpperCase() => 영문을 대문자로 바꿔주는 메소드
            camelName = camelName + name[i].toUpperCase();
            newSpace = false;
        } else {
            // toLowerCase() => 영문을 소문자로 바꿔주는 메소드
            camelName = camelName + name[i].toLowerCase();
        }
    }

    return camelName;
}

const camelName1 = convertCamelName('Kim min tae');
const camelName2 = simpleCamel('KIM MIN TAE');

console.log(camelName1);
console.log(camelName2);