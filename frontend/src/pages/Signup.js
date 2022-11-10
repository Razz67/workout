import { useState } from "react";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(email, password);
	};

	return (
		<form onSubmit={handleSubmit} className="p-4">
			<h3>Sign Up</h3>
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

			<button className="btn btn-primary">Sign Up</button>
		</form>
	);
};

export default Signup;
