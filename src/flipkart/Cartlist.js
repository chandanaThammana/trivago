import React,{useContext} from 'react';
import Mapitems from './Mapitems';
const Cartlist=({decrementCounter,incrementCounter,deleteHandler,data})=>{
    console.log(data)
    return(
        <>
           <h4 className="pt-4">My Cart<hr></hr> <br></br></h4>
        {data.map((data,index)=>(
            <>
                <Mapitems
                data={data}
                decrementCounter={decrementCounter} 
                index={index} 
                incrementCounter={incrementCounter}
                deleteHandler={deleteHandler}></Mapitems></>
            ))}
        </>
    )
}
export default Cartlist;