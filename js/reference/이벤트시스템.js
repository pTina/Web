// 2022-05-03
// [이벤트시스템]

// 브라우저가 제공하는 시스템
// 특정 UI가 사용자와 인터랙션 할 때 실행되어야 될 코드가 있을 때
// 코드 상으로 특정할 수 없을 때(사용자가 언제 UI에 반응할지 알 수 없기 때문에)
// 사용하기 위해 등장한 것



function main(){
    const BUBBLING_PHASE = false;
    const CAPTURING_PHASE = true;
    const PHASE_NAME = ['NONE', 'CAPTURING', 'TARGET', 'BUBBLING']

    // eventLogger는 이벤트 시스템이 던져 주는 이벤트 객체를 받는다.
    // => target, currentTarget
    function eventLogger({target, currentTarget, eventPhase}){
        console.log(`${target.dataset.name}, ${currentTarget.dataset.name}, ${PHASE_NAME[eventPhase]}`);
    }

    let divs = document.querySelectAll('div');
    // addEventListener의 세번재 인자: 이벤트가 중첩됐을 때 어떻게 전파될 것인가 메카니즘을 결정하는 옵션
    divs.forEach(div => div.addEventListener('click', eventLogger, BUBBLING_PHASE));
}

// DOMContentLoaded
// HTML 문서 자체도 비동기적으로 로딩되기 때문에 
// 언제 로딩될지 자바스크립트 입장에서 확인할 수 없음
// 로딩되기 전에 DOM에 접근하게 되면 문제 발생
// => DOMContentLoaded
// HTML 문서가 모두 완료 되고 DOM이 만들어진 다음에 발생하는 이벤트
// 기본적으로 DOMContentLoaded 이벤트가 발생했을 때 main 함수를 연결하는 로직으로 설계한다.
document.addEventListener('DOMContentLoaded', main);

// 버블링 이벤트
// 안쪽에 있는 요소가 클릭 됐을 때 click이벤트가 바깥쪽으로 확산되어 나가는 것

// eventPhase
// 직접적으로 클릭돼서 발생한 이벤트인지 전파된 이벤트인지 확인하는 방법
// target인지 bubbleing인지 확인 가능

// currentTarget: 버블링 됐을 때의 값
// target: 원래 이벤트 핸들러가 걸려있는 값

// 캡쳐링 이벤트
// 맨 바깥에서부터 이벤트가 발생하여 안쪽으로 전파함

// 이벤트 루프
// 동영상: 어쨌든 이벤트 루프는 무엇입니까? phillip Roberts JSConf EU