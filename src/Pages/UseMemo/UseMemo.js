import React from 'react';
import { useParams } from 'react-router-dom';
import { getUseMemo } from './UseMemoData';

const UseMemo = () => {
    const params = useParams();
    const usememo = getUseMemo(parseInt(params.usememoId))
    return (
        <div>
            {usememo.element}
        </div>
    );
};

export default UseMemo;