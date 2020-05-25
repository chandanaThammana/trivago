import React from 'react';
import './Login.css';
const Login=()=>{
return(
    <>
    <div className="container-fluid mt-5 body">
	<div className="d-flex justify-content-center h-100">
		<div className="card rounded-0 mt-3 mb-3">
			<div className="card-header mt-1">
				<h3>Log In</h3>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group mt-2">
						<input type="text" className="form-control rounded-0" placeholder="username"/>						
					</div>
					<div className="input-group form-group">						
						<input type="password" className="form-control rounded-0" placeholder="password"/>
					</div>
					<div className="row ml-5 mt-5">
						<button className="btn btn-info  btn-large rounded-0">Login</button>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
</>
)
}
export default Login;