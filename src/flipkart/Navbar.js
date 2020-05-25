import React from 'react'
const Navbar = () => {
return (
<>
<div class="row header-section bg-primary" >
    <div class="col">
        <img src="https://static.couponspy.in/picture/shop/240.JPG" height="80" width="100" />
     </div>
    <div class="col mt-4 ml-0">
         <div class="input-group">
            <div class="input-group-prepend">
              <input type="search" class="form-control" placeholder="Search for products" aria-label="Search"id="search" />
            </div>
            <button class="input-group-text border-0" onclick=""><svg class="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd" />
            </svg></button>
         </div>
        </div>
      <div class="col mt-3">
        <nav class="navbar-expand-sm navbar-light ">                    
          <div class="collapse navbar-collapse ">
            <ul class="navbar-nav">
            <li class="nav-item"><a href="#" class="nav-link text-light">My Account<svg class="bi bi-chevron-compact-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z" clip-rule="evenodd" />
            </svg></a></li>
            <li class="nav-item"><a href="#" class="nav-link text-light">More<svg class="bi bi-chevron-compact-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z" clip-rule="evenodd" />
            </svg></a></li>
            <li class="nav-item"><a href="#" class="nav-link text-light">Cart</a></li>
            </ul>
          </div>
        </nav>
        </div>
     </div>
        </>
    )
}
export default Navbar;