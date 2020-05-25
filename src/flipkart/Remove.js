import React,{useContext} from 'react';
import {FlipkartContext } from '../context/FlipkartContext';
const Remove = ({index}) => {
    const {deleteHandler}=useContext(FlipkartContext)
    return (
        <>
            <button type="submit" onClick={() =>deleteHandler(index)} className="btn btn-success">Remove</button>
                                     </>
    )
}
export default Remove;