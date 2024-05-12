import { useState } from "react"
import "../assets/paragraph.css"

export default function QuestionFour(){

    const [length, setLength] = useState("");

    function changeLength(event){
        setLength(event.target.value);
    }

    function generate(){
        let base =  `Lorem ipsum dolor sit amet, consectetur 
                       adipiscing elit, sed do eiusmod tempor incididunt ut 
                       labore et dolore magna aliqua. Ut enim ad minim veniam,
                       quis nostrud exercitation ullamco laboris nisi ut aliquip
                       ex ea commodo consequat. Duis aute irure dolor in 
                       reprehenderit in voluptate velit esse cillum dolore
                       eu fugiat nulla pariatur. Excepteur sint occaecat
                       cupidatat non proident, sunt in culpa qui officia
                       deserunt mollit anim id est laborum.`

        base = base.split(" ");
        base = base.filter((item)=> item.length>0);
        console.log(base);
        let para = "";
        for(let i = 0; i < parseInt(length); i++){
            para += base[Math.floor(base.length * Math.random())] + " ";
        }
        
        document.getElementById("paragraph").innerHTML = para;
    }

    return (
        <>
            <div id="paragen">
                <h1>Para Generator</h1>
                <div id="input-fields">
                    <input type="text" placeholder="Enter Number of Words" onChange={changeLength}/>
                    <button onClick={generate}>Generate</button>
                </div>
                <p id="paragraph">This is the paragraph that is to be generated</p>
            </div>
        </>
    )
}