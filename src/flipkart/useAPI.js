import React,{useEffect,useReducer} from 'react';
import Reducer from'./Reducer';
const useAPI=() =>{
            const INITIAL_STATE = {
        data: [],
        totalAmount: 0
    }
    const [state,dispatch]=useReducer(Reducer,INITIAL_STATE)
    useEffect(()=>{
      fetch('https://jsonblob.com/api/20b54850-9513-11ea-9b86-2f4e2abf7e53')
      .then(response => response.json())
      .then(json => {
          dispatch({type:'API_SUCCESS',payload:{data:[...json]}})

                  
      });
      },[]);
      useEffect((prevState)=>{
          dispatch({type:'SET_TOTAL_AMOUNT'})
      },[state.data]);
   const incrementCounter=(index)=> {
        dispatch({type:'INC_COUNTER',payload:{index}})
      }
      const decrementCounter=(index)=> {
          dispatch({type:'DEC_COUNTER',payload:{index}})
        }
        const deleteHandler=(index)=> {
          dispatch({type:'DELETE_HANDLER',payload:{index}})
        }
  
      
    

return{
    state,
    incrementCounter,
    decrementCounter,
    deleteHandler

}
    

}

export default useAPI
