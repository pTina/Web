// Part3 - 03. 구독 발행 모델
import { createStore, actionCreator } from './redux.js';
import { reducer } from './reducer.js';
import * as Actions from './actions.js';

const store = createStore(reducer);

store.subscribe(function(){
    console.log(store.getState());
})


store.dispatch(Actions.increase());
store.dispatch(Actions.increase());
store.dispatch(Actions.increase());
store.dispatch(Actions.increase());
store.dispatch(Actions.increase());
store.dispatch(Actions.decrease());
store.dispatch(Actions.reset());




