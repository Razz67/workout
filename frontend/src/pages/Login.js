import { useState } from "react";

const Login = () => {
	// set up the state for the form
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password);
	};

	return (
		<form onSubmit={handleSubmit} className="p-4 login">
			<h3>Login</h3>
			<div className="form-group">
				<label>Email address</label>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					className="form-control"
					id="email"
					autoComplete="username email"
					value={email}
					placeholder="email@example.com"
				/>
			</div>

			<div className="form-group">
				<label>Password</label>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					className="form-control"
					id="password"
					autoComplete="username email"
					value={password}
					placeholder="Password"
				/>
			</div>

			<button className="btn btn-primary">Login in</button>
		</form>
	);
};

export default Login;
// dattrazz67@gmail.com Razz73742$