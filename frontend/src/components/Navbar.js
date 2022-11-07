import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MyNavbar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand to='/'>Work It Out</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/music">Muzik</Link>
						<Link to="/login">Login</Link>
						<Link to="signup">Sign Up</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
