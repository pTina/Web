import './App.css';
import { useState } from "react";
import Item from "./components/Item"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';

function App() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [disable, setDisable] = useState(true);

    const handleInputChange = (e)=>{
        const value = e.target.value;
        setInput(value);
        value !== "" ? setDisable(false) : setDisable(true);
    }

    const handleClick = (e)=>{ 
        const data_id = moment().format('YYYY-MM-DD_HH-mm-ss');
        const userInput = document.querySelector('.userInput').value;
        const newData = {
            id: `item_${data_id}`,
            inputTxt : userInput,
            memoTxt: ""
        };
        setData([...data, newData]);

        reset();
    }

    function reset(){
        document.querySelector('.user-input-wrap').children[0].value = "";
        setInput("");
        setDisable(true);
    }

    const onChnageData = (e, idx)=>{
        const target = e.target.className.split(' ')[0];
        const tempData = data[idx];
        const newData = {
            id: tempData.id,
            inputTxt: target === 'userTxt' ? e.target.value : tempData.inputTxt,
            memoTxt: target === 'userMemo' ? e.target.value : tempData.memoTxt
        }

        data[idx] = newData;
        setData(data);
    }

    const handleClickDelete = (id)=>{
        setData(data.filter((item) => item.id !== id));
    }

    const itmes = data.map((item, idx)=>{
        return(
            <Item 
                id={`${item.id}`} 
                inputTxt={item.inputTxt} 
                memoTxt={item.memoTxt} 
                onBlur={onChnageData} 
                idx={idx}
                handleClickDelete = {handleClickDelete}
            />
        )
    })


    return (
        <div className="App">
            <header><h1>to do list</h1></header>
            <div className='user-input-wrap'>
                <input type="text" onChange={handleInputChange} className="userInput" defaultValue={input}></input>
                <button className="btn-add" onClick={handleClick} disabled={disable}>
                    <FontAwesomeIcon icon={faCirclePlus} size="lg" style={{ color: "#F2620F", }} />
                </button>
            </div>
            <ul className="item-wrap">
                {itmes}
            </ul>
           
        </div>
    );
}

export default App;
