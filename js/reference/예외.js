/*

2022-03-14

[예외]
1. 명확한 오류에 대한 반환값
2. 오류가 발생할지 안할지에 대한 불명확한 상황에서의 예외

[throw]
예외를 발생시키는 구문
일반적으로 자바스크립트의 에러 객체인 
Error 객체 인스턴스를 만들어서 사용하게 된다.

throw가 발생하면 프로그램이 종료된다.

종료되는 시점은?
thro에서 던진 것을 어디에서도 받아주지 않으면 최종적으로 종료됨

[try catch]
예외를 받는 구문
try: 일단 시도해 보는 구문
catch
    예외가 혹시 발생하면 받는 구문
    예외로 넘어온 데이터를 인자로 받을 수 있음
    catch(error) 축약해서 e라고도 쓴다.
finally
    try, catch 구문이 실행되고 난 후 가장 마지막에 실행되는 구문
    예외가 나든, 나지 않든 실행해야 될 코드가 있다면 
    finally 블록에 코드를 넣으면 된다.

특징
    예외가 함수 호출의 뎁스에 상관없이
    바깥쪽으로 예외를 던지면
    그 바깥쪽 중에 어떤 함수든 catch로 잡기만 하면 된다.
    먼저 잡는 catch가 임자다.
    즉, 바깥쪽으로 전파시키지 않는다.
    반대로, 안쪽에서 catch로 잡지 않은 경우
        바깥쪽으로 계속 그 catch가 맨 마지막까지 빠져나가는 형태가 된다.

오류 처리를 맨 상단에서 이론화해서 처리하고 싶을 때 
예외 throw 구문을 이용해서 효과적으로 처리할 수 있다.

[오류 처리를 함수가 리턴하는 값을 가지고 하는 구조]
매번 함수의 호출 결과를 if문을 통해 판정해야 한다.
코드가 매번 따라다녀야 하기 때문에 매우 불편함

*/

// 예외를 바로 발생시킴
function doException(){
    throw new Error('err');
}

function noException(){
    throw true;
}

// function main(){
//     try{
//         doException();

//     }catch(error){
//         console.log(error);

//     }finally{
//         console.log('done');
//     }
// }



function callException(type){
    if(type === 'do'){
        doException();

    }else{
        noException();
    }
}

function main(){
    try{
        callException('do');

    }catch(error){
        console.log(error);

    }finally{
        console.log('done');
    }
}

main();

