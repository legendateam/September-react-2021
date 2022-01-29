import React, {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INPUT":
            return {...state, [action.payload.target.name] : action.payload.target.value}
        case "SAVE_CAT":
            return {...state, saveCat: action.payload.target.cat.value}
        case "SAVE_DOG":
            return {...state, saveDog: action.payload.target.dog.value}
        case "DELETE_DOG" :
            return {...state,  dog: "", saveDog: ""}
        case "DELETE_CAT" :
            return  {...state, cat: "", saveCat: ""}
        case "DOGECOIN":
            return {...state, arr: [...state.arr,{[action.payload.target.dog.value]: action.payload.target.dog.value}]}
        default:
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {dog: "", cat: "", saveDog: "",saveCat: "", arr: []});

    const onSendDog = e => {
        e.preventDefault();
        dispatch({type: "SAVE_DOG", payload: e})
        dispatch({type: "DOGECOIN", payload: e})
        console.log(state.arr);
    }
    const onSendCat = e => {
        e.preventDefault();
        dispatch({type: "SAVE_CAT", payload: e})
    }
    return (
        <div>
            <form onSubmit={onSendDog}>
                <label>add dog<input type="text" name="dog" value={state.dog} onChange={e => dispatch({type: "INPUT", payload: e})}/></label>
                <button>save</button>
            </form>
            <form onSubmit={onSendCat}>
                <label>add cat<input type="text" name="cat" value={state.cat} onChange={e => dispatch({type: "INPUT", payload: e})}/></label>
                <button>save</button>
            </form>
            <hr/>
            <div>
                {!!state.arr.length && state.arr.map((ar, i) => <div key={ar+i}>{ar}<button onClick={() => dispatch({type: "DELETE_DOG"})}>delete</button></div>)}
                {state.saveCat && <div>{state.saveCat} <button onClick={() => dispatch({type: "DELETE_CAT", payload: ""})}>delete</button></div>}
            </div>
        </div>
    );
};

export default App;

