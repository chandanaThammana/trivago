import React  from 'react';
import  './App.css';
import Home from './hotelBooking/Home';
import Login from './hotelBooking/Login';
import SignUP from './hotelBooking/SignUP';
import HotelDetails from './hotelBooking/HotelDetails';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const trivago =() =>
{
  return(<>
  <br/><br />
  <div>
    <img className="mt-2" src="https://i.pinimg.com/originals/fd/bb/a3/fdbba3e78f229f853f31b950a30e03e1.jpg" 
    width="1355px" height="601px"/>
  </div> </>)
}
const App = () => {
  
  return (
    <>
  <div className="container-fluid bg-white">
    <Router>
      <div>   
<nav className="navbar navbar-expand-xl bg-dark navbar-dark fixed-top">
<Link className="navbar-brand" to="/">
    <strong><span style={{color:"#007faf"}}><b>tri</b></span>
    <span style={{color:"#f48f00"}}><b>va</b></span>
    <span style={{color:"#c94a38"}}><b>go</b></span> 
     </strong>
    </Link>
<ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link text-white "  to="/Home">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white"  to="/Login">Login</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white"  to="/SignUP">SignUP</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white"  to="/HotelDetails">HotelDetails</Link>
    </li>
  </ul>
</nav>
  <Route path="/" exact strict component={trivago}></Route> 
      <Route path="/Home" exact strict component={Home}></Route>
      <Route path="/Login" exact strict component={Login}></Route>
      <Route path="/SignUP"   exact strict component={SignUP}></Route>
      <Route path="/HotelDetails"   exact strict component={HotelDetails}></Route>
     </div>
    </Router>               
  </div>
  <footer >
  <div className=" bg-dark text-white">
  <div className="row ">
                  <div className="col mt-3 ml-5 " >
                      <h6>Want to receive exclusive hotel offers?Subscribe to our newsletter!</h6>
                  </div>
                  <div className="input-group  col mt-3">
                      <input type="text" className="form-control" placeholder="Email address" />
                      <div className="input-group-append mr-5" >
                          <button className="btn btn-outline-light text-light"><b>Subscribe</b></button><hr />
                      </div>
                  </div>
              </div>
                  <div className="text-center">© 2020 Copyright | All rights reserved</div>
          </div>
          </footer></>
  );

}
export default App;
