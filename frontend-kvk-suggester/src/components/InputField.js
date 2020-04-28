import React, { useState, useEffect } from 'react';
import { Input } from '../styled/Shared';
import { useDebounce } from 'use-debounce';
import { useCompanyFinderDispatch } from './CompanyFinderContext'

export default function InputField() {
    const [text, setText] = useState('');
    const [value] = useDebounce(text, 1000);

    const dispatch = useCompanyFinderDispatch();

    useEffect(() => {
        document.title = `${value}`;
        dispatch({ type: 'changeString', value: value })
    }, [value, dispatch]);

    return (
        <div>
            <Input
                defaultValue={''}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            ></Input>
            <p>Actual value: {text}</p>
            <p>Debounce value: {value}</p>
        </div>
    );
}