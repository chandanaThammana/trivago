import React from 'react';
const Navbar=({inputHandler,Search})=>
{
return(
    <>
    <nav>
        <h2 class="ml-3 "><i class="fa fa-film"></i>Movies</h2>
        <div class="  text-center">
        <input onChange={inputHandler}  type="text" placeholder="Type to Search" class="border-0 " />
    
        <button class="btn btn-info btn-rounded btn-sm ml-3"onClick={Search} >Search <i class="fa fa-search "  aria-hidden="true"></i></button>
         <a href="#" class ="float-right mr-3 text-dark"><h4><i class="fa fa-sign-in"></i>Login</h4></a>
        </div></nav>
    </>
)
}
export default Navbar;