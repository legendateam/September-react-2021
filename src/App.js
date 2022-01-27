import {useReducer} from "react";

import "./App.css";

const reducer = (state,action) => {
    switch (action.type) {
        case 'INCREMENT_A':
            return {...state, count1: state.count1 + action.payload}
        case 'DECREMENT_A' :
            return {...state, count1: state.count1 - action.payload}
        case 'RESET_A':
            return {...state, count1: action.payload}
        case 'INCREMENT_B':
            return {...state, count2: state.count2 + action.payload}
        case 'DECREMENT_B':
            return {...state, count2: state.count2 - action.payload}
        case 'RESET_B':
            return {...state, count2: action.payload}
        case 'INCREMENT_C':
            return {...state, count3: state.count3 + action.payload}
        case 'DECREMENT_C':
            return {...state, count3: state.count3 - action.payload}
        case 'RESET_C':
            return {...state, count3: action.payload}
        default :
            return {...state}
    }
}

function App() {
    const [state,dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});
        return (
            <div>
                <div>{state.count1}</div>
                <button onClick={()=> dispatch({type: 'INCREMENT_A', payload: 1})}>inc</button>
                <button onClick={()=> dispatch({type: 'DECREMENT_A', payload: 1})}>dec</button>
                <button onClick={()=> dispatch({type: 'RESET_A', payload: 0})}>reset</button>

                <div>{state.count2}</div>
                <button onClick={()=> dispatch({type: 'INCREMENT_B', payload: 1})}>inc</button>
                <button onClick={()=> dispatch({type: 'DECREMENT_B', payload: 1})}>dec</button>
                <button onClick={()=> dispatch({type: 'RESET_B', payload: 0})}>reset</button>

                <div>{state.count3}</div>
                <button onClick={()=> dispatch({type: 'INCREMENT_C', payload: 1})}>inc</button>
                <button onClick={()=> dispatch({type: 'DECREMENT_C', payload: 1})}>dec</button>
                <button onClick={()=> dispatch({type: 'RESET_C', payload: 0})}>reset</button>
            </div>
        );
}

export default App;

