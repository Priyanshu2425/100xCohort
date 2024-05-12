import { useState, useRef, useEffect } from "react"
import "../assets/login.css"

const server_otp = [2,4,1,1];
export default function QuestionSix(){

    const [number, setNumber] = useState();
    
    return (
        <>
            <div id="login-screen">
                {number? <OTP/> : <Number setNum={setNumber}/>}
            </div>
        </>
    )
}

function Number(props){

    const [message, setMessage] = useState();
    const [number, setNumber] = useState();

    function changeNum(event){
        let val = event.target.value.slice(1);//3
        setNumber(event.target.value)
    }

    function submitNumber(){
        if(Math.floor(number/1000000000)>0){
            props.setNum(number);
        }else{
            setMessage("Invalid Number");
        }
    }

    return (
        <>  
            <div id="number-input">
                <div> {message ? message : ""}</div>
                <p>Login via OTP</p>
                <div>
                    <input type="number" placeholder="Enter mobile no." onChange={changeNum}/>
                    <button onClick={submitNumber}>Submit</button>
                </div>
            </div>
        </>
    )
}

function OTP(){

    const [message, setMessage] = useState("");
    const [otp, setOTP] = useState(["", "", "", ""]);

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();

    function enterOTP(event){
        console.log([...otp]);
        const place = event.target.id;
        let newOTP = [...otp];
        let toPUT = event.target.value.slice(event.target.value.length-1);
        
        if(place === "one"){
            newOTP[0] = toPUT;
        }

        if(place === "two") {
            newOTP[1] = toPUT;
        }

        if(place === "three") {
            newOTP[2] = toPUT;
        }

        if(place === "four") {
            newOTP[3] = toPUT;
        }
        
        
        setOTP(newOTP);
        console.log(otp);
        // console.log(otp);
    }
    
    function submitOTP(event){
        let validOTP = true;
        otp.forEach((num)=>{
            if(num.length === 0){
                validOTP = false;
            } 
        })

        if(validOTP) {
            let finalOTP = otp.map((digit)=>{
                return parseInt(digit);
            })

            console.log(finalOTP);
            let LoggedIn = true;
            for(let i = 0; i < 4; i++){
                if(finalOTP[i] != server_otp[i]){
                    LoggedIn = false;
                }
            }

            LoggedIn ? console.log("Logged In") : console.log("Invalid OTP");
        }
    }

    useEffect(()=>{
        console.log("re-render");
    }, [])
    return (
        <>
            <div id="number-input">
                <div> {message ? message : ""}</div>
                <p>Login via OTP</p>

                <div>
                    <div id="otp">
                        <input type="number" id="one" onChange={enterOTP} value={otp[0]}/>
                        <input type="number" id="two" onChange={enterOTP}  value={otp[1]}/>
                        <input type="number" id="three" onChange={enterOTP} value={otp[2]}/>
                        <input type="number" id="four" onChange={enterOTP} value={otp[3]}/>
                    </div>
                    <button onClick={submitOTP}>Login</button>
                </div>
            </div>
        </>
    )
}