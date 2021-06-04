import App from "./App";
export const addItemRedux=(inp_spisok)=>
{
      return {
          type:'add',
          text:inp_spisok
      }
}
export const deleteItemRedux=(index)=>
{
        return {type:"delete",
        payload:index}
}