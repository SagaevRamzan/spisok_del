import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addItemRedux, deleteItemRedux} from "./action";


function App() {


    const spisok_del=useSelector(state=>state)
    const dispatch=useDispatch()

    const [inp_spisok,setInp_spisok]=useState("")







const handleChenge_spisok_del=(e)=>{
    setInp_spisok(e.target.value);
}
    function handleAddItem(){
        dispatch(addItemRedux(inp_spisok))
    setInp_spisok("")
    }
    function handleDeletItem(index){
        dispatch(deleteItemRedux(index))
    }


  return (
    <div className="app">
        <div className="apphead">Список дел</div>
        <div className="row_box">
              <input type="text" value={inp_spisok} onChange={handleChenge_spisok_del}></input>
              <button className="but" onClick={handleAddItem}>Добавить</button>
        </div>

            {spisok_del.map((spisok_d,index)=> {
                if(index===0){return false}
                return (
                <div className="row_box">
                    <div className="col_1">{spisok_del[index].label}</div>
                    <div className="col_2">{spisok_del[index].opisanie}</div>
                    <button className="btn btn-outline-danger" onClick={()=>handleDeletItem(index)}>
                        ❌
                    </button>
                </div>

                )

            })
            }

    </div>
  );
}

export default App;
