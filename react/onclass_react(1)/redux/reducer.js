
import * as Actions from './action-type.js';

const InitializeState = { count: 0}; 

export function reducer(state = InitializeState, action){
    switch(action.type){
        case Actions.INCREASE:
            return {...state, count: state.count+1};

        case Actions.DECREASE:
            return {...state, count: state.count-1};

        case Actions.RESET:
            return {...state, count: 0};

        default:
            return {...state}
    }
   
}