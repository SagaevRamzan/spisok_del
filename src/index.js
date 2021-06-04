import React from 'react';
import ReactDOM from 'react-dom';
import './my_css.css';

import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from './App';
import star from "./star.svg"
const initialState=[{
    label: "",
    opisanie:""
}]

const reducer=(state=initialState,action)=>{

    switch (action.type){
        case 'add':

            return [...state,{label:(<><img className="star" src={star}/></>),opisanie:action.text}];
        case 'delete':
            return state.filter((item,index)=>{
                if(index===action.payload){
                    return false
                }
                return true
            })
    }
    return state

}
const store=createStore(reducer)
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
            <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
