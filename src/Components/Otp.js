import React, { useState } from 'react';

 export const Otp = () => {

    const [inputs, setInputs] = useState(new Array(4).fill(""));
    const [inputArr , setInputArr] = useState(inputs)
    console.log(inputArr);
    const handleInput = (event,index) =>{
        console.log(event.target.value);
        const val = event.target.value;

        if(!Number(val))
            return;

        const copyArray = [...inputArr];
        copyArray[index] = val
        setInputArr(copyArray)
    }

    return(
        <div className='container'>
            <h2>OTP Fields</h2>
            {inputs.map((curValue, index) =>{
                return <input maxLength="1" value={inputArr[index]} key={index} type='text' onChange={(event)=>handleInput(event,index)}/>
            })}
            
            <br/>
            <button>Verify OTP</button>
        </div>
    );
};

// export default Otp;   