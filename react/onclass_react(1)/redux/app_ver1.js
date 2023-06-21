// Part3 - 03. 구독 발행 모델

function createStore(){
    let state;
    let handlers = [];

    function send(action){
        state = worker(state, action);
        handlers.forEach(handler => handler());
    }

    function subscribe(handler){
        handlers.push(handler);
    }

    function getState(){
        return state;
    }

    return {
        send,
        getState,
        subscribe
    };
}

// 상태를 바꾸는 함수: worker
// 새로운 상태를 반환해야 한다. 
// = 입력으로 상태(객체)를 줄테니 deep copy해서 새로운 객체로 반환해라. 즉, 참조를 끊어라.
// 참조를 끊어야 side effect를 원천적으로 차단할 수 있기 때문에
function worker(state = { count: 0 }, action){
    switch(action.type){
        case 'increase':
            return {...state, count: state.count+1};

        default:
            return {...state}
    }
   
}


const store = createStore(worker);

store.subscribe(function(){
    console.log(store.getState());
})


store.send({ type: 'increase' });
store.send({ type: 'increase' });




// 컴포넌트가 여러개 있는 상태에서 어떤 상황에서 어떤 컴포넌트가 데이터를 바꿨는지 인지할 수 있어야 함
// 구독 발행 모델 = Pub and Subscribe (패턴)
// 어떤 함수를 줄테니(구독할 테니) 데이터가 바뀌면 그 함수를 호출해줘(바뀐 이벤트를 발행해줘)
// => subscribe() 함수 생성

// workder는 Action을 받아야 함 - 리덕스의 컨벤션
// action: 해야하는 일
// action의 구조적인 약속 - type(string) key를 반드시 포함

