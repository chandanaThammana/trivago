import React, { useState, useEffect } from 'react';
import Totalcost from './Totalcost';
import Cartlist from './Cartlist';
import Navbar from './Navbar';
const CartHooks=()=>{
          const[data,setData]=useState([])
          const [totalAmount,setTotalAmount]=useState(0)
          useEffect(()=>{
            fetch('https://jsonblob.com/api/20b54850-9513-11ea-9b86-2f4e2abf7e53')
            .then(response => response.json())
            .then(json => {
                    setData([...json])

                        
            });
            },[]);
            useEffect((prevState)=>{
                const totalCost=data.map(product=>parseInt(product.c)*product.d)
                setTotalAmount(totalCost.reduce((acc,amount)=>acc+amount,0))
            },[data]);
         const incrementCounter=(index)=> {
              data[index].d++
              setData([...data] )
            }
            const decrementCounter=(index) =>{
            data[index].d--
            setData( [...data] )
        }
            const deleteHandler=(index)=> {
            data.splice(index, 1)
            setData([ ...data])
            }
        return(
            <>
            <Navbar></Navbar>
            <div className=" row">
                <div className="col-8 float-left shadow ml-5 mt-5" >
                    <Cartlist data={data}
                    incrementCounter={incrementCounter}
                    decrementCounter={decrementCounter}
                    deleteHandler={deleteHandler}
                    ></Cartlist>
                                </div>
        <div className="col-3 float-left  shadow ml-4 mt-5 pt-4" style={{height:"230px"}}>
                    <Totalcost totalAmount={totalAmount}></Totalcost>
                    </div>
                    </div>
        
        </>

    )
}
export default CartHooks;