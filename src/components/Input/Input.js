import React from 'react';
import {useDispatch} from "react-redux";

import './Input.css'
import {checkedBox, deleteInput} from "../../store/input.slice";
import {useForm} from "react-hook-form";

const Input = ({input: {id, todo, status}}, index) => {
    const {register,handleSubmit,watch} = useForm();

    const dispatch = useDispatch();

    watch(e => dispatch(checkedBox({id})))

    const onDelete = () => {
        dispatch(deleteInput({index}))
    }

    const active = 'active';
    const disable = 'disable'

    return (
        <div className={'newData__input-child'}>
            <form onSubmit={handleSubmit(onDelete)}>
                <input type="checkbox" {...register('checked')}/>
                {/*{<h2>{todo}</h2>} css version */}

                {/*{status && <h2><s>{todo}</s></h2>}*/}
                {/*{!status && <h2>{todo}</h2>}*/}

                <h2 className={status? active : disable}>{todo}</h2>
                <button>delete</button>
            </form>
        </div>
    );
};

export default Input;