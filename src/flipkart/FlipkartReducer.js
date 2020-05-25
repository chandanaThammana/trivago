import React,{useContext} from 'react';
import Totalcost from './Totalcost';
import Cartlist from './Cartlist';
import Navbar from './Navbar';
import { FlipkartContext } from '../context/FlipkartContext'
const FlipkartReducer=()=>{
    const{
        state,
    incrementCounter,
    decrementCounter,
    deleteHandler
    }=useContext(FlipkartContext);
         
        return(
            <>
            <Navbar></Navbar>
            <div className=" row">
                <div className="col-8 float-left shadow ml-5 mt-5" >
                    <Cartlist data={state.data}
                    ></Cartlist>
                                </div>
        <div className="col-3 float-left  shadow ml-4 mt-5 pt-4" style={{height:"230px"}}>
                    <Totalcost></Totalcost>
                    </div>
                    </div>
        
        </>

    )
}
export default FlipkartReducer;