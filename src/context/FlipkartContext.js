import React, {createContext} from 'react';
import useAPI from '../flipkart/useAPI';
export const FlipkartContext=createContext();
export const FlipkartProvider=props=>{

    return(
    
        <FlipkartContext.Provider value={{...useAPI()}}>
            {props.children}
        </FlipkartContext.Provider>
    
    )
}