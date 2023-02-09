import { useState } from "react";

const InputBox = (props)=>{
    const [inputText, setInputText] = useState('');
    const handleChange = (event)=>{
        const newValue = event.target.value;
        setInputText(newValue);
    }
    return (
        <div className="form">
        <input type="text" onChange={handleChange} value={inputText}></input>    
        <button type="submit" className="btn btn-primary" onClick={()=>{
            props.onAdd(inputText);
            setInputText("");
        }}>
            <span>Send</span>
            </button>
        </div>        
    )
}

export default InputBox;