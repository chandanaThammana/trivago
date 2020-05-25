import React, { useState, useEffect } from 'react'
const BookNow = () => {
    const [productsData, setProductsData] = useState([])
    useEffect(() => {
        fetch('https://jsonblob.com/api/6baa187d-9c1f-11ea-bc24-6b4d53fb1194').then(response => response.json()).then(json => {
            setProductsData([...json])
        })
    }, []);
    return (
     <>
        <div >                    
        <div class="row">
            <div class="col-8 float-left shadow  mt-2 " style={{height:"220px"}}>
                {productsData.map(( productsData) =>
                    <div className="row">
                        <div className="col-3 ">
                            <img style={{ height: '220px', width: '180px' }} src={productsData.img} />
                        </div>
                        <div className="col-6 mt-3 ml-5">
                            <h4>{productsData.name}</h4>
                                <div  className="pt-2">
                                     <h3>{productsData.hotelname}. </h3> 
                                        <h6 className="pt-2">{productsData.location}</h6>
                                        <h6 className="pt-2">{productsData.type}</h6>
                                </div>
                        </div>
                            <div className="col">    
                                <h4 className=" pr-2 pt-5">Rs.{productsData.cost}</h4>
                            </div>
                    </div>
                )
                }
            </div>
                <div className="col-3 float-left  shadow ml-4 mt-2 pt-4" style={{height:"220px"}}>
                    <h5>Payment Methods</h5><hr />
                    <label className="form-check-label" for="check1">
                         <input type="radio"  id="check1" name="option1" value="something"  />  Debit Card
                    </label><br />
                    <label className="form-check-label mt-3" for="check2">
                         <input type="radio"  id="check2" name="option2" value="something"  />  Credit Card
                    </label><br />
                    <button className="btn btn-info rounded-0 mt-2 float-right">Pay</button>
                </div>
            </div>
        </div>
    </>
 )
}
export default BookNow;