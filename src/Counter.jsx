import React ,{useState} from 'react';

export default function Counter(){
    const [counter,setCounter] = useState(0)

    return(
        <>
        <h1>This is Counter</h1>
        {counter}

        <button onClick={handleIncrement} >+</button>
        <button onClick={handleDecrement} >-</button>
        </>
    )
    function handleIncrement(){
        setCounter(counter+1)
    }
    function handleDecrement(){
        if(counter>0){
            setCounter(counter-1)
        }else{
            alert('number is already zero')

        }
    }
}