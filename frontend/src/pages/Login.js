import { useState } from "react";

const Login = () => {
	// set up the state for the form
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} className="p-4">
			<h3>Login</h3>
			<div className="form-group">
				<label>Email address</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					className="form-control"
					id="email"
					value={email}
					placeholder="email@example.com"
				/>
				<small id="emailHelp" className="form-text text-muted">
					We'll never share your email with anyone else.
				</small>
			</div>

			<div className="form-group">
				<label>Password</label>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					className="form-control"
					id="password"
					value={password}
					placeholder="Password"
				/>
			</div>

			<button className="btn btn-primary">Login in</button>
		</form>
	);
};

export default Login;
