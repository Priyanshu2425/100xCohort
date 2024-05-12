import "../assets/two.css"

export default function QuestionTwo(){

    const screen = document.getElementById("screen");
    function changeColor(event){
        const color = event.target.innerHTML.toLowerCase();
        screen.style.backgroundColor = color;
    }

    return (
        <>  
            <div id="screen">
                <div id="palette">
                    <div onClick={changeColor} style={{backgroundColor: "violet"}}>Violet</div>
                    <div onClick={changeColor} style={{backgroundColor: "indigo"}}>Indigo</div>
                    <div onClick={changeColor} style={{backgroundColor: "blue"}}>Blue</div>
                    <div onClick={changeColor} style={{backgroundColor: "green"}}>Green</div>
                    <div onClick={changeColor} style={{backgroundColor: "yellow"}}>Yellow</div>
                    <div onClick={changeColor} style={{backgroundColor: "orange"}}>Orange</div>
                    <div onClick={changeColor} style={{backgroundColor: "red"}}>Red</div>
                </div>
            </div>
            
        </>
    )
}