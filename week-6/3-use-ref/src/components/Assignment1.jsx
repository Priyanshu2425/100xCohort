import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. 
// When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    useEffect(() => {

    }, []);

    const handleButtonClick = () => {
        const button = useRef(inputElement);
        console.log(button);
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" ref={inputElement} />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
