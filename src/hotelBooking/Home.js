import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <>
            <div className="container">
                <div class="body-image">
                    <img className="mt-5"src="https://thumbs-prod.si-cdn.com/XAB72LHHpsL44VW9jUwNi7W6rVw=/1072x500/https://public-media.smithsonianjourneys.org/filer/8a/c4/8ac4f162-6c6b-4583-87a9-0a72060fd0cc/hng_budapest_danubeparl_ist_65080443_xlarge.jpg" width="100%" height="50%">
                    </img>
                    <div className="centered">
                       <h2 className="text-white"><b>TAKE YOUR VACAT!ON NOW</b></h2>
                    </div>
                </div><br></br>
                <div class="  services">
                    <div class="text-center"><h2>SERVICES</h2></div><br /><br />
                    <div class="row">
                        <div className="col-3 mr-2">
                            <div className="card w-100 h-50 ">
                                <img className="card-img" src="https://www.rebelautomatedshuttles.com/wp-content/uploads/sites/2/iStock-910736210-1280x660.jpg" alt="" ></img>
                                
                                  <h3 className="card-title text-center pt-3">Shuttles</h3>  
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card w-100 h-50" >
                                <img className="card-img-top  " src="https://www.ecohome.net/media/articles/images/f2/9c/f29c921116e7b42501639bda77885d5051a5c8f1/thumbs/dOp8pM6ckCwo_1200x500_ZBprRkQU.jpg" alt="" height="130px" ></img>
                                
                                  <h3 className="card-title text-center pt-3">Swimming Pool</h3>  
                            </div>
                        </div>
                        <div className="col">
                            <div className="card w-100 h-50 ">
                                <img className="card-img-top" src="https://ae01.alicdn.com/kf/HTB1uCSUGnJYBeNjy1zeq6yhzVXaG/Laeacco-Wooden-Board-Delicious-Foods-Baby-Portrait-Photography-Backgrounds-Customized-Photographic-Backdrops-For-Photo-Studio.jpg" alt="" height="130px" ></img>
                                
                                  <h3 className="card-title text-center pt-3">Food</h3>
                            </div>
                            </div>
                            <div className="col">
                            <div className="card w-100 h-50">
                                <img className="card-img-top" src="https://cultmtl.com/wp-content/uploads/2018/07/mocktails.jpg" alt="" height="130px" ></img>
                                  <h3 className="card-title text-center pt-3">Coktails</h3>
                        </div>
                        </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Home;