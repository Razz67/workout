import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useLogout }  from "../hooks/useLogout";

const MyNavbar = () => {

	const { logout } = useLogout();

	const handleClick = () => {
		logout();
	}


	return (
		<Navbar bg="dark" expand="md">
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<h1 className="brand">Work It Out</h1>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav className="navbar-right bg-faded">
						<Link to="/music" className="nav-link">
							Muzik
						</Link>
						<Link to="/login" className="nav-link">
							Login
						</Link>
						<Link to="signup" className="nav-link">
							Sign Up
						</Link>
						<Link>
							<button className="nav-link btn btn-danger" onClick={handleClick}>
								Log Out
							</button>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
