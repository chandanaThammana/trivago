import React from 'react';
const Map=({movies})=>{
    return(
        <>
        {movies.map((movies) =>(
            <>
            <hr></hr>
            <div class="row b text-danger">
            <div class="col-3">
                <div class="card ml-5 mr-5 mt-2">
            <img src={movies.Poster} class="card-img" alt="" width="150px" height="280px"/></div></div>
        <div class="col mt-5 ml-5 pt-5"><br></br>
            <h2>{movies.Title}</h2><br></br>
                <h5>Year:{movies.Year}</h5><br></br>
                <h5>Type:{movies.Type}</h5></div>
            <div class="col ml-5 mt-5"><br></br><br></br><br></br><br></br>
            <button class="btn btn-success mb-4"><i class="fa fa-eye mr-1"></i>Watch Now</button><br></br>
            <button class="btn btn-success"><i class="fa fa-download mr-1"></i>Download Now</button>
            </div>
            
            </div>
    
            </>
            
        ))}
        
        </>
    )
}
export default Map;