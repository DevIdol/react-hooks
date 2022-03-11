import React from 'react';
import { useParams } from 'react-router-dom';
import { getCustomHook } from './CustomHookData';

const CustomHook = () => {
    const params = useParams()
    const customhook = getCustomHook(parseInt(params.customhookId))
    return (
        <div>
            {customhook.element}
        </div>
    );
};

export default CustomHook;