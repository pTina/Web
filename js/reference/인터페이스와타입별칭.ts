/*
2022-03-16

-타입스크립트에서 타입을 기술하는 방법
1. 인터페이스
    타입 알리아스와 매우 유사함
    문법이 조금 다름
    이름이 중복되면 속성이 추가 되는 것으로 사용 가능하다.
    (1개인데 2개로 나눈것이다 라고 타입스크립트에서 인지함
        -> 그렇다고 하나의 규격을 분산해서 만들면? 그닥 장점이 있다고 볼 수 없다
        -> 스펙상으로는 존재하지만 권장할 만한 기능은 아니다.
        -> 사용하는 쪽에서 인터페이스 요소에 뭐가 들었는지 확인하기 까다롭다.)
    공개된 속성만 기술한다.

2. 타입 별칭(타입 알리아스)
    (1) 데이터 타입을 지정해주는 방법
    (2) 리터럴 타입
        특정한 값을 지정함.
        그냥 데이터 타입만 지정해주는 것보다 훨씬 구체적.
    이름이 중복되면 안됨

타입으로 기술된 것은 컴파일 타임에 이 값이 들어가는 안 들어가는지 확인하는 용도

-enum 타입
실제 데이터, 런타임에 실제 값이 들어감
값을 제한하는 것은 타입과 유사하지만 실제 데이터다.

-함수도 타입 명시 가능

-객체 만들 때
인터페이스로 만드나 타입 알리아스로 만드나 문법만 다를 뿐 똑같다.
원칙을 세우고 원칙에 따라서 사용하면 된다.
-> 추천방법!
        인터페이스와 타입 알리아스의 구체적인 차이점을 찾아본다면
        인터페이스에는 없는 내용이 타입 알리아스에 꽤 들어가 있음
            구체적인 타입 명시
        구체적인 데이터를 표현할 때는 타입 알리아스를 사용
        메소드와 같은 구체적인 행위까지 포함된 객체를 디자인할 때는 인터페이스 위주로 사용
        : 데이터 묘사 - 타입 알리아스
        : 데이터를 포괄하는 객체 묘사 - 인터페이스
        : 클래스 - 데이터와 행위 포괄 -> 인터페이스를 사용하는게 좀 더 자연스럽지 않을까?
-상속
인터페이스: extends
타입 알리아스: & (intersection)




*/


// number라는 타입 자체에 의미를 부여하고 싶을 땐?
// -> 타입 알리아스 사용
let x: number = 10;

// 타입 알리아스
// type 타입 이름 = 실제 타입
// 타입 이름은 보통 대문자로 시작하는 컨벤션을 가지고 있음

// 그냥 문자열인 경우
type str = string;

// 아래와 같은 예는 리터럴 타입
// 어떤 값 자체를 기술한다.
export type YesOrNo = 'Y' | 'N';

enum yesOrNo_ {'Y', 'N'};

// Name속성은 문자열로 쓸 거고 그걸 Name이라고 명시할 거야.
export type Name = string;

// 함수도 타입을 명시할 수 있다.
// fooFunc는 인자가 없고, 반환값이 string인 함수.
export type fooFunc = () => string;


// ==============================
// 인터페이스

// IUser 인터페이스
// id, name, email, active 속성을 갖고 있음
// 속성의 이름과 티입 명시
// IUser라고 하는 객체를 만들려면 아래와 같은 모양으로 만들어야 한다는 표현
export interface IUser{
    readonly id: number;
    // 인터페이스와 타입 알리아스 혼용 사용 가능
    readonly name: Name;
    email: string;
    active: YesOrNo;
}

// ? : 선택 항목, 있어도 되고 없어도 됨
// ? 없으면 : 필수 항목, 없으면 안되는 것
export interface IUser{
    address? : string;
}

// IUserPlofile에 IUser속성이 그대로 사용될 때
// 클래스의 상속과 동일하게 extends 키워드 사용해서
// IUser의 속성을 IUserPlofile의 속성에 포괄하게 되는 것임
// 상속할 대상이 인터페이스든 타입 알리아스든 상관없다.
export interface IUserProfile extends IUser{
    profileImage: string;
    github? : string;
}


// 타입 알리아스도 extends키워드와 동일한 상속을 할 수 있음
// => intersection & 사용 
// => merge 되는 것과 똑같은 효과
// IUser를 상속받아 TUserProfile을 만든다.
// 상속할 대상이 인터페이스든 타입 알리아스든 상관없다.
export type TUserProfile = IUser &{
    profileImage: string;
    github? : string;
}

export interface style {
    colorCode: string;
    width: number;
    height: number;
}

// 여러개를 상속받아서 사용하는 것도 가능하다.
export interface UserStyle extends IUser, style{
    tagName: string;
}

// 속성 이름은 문자열로 되어있고,
// 그 값은 어떤 값 유형으로 만들어져 있는 객체
// value가 오직 숫자 유형인 객체
export interface IOnlyNumber{
    [key: string]: number;
    // any: 모든 객체, 타입 제한이 없음
    // [key: string]: any;
}

// 함수의 규격 설정
// (인자1, 인자2, ...) : 리턴값
export interface IGetApi{
    (url: string, search?:string): Promise<string>
}

export type TGetAoi ={
    // () => 리턴값 으로 작성하지 않고
    // : 콜론을 사용함
    (url: string, search?:string): Promise<string>
}

// 인터페이스에서는 항상 public으로 선언하라고 지시함
// 사용하는 쪽에서 만약에 속성값을 private으로 사용하려고 한다면
// 에러 발생한다.
export interface IRect{
    id: number;
    x: number;
    y: number;
}

// 클래스인 경우 인스턴스르 만들기 위해 생성자가 호출이 되는데
// 클래스의 규격과 생성자가 만들어내는 인스턴스의 규격이 미묘하게 다를 수 있다.
// 인터페이스를 이용해 생성자의 규격을 기술하는 문법
export interface IRectConstructor {
    // new가 의미하는 것은
    // 생성자로 호출할 때 생성자의 스펙이 이렇게 된다고 인터페이스로 묘사한 것
    new (x: number, y: number): IRect;
}