import './Item.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCircle } from "@fortawesome/free-solid-svg-icons";

const Item = ({id, inputTxt, memoTxt, onBlur, idx, handleClickDelete}) => {
    const autoHeight = (e)=>{
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
    return(
        <li key={id} className="Item">
            <div className="chk-box">
                <label>
                    <input type="checkbox"></input>
                    <FontAwesomeIcon icon={faCircle} />
                </label>
                
            </div>
            <div className="ip-box">
                <div><input className="userTxt" type="text" defaultValue={inputTxt} onBlur={(e)=>{onBlur(e, idx)}}></input></div>
                <div><textarea rows="1" className="userMemo" placeholder="메모 추가" defaultValue={memoTxt} onBlur={(e)=>{onBlur(e, idx)}} onChange={autoHeight}></textarea></div>
            </div>
            <div className='btn-delete' onClick={()=>{handleClickDelete(id)}}>
                <FontAwesomeIcon icon={faTrash} size="lg" style={{ color: "#F2620F", }} />
            </div>
        </li>
    )
}
export default Item;