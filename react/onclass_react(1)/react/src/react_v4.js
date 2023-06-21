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

// ...children : 가변인자로 받음(배열로 들어가게 됨)
export function createElement(tag, props, ...children){
    props = props || {};

    if(typeof tag === 'function'){
        // Component를 상속받은 class인지 확인하여 클래스 여부 체크
        if(tag.prototype instanceof Component){
            const instance = new tag(makeProps(props, children));
            return instance.render();

        }else{
            if(children.length > 0){
                return tag(makeProps(props, children));

            }else{
                return tag(props);
            }
        }

        
        
    }else{
        return { tag, props, children };
    }
}

export function render(vdom, container){
    container.appendChild(createDOM(vdom));
}