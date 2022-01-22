import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/action';
import '../App.css';

function Redux() {
    const myState = useSelector((state) => state.changeNumber );
    const dispatch = useDispatch();
    return (
        <>
        <div className="container">
            <h1>Increment/Decrement counter</h1>
            <h4>using React and Redux</h4>

        <div className="quantity">
            <a className="quantity_minus" title="Decrement" onClick={ () => dispatch(decNumber()) }><span> - </span></a>
            <input name="quantity" type="text" className="quantity_input" value={myState}/>
            <a className="quantity_plus" title="Increment" onClick={ () => dispatch(incNumber()) }><span> + </span></a>
        </div>    
        </div>  
        </>
    )
}

export default Redux;
