import React, {useReducer} from 'react';

import './App.css'

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_DOG':
            return {...state, dog: action.payload}
        case 'ADD_CAT':
            return {...state, cat: action.payload}
        case 'SAVE_DOG':
            return {...state, arrDog: action.payload}
        case 'SAVE_CAT':
            return {...state, arrCat: action.payload}
        case 'DELETE_CAT':
            return {...state, delete: state.arrCat.splice(action.payload, 1)}
        case 'DELETE_DOG':
            return {...state, delete: state.arrDog.splice(action.payload, 1)}
        default :
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {dog: "", cat: "", arrDog: [], arrCat: [], delete: []});


    const deleteDog = i => {
        dispatch({type: 'DELETE_DOG', payload: i})
    }

    const deleteCat = i => {
        dispatch({type: 'DELETE_CAT', payload: i})
    }

    const submitDog = e => {
        e.preventDefault();
        dispatch({type:'SAVE_DOG', payload: [...state.arrDog, {dog: e.target.dog.value}] })
    }
    const submitCat = e => {
        e.preventDefault();
        dispatch({type:'SAVE_CAT', payload: [...state.arrCat,{cat: e.target.cat.value}] })
    }

    return (
        <div>
            <div className={'form_animals'}>
                <form onSubmit={submitDog}>
                    <label>Add Dog: <input type="text" name={'dog'} value={state.dog} onChange={(e)=> dispatch({type: 'ADD_DOG', payload:e.target.value})}/></label>
                    <button>save</button>
                </form>
                <form onSubmit={submitCat}>
                    <label>Add Cat: <input type="text" name={'cat'} value={state.cat} onChange={(e)=> dispatch({type:'ADD_CAT', payload: e.target.value})}/></label>
                    <button>save</button>
                </form>
            </div>
            <hr/>

            <div className={'main_content'}>
                <div>
                    {state.arrDog.map((dog,i) => <div key={i}>
                        {dog.dog} <button onClick={()=> deleteDog(i)}>DELETE</button>
                    </div>)}
                </div>

                <div>
                    {state.arrCat.map((cat,i) => <div key={i}>
                        {cat.cat} <button onClick={()=> deleteCat(i)}>DELETE</button>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default App;
