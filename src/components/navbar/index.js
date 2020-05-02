import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'gatsby';
const NavLayout = () => {
	return (
		<NavWrapper bg="light" expand="lg">
			<Navbar.Brand href="#home">
				<Logo />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link as={Link} to="/home">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/link">
						About Me
					</Nav.Link>
					<Nav.Link as={Link} to="/link">
						Projects
					</Nav.Link>
					<Nav.Link as={Link} to="/link">
						Articles
					</Nav.Link>
					<Nav.Link as={Link} to="/link">
						Contact Me
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</NavWrapper>
	);
};

const NavWrapper = styled(Navbar)`
	padding: 1.5em 6em;
	background: var(--bg) !important;
	@media (max-width: 768px) {
		padding: 0.5rem 1rem;
	}
	.nav-link {
		color: var(--cw) !important;
		padding: 0.5rem 1.5rem !important;
	}
`;

export default NavLayout;
