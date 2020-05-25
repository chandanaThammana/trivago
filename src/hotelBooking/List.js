import React from 'react';
const List=({data})=>{
    return(
        <>
           <h4 className="pt-4">My Cart<hr></hr> <br></br></h4>
        
     <div className="row">
         <div className="col-5 m-2">
             <img src={data.image} width="200px" height="240px" />
     </div>
    <div className="col-5">
        <h3>{data.name}</h3>
            <p>{data.place}</p>
            <p>{data.room}</p>
            <p>{data.cost}</p>
            </div>
        </div>
        </>
    )
}
export default List;