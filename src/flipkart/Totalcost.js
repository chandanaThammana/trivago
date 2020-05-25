import React,{useContext} from 'react';
import {FlipkartContext } from '../context/FlipkartContext';
const TotalAmount=()=>{
    const {state:{totalAmount}}=useContext(FlipkartContext)
    return(
        <div>
                    <h5>Price Details<hr /></h5>
                    <p>Delivery Fee <span className="float-right text-success">Free</span><hr /></p>
                    <p><h5>Total Amount <span className="float-right"> {totalAmount}</span></h5></p>
                </div>
    )
}
export default TotalAmount;