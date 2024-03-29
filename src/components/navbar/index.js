import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Logo from '../../assets/images/logo.svg';

const NavLayout = ({ setTheme, theme }) => {
	return (
		<NavWrapper bg="light" expand="lg">
			<Navbar.Brand
				as={AniLink}
				paintDrip
				duration={0.5}
				hex={theme ? '#131313' : '#f1f1f1'}
				to="/"
			>
				<Logo />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link
						as={AniLink}
						paintDrip
						duration={0.5}
						hex={theme ? '#131313' : '#f1f1f1'}
						to="/"
					>
						Home
					</Nav.Link>
					<Nav.Link
						as={AniLink}
						paintDrip
						duration={0.5}
						hex={theme ? '#131313' : '#f1f1f1'}
						to="/about"
					>
						About Me
					</Nav.Link>
					<Nav.Link
						as={AniLink}
						paintDrip
						duration={0.5}
						hex={theme ? '#131313' : '#f1f1f1'}
						to="/project"
					>
						Projects
					</Nav.Link>
					<Nav.Link
						as={AniLink}
						paintDrip
						duration={0.5}
						hex={theme ? '#131313' : '#f1f1f1'}
						to="/resume"
					>
						Resume
					</Nav.Link>
					<Nav.Link
						as={AniLink}
						paintDrip
						duration={0.5}
						hex={theme ? '#131313' : '#f1f1f1'}
						to="/contact"
					>
						Contact Me
					</Nav.Link>
					<Nav.Link
						as={Form.Check}
						type="switch"
						onChange={() => {
							setTheme();
						}}
						checked={theme}
						id="custom-switch"
						className="ml-md-4"
						label="Dark Mode"
					></Nav.Link>
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
		&-icon {
			filter: invert(var(--invert));
		}
	}
	.custom-control-input:checked ~ .custom-control-label::before {
		color: var(--cw) !important;
		border-color: var(--token);
		background-color: var(--token);
	}
	.nav-link {
		color: var(--cw) !important;
		padding: 0.5rem 1.5rem !important;
		font-size: 14px;
		&[aria-current='page'] {
			font-weight: 900;
			border-bottom: 3px solid var(--token);
		}
	}
`;

NavLayout.propTypes = {
	setTheme: PropTypes.func,
	theme: PropTypes.bool,
};
export default NavLayout;
