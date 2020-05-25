import React from 'react';
import Update from './Update';
import Remove from './Remove';
const Mapitems=({data,index,decrementCounter,incrementCounter})=>{
    return(<>
     <div className="row">
         <div className="col-5 m-2">
             <img src={data.a} width="200px" height="240px" />
                <div>
                <Update  
                data={data}
                index={index} 
            ></Update>
        </div>

     </div>
    <div className="col-5">
        <p>{data.b}</p>
            <p>${data.c}</p>
            <Remove index={index} ></Remove>
            </div>
        </div>
    </>
    )
}
export default Mapitems; 