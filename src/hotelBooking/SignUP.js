import React from 'react'
import './Login.css';
const SignUP=()=>{


return(
    <>
    <div class="container-fluid mt-5 body">
	<div class="d-flex justify-content-center h-100">
		<div class="card mt-3 mb-3">
			<div class="card-header ">
				<h3>Sign UP</h3>
				
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group mt-2">
						
						<input type="text" class="form-control" placeholder="Firstname"/>
						
					</div>
                    <div class="input-group form-group mt-2">
						
						<input type="text" class="form-control" placeholder="Lastname"/>
						
					</div>
					<div class="input-group form-group">
						
						<input type="password" class="form-control" placeholder="password"/>
					</div>
                    <div class="input-group form-group">
						
						<input type="password" class="form-control" placeholder="Confirm password"/>
					</div>
                    <div class="input-group form-group mt-2">
						
						<input type="email" class="form-control" placeholder="Email Id"/>
						
					</div>
                    <div class="input-group form-group mt-2">
						
						<input type="tel" class="form-control" placeholder="Mobile number"/>
						
					</div>

					<div class="row float-right mr-3">
						<button class="btn btn-info  btn-large">SignUP</button>
					</div>
                   
					
				</form>
			</div>
			
		</div>
	</div>
</div>
</>
)
}
export default SignUP;
