const hooks = [];
let currentComponent = 0;

export class Component{
    constructor(props){
        this.props = props;
    }
}

export function createDOM(node){
    if(typeof node == 'string'){
        return document.createTextNode(node);
    }
    const element = document.createElement(node.tag);

    Object.entries(node.props)
        .forEach(([name, value])=>element.setAttribute(name, value));

    node.children
        .map(createDOM)
        .forEach(element.appendChild.bind(element));
    
    return element;
}

function makeProps(props, children){
    return {
        ...props,
        children: children.length === 1 ? children[0]: children,
    };
}

function useState(initValue){
    let position  = currentComponent-1;
    if(!hooks[position]){
        hooks[position] = initValue;
    }

    const modifier = nextValue => {
        hooks[position] = nextValue;
    }

    return[hooks[position], modifier];
}

// ...children : 가변인자로 받음(배열로 들어가게 됨)
export function createElement(tag, props, ...children){
    props = props || {};

    if(typeof tag === 'function'){
        // Component를 상속받은 class인지 확인하여 클래스 여부 체크
        if(tag.prototype instanceof Component){
            const instance = new tag(makeProps(props, children));
            return instance.render();

        }

        hooks[currentComponent] = null;
        currentComponent++;

        if(children.length > 0){
            return tag(makeProps(props, children));

        }else{
            return tag(props);
        }

    }

    return { tag, props, children };
}

export function render(vdom, container){
    container.appendChild(createDOM(vdom));
}


// export const render = (function(){
//     // 기존 것을 클로저에 넣어둠
//     // 내부에서만 비교하려고
//     let prevDom = null;


//     return function(vdom, container){
//         // vdom: real DOM에 적용할 객체
//         if(prevDom === null){
//             prevDom = vdom;
//         }

//         // 기존게 있다면?
//         // diff
//         // 여기서 prevDom과 vdom의 객체 수준에서의 배교 수행 => 변경 사항만 업데이트된 새로운 객체를 만드는..
//         // createDOM이 아닌 updateDOM 함수 만들어서 처리하면 됨


//         container.appendChild(createDOM(vdom));
//     }
// })