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
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about">
						About Me
					</Nav.Link>
					<Nav.Link
						href="https://www.notion.so/Adenekan-Peace-d3b46c20a1d548458a0b5a4ec831bc45"
						target="_blank"
					>
						Projects
					</Nav.Link>
					<Nav.Link as={Link} to="/resume">
						Resume
					</Nav.Link>
					<Nav.Link as={Link} to="/contact">
						Contact Me
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</NavWrapper>
	);
};

const NavWrapper = styled(Navbar)`
	padding: 1.5em 6em;
	background: transparent !important;
	@media (max-width: 768px) {
		padding: 0.5rem 1rem;
	}
	.navbar-toggler {
		border: none;
	}
	.nav-link {
		color: var(--cw) !important;
		padding: 0.5rem 1.5rem !important;
		font-size: 14px;
		&[aria-current='page'] {
			font-weight: 900;
			border-bottom: 3px solid #e3cb1e;
		}
	}
`;

export default NavLayout;
