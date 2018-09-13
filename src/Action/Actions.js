import * as ActionTypes from './ActionTypes';
import AppDispatcher from '../Dipatcher/AppDispatcher';
// @counterCation     "First/Second/Third"


//Action接收View用户事件,发送给Dsipatcher接收
export const increment = (counterCaption)=>{
  AppDispatcher.dispatch({
    type:ActionTypes.INCREMENT,
    counterCaption:counterCaption
  });
};

//Action接收View用户事件,发送给Dsipatcher接收
export const decrement = (counterCaption)=>{
  AppDispatcher.dispatch({
    type:ActionTypes.DECREMENT,
    counterCaption:counterCaption
  });
};