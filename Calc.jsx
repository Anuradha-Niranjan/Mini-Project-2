import React,{useState} from "react";
import "./Calculator.css";

function Calc(){

    const [num1,setNum1] = useState("");
    const [num2,setNum2] = useState("");
    const [oper,setOper] = useState("Select Operator");
    const [result,setResult] = useState(null);

    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    let output;
    const getResult = () => {
        switch(oper) {
            case "+":
                output =  n1+n2;
            break;
            case "-":
                output = n1 * n2;
            break;
            case "-":
                output = n1 / n2;
            break;
            case "-":
                output = n1 % n2;
            break;
            default:
                alert("Invalid Operator");
              break;    
        }
        setResult(`Answer is ${output}`);
    };



    return(
        <div className="Cal">
            <h1>SIMPLE CALCULATOR</h1>

            <label htmlFor="num1">Num1</label>
            <input type="number" id="num1" placeholder="Enter First Number" value={num1} onChange={(e) => setNum1(e.target.value)}/>

            <label htmlFor="operator">select Operation</label>
            <select id="operator" value={oper} onChange={(e) => setOper(e.target.value)}>
                <option value="">Select Operator</option>
                <option value="+">Addition</option>
                <option value="*">Multiply</option>
                <option value="-">Subtract</option>
                <option value="/">Divide</option>
                <option value="%">Remainder</option>
            </select>

            <label htmlFor="num2">Num2 :</label>
            <input type="number" id="num2" placeholder="Enter Second Number" value={num2} onChange={(e) => setNum2(e.target.value)}/>

            <button onClick={getResult}>Result</button>
            <p style={{color:"red", fontSize:"20px", textAlign:"center", fontWeight:"bold"}}>{result}</p>
        </div>

    )
}

export default Calc;