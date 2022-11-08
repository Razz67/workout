import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function MyNavbar() {
	return (
		<Navbar bg="dark" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to='/'>
					<h1 className="brand">Work It Out</h1>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/music" className="nav-link">
							Muzik
						</Link>
						<Link to="/login" className="nav-link">
							Login
						</Link>
						<Link to="signup" className="nav-link">
							Sign Up
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
