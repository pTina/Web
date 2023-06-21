/* @jsx createElement */

// createElement가 코드 상에서 쓰고 있지 않지만 반드시 포함 시켜 줘야 runtime 오류 발생하지 않음
// jsx가 createElement함수 호출 구문으로 바뀌어 있기 때문에
import {createDOM, createElement, render} from './react';


const vdom = createElement('p', {}, 
    createElement('h1', {}, 'React 만들기'),
    createElement('ul', {}, 
        createElement('li', {style: "color: red",}, '첫 번째 아이템'),
        createElement('li', {style: "color: blue",}, '두 번째 아이템'),
        createElement('li', {style: "color: green",}, '세 번째 아이템'),
    )
);

render(vdom, document.querySelector('#root'));




