import React from 'react';
import {TextInput} from 'react-materialize';

const TextInputSection =(props)=> {
    const {placeholder, type, label, handleChange, name, value, handleUp} = props;
    return (
        <div>
            <label>{label}</label>
            <TextInput 
                placeholder={placeholder}
                type={type}
                inputClassName="browser-default"
                name={name}
                value={value}
                onChange={handleChange}
                onKeyUp={handleUp}
            />
        </div>
    )
}


export default TextInputSection
