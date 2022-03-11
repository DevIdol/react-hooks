import React from 'react';
import { useParams } from 'react-router-dom';
import { getUseCallback } from './UseCallbackData';
const UseCallback = () => {
    const params = useParams()
    const usecallback = getUseCallback(parseInt(params.usecallbackId))
    return (
        <div>
            {usecallback.element}
        </div>
    );
};

export default UseCallback;