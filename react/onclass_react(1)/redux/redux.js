

// Currying 기법으로 변경하기 전
// export function actionCreator(type, payload){
//     return {
//         type,
//         payload,
//     }
// }

// Curry 기법을 사용한 이유
// actionCreator는 type을 받고 다음 함수한테 payload를 줌
// actions에서 actionCreator를 사용할 때, -> export const increase = actionCreator(INCREASE);
// type만 넘기고, type을 갖고 있는 함수를 increase에 넣어두기 때문에 increase는 함수임
// 필요한 데이터를 action을 dispatch할 때마다 app.js에서 넣어줄 수 있음
export const actionCreator = type => payload => ({
    type,
    payload,
})

export function createStore(reducer){
    let state;
    let handlers = [];

    function dispatch(action){
        state = reducer(state, action);
        handlers.forEach(handler => handler());
    }

    function subscribe(handler){
        handlers.push(handler);
    }

    function getState(){
        return state;
    }

    return {
        dispatch,
        getState,
        subscribe
    };
}




