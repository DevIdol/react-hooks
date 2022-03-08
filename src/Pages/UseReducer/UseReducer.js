import React from 'react';
import { useParams } from 'react-router-dom';
import { getUseReducer } from './UseReducerData';

const UseReducer = () => {
    const params = useParams();
    const usereducer = getUseReducer(parseInt(params.usereducerId))
    return (
        <div>
            {usereducer.element}
        </div>
    );
};

export default UseReducer;