import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import BookNow from './BookNow';
const HotelDetails = () => {
    const [hotelData, setHotelData] = useState([])
    useEffect(() => {
        fetch('https://jsonblob.com/api/f8a0a148-9cbd-11ea-9a4c-bfa52a220f04').then(response => response.json()).then(json => {
            setHotelData([...json])
        })
    }, []);
    return (
        <>
            <div class="container">
                <br></br>
                <div class="input-group mb-3 mt-5">
                    <input type="text" class="form-control border border-dark rounded-pill" placeholder="Enter a hotel name or destination"></input>
                    <div class="Input-group-append">
                        <button class="btn btn-outline-secondary rounded-pill" type="button">Search</button>
                    </div>
                </div>
                <div>
                {hotelData.map((hotelData) =>
                <>
                    <div class=" mb-4 mt-3 shadow rounded-0" style={{ width: "100%",height:"200px" }}>
                        <div class="row ">
                            <div class="col">
                                    <img src={hotelData.img} class="card-img rounded-0" alt="..." height="200px"></img>
                                </div>
                                <div class="col">
                                    <div>
                                     <h4 >{hotelData.hotelname}</h4>
                                      <h6><span className="material-icons text-info">
                                            location_on</span>{hotelData.distance},{hotelData.location}</h6>
                                        <span class="material-icons text-success ">
                                            thumb_up</span><b >{hotelData.ratings}</b>
                                     <h6 class="pt-3">{hotelData.location}</h6>
                                    </div>
                                </div>
                                <div class="col">
                                 <div class="float-right mr-5 mt-5"><span><h5>{hotelData.cost}</h5></span>
                                    <h6>{hotelData.type}</h6>
                                 </div>
                                </div>
                            </div>
                        </div>
                         <Router>
                         <Link className="nav-link-md text-white btn-success p-2 mt-3 mb-5 text-center" style={{marginLeft:"990px"}} to="/BookNow">Book Now</Link>
                           <Route path="/BookNow" exact strict component={BookNow}></Route> 
                         </Router></>
                    )
                    }
                </div>
            </div>
            <br />
        </>
    )
}
export default HotelDetails;