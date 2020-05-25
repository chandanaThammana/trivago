import React,{useContext} from 'react';

import {FlipkartContext } from '../context/FlipkartContext';

const Update = ({ index,data}) => {
    const {decrementCounter, incrementCounter}=useContext(FlipkartContext);
    return (
      <>
      {!!data.d && (<button onClick={() =>decrementCounter(index)} className="btn-sm rounded-0 btn-success m-2">-</button>
          )}<span className="badge badge-info rounded-0">{data.d}</span>
          <button onClick={() =>incrementCounter(index)} className="btn-sm rounded-0 btn-success m-2">+</button>
      </>
    )
}
    export default Update;