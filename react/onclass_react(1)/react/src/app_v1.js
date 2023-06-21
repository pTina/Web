/* @jsx createElement */

// createElement가 코드 상에서 쓰고 있지 않지만 반드시 포함 시켜 줘야 runtime 오류 발생하지 않음
// jsx가 createElement함수 호출 구문으로 바뀌어 있기 때문에
import {createDOM, createElement, render} from './react';

const vdom ={
    tag: 'p',
    props: {},
    children: [
        {
            tag: 'h1',
            props: {},
            children: [
                "React 만들기"
            ]
        },
        {
            tag: 'ul',
            props: {},
            children: [
                {
                    tag: 'li',
                    props: {
                        style: "color: red",
                    },
                    children: ['첫 번째']
                },
                {
                    tag: 'li',
                    props: {
                        style: "color: blue",
                    },
                    children: ['두 번째']
                },
                {
                    tag: 'li',
                    props: {
                        style: "color: green",
                    },
                    children: ['세 번째']
                },
            ]
        },
    ]
}


render(vdom, document.querySelector('#root'));




