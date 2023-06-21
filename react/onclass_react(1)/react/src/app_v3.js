/* @jsx createElement */

// createElement가 코드 상에서 쓰고 있지 않지만 반드시 포함 시켜 줘야 runtime 오류 발생하지 않음
// jsx가 createElement함수 호출 구문으로 바뀌어 있기 때문에
import {createDOM, createElement, render} from './react';


function Title(props){
    return <h1>{ props.children }</h1>;
}

function Item(props){
    console.log(props);
    return <li style={`color: ${props.color}`}>{props.children}</li>;
}

const App = () => <p>
    <Title>React 만들기입니다.</Title>
    <ul>
        <Item color="red">첫 번째 아이템</Item>
        <Item color="blue">두 번째 아이템</Item>
        <Item color="green">세 번째 아이템</Item>
    </ul>
</p>

render(<App />, document.querySelector('#root'));




