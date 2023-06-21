// 2022-05-02
// [@types]

// 필요로 하는 라이브러리가 타입스크립트를 지원하지 않는 경우
// 

// 타입스크립트를 지원하지 않는 라이브러리
// 어떻게 해야하나?
//      1. uuid에 들어가서 타입을 확인하고, 직접 타이핑 하기
//      2. 타입스크립트에 직접 타이핑이 되지 않는 라이브러리를 모아 놓은, 그런 라이브러리들을 누군가 타이핑하여 등록해 놓은 패키지 저장소 => @type 사용
// npm install uuid
// npm install @types/uuid 
// => 타이핑 규격이 들어갔기 때문에 타입스크립트에서 자유롭게 사용할 수 있게 됨
import { v4 } from 'uuid';

type UniqObject = {
    id: string;
    [key: string]: string | number | boolean;
}

// UniqObject 객체를 생성하는 함수
const makeObject = (): UniqObject =>({
    // id가 객체마다 유일한 값이 들어갔으면 좋겠다.
    // => 매번 유니크한 값을 문자열 값으로 생성해내는 라이브러리
    // => "uuid"
    id: v4(),
});

console.log(makeObject());
console.log(makeObject());
