import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { BodyStyling } from './style/style';

import './style/normalize.css';
import './style/base.css';
import Biro from '../../assets/images/biro.svg';
import NavLayout from '../navbar';
import SEO from '../seo';
import styled from 'styled-components';

const Layout = ({
	children,
	description,
	lang,
	meta,
	title,
	pageMask = 'Design',
}) => {
	const [theme, updateTheme] = useState(false);

	const loadTheme = useCallback(() => {
		if (theme === false) {
			localStorage.removeItem('THEME', 1);
		} else {
			localStorage.setItem('THEME', 1);
		}
	}, [theme]);

	const setTheme = () => {
		updateTheme(!theme);
		loadTheme();
	};

	useEffect(() => {
		updateTheme(localStorage.getItem('THEME') ? true : false);
	}, [updateTheme]);

	const didMountRef = useRef(false);
	useEffect(() => {
		if (didMountRef.current) {
			loadTheme();
		} else didMountRef.current = true;
	}, [theme, loadTheme]);

	return (
		<>
			<SEO description={description} lang={lang} meta={meta} title={title} />
			<BodyStyling theme={theme} />
			<PageMask>
				<h3 aria-hidden="true">{pageMask}</h3>
			</PageMask>
			<PageWrapper>
				<NavLayout setTheme={setTheme} theme={theme} />

				<Wrapper>
					<Biro className="svg__pen" />
					<WrapperTablet className={`animated fadeIn`}>
						{/* {wake && <p className="tap__wake">Tap To Wake</p>} */}
						<div
							className={`animated fadeIn container`}
							style={{ animationDelay: '.4s' }}
						>
							{children}
						</div>
					</WrapperTablet>
				</Wrapper>
			</PageWrapper>
		</>
	);
};

const Wrapper = styled.main`
	background: transparent !important;
	height: calc(100vh - 97px);
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	.svg__pen {
		position: absolute;
		left: 50%;
		top: 0;
		margin-top: -7px;
		transform: translateX(-50%);
		@media (max-width: 1024px) {
			display: none;
		}
	}
`;

const PageWrapper = styled.div`
	background: linear-gradient(90deg, var(--bg) 51%, var(--bg-sec) 30%);
	@media (max-width: 1024px) {
		background: var(--bg);
	}
`;

const PageMask = styled.figure`
	position: fixed;
	bottom: -3rem;
	margin: 0;
	right: 0;
	h3 {
		user-select: none;
		opacity: 0.8;
		color: var(--mark);
		font-size: 400px;
		margin: 0;
		font-weight: 900;
		/* text-shadow: 0px 0px 7px #f6f6f6; */

		letter-spacing: -2.7rem;
	}
`;
const WrapperTablet = styled.div`
	border: 5px solid silver;
	border-radius: 2.39em;
	min-width: 80vw;
	padding: 4rem;
	overflow: hidden;
	min-height: 85vh;
	position: relative;
	box-shadow: 22px 19px 20px -6px #0e0e0e70;
	/* box-shadow: 0 0 0 0.25em silver; */
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	z-index: 99;

	&:before {
		content: '';
		height: 100%;
		width: 100%;

		top: 0;
		right: 0;
		border: 20px solid black;
		position: absolute;
		border-radius: 2rem;
		/* box-shadow: 0 2px 15px red; */
	}

	@media (max-width: 1024px) {
		display: block;
		width: 100%;
		align-items: center;
		padding: 6rem 0rem;
		overflow: overlay;
		box-shadow: none !important;
		height: calc(100vh - 97px);
		border: none !important;
		border-radius: 0px !important;
		&:before {
			display: none;
			/* box-shadow: 0 2px 15px red; */
		}
	}
`;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default Layout;
